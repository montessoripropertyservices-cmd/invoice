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
const dayRelatedInputs = [...document.querySelectorAll('input[name="day-related"]')];
const dayReferenceField = document.getElementById("day-reference-field");
const dayReferenceText = document.getElementById("day-reference-text");
const commentsText = document.getElementById("comments-text");
const commentsPreview = document.getElementById("comments-preview");
const voiceCommentButton = document.getElementById("voice-comment-button");
const clearCommentsButton = document.getElementById("clear-comments-button");
const voiceStatus = document.getElementById("voice-status");
const voiceModal = document.getElementById("voice-modal");
const voiceStopButton = document.getElementById("voice-stop-button");
const locationSelect = document.getElementById("location-select");
const locationEmptyState = document.getElementById("location-empty-state");
const savedEntryPanel = document.getElementById("saved-entry-panel");
const savedEntryTitle = document.getElementById("saved-entry-title");
const savedEntryOutput = document.getElementById("saved-entry-output");
const savedEntryHomeButton = document.getElementById("saved-entry-home");
const savedEntryAnotherButton = document.getElementById("saved-entry-another");
const saveStatus = document.getElementById("save-status");
const attachmentInput = document.getElementById("day-attachments");
const attachmentList = document.getElementById("attachment-list");
const recordPurchaseForm = document.getElementById("record-purchase-form");
const recordPurchaseStepTitle = document.getElementById("record-purchase-step-title");
const recordPurchaseProgressBar = document.getElementById("record-purchase-progress-bar");
const recordPurchasePrevButton = document.getElementById("record-purchase-prev");
const recordPurchaseNextButton = document.getElementById("record-purchase-next");
const recordPurchaseSaveButton = document.getElementById("record-purchase-save");
const recordPurchaseSteps = [...document.querySelectorAll("[data-purchase-step]")];
const purchaseRelatedInputs = [...document.querySelectorAll('input[name="purchase-related"]')];
const purchaseReferenceField = document.getElementById("purchase-reference-field");
const purchaseReferenceText = document.getElementById("purchase-reference-text");
const purchaseReceiptInput = document.getElementById("purchase-receipts");
const purchaseReceiptList = document.getElementById("purchase-receipt-list");
const analyzeReceiptButton = document.getElementById("analyze-receipt-button");
const receiptAnalysisStatus = document.getElementById("receipt-analysis-status");
const receiptTotalInput = document.getElementById("receipt-total");
const receiptAnalysisOutput = document.getElementById("receipt-analysis-output");
const purchaseSaveStatus = document.getElementById("purchase-save-status");
const purchaseSavedPanel = document.getElementById("purchase-saved-panel");
const purchaseSavedTitle = document.getElementById("purchase-saved-title");
const purchaseSavedOutput = document.getElementById("purchase-saved-output");
const purchaseSavedHomeButton = document.getElementById("purchase-saved-home");
const purchaseSavedAnotherButton = document.getElementById("purchase-saved-another");
const developerCreditCard = document.getElementById("developer-credit-card");
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
let recordPurchaseStepIndex = 0;
let receiptAnalysisText = "";

const recordDayStepMeta = [
  { title: "Step 1 of 7: Day" },
  { title: "Step 2 of 7: Invoice or Ticket" },
  { title: "Step 3 of 7: Employees" },
  { title: "Step 4 of 7: Comments" },
  { title: "Step 5 of 7: Location" },
  { title: "Step 6 of 7: Hours" },
  { title: "Step 7 of 7: Attachments" },
];

const recordPurchaseStepMeta = [
  { title: "Step 1 of 4: Purchase Date" },
  { title: "Step 2 of 4: Invoice or Ticket" },
  { title: "Step 3 of 4: Receipt Photos" },
  { title: "Step 4 of 4: Confirm Total" },
];

function setStatusMessage(element, message, tone) {
  element.textContent = message;
  element.className = `save-status ${tone}`;
  element.classList.remove("hidden");
}

function setSaveStatus(message, tone) {
  setStatusMessage(saveStatus, message, tone);
}

function setPurchaseSaveStatus(message, tone) {
  setStatusMessage(purchaseSaveStatus, message, tone);
}

function setAuthStatus(message, tone) {
  setStatusMessage(authStatus, message, tone);
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, element]) => {
    element.classList.toggle("hidden", name !== screenName);
  });

  developerCreditCard.classList.toggle("hidden", screenName !== "home");

  if (screenName === "record-day") {
    updateRecordDayStep();
  }

  if (screenName === "record-purchase") {
    updateRecordPurchaseStep();
  }
}

