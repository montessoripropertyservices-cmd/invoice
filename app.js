const employees = ["Enrique", "Victor", "Martin"];

const locations = [
  "Centerville Fremont",
  "Danville",
  "Dublin Ranch",
  "Dublin Silvergate",
  "Dusterberry Fremont",
  "Hercules",
  "Irvington Fremont",
  "Maple Fremont",
  "Milpitas",
  "Moraga",
  "Niles Fremont",
  "Palo Alto",
  "Pleasant Hill",
  "Pleasant Hill North",
  "Pleasanton",
  "San Carlos",
  "South Fremont",
  "Sunnyvale",
];

const screens = {
  home: document.getElementById("home-screen"),
  "record-day": document.getElementById("record-day-screen"),
  "record-purchase": document.getElementById("record-purchase-screen"),
  "check-hours": document.getElementById("check-hours-screen"),
};

const employeeList = document.getElementById("employee-list");
const newEmployeeNameInput = document.getElementById("new-employee-name");
const addEmployeeButton = document.getElementById("add-employee-button");
const hoursFields = document.getElementById("hours-fields");
const recordDayForm = document.getElementById("record-day-form");
const recordDayStepTitle = document.getElementById("record-day-step-title");
const recordDayProgressBar = document.getElementById("record-day-progress-bar");
const recordDayPrevButton = document.getElementById("record-day-prev");
const recordDayNextButton = document.getElementById("record-day-next");
const recordDaySaveButton = document.getElementById("record-day-save");
const recordDaySteps = [...document.querySelectorAll(".wizard-step")];
const commentsText = document.getElementById("comments-text");
const commentsPreview = document.getElementById("comments-preview");
const voiceCommentButton = document.getElementById("voice-comment-button");
const clearCommentsButton = document.getElementById("clear-comments-button");
const voiceStatus = document.getElementById("voice-status");
const locationSelect = document.getElementById("location-select");
const locationEmptyState = document.getElementById("location-empty-state");
const savedEntryPanel = document.getElementById("saved-entry-panel");
const savedEntryOutput = document.getElementById("saved-entry-output");
const saveStatus = document.getElementById("save-status");
const attachmentInput = document.getElementById("day-attachments");
const attachmentList = document.getElementById("attachment-list");
const authScreen = document.getElementById("auth-screen");
const authForm = document.getElementById("auth-form");
const authPinInput = document.getElementById("auth-pin");
const authStatus = document.getElementById("auth-status");
const signOutButton = document.getElementById("sign-out-button");
const magicLinkButton = document.getElementById("magic-link-button");
const sessionEmailTargets = [
  document.getElementById("session-email"),
  document.getElementById("record-day-session-email"),
  document.getElementById("record-purchase-session-email"),
  document.getElementById("check-hours-session-email"),
];

const appConfig = window.APP_CONFIG || {};
const hasSupabaseConfig = Boolean(
  appConfig.supabaseUrl && appConfig.supabaseAnonKey && window.supabase
);
const supabaseClient = hasSupabaseConfig
  ? window.supabase.createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;
const magicLinkRedirectTo =
  appConfig.magicLinkRedirectTo || `${window.location.origin}${window.location.pathname}`;
const allowedEmails = (appConfig.allowedEmails || ["montessoripropertyservices@gmail.com"]).map(
  (email) => email.toLowerCase().trim()
);
const ownerEmail = allowedEmails[0];
const authPinCode = String(appConfig.authPinCode || "2740");

let currentSession = null;
let speechRecognition = null;
let speechSessionActive = false;
let speechBaseText = "";
let recordDayStepIndex = 0;

const recordDayStepMeta = [
  { title: "Step 1 of 6: Day" },
  { title: "Step 2 of 6: Employees" },
  { title: "Step 3 of 6: Comments" },
  { title: "Step 4 of 6: Location" },
  { title: "Step 5 of 6: Hours" },
  { title: "Step 6 of 6: Attachments" },
];

function setStatusMessage(element, message, tone) {
  element.textContent = message;
  element.className = `save-status ${tone}`;
  element.classList.remove("hidden");
}

