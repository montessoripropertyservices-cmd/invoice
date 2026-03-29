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
const locationSelect = document.getElementById("location-select");
const locationEmptyState = document.getElementById("location-empty-state");
const savedEntryPanel = document.getElementById("saved-entry-panel");
const savedEntryOutput = document.getElementById("saved-entry-output");
const saveStatus = document.getElementById("save-status");
const attachmentInput = document.getElementById("day-attachments");
const attachmentList = document.getElementById("attachment-list");

const appConfig = window.APP_CONFIG || {};
const hasSupabaseConfig = Boolean(
  appConfig.supabaseUrl && appConfig.supabaseAnonKey && window.supabase
);
const supabaseClient = hasSupabaseConfig
  ? window.supabase.createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey)
  : null;

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, element]) => {
    element.classList.toggle("hidden", name !== screenName);
  });
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

function setSaveStatus(message, tone) {
  saveStatus.textContent = message;
  saveStatus.className = `save-status ${tone}`;
  saveStatus.classList.remove("hidden");
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
  } catch (error) {
    console.error(error);
    localStorage.setItem("latestDayEntry", JSON.stringify(payload, null, 2));
    savedEntryOutput.textContent = JSON.stringify(payload, null, 2);
    savedEntryPanel.classList.remove("hidden");
    setSaveStatus(
      "Supabase save failed, but the entry was saved in this browser. Check your config.js and Supabase table setup.",
      "error"
    );
    renderAttachmentList();
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