function formatSavedDayTitle(dateValue) {
  if (!dateValue) {
    return "Day Recorded";
  }

  const parsedDate = new Date(`${dateValue}T12:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return `Day ${dateValue} Recorded`;
  }

  return `Day ${parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })} Recorded`;
}

function formatSavedPurchaseTitle(dateValue) {
  if (!dateValue) {
    return "Purchase Recorded";
  }

  const parsedDate = new Date(`${dateValue}T12:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return `Purchase ${dateValue} Recorded`;
  }

  return `Purchase ${parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })} Recorded`;
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
  developerCreditCard.classList.add("hidden");
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

function updateDayReferenceField() {
  const isRelated = dayRelatedInputs.find((input) => input.checked)?.value === "yes";
  dayReferenceField.classList.toggle("hidden", !isRelated);
  dayReferenceText.required = isRelated;

  if (!isRelated) {
    dayReferenceText.value = "";
  }
}

function updatePurchaseReferenceField() {
  const isRelated = purchaseRelatedInputs.find((input) => input.checked)?.value === "yes";
  purchaseReferenceField.classList.toggle("hidden", !isRelated);
  purchaseReferenceText.required = isRelated;

  if (!isRelated) {
    purchaseReferenceText.value = "";
  }
}

function focusCurrentRecordDayStep() {
  const currentStep = recordDaySteps[recordDayStepIndex];
  const focusTarget = currentStep.querySelector("input, textarea, select, button");

  if (focusTarget) {
    focusTarget.focus();
  }
}