function setSaveStatus(message, tone) {
  setStatusMessage(saveStatus, message, tone);
}

function setAuthStatus(message, tone) {
  setStatusMessage(authStatus, message, tone);
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, element]) => {
    element.classList.toggle("hidden", name !== screenName);
  });

  if (screenName === "record-day") {
    updateRecordDayStep();
  }
}

function setSignedInEmail(email) {
  sessionEmailTargets.forEach((target) => {
    if (target) {
      target.textContent = email || "Unknown user";
    }
  });
}

function isAllowedEmail(email) {
  return allowedEmails.includes((email || "").toLowerCase().trim());
}

function applyAuthState(session) {
  currentSession = session;

  if (session?.user?.email) {
    if (!isAllowedEmail(session.user.email)) {
      if (supabaseClient) {
        supabaseClient.auth.signOut();
      }
      authScreen.classList.remove("hidden");
      Object.values(screens).forEach((element) => element.classList.add("hidden"));
      setSignedInEmail("Not signed in");
      setAuthStatus("That email is not allowed to use this app.", "error");
      return;
    }

    authScreen.classList.add("hidden");
    setSignedInEmail(session.user.email);
    showScreen("home");
    return;
  }

  authScreen.classList.remove("hidden");
  Object.values(screens).forEach((element) => element.classList.add("hidden"));
  setSignedInEmail("Not signed in");
}

async function initializeAuth() {
  if (!supabaseClient) {
    authScreen.classList.remove("hidden");
    authForm.classList.add("hidden");
    Object.values(screens).forEach((element) => element.classList.add("hidden"));
    setAuthStatus(
      "Supabase is not configured yet. Add your project values in config.js before using secure login.",
      "warning"
    );
    return;
  }

  const {
    data: { session },
    error,
  } = await supabaseClient.auth.getSession();

  if (error) {
    console.error(error);
    setAuthStatus("We could not load the login session. Please refresh and try again.", "error");
  }

  applyAuthState(session);

  supabaseClient.auth.onAuthStateChange((_event, nextSession) => {
    applyAuthState(nextSession);
  });
}

async function sendMagicLink(event) {
  event.preventDefault();

  if (!supabaseClient) {
    setAuthStatus("Supabase is not configured yet.", "error");
    return;
  }

  const pin = authPinInput.value.trim();

  if (!pin) {
    setAuthStatus("Enter the PIN first.", "error");
    return;
  }

  if (pin !== authPinCode) {
    setAuthStatus("That PIN is not correct.", "error");
    return;
  }

  const { error } = await supabaseClient.auth.signInWithOtp({
    email: ownerEmail,
    options: {
      emailRedirectTo: magicLinkRedirectTo,
    },
  });

  if (error) {
    console.error(error);
    setAuthStatus(
      "We could not send the magic link. Check the email address and Supabase auth settings.",
      "error"
    );
    return;
  }

  authForm.reset();
  updateMagicLinkButton();
  setAuthStatus("Magic link sent. Open your email and tap the link to enter the app.", "success");
}

function updateMagicLinkButton() {
  magicLinkButton.disabled = authPinInput.value.trim() !== authPinCode;
}

async function signOut() {
  if (!supabaseClient) {
    return;
  }

  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error(error);
    setSaveStatus("Sign-out failed. Please try again.", "error");
    return;
  }

  saveStatus.classList.add("hidden");
  savedEntryPanel.classList.add("hidden");
  setAuthStatus("You have been signed out.", "warning");
}

function renderEmployees() {
  employeeList.innerHTML = "";

  employees.forEach((employee) => {
    const label = document.createElement("label");
    label.className = "checkbox-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "employee";
    checkbox.value = employee;
    checkbox.addEventListener("change", renderHoursFields);

    const text = document.createElement("span");
    text.textContent = employee;

    label.append(checkbox, text);
    employeeList.appendChild(label);
  });
}

function renderLocations() {
  locationSelect.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = locations.length
    ? "Choose a location"
    : "No locations added yet";
  locationSelect.appendChild(placeholderOption);

  if (!locations.length) {
    locationSelect.disabled = true;
    locationEmptyState.classList.remove("hidden");
    return;
  }

  locationSelect.disabled = false;
  locationEmptyState.classList.add("hidden");

  locations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    locationSelect.appendChild(option);
  });
}

function renderAttachmentList() {
  const attachments = [...attachmentInput.files];

  if (!attachments.length) {
    attachmentList.className = "attachment-list empty-state";
    attachmentList.textContent = "No attachments selected yet.";
    return;
  }

  attachmentList.className = "attachment-list";
  attachmentList.innerHTML = "";

  attachments.forEach((file) => {
    const item = document.createElement("div");
    item.className = "attachment-item";
    item.textContent = `${file.name} (${Math.max(1, Math.round(file.size / 1024))} KB)`;
    attachmentList.appendChild(item);
  });
}

function focusCurrentRecordDayStep() {
  const currentStep = recordDaySteps[recordDayStepIndex];
  const focusTarget = currentStep.querySelector("input, textarea, select, button");

  if (focusTarget) {
    focusTarget.focus();
  }
}

function updateRecordDayStep() {
  recordDaySteps.forEach((step, index) => {
    step.classList.toggle("hidden", index !== recordDayStepIndex);
  });

  const progress = ((recordDayStepIndex + 1) / recordDaySteps.length) * 100;
  recordDayStepTitle.textContent = recordDayStepMeta[recordDayStepIndex].title;
  recordDayProgressBar.style.width = `${progress}%`;
  recordDayPrevButton.classList.toggle("hidden", recordDayStepIndex === 0);
  recordDayNextButton.classList.toggle("hidden", recordDayStepIndex === recordDaySteps.length - 1);
  recordDaySaveButton.classList.toggle("hidden", recordDayStepIndex !== recordDaySteps.length - 1);
}

function validateCurrentRecordDayStep() {
  if (recordDayStepIndex === 0 && !document.getElementById("work-date").value) {
    setSaveStatus("Please choose the day before continuing.", "error");
    return false;
  }

  if (recordDayStepIndex === 1 && !getSelectedEmployees().length) {
    setSaveStatus("Please select at least one employee before continuing.", "error");
    return false;
  }

  if (recordDayStepIndex === 2 && !commentsText.value.trim()) {
    setSaveStatus("Please add comments before continuing.", "error");
    return false;
  }

  if (recordDayStepIndex === 3 && !locationSelect.value) {
    setSaveStatus("Please choose a location before continuing.", "error");
    return false;
  }

  if (recordDayStepIndex === 4) {
    const selectedEmployees = getSelectedEmployees();
    const hasAllHours = selectedEmployees.every((employee) =>
      document.getElementById(`hours-${employee}`)?.value
    );

    if (!selectedEmployees.length || !hasAllHours) {
      setSaveStatus("Please enter hours for each selected person before continuing.", "error");
      return false;
    }
  }

  if (recordDayStepIndex === 5 && !attachmentInput.files.length) {
    setSaveStatus("Please add at least one file before saving.", "error");
    return false;
  }

  saveStatus.classList.add("hidden");
  return true;
}

function goToNextRecordDayStep() {
  if (!validateCurrentRecordDayStep()) {
    return;
  }

  if (recordDayStepIndex < recordDaySteps.length - 1) {
    recordDayStepIndex += 1;
    updateRecordDayStep();
    focusCurrentRecordDayStep();
  }
}

function goToPreviousRecordDayStep() {
  if (recordDayStepIndex > 0) {
    recordDayStepIndex -= 1;
    updateRecordDayStep();
    focusCurrentRecordDayStep();
  }
}

function updateCommentsPreview() {
  const text = commentsText.value.trim();

  if (!text) {
    commentsPreview.className = "comments-preview empty-state";
    commentsPreview.textContent = "Dictated or typed comments will appear here.";
    return;
  }

  commentsPreview.className = "comments-preview";
  commentsPreview.textContent = text;
}

function updateVoiceStatus(message) {
  voiceStatus.textContent = message;
}

function setupSpeechRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition || null;

  if (!SpeechRecognition) {
    updateVoiceStatus("Speech-to-text is not available on this device. Use the textbox below.");
    voiceCommentButton.disabled = true;
    return;
  }

  speechRecognition = new SpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.lang = "en-US";

  speechRecognition.onstart = () => {
    speechSessionActive = true;
    speechBaseText = commentsText.value.trim();
    voiceCommentButton.classList.add("listening");
    updateVoiceStatus("Listening... keep holding the button and speak.");
  };

  speechRecognition.onresult = (event) => {
    const transcript = [...event.results]
      .map((result) => result[0].transcript)
      .join(" ")
      .trim();

    const mergedText = [speechBaseText, transcript].filter(Boolean).join(" ").trim();
    commentsText.value = mergedText;
    updateCommentsPreview();
  };

  speechRecognition.onerror = () => {
    voiceCommentButton.classList.remove("listening");
    speechSessionActive = false;
    updateVoiceStatus("Speech could not be captured. You can still type in the textbox.");
  };

  speechRecognition.onend = () => {
    voiceCommentButton.classList.remove("listening");
    if (speechSessionActive) {
      speechSessionActive = false;
      updateVoiceStatus("Speech captured. You can hold again or edit the text below.");
    }
  };
}

function startVoiceCapture() {
  if (!speechRecognition || speechSessionActive) {
    return;
  }

  try {
    speechRecognition.start();
  } catch (_error) {
    updateVoiceStatus("Speech could not start. You can still type in the textbox.");
  }
}

function stopVoiceCapture() {
  if (!speechRecognition || !speechSessionActive) {
    return;
  }

  speechSessionActive = false;
  speechRecognition.stop();
}

function clearComments() {
  if (!commentsText.value.trim()) {
    return;
  }

  const confirmed = window.confirm("Clear all comment text?");

  if (!confirmed) {
    return;
  }

  commentsText.value = "";
  updateCommentsPreview();
  updateVoiceStatus("Comments cleared.");
}

function getSelectedEmployees() {
  return [...document.querySelectorAll('input[name="employee"]:checked')].map(
    (checkbox) => checkbox.value
  );
}

function renderHoursFields() {
  const selectedEmployees = getSelectedEmployees();

  if (!selectedEmployees.length) {
    hoursFields.className = "hours-grid empty-state";
    hoursFields.textContent = "Select at least one employee to enter hours.";
    return;
  }

  hoursFields.className = "hours-grid";
  hoursFields.innerHTML = "";

  selectedEmployees.forEach((employee) => {
    const row = document.createElement("div");
    row.className = "hours-row";

    const label = document.createElement("label");
    label.textContent = employee;
    label.setAttribute("for", `hours-${employee}`);

    const input = document.createElement("input");
    input.id = `hours-${employee}`;
    input.name = `hours-${employee}`;
    input.type = "number";
    input.min = "0";
    input.step = "0.25";
    input.required = true;
    input.placeholder = "Enter hours";
    input.value = "8";

    row.append(label, input);
    hoursFields.appendChild(row);
  });
}

function addEmployee() {
  const newEmployee = newEmployeeNameInput.value.trim();

  if (!newEmployee) {
    return;
  }

  const alreadyExists = employees.some(
    (employee) => employee.toLowerCase() === newEmployee.toLowerCase()
  );

  if (alreadyExists) {
    newEmployeeNameInput.value = "";
    return;
  }

  employees.push(newEmployee);
  newEmployeeNameInput.value = "";
  renderEmployees();
  renderHoursFields();
}

async function saveEntryToSupabase(payload) {
  if (!supabaseClient) {
    return {
      mode: "local-only",
      message: "Saved in this browser. Add Supabase in config.js to save online.",
    };
  }

  const { data: dayEntry, error: dayEntryError } = await supabaseClient
    .from("day_entries")
    .insert({
      work_date: payload.date,
      location: payload.location,
      comments: payload.comments,
    })
    .select("id")
    .single();

  if (dayEntryError) {
    throw dayEntryError;
  }

  const employeeRows = payload.employees.map((item) => ({
    day_entry_id: dayEntry.id,
    employee_name: item.employee,
    hours: item.hours,
  }));

  const { error: employeesError } = await supabaseClient
    .from("day_entry_employees")
    .insert(employeeRows);

  if (employeesError) {
    throw employeesError;
  }

  return {
    mode: "supabase",
    message: "Saved to Supabase and to this browser.",
  };
}