function focusCurrentRecordPurchaseStep() {
  const currentStep = recordPurchaseSteps[recordPurchaseStepIndex];
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

function updateRecordPurchaseStep() {
  recordPurchaseSteps.forEach((step, index) => {
    step.classList.toggle("hidden", index !== recordPurchaseStepIndex);
  });

  const progress = ((recordPurchaseStepIndex + 1) / recordPurchaseSteps.length) * 100;
  recordPurchaseStepTitle.textContent = recordPurchaseStepMeta[recordPurchaseStepIndex].title;
  recordPurchaseProgressBar.style.width = `${progress}%`;
  recordPurchasePrevButton.classList.toggle("hidden", recordPurchaseStepIndex === 0);
  recordPurchaseNextButton.classList.toggle(
    "hidden",
    recordPurchaseStepIndex === recordPurchaseSteps.length - 1
  );
  recordPurchaseSaveButton.classList.toggle(
    "hidden",
    recordPurchaseStepIndex !== recordPurchaseSteps.length - 1
  );
}

function validateCurrentRecordDayStep() {
  if (recordDayStepIndex === 0 && !document.getElementById("work-date").value) {
    setSaveStatus("Please choose the day before continuing.", "error");
    return false;
  }

  if (recordDayStepIndex === 1) {
    const isRelated = dayRelatedInputs.find((input) => input.checked)?.value === "yes";

    if (isRelated && !dayReferenceText.value.trim()) {
      setSaveStatus("Please enter the invoice or ticket reference before continuing.", "error");
      return false;
    }
  }

  if (recordDayStepIndex === 2 && !getSelectedEmployees().length) {
    setSaveStatus("Please select at least one employee before continuing.", "error");
    return false;
  }

  if (recordDayStepIndex === 3 && !commentsText.value.trim()) {
    setSaveStatus("Please add comments before continuing.", "error");
    return false;
  }

  if (recordDayStepIndex === 4 && !locationSelect.value) {
    setSaveStatus("Please choose a location before continuing.", "error");
    return false;
  }

  if (recordDayStepIndex === 5) {
    const selectedEmployees = getSelectedEmployees();
    const hasAllHours = selectedEmployees.every((employee) =>
      document.getElementById(`hours-${employee}`)?.value
    );

    if (!selectedEmployees.length || !hasAllHours) {
      setSaveStatus("Please enter hours for each selected person before continuing.", "error");
      return false;
    }
  }

  if (recordDayStepIndex === 6 && !attachmentInput.files.length) {
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

function validateCurrentRecordPurchaseStep() {
  if (recordPurchaseStepIndex === 0 && !document.getElementById("purchase-date").value) {
    setPurchaseSaveStatus("Please choose the purchase date before continuing.", "error");
    return false;
  }

  if (recordPurchaseStepIndex === 1) {
    const isRelated = purchaseRelatedInputs.find((input) => input.checked)?.value === "yes";

    if (isRelated && !purchaseReferenceText.value.trim()) {
      setPurchaseSaveStatus(
        "Please enter the invoice or ticket reference before continuing.",
        "error"
      );
      return false;
    }
  }

  if (recordPurchaseStepIndex === 2 && !purchaseReceiptInput.files.length) {
    setPurchaseSaveStatus("Please add at least one receipt image before continuing.", "error");
    return false;
  }

  if (recordPurchaseStepIndex === 3 && !receiptTotalInput.value) {
    setPurchaseSaveStatus("Please confirm the total before saving.", "error");
    return false;
  }

  purchaseSaveStatus.classList.add("hidden");
  return true;
}

function goToNextRecordPurchaseStep() {
  if (!validateCurrentRecordPurchaseStep()) {
    return;
  }

  if (recordPurchaseStepIndex < recordPurchaseSteps.length - 1) {
    recordPurchaseStepIndex += 1;
    updateRecordPurchaseStep();
    focusCurrentRecordPurchaseStep();
  }
}

function goToPreviousRecordPurchaseStep() {
  if (recordPurchaseStepIndex > 0) {
    recordPurchaseStepIndex -= 1;
    updateRecordPurchaseStep();
    focusCurrentRecordPurchaseStep();
  }
}

function renderPurchaseReceiptList() {
  const receipts = [...purchaseReceiptInput.files];

  if (!receipts.length) {
    purchaseReceiptList.className = "attachment-list empty-state";
    purchaseReceiptList.textContent = "No receipt images selected yet.";
    return;
  }

  purchaseReceiptList.className = "attachment-list";
  purchaseReceiptList.innerHTML = "";

  receipts.forEach((file) => {
    const item = document.createElement("div");
    item.className = "attachment-item";
    item.textContent = `${file.name} (${Math.max(1, Math.round(file.size / 1024))} KB)`;
    purchaseReceiptList.appendChild(item);
  });
}

function updateCommentsPreview() {
  const text = commentsText.value.trim();

  if (!text) {
    commentsPreview.className = "comments-preview";
    commentsPreview.textContent = "";
    return;
  }

  commentsPreview.className = "comments-preview";
  commentsPreview.textContent = text;
}

function resetRecordDayForm() {
  recordDayForm.reset();
  savedEntryPanel.classList.add("hidden");
  saveStatus.classList.add("hidden");
  updateVoiceStatus("");
  renderEmployees();
  renderHoursFields();
  renderLocations();
  renderAttachmentList();
  updateCommentsPreview();
  updateDayReferenceField();
  recordDayStepIndex = 0;
  updateRecordDayStep();
}

function startAnotherDay() {
  resetRecordDayForm();
  showScreen("record-day");
  focusCurrentRecordDayStep();
}

function updateReceiptAnalysisStatus(message) {
  receiptAnalysisStatus.textContent = message;
}

function extractLikelyReceiptTotal(rawText) {
  const normalizedText = rawText.replace(/\r/g, "");
  const lines = normalizedText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const priorityPatterns = [
    /grand\s*total/i,
    /amount\s*due/i,
    /balance\s*due/i,
    /^total$/i,
    /total\s*[:\-]/i,
  ];

  for (const pattern of priorityPatterns) {
    const matchingLine = lines.find((line) => pattern.test(line));

    if (matchingLine) {
      const amounts = matchingLine.match(/\d{1,4}(?:[.,]\d{2})/g);

      if (amounts?.length) {
        return Number(amounts[amounts.length - 1].replace(",", "."));
      }
    }
  }

  const amounts = normalizedText.match(/\d{1,4}(?:[.,]\d{2})/g) || [];

  if (!amounts.length) {
    return null;
  }

  return Number(amounts[amounts.length - 1].replace(",", "."));
}

async function analyzeReceipt() {
  const receipts = [...purchaseReceiptInput.files];

  if (!receipts.length) {
    setPurchaseSaveStatus("Please add a receipt image before analyzing.", "error");
    return;
  }

  if (!window.Tesseract) {
    updateReceiptAnalysisStatus(
      "Receipt analysis is not available right now. Please type the total manually."
    );
    return;
  }

  analyzeReceiptButton.disabled = true;
  updateReceiptAnalysisStatus("Reading the receipt now...");

  try {
    const extractedChunks = [];

    for (const file of receipts.slice(0, 3)) {
      const {
        data: { text },
      } = await window.Tesseract.recognize(file, "eng");

      if (text.trim()) {
        extractedChunks.push(text.trim());
      }
    }

    receiptAnalysisText = extractedChunks.join("\n\n");
    receiptAnalysisOutput.className = "receipt-analysis-output";
    receiptAnalysisOutput.textContent = receiptAnalysisText || "No clear text found on the receipt.";

    const suggestedTotal = extractLikelyReceiptTotal(receiptAnalysisText);

    if (suggestedTotal !== null && Number.isFinite(suggestedTotal)) {
      receiptTotalInput.value = suggestedTotal.toFixed(2);
      updateReceiptAnalysisStatus("Receipt scanned. Please review the total and edit it if needed.");
    } else {
      updateReceiptAnalysisStatus(
        "Receipt scanned, but I could not find a clear total. Please type it manually."
      );
    }
  } catch (error) {
    console.error(error);
    updateReceiptAnalysisStatus(
      "Receipt analysis could not finish. Please type the total manually."
    );
  } finally {
    analyzeReceiptButton.disabled = false;
  }
}

function resetRecordPurchaseForm() {
  recordPurchaseForm.reset();
  recordPurchaseStepIndex = 0;
  receiptAnalysisText = "";
  purchaseSavedPanel.classList.add("hidden");
  purchaseSaveStatus.classList.add("hidden");
  receiptAnalysisOutput.className = "receipt-analysis-output empty-state";
  receiptAnalysisOutput.textContent = "No analysis yet.";
  updateReceiptAnalysisStatus("");
  renderPurchaseReceiptList();
  updatePurchaseReferenceField();
  updateRecordPurchaseStep();
}

function startAnotherPurchase() {
  resetRecordPurchaseForm();
  showScreen("record-purchase");
  focusCurrentRecordPurchaseStep();
}

function updateVoiceStatus(message) {
  voiceStatus.textContent = message;
}

function setVoiceModalVisible(isVisible) {
  voiceModal.classList.toggle("hidden", !isVisible);
}

function setupSpeechRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition || null;

  if (!SpeechRecognition) {
    updateVoiceStatus("");
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
    setVoiceModalVisible(true);
    updateVoiceStatus("Listening...");
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
    setVoiceModalVisible(false);
    updateVoiceStatus("Speech could not be captured. You can still type in the textbox.");
  };

  speechRecognition.onend = () => {
    voiceCommentButton.classList.remove("listening");
    setVoiceModalVisible(false);
    if (speechSessionActive) {
      speechSessionActive = false;
      updateVoiceStatus("Speech captured.");
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

  const insertVariants = [
    {
      work_date: payload.date,
      location: payload.location,
      comments: payload.comments,
      related_reference: payload.relatedReference,
    },
    {
      work_date: payload.date,
      location: payload.location,
      comments: payload.comments,
    },
    {
      work_date: payload.date,
      location: payload.location,
    },
  ];

  let dayEntry = null;
  let dayEntryError = null;

  for (const insertPayload of insertVariants) {
    const result = await supabaseClient
      .from("day_entries")
      .insert(insertPayload)
      .select("id")
      .single();

    if (!result.error) {
      dayEntry = result.data;
      dayEntryError = null;
      break;
    }

    dayEntryError = result.error;
  }

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

async function savePurchaseToSupabase(payload) {
  if (!supabaseClient) {
    return {
      mode: "local-only",
      message: "Saved in this browser. Add the purchase table in Supabase to save online.",
    };
  }

  const insertVariants = [
    {
      purchase_date: payload.date,
      related_reference: payload.relatedReference,
      receipt_total: payload.total,
      receipt_files: payload.receipts,
      receipt_text: payload.analysisText,
    },
    {
      purchase_date: payload.date,
      related_reference: payload.relatedReference,
      receipt_total: payload.total,
      receipt_text: payload.analysisText,
    },
    {
      purchase_date: payload.date,
      receipt_total: payload.total,
    },
  ];

  let purchaseEntryError = null;

  for (const insertPayload of insertVariants) {
    const result = await supabaseClient.from("purchase_entries").insert(insertPayload).select("id").single();

    if (!result.error) {
      return {
        mode: "supabase",
        message: "Saved to Supabase and to this browser.",
      };
    }

    purchaseEntryError = result.error;
  }

  throw purchaseEntryError;
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
    relatedReference:
      dayRelatedInputs.find((input) => input.checked)?.value === "yes"
        ? dayReferenceText.value.trim()
        : "",
  };

  try {
    const saveResult = await saveEntryToSupabase(payload);
    localStorage.setItem("latestDayEntry", JSON.stringify(payload, null, 2));
    savedEntryTitle.textContent = formatSavedDayTitle(payload.date);
    savedEntryOutput.textContent = JSON.stringify(payload, null, 2);
    savedEntryPanel.classList.remove("hidden");
    setSaveStatus(
      saveResult.message,
      saveResult.mode === "supabase" ? "success" : "warning"
    );
  } catch (error) {
    console.error(error);
    localStorage.setItem("latestDayEntry", JSON.stringify(payload, null, 2));
    savedEntryTitle.textContent = formatSavedDayTitle(payload.date);
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

async function savePurchaseEntry(event) {
  event.preventDefault();

  if (!currentSession?.user) {
    setPurchaseSaveStatus("Please sign in before saving purchases.", "error");
    applyAuthState(null);
    return;
  }

  if (!validateCurrentRecordPurchaseStep()) {
    return;
  }

  const payload = {
    date: document.getElementById("purchase-date").value,
    relatedReference:
      purchaseRelatedInputs.find((input) => input.checked)?.value === "yes"
        ? purchaseReferenceText.value.trim()
        : "",
    receipts: [...purchaseReceiptInput.files].map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    })),
    total: Number(receiptTotalInput.value),
    analysisText: receiptAnalysisText,
  };

  try {
    const saveResult = await savePurchaseToSupabase(payload);
    localStorage.setItem("latestPurchaseEntry", JSON.stringify(payload, null, 2));
    purchaseSavedTitle.textContent = formatSavedPurchaseTitle(payload.date);
    purchaseSavedOutput.textContent = JSON.stringify(payload, null, 2);
    purchaseSavedPanel.classList.remove("hidden");
    setPurchaseSaveStatus(
      saveResult.message,
      saveResult.mode === "supabase" ? "success" : "warning"
    );
  } catch (error) {
    console.error(error);
    localStorage.setItem("latestPurchaseEntry", JSON.stringify(payload, null, 2));
    purchaseSavedTitle.textContent = formatSavedPurchaseTitle(payload.date);
    purchaseSavedOutput.textContent = JSON.stringify(payload, null, 2);
    purchaseSavedPanel.classList.remove("hidden");
    setPurchaseSaveStatus(
      "Supabase save failed, but the purchase was saved in this browser. Check your Supabase setup.",
      "error"
    );
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
purchaseReceiptInput.addEventListener("change", () => {
  renderPurchaseReceiptList();
  receiptAnalysisText = "";
  receiptAnalysisOutput.className = "receipt-analysis-output empty-state";
  receiptAnalysisOutput.textContent = "No analysis yet.";
  updateReceiptAnalysisStatus("");
});
authForm.addEventListener("submit", sendMagicLink);
signOutButton.addEventListener("click", signOut);
authPinInput.addEventListener("input", updateMagicLinkButton);
commentsText.addEventListener("input", updateCommentsPreview);
recordDayPrevButton.addEventListener("click", goToPreviousRecordDayStep);
recordDayNextButton.addEventListener("click", goToNextRecordDayStep);
recordPurchasePrevButton.addEventListener("click", goToPreviousRecordPurchaseStep);
recordPurchaseNextButton.addEventListener("click", goToNextRecordPurchaseStep);
dayRelatedInputs.forEach((input) => input.addEventListener("change", updateDayReferenceField));
purchaseRelatedInputs.forEach((input) =>
  input.addEventListener("change", updatePurchaseReferenceField)
);
clearCommentsButton.addEventListener("click", clearComments);
voiceCommentButton.addEventListener("click", startVoiceCapture);
voiceStopButton.addEventListener("click", stopVoiceCapture);
analyzeReceiptButton.addEventListener("click", analyzeReceipt);
savedEntryHomeButton.addEventListener("click", () => {
  resetRecordDayForm();
  showScreen("home");
});
savedEntryAnotherButton.addEventListener("click", startAnotherDay);
purchaseSavedHomeButton.addEventListener("click", () => {
  resetRecordPurchaseForm();
  showScreen("home");
});
purchaseSavedAnotherButton.addEventListener("click", startAnotherPurchase);
newEmployeeNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addEmployee();
  }
});

recordDayForm.addEventListener("submit", saveDayEntry);
recordPurchaseForm.addEventListener("submit", savePurchaseEntry);

renderEmployees();
renderLocations();
renderHoursFields();
renderAttachmentList();
renderPurchaseReceiptList();
updateCommentsPreview();
updateMagicLinkButton();
updateDayReferenceField();
updatePurchaseReferenceField();
setupSpeechRecognition();
updateRecordDayStep();
updateRecordPurchaseStep();
initializeAuth();