async function saveDayEntry(event) {
  event.preventDefault();

  if (!currentSession?.user) {
    setSaveStatus("Please sign in before saving entries.", "error");
    applyAuthState(null);
    return;
  }

  const selectedEmployees = getSelectedEmployees();

  if (!selectedEmployees.length) {
    alert("Please select at least one employee.");
    return;
  }

  if (!locations.length) {
    alert("Please add your locations in app.js before saving day entries.");
    return;
  }

  const hoursByEmployee = selectedEmployees.map((employee) => ({
    employee,
    hours: document.getElementById(`hours-${employee}`).value,
  }));

  const payload = {
    date: document.getElementById("work-date").value,
    location: locationSelect.value,
    employees: hoursByEmployee.map((item) => ({
      employee: item.employee,
      hours: Number(item.hours),
    })),
    attachments: [...attachmentInput.files].map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    })),
    comments: commentsText.value.trim(),
  };

  try {
    const saveResult = await saveEntryToSupabase(payload);
    localStorage.setItem("latestDayEntry", JSON.stringify(payload, null, 2));
    savedEntryOutput.textContent = JSON.stringify(payload, null, 2);
    savedEntryPanel.classList.remove("hidden");
    setSaveStatus(
      saveResult.message,
      saveResult.mode === "supabase" ? "success" : "warning"
    );
    recordDayForm.reset();
    renderEmployees();
    renderHoursFields();
    renderLocations();
    renderAttachmentList();
    updateCommentsPreview();
    recordDayStepIndex = 0;
    updateRecordDayStep();
  } catch (error) {
    console.error(error);
    localStorage.setItem("latestDayEntry", JSON.stringify(payload, null, 2));
    savedEntryOutput.textContent = JSON.stringify(payload, null, 2);
    savedEntryPanel.classList.remove("hidden");
    setSaveStatus(
      "Supabase save failed, but the entry was saved in this browser. Check your login and Supabase setup.",
      "error"
    );
    renderAttachmentList();
    updateCommentsPreview();
  }
}

document.querySelectorAll("[data-screen]").forEach((button) => {
  button.addEventListener("click", () => {
    const screenName = button.dataset.screen;
    showScreen(screenName);
  });
});

addEmployeeButton.addEventListener("click", addEmployee);
attachmentInput.addEventListener("change", renderAttachmentList);
authForm.addEventListener("submit", sendMagicLink);
signOutButton.addEventListener("click", signOut);
authPinInput.addEventListener("input", updateMagicLinkButton);
commentsText.addEventListener("input", updateCommentsPreview);
recordDayPrevButton.addEventListener("click", goToPreviousRecordDayStep);
recordDayNextButton.addEventListener("click", goToNextRecordDayStep);
clearCommentsButton.addEventListener("click", clearComments);
voiceCommentButton.addEventListener("mousedown", startVoiceCapture);
voiceCommentButton.addEventListener("mouseup", stopVoiceCapture);
voiceCommentButton.addEventListener("mouseleave", stopVoiceCapture);
voiceCommentButton.addEventListener("touchstart", startVoiceCapture, { passive: true });
voiceCommentButton.addEventListener("touchend", stopVoiceCapture);
voiceCommentButton.addEventListener("touchcancel", stopVoiceCapture);
newEmployeeNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addEmployee();
  }
});

recordDayForm.addEventListener("submit", saveDayEntry);

renderEmployees();
renderLocations();
renderHoursFields();
renderAttachmentList();
updateCommentsPreview();
updateMagicLinkButton();
setupSpeechRecognition();
updateRecordDayStep();
initializeAuth();
