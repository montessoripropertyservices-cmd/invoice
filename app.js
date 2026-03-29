const defaultEmployees = [
  { id: "enrique", firstName: "Enrique", lastName: "", rate: 0 },
  { id: "victor", firstName: "Victor", lastName: "", rate: 0 },
  { id: "martin", firstName: "Martin", lastName: "", rate: 0 },
];

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
  "selected-days": document.getElementById("selected-days-screen"),
  "check-receipts": document.getElementById("check-receipts-screen"),
  "archived-items": document.getElementById("archived-items-screen"),
  settings: document.getElementById("settings-screen"),
};

const employeeList = document.getElementById("employee-list");
const newEmployeeDrawer = document.getElementById("new-employee-drawer");
const toggleNewEmployeeButton = document.getElementById("toggle-new-employee-button");
const newEmployeePanel = document.getElementById("new-employee-panel");
const newEmployeeFirstNameInput = document.getElementById("new-employee-first-name");
const newEmployeeLastNameInput = document.getElementById("new-employee-last-name");
const newEmployeeRateInput = document.getElementById("new-employee-rate");
const addEmployeeButton = document.getElementById("add-employee-button");
const hoursFields = document.getElementById("hours-fields");
const recordDayForm = document.getElementById("record-day-form");
const recordDayStepTitle = document.getElementById("record-day-step-title");
const recordDayProgressBar = document.getElementById("record-day-progress-bar");
const recordDayPrevButton = document.getElementById("record-day-prev");
const recordDayNextButton = document.getElementById("record-day-next");
const recordDaySaveButton = document.getElementById("record-day-save");
const recordDayScreen = document.getElementById("record-day-screen");
const recordDaySteps = [...recordDayScreen.querySelectorAll(".wizard-step")];
const workDateInput = document.getElementById("work-date");
const workDateStatus = document.getElementById("work-date-status");
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
const recordPurchaseScreen = document.getElementById("record-purchase-screen");
const recordPurchaseSteps = [...recordPurchaseScreen.querySelectorAll("[data-purchase-step]")];
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
const showDaysButton = document.getElementById("show-days-button");
const archiveDaysButton = document.getElementById("archive-days-button");
const selectAllDaysButton = document.getElementById("select-all-days-button");
const checkHoursStatus = document.getElementById("check-hours-status");
const checkHoursList = document.getElementById("check-hours-list");
const selectedDaysOutput = document.getElementById("selected-days-output");
const emailReceiptsButton = document.getElementById("email-receipts-button");
const archiveReceiptsButton = document.getElementById("archive-receipts-button");
const checkReceiptsStatus = document.getElementById("check-receipts-status");
const checkReceiptsList = document.getElementById("check-receipts-list");
const archivedSearchInput = document.getElementById("archived-search-input");
const retrieveArchivedButton = document.getElementById("retrieve-archived-button");
const archivedItemsStatus = document.getElementById("archived-items-status");
const archivedItemsList = document.getElementById("archived-items-list");
const settingsStatus = document.getElementById("settings-status");
const settingsEmployeeList = document.getElementById("settings-employee-list");
const saveSettingsButton = document.getElementById("save-settings-button");
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
let recordedDayDates = new Set();
let purchaseSupabaseReady = null;
let dayEntriesCache = [];
let purchaseEntriesCache = [];
let archivedItemsCache = [];
let recordDayCompleted = false;
let employees = [];
let editingDayEntryId = null;
let editingDayOriginalDate = "";
let editingDayCreatedAt = null;
let editingDayExistingAttachments = [];
let currentScreenName = null;

const recordedDayDatesStorageKey = "recordedDayDates";
const dayEntriesStorageKey = "dayEntriesHistory";
const purchaseEntriesStorageKey = "purchaseEntriesHistory";
const employeeProfilesStorageKey = "employeeProfiles";
const archivedDayIdsStorageKey = "archivedDayIds";
const archivedReceiptIdsStorageKey = "archivedReceiptIds";

const recordDayStepMeta = [
  { title: "Step 1 of 7: Day" },
  { title: "Step 2 of 7: Invoice or Ticket" },
  { title: "Step 3 of 7: Employees" },
  { title: "Step 4 of 7: Hours" },
  { title: "Step 5 of 7: Comments" },
  { title: "Step 6 of 7: Location" },
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

function setCheckHoursStatus(message, tone) {
  setStatusMessage(checkHoursStatus, message, tone);
}

function setCheckReceiptsStatus(message, tone) {
  setStatusMessage(checkReceiptsStatus, message, tone);
}

function setArchivedItemsStatus(message, tone) {
  setStatusMessage(archivedItemsStatus, message, tone);
}

function setSettingsStatus(message, tone) {
  setStatusMessage(settingsStatus, message, tone);
}

function showScreen(screenName) {
  currentScreenName = screenName;
  Object.entries(screens).forEach(([name, element]) => {
    element.classList.toggle("hidden", name !== screenName);
  });

  developerCreditCard.classList.toggle("hidden", screenName !== "home");

  if (screenName === "record-day") {
    updateRecordDayStep();
  }

  if (screenName === "record-purchase") {
    updateRecordPurchaseStep();
    checkPurchaseSupabaseReady();
  }

  if (screenName === "check-hours") {
    loadCheckHoursEntries();
  }

  if (screenName === "check-receipts") {
    loadCheckReceiptsEntries();
  }

  if (screenName === "archived-items") {
    loadArchivedItems();
  }

  if (screenName === "settings") {
    renderSettingsEmployees();
  }
}

function maybeStartFreshRecordDay() {
  if (recordDayCompleted || !savedEntryPanel.classList.contains("hidden")) {
    resetRecordDayForm();
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

function formatDisplayDate(dateValue) {
  if (!dateValue) {
    return "Unknown date";
  }

  const parsedDate = new Date(`${dateValue}T12:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return dateValue;
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatCurrency(value) {
  return Number(value || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function slugifyEmployeeName(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeEmployeeProfile(employee, fallbackIndex = 0) {
  const firstName = String(employee.firstName || employee.name || "").trim();
  const lastName = String(employee.lastName || "").trim();
  const id =
    String(employee.id || "").trim() ||
    slugifyEmployeeName(`${firstName}-${lastName}`) ||
    `employee-${fallbackIndex}`;

  return {
    id,
    firstName,
    lastName,
    rate: Number(employee.rate || 0),
  };
}

function readStoredEmployees() {
  try {
    const rawValue = localStorage.getItem(employeeProfilesStorageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : null;

    if (!Array.isArray(parsedValue) || !parsedValue.length) {
      return defaultEmployees.map((employee, index) => normalizeEmployeeProfile(employee, index));
    }

    return parsedValue.map((employee, index) => normalizeEmployeeProfile(employee, index));
  } catch (_error) {
    return defaultEmployees.map((employee, index) => normalizeEmployeeProfile(employee, index));
  }
}

function writeStoredEmployees(nextEmployees) {
  localStorage.setItem(employeeProfilesStorageKey, JSON.stringify(nextEmployees));
}

function saveEmployees(nextEmployees) {
  employees = nextEmployees.map((employee, index) => normalizeEmployeeProfile(employee, index));
  writeStoredEmployees(employees);
}

function getEmployeeFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`.trim();
}

function getEmployeeLabel(employee) {
  return getEmployeeFullName(employee) || employee.firstName || "Unnamed employee";
}

function getEmployeeRate(employee) {
  return Number(employee.rate || 0);
}

function getEmployeeById(employeeId) {
  return employees.find((employee) => employee.id === employeeId) || null;
}

function readStoredDayEntries() {
  try {
    const rawValue = localStorage.getItem(dayEntriesStorageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (_error) {
    return [];
  }
}

function writeStoredDayEntries(entries) {
  localStorage.setItem(dayEntriesStorageKey, JSON.stringify(entries));
}

function readStoredPurchaseEntries() {
  try {
    const rawValue = localStorage.getItem(purchaseEntriesStorageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (_error) {
    return [];
  }
}

function writeStoredPurchaseEntries(entries) {
  localStorage.setItem(purchaseEntriesStorageKey, JSON.stringify(entries));
}

function readStoredArchivedIds(storageKey) {
  try {
    const rawValue = localStorage.getItem(storageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];
    return new Set(Array.isArray(parsedValue) ? parsedValue.filter(Boolean) : []);
  } catch (_error) {
    return new Set();
  }
}

function writeStoredArchivedIds(storageKey, values) {
  localStorage.setItem(storageKey, JSON.stringify([...values].sort()));
}

function upsertStoredDayEntry(entry) {
  const entries = readStoredDayEntries();
  const nextEntries = entries.filter((item) => item.id !== entry.id);
  nextEntries.unshift(entry);
  writeStoredDayEntries(nextEntries);

  if (!entry.archivedAt) {
    const archivedIds = readStoredArchivedIds(archivedDayIdsStorageKey);
    archivedIds.delete(entry.id);
    writeStoredArchivedIds(archivedDayIdsStorageKey, archivedIds);
  }
}

function upsertStoredPurchaseEntry(entry) {
  const entries = readStoredPurchaseEntries();
  const nextEntries = entries.filter((item) => item.id !== entry.id);
  nextEntries.unshift(entry);
  writeStoredPurchaseEntries(nextEntries);

  if (!entry.archivedAt) {
    const archivedIds = readStoredArchivedIds(archivedReceiptIdsStorageKey);
    archivedIds.delete(entry.id);
    writeStoredArchivedIds(archivedReceiptIdsStorageKey, archivedIds);
  }
}

function archiveStoredDayEntries(entryIds) {
  const entryIdSet = new Set(entryIds);
  const nextEntries = readStoredDayEntries().map((entry) =>
    entryIdSet.has(entry.id) ? { ...entry, archivedAt: new Date().toISOString() } : entry
  );
  writeStoredDayEntries(nextEntries);
  const archivedIds = readStoredArchivedIds(archivedDayIdsStorageKey);
  entryIds.forEach((id) => archivedIds.add(id));
  writeStoredArchivedIds(archivedDayIdsStorageKey, archivedIds);
}

function archiveStoredPurchaseEntries(entryIds) {
  const entryIdSet = new Set(entryIds);
  const nextEntries = readStoredPurchaseEntries().map((entry) =>
    entryIdSet.has(entry.id) ? { ...entry, archivedAt: new Date().toISOString() } : entry
  );
  writeStoredPurchaseEntries(nextEntries);
  const archivedIds = readStoredArchivedIds(archivedReceiptIdsStorageKey);
  entryIds.forEach((id) => archivedIds.add(id));
  writeStoredArchivedIds(archivedReceiptIdsStorageKey, archivedIds);
}

function restoreStoredDayEntries(entryIds) {
  const entryIdSet = new Set(entryIds);
  const nextEntries = readStoredDayEntries().map((entry) =>
    entryIdSet.has(entry.id) ? { ...entry, archivedAt: null } : entry
  );
  writeStoredDayEntries(nextEntries);
  const archivedIds = readStoredArchivedIds(archivedDayIdsStorageKey);
  entryIds.forEach((id) => archivedIds.delete(id));
  writeStoredArchivedIds(archivedDayIdsStorageKey, archivedIds);
}

function restoreStoredPurchaseEntries(entryIds) {
  const entryIdSet = new Set(entryIds);
  const nextEntries = readStoredPurchaseEntries().map((entry) =>
    entryIdSet.has(entry.id) ? { ...entry, archivedAt: null } : entry
  );
  writeStoredPurchaseEntries(nextEntries);
  const archivedIds = readStoredArchivedIds(archivedReceiptIdsStorageKey);
  entryIds.forEach((id) => archivedIds.delete(id));
  writeStoredArchivedIds(archivedReceiptIdsStorageKey, archivedIds);
}

function buildLocalDayEntry(payload, saveResult) {
  return {
    id: saveResult.id || payload.id || `local-${payload.date}-${Date.now()}`,
    date: payload.date,
    location: payload.location,
    comments: payload.comments,
    relatedReference: payload.relatedReference,
    employees: payload.employees,
    attachments: payload.attachments,
    createdAt: payload.createdAt || saveResult.createdAt || new Date().toISOString(),
    archivedAt: payload.archivedAt || null,
  };
}

function buildLocalPurchaseEntry(payload, saveResult) {
  return {
    id: saveResult.id || `purchase-${payload.date}-${Date.now()}`,
    date: payload.date,
    relatedReference: payload.relatedReference,
    receipts: payload.receipts,
    total: Number(payload.total || 0),
    analysisText: payload.analysisText || "",
    createdAt: new Date().toISOString(),
    archivedAt: null,
  };
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value || "").trim()
  );
}

function getEntryTotalHours(entry) {
  return (entry.employees || []).reduce((sum, item) => sum + Number(item.hours || 0), 0);
}

function getEntryEmployeeCost(item) {
  const rate = Number(item.rate ?? getEmployeeById(item.employeeId || "")?.rate ?? 0);
  return Number(item.hours || 0) * rate;
}

function getEntryTotalCost(entry) {
  return (entry.employees || []).reduce((sum, item) => sum + getEntryEmployeeCost(item), 0);
}

function formatDaySummary(entry) {
  const employeeLine = (entry.employees || [])
    .map((item) => `${item.employee}: ${item.hours} hours`)
    .join(", ");
  const attachmentLinks = (entry.attachments || [])
    .map((item) => (item.url ? `${item.name}: ${item.url}` : item.name))
    .join("\n");

  return [
    `Date: ${formatDisplayDate(entry.date)}`,
    `Location: ${entry.location || "None"}`,
    `Employees: ${employeeLine || "None"}`,
    `Total Hours: ${getEntryTotalHours(entry).toFixed(2)}`,
    `Total Day: ${formatCurrency(getEntryTotalCost(entry))}`,
    `Ticket #: ${entry.relatedReference || "None"}`,
    `Comment: ${entry.comments || "None"}`,
    `Attachment Links: ${attachmentLinks || "None"}`,
  ].join("\n");
}

function formatPurchaseSummary(entry) {
  const attachmentCount = entry.receipts?.length || 0;
  const receiptLinks = (entry.receipts || [])
    .map((item) => (item.url ? `${item.name}: ${item.url}` : item.name))
    .join("\n");

  return [
    `Date: ${formatDisplayDate(entry.date)}`,
    `Reference: ${entry.relatedReference || "None"}`,
    `Total: ${formatCurrency(entry.total)}`,
    `Receipt images: ${attachmentCount}`,
    `Receipt links: ${receiptLinks || "None"}`,
  ].join("\n");
}

function getArchivedDayIds() {
  return readStoredArchivedIds(archivedDayIdsStorageKey);
}

function getArchivedReceiptIds() {
  return readStoredArchivedIds(archivedReceiptIdsStorageKey);
}

function readStoredRecordedDayDates() {
  try {
    const rawValue = localStorage.getItem(recordedDayDatesStorageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];
    return Array.isArray(parsedValue) ? parsedValue.filter(Boolean) : [];
  } catch (_error) {
    return [];
  }
}

function writeStoredRecordedDayDates(dates) {
  localStorage.setItem(recordedDayDatesStorageKey, JSON.stringify([...dates].sort()));
}

function addRecordedDayDate(dateValue) {
  if (!dateValue) {
    return;
  }

  recordedDayDates.add(dateValue);
  writeStoredRecordedDayDates(recordedDayDates);
  updateWorkDateLockState();
}

function removeRecordedDayDate(dateValue) {
  if (!dateValue) {
    return;
  }

  recordedDayDates.delete(dateValue);
  writeStoredRecordedDayDates(recordedDayDates);
  updateWorkDateLockState();
}

function isRecordedDay(dateValue) {
  return Boolean(dateValue) && recordedDayDates.has(dateValue);
}

function updateWorkDateLockState() {
  const selectedDate = workDateInput.value;

  const isEditingSameDate = Boolean(
    editingDayEntryId && editingDayOriginalDate && selectedDate === editingDayOriginalDate
  );

  if (selectedDate && isRecordedDay(selectedDate) && !isEditingSameDate) {
    const message = "That day has already been recorded and is locked.";
    workDateInput.setCustomValidity(message);
    workDateStatus.textContent = message;
    workDateStatus.classList.remove("hidden");
    return;
  }

  workDateInput.setCustomValidity("");
  workDateStatus.textContent = "";
  workDateStatus.classList.add("hidden");
}

async function loadRecordedDayDates() {
  const nextDates = new Set(readStoredRecordedDayDates());

  if (currentSession?.user && supabaseClient) {
    const { data, error } = await supabaseClient.from("day_entries").select("work_date");

    if (!error && Array.isArray(data)) {
      data.forEach((entry) => {
        if (entry.work_date) {
          nextDates.add(entry.work_date);
        }
      });
    }
  }

  recordedDayDates = nextDates;
  updateWorkDateLockState();
}

function renderSettingsEmployees() {
  settingsEmployeeList.innerHTML = employees
    .map(
      (employee) => `
        <section class="settings-card" data-employee-settings-id="${employee.id}">
          <label class="field-group field-group-large">
            <span>First name</span>
            <input type="text" data-field="firstName" value="${employee.firstName}" />
          </label>
          <label class="field-group field-group-large">
            <span>Last name</span>
            <input type="text" data-field="lastName" value="${employee.lastName}" />
          </label>
          <label class="field-group field-group-large">
            <span>Rate</span>
            <input
              type="number"
              inputmode="decimal"
              min="0"
              step="0.01"
              data-field="rate"
              value="${Number(employee.rate || 0).toFixed(2)}"
            />
          </label>
        </section>
      `
    )
    .join("");
}

function saveSettings() {
  const nextEmployees = [...settingsEmployeeList.querySelectorAll("[data-employee-settings-id]")]
    .map((card, index) =>
      normalizeEmployeeProfile(
        {
          id: card.dataset.employeeSettingsId,
          firstName: card.querySelector('[data-field="firstName"]').value,
          lastName: card.querySelector('[data-field="lastName"]').value,
          rate: card.querySelector('[data-field="rate"]').value,
        },
        index
      )
    )
    .filter((employee) => employee.firstName);

  saveEmployees(nextEmployees);
  renderEmployees();
  renderHoursFields();
  renderSettingsEmployees();
  loadCheckHoursEntries();
  setSettingsStatus("Employee settings saved.", "success");
}

function toggleNewEmployeePanel() {
  newEmployeePanel.classList.toggle("hidden");
}

function renderCheckHoursEntries() {
  const visibleEntries = dayEntriesCache.filter((entry) => !entry.archivedAt);

  if (!visibleEntries.length) {
    checkHoursList.className = "entry-list empty-state";
    checkHoursList.textContent = "No recorded days yet.";
    if (selectAllDaysButton) {
      selectAllDaysButton.textContent = "Select All";
      selectAllDaysButton.disabled = true;
    }
    return;
  }

  checkHoursList.className = "entry-list";
  checkHoursList.innerHTML = visibleEntries
    .map((entry) => {
      const employees = (entry.employees || [])
        .map((item) => {
          const label =
            item.employee || getEmployeeLabel(getEmployeeById(item.employeeId || "") || { firstName: "" });
          return `${label}: ${item.hours}h x $${Number(item.rate || 0).toFixed(2)} = $${getEntryEmployeeCost(item).toFixed(2)}`;
        })
        .join("<br />");
      const attachments = (entry.attachments || [])
        .map((item) => {
          if (item.url) {
            return `<a href="${item.url}" target="_blank" rel="noreferrer">${item.url}</a>`;
          }

          return item.name;
        })
        .join("<br />");

      return `
        <div class="entry-card">
          <div class="entry-select-row">
            <input type="checkbox" data-entry-id="${entry.id}" />
            <div class="entry-meta">
              <h3>${formatDisplayDate(entry.date)}</h3>
              <p>${entry.location}</p>
              <p class="entry-pill">Total Hours: ${getEntryTotalHours(entry).toFixed(2)}</p>
              <p class="entry-pill">Total Day: $${getEntryTotalCost(entry).toFixed(2)}</p>
              ${entry.relatedReference ? `<p>Ticket #: ${entry.relatedReference}</p>` : ""}
              ${entry.comments ? `<p>Comment: ${entry.comments}</p>` : ""}
              <div class="entry-employees"><strong>People</strong><span>${employees}</span></div>
              <div class="entry-attachments"><strong>Attachments</strong><span>${attachments || "None"}</span></div>
            </div>
          </div>
          <div class="entry-inline-actions">
            <button class="back-button" type="button" data-edit-day-id="${entry.id}">Edit Day</button>
          </div>
        </div>
      `;
    })
    .join("");

  updateSelectAllDaysButton();
}

function renderCheckReceiptsEntries() {
  const visibleEntries = purchaseEntriesCache.filter((entry) => !entry.archivedAt);

  if (!visibleEntries.length) {
    checkReceiptsList.className = "entry-list empty-state";
    checkReceiptsList.textContent = "No recorded receipts yet.";
    return;
  }

  checkReceiptsList.className = "entry-list";
  checkReceiptsList.innerHTML = visibleEntries
    .map((entry) => {
      const receipts = (entry.receipts || [])
        .map((item) => {
          if (item.url) {
            return `<a href="${item.url}" target="_blank" rel="noreferrer">${item.name}</a>`;
          }

          return item.name;
        })
        .join("<br />");

      return `
        <label class="entry-card">
          <div class="entry-select-row">
            <input type="checkbox" data-receipt-id="${entry.id}" />
            <div class="entry-meta">
              <h3>${formatDisplayDate(entry.date)}</h3>
              <p class="entry-pill">Total Receipt: ${formatCurrency(entry.total)}</p>
              ${entry.relatedReference ? `<p>Reference: ${entry.relatedReference}</p>` : ""}
              <div class="entry-attachments"><strong>Receipts</strong><span>${receipts || "None"}</span></div>
            </div>
          </div>
        </label>
      `;
    })
    .join("");
}

function buildArchivedSearchText(item) {
  if (item.kind === "day") {
    const employees = (item.employees || [])
      .map((employee) => `${employee.employee || ""} ${employee.firstName || ""} ${employee.lastName || ""}`)
      .join(" ");
    const attachments = (item.attachments || []).map((attachment) => attachment.name || "").join(" ");

    return [
      item.date,
      item.location,
      item.relatedReference,
      item.comments,
      employees,
      attachments,
      "day",
    ]
      .join(" ")
      .toLowerCase();
  }

  const receipts = (item.receipts || []).map((receipt) => receipt.name || "").join(" ");
  return [item.date, item.relatedReference, item.analysisText, receipts, "receipt"]
    .join(" ")
    .toLowerCase();
}

function renderArchivedItems() {
  const terms = archivedSearchInput.value
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);

  const visibleItems = archivedItemsCache.filter((item) => {
    if (!terms.length) {
      return true;
    }

    const haystack = buildArchivedSearchText(item);
    return terms.every((term) => haystack.includes(term));
  });

  if (!visibleItems.length) {
    archivedItemsList.className = "entry-list empty-state";
    archivedItemsList.textContent = "No archived items match that search.";
    return;
  }

  archivedItemsList.className = "entry-list";
  archivedItemsList.innerHTML = visibleItems
    .map((item) => {
      if (item.kind === "day") {
        const employees = (item.employees || [])
          .map((employee) => `${employee.employee || "Unknown"}: ${employee.hours}h`)
          .join("<br />");
        const attachments = (item.attachments || [])
          .map((attachment) =>
            attachment.url
              ? `<a href="${attachment.url}" target="_blank" rel="noreferrer">${attachment.url}</a>`
              : attachment.name
          )
          .join("<br />");

        return `
          <label class="entry-card">
            <div class="entry-select-row">
              <input type="checkbox" data-archived-kind="day" data-archived-id="${item.id}" />
              <div class="entry-meta">
                <h3>${formatDisplayDate(item.date)}</h3>
                <p class="entry-pill">Archived Day</p>
                <p>${item.location || ""}</p>
                ${item.relatedReference ? `<p>Ticket #: ${item.relatedReference}</p>` : ""}
                ${item.comments ? `<p>Comment: ${item.comments}</p>` : ""}
                <p class="entry-pill">Total Hours: ${getEntryTotalHours(item).toFixed(2)}</p>
                <p class="entry-pill">Total Day: ${formatCurrency(getEntryTotalCost(item))}</p>
                <div class="entry-employees"><strong>People</strong><span>${employees || "None"}</span></div>
                <div class="entry-attachments"><strong>Attachments</strong><span>${attachments || "None"}</span></div>
              </div>
            </div>
          </label>
        `;
      }

      const receipts = (item.receipts || [])
        .map((receipt) =>
          receipt.url
            ? `<a href="${receipt.url}" target="_blank" rel="noreferrer">${receipt.name}</a>`
            : receipt.name
        )
        .join("<br />");

      return `
        <label class="entry-card">
          <div class="entry-select-row">
            <input type="checkbox" data-archived-kind="receipt" data-archived-id="${item.id}" />
            <div class="entry-meta">
              <h3>${formatDisplayDate(item.date)}</h3>
              <p class="entry-pill">Archived Receipt</p>
              ${item.relatedReference ? `<p>Ticket / Invoice: ${item.relatedReference}</p>` : ""}
              <p class="entry-pill">Total Receipt: ${formatCurrency(item.total)}</p>
              <div class="entry-attachments"><strong>Receipts</strong><span>${receipts || "None"}</span></div>
            </div>
          </div>
        </label>
      `;
    })
    .join("");
}

async function loadArchivedItems() {
  const localArchivedDays = readStoredDayEntries()
    .filter((entry) => entry.archivedAt)
    .map((entry) => ({ ...entry, kind: "day" }));
  const localArchivedReceipts = readStoredPurchaseEntries()
    .filter((entry) => entry.archivedAt)
    .map((entry) => ({ ...entry, kind: "receipt" }));

  let nextItems = [...localArchivedDays, ...localArchivedReceipts];

  if (supabaseClient && currentSession?.user) {
    const dayResult = await supabaseClient
      .from("day_entries")
      .select(
        "id, work_date, location, comments, related_reference, attachments, archived_at, created_at, day_entry_employees(employee_id, employee_name, first_name, last_name, hours, hourly_rate, total_pay)"
      )
      .not("archived_at", "is", null)
      .order("work_date", { ascending: false });

    if (!dayResult.error && Array.isArray(dayResult.data)) {
      const remoteDays = dayResult.data.map((entry) => ({
        kind: "day",
        id: entry.id,
        date: entry.work_date,
        location: entry.location,
        comments: entry.comments || "",
        relatedReference: entry.related_reference || "",
        attachments: Array.isArray(entry.attachments) ? entry.attachments : [],
        employees: (entry.day_entry_employees || []).map((item) => ({
          employeeId: item.employee_id || slugifyEmployeeName(item.employee_name || ""),
          employee: item.employee_name,
          firstName: item.first_name || item.employee_name || "",
          lastName: item.last_name || "",
          hours: Number(item.hours),
          rate: Number(item.hourly_rate || getEmployeeById(item.employee_id || "")?.rate || 0),
        })),
        archivedAt: entry.archived_at || null,
        createdAt: entry.created_at,
      }));
      nextItems = [...nextItems.filter((item) => !(item.kind === "day" && isUuid(item.id))), ...remoteDays];
    }

    const receiptResult = await supabaseClient
      .from("purchase_entries")
      .select("id, purchase_date, related_reference, receipt_total, receipt_files, receipt_text, archived_at, created_at")
      .not("archived_at", "is", null)
      .order("purchase_date", { ascending: false });

    if (!receiptResult.error && Array.isArray(receiptResult.data)) {
      const remoteReceipts = receiptResult.data.map((entry) => ({
        kind: "receipt",
        id: entry.id,
        date: entry.purchase_date,
        relatedReference: entry.related_reference || "",
        receipts: Array.isArray(entry.receipt_files) ? entry.receipt_files : [],
        total: Number(entry.receipt_total || 0),
        analysisText: entry.receipt_text || "",
        archivedAt: entry.archived_at || null,
        createdAt: entry.created_at,
      }));
      nextItems = [
        ...nextItems.filter((item) => !(item.kind === "receipt" && isUuid(item.id))),
        ...remoteReceipts,
      ];
    }
  }

  archivedItemsCache = nextItems.sort((left, right) =>
    String(right.date || "").localeCompare(String(left.date || ""))
  );
  renderArchivedItems();
}

function getSelectedArchivedItems() {
  const selectedKeys = [...archivedItemsList.querySelectorAll('input[type="checkbox"]:checked')].map(
    (input) => `${input.dataset.archivedKind}:${input.dataset.archivedId}`
  );

  return archivedItemsCache.filter((item) => selectedKeys.includes(`${item.kind}:${item.id}`));
}

async function retrieveSelectedArchivedItems() {
  const selectedItems = getSelectedArchivedItems();

  if (!selectedItems.length) {
    setArchivedItemsStatus("Please select at least one archived item to retrieve.", "error");
    return;
  }

  const dayIds = selectedItems.filter((item) => item.kind === "day").map((item) => item.id);
  const receiptIds = selectedItems
    .filter((item) => item.kind === "receipt")
    .map((item) => item.id);
  const onlineDayIds = dayIds.filter(isUuid);
  const onlineReceiptIds = receiptIds.filter(isUuid);

  if (supabaseClient && currentSession?.user && onlineDayIds.length) {
    const { error } = await supabaseClient
      .from("day_entries")
      .update({ archived_at: null })
      .in("id", onlineDayIds);

    if (error) {
      setArchivedItemsStatus("Could not retrieve the selected archived days online.", "error");
      return;
    }
  }

  if (supabaseClient && currentSession?.user && onlineReceiptIds.length) {
    const { error } = await supabaseClient
      .from("purchase_entries")
      .update({ archived_at: null })
      .in("id", onlineReceiptIds);

    if (error) {
      setArchivedItemsStatus("Could not retrieve the selected archived receipts online.", "error");
      return;
    }
  }

  restoreStoredDayEntries(dayIds);
  restoreStoredPurchaseEntries(receiptIds);
  await loadCheckHoursEntries();
  await loadCheckReceiptsEntries();
  await loadArchivedItems();
  setArchivedItemsStatus("Selected archived items were retrieved.", "success");
}

async function loadCheckHoursEntries() {
  const localEntries = readStoredDayEntries().filter((entry) => !entry.archivedAt);
  const archivedDayIds = getArchivedDayIds();
  const localEntryMap = new Map(localEntries.map((entry) => [entry.id, entry]));
  let nextEntries = [...localEntries];

  if (supabaseClient && currentSession?.user) {
    const queryVariants = [
      "id, work_date, location, comments, related_reference, attachments, archived_at, created_at, day_entry_employees(employee_id, employee_name, first_name, last_name, hours, hourly_rate, total_pay)",
      "id, work_date, location, comments, related_reference, attachments, archived_at, created_at, day_entry_employees(employee_name, hours)",
      "id, work_date, location, comments, related_reference, attachments, created_at, day_entry_employees(employee_name, hours)",
      "id, work_date, location, comments, related_reference, created_at, day_entry_employees(employee_name, hours)",
      "id, work_date, location, created_at, day_entry_employees(employee_name, hours)",
    ];

    let data = null;
    let error = null;

    for (const selectClause of queryVariants) {
      let query = supabaseClient
        .from("day_entries")
        .select(selectClause)
        .order("work_date", { ascending: false });

      if (selectClause.includes("archived_at")) {
        query = query.is("archived_at", null);
      }

      const result = await query;

      if (!result.error) {
        data = result.data;
        error = null;
        break;
      }

      error = result.error;
    }

    if (!error && Array.isArray(data)) {
      nextEntries = data
        .map((entry) => {
          const localEntry = localEntryMap.get(entry.id);

          return {
            id: entry.id,
            date: entry.work_date,
            location: entry.location || localEntry?.location || "",
            comments: entry.comments || localEntry?.comments || "",
            relatedReference: entry.related_reference || localEntry?.relatedReference || "",
            attachments:
              (Array.isArray(entry.attachments) && entry.attachments.length
                ? entry.attachments
                : localEntry?.attachments) || [],
            employees:
              (entry.day_entry_employees || []).length
                ? (entry.day_entry_employees || []).map((item) => ({
                    employeeId: item.employee_id || slugifyEmployeeName(item.employee_name || ""),
                    employee: item.employee_name,
                    firstName: item.first_name || item.employee_name || "",
                    lastName: item.last_name || "",
                    hours: Number(item.hours),
                    rate: Number(item.hourly_rate || getEmployeeById(item.employee_id || "")?.rate || 0),
                  }))
                : localEntry?.employees || [],
            archivedAt: entry.archived_at || localEntry?.archivedAt || null,
            createdAt: entry.created_at || localEntry?.createdAt || null,
          };
        })
        .filter((entry) => !entry.archivedAt && !archivedDayIds.has(entry.id));
    } else if (error) {
      setCheckHoursStatus(
        "Could not load online day entries. Showing browser-saved entries instead.",
        "warning"
      );
    }
  }

  dayEntriesCache = nextEntries.sort((left, right) => right.date.localeCompare(left.date));
  renderCheckHoursEntries();
}

async function loadCheckReceiptsEntries() {
  const localEntries = readStoredPurchaseEntries().filter((entry) => !entry.archivedAt);
  const archivedReceiptIds = getArchivedReceiptIds();
  let nextEntries = [...localEntries];

  if (supabaseClient && currentSession?.user) {
    const queryVariants = [
      "id, purchase_date, related_reference, receipt_total, receipt_files, receipt_text, archived_at, created_at",
      "id, purchase_date, related_reference, receipt_total, receipt_files, created_at",
      "id, purchase_date, receipt_total, created_at",
    ];

    let data = null;
    let error = null;

    for (const selectClause of queryVariants) {
      let query = supabaseClient
        .from("purchase_entries")
        .select(selectClause)
        .order("purchase_date", { ascending: false });

      if (selectClause.includes("archived_at")) {
        query = query.is("archived_at", null);
      }

      const result = await query;

      if (!result.error) {
        data = result.data;
        error = null;
        break;
      }

      error = result.error;
    }

    if (!error && Array.isArray(data)) {
      nextEntries = data
        .map((entry) => ({
          id: entry.id,
          date: entry.purchase_date,
          relatedReference: entry.related_reference || "",
          receipts: Array.isArray(entry.receipt_files) ? entry.receipt_files : [],
          total: Number(entry.receipt_total || 0),
          analysisText: entry.receipt_text || "",
          archivedAt: entry.archived_at || null,
          createdAt: entry.created_at,
        }))
        .filter((entry) => !entry.archivedAt && !archivedReceiptIds.has(entry.id));
    } else if (error) {
      setCheckReceiptsStatus(
        "Could not load online receipt entries. Showing browser-saved entries instead.",
        "warning"
      );
    }
  }

  purchaseEntriesCache = nextEntries.sort((left, right) => right.date.localeCompare(left.date));
  renderCheckReceiptsEntries();
}

function getSelectedReceiptEntries() {
  const selectedIds = [
    ...checkReceiptsList.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((input) => input.dataset.receiptId);

  return purchaseEntriesCache.filter((entry) => selectedIds.includes(entry.id));
}

function buildReceiptsEmailBody(entries) {
  return entries
    .map((entry) => {
      const receipts = (entry.receipts || [])
        .map((item) => `- ${item.name}${item.url ? `: ${item.url}` : ""}`)
        .join("\n");

      return [
        `Date: ${formatDisplayDate(entry.date)}`,
        `Reference: ${entry.relatedReference || "None"}`,
        `Total Receipt: ${formatCurrency(entry.total)}`,
        "Receipts:",
        receipts || "- None",
      ].join("\n");
    })
    .join("\n\n--------------------\n\n");
}

function emailSelectedReceipts() {
  const selectedEntries = getSelectedReceiptEntries();

  if (!selectedEntries.length) {
    setCheckReceiptsStatus("Please select at least one recorded receipt to email.", "error");
    return;
  }

  const totalAmount = selectedEntries.reduce((sum, entry) => sum + Number(entry.total || 0), 0);
  const subject = encodeURIComponent(`Recorded Receipt Details (${formatCurrency(totalAmount)})`);
  const body = encodeURIComponent(
    `${buildReceiptsEmailBody(selectedEntries)}\n\nTotal Receipts: ${formatCurrency(totalAmount)}`
  );
  window.location.href = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;
  setCheckReceiptsStatus("Opening your email app with the selected receipt details.", "success");
}

async function archiveSelectedReceipts() {
  const selectedEntries = getSelectedReceiptEntries();

  if (!selectedEntries.length) {
    setCheckReceiptsStatus("Please select at least one recorded receipt to archive.", "error");
    return;
  }

  const selectedIds = selectedEntries.map((entry) => entry.id);
  const onlineIds = selectedIds.filter(isUuid);
  const archivedAt = new Date().toISOString();

  if (supabaseClient && currentSession?.user && onlineIds.length) {
    const { error } = await supabaseClient
      .from("purchase_entries")
      .update({ archived_at: archivedAt })
      .in("id", onlineIds);

    if (error) {
      setCheckReceiptsStatus(
        "Could not archive the selected receipts online. They were kept active.",
        "error"
      );
      return;
    }
  }

  archiveStoredPurchaseEntries(selectedIds);
  purchaseEntriesCache = purchaseEntriesCache.map((entry) =>
    selectedIds.includes(entry.id) ? { ...entry, archivedAt } : entry
  );
  renderCheckReceiptsEntries();
  setCheckReceiptsStatus("Selected receipt entries were archived.", "success");
}

function getSelectedCheckHoursEntries() {
  const selectedIds = [...checkHoursList.querySelectorAll('input[type="checkbox"]:checked')].map(
    (input) => input.dataset.entryId
  );

  return dayEntriesCache.filter((entry) => selectedIds.includes(entry.id));
}

function updateSelectAllDaysButton() {
  if (!selectAllDaysButton) {
    return;
  }

  const checkboxes = [...checkHoursList.querySelectorAll('input[type="checkbox"][data-entry-id]')];

  if (!checkboxes.length) {
    selectAllDaysButton.textContent = "Select All";
    selectAllDaysButton.disabled = true;
    return;
  }

  const allChecked = checkboxes.every((checkbox) => checkbox.checked);
  selectAllDaysButton.textContent = allChecked ? "Clear All" : "Select All";
  selectAllDaysButton.disabled = false;
}

function toggleSelectAllDays() {
  const checkboxes = [...checkHoursList.querySelectorAll('input[type="checkbox"][data-entry-id]')];

  if (!checkboxes.length) {
    return;
  }

  const shouldSelectAll = checkboxes.some((checkbox) => !checkbox.checked);
  checkboxes.forEach((checkbox) => {
    checkbox.checked = shouldSelectAll;
  });

  updateSelectAllDaysButton();
}

function buildSelectedDaysReport(entries) {
  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  return entries
    .map((entry) => {
      const employees = (entry.employees || [])
        .map((item) => {
          const label =
            item.employee || getEmployeeLabel(getEmployeeById(item.employeeId || "") || { firstName: "" });
          return escapeHtml(
            `- ${label}: ${item.hours} hours x $${Number(item.rate || 0).toFixed(2)} = $${getEntryEmployeeCost(item).toFixed(2)}`
          );
        })
        .join("<br>");
      const attachments = (entry.attachments || [])
        .map((item) => {
          if (item.url) {
            const safeUrl = escapeHtml(item.url);
            return `- <a href="${safeUrl}" target="_blank" rel="noreferrer">${safeUrl}</a>`;
          }

          return escapeHtml(`- ${item.name || "Attachment"}`);
        })
        .join("<br>");

      return [
        escapeHtml(
          `------------------------- ${formatDisplayDate(entry.date)} -------------------------`
        ),
        escapeHtml(`Location: ${entry.location || ""}`),
        escapeHtml(`Ticket #: ${entry.relatedReference || "None"}`),
        escapeHtml(`Total Hours: ${getEntryTotalHours(entry).toFixed(2)}`),
        escapeHtml(`Total Day: $${getEntryTotalCost(entry).toFixed(2)}`),
        escapeHtml(`Comment: ${entry.comments || ""}`),
        "Attachments:",
        attachments || "- None",
        "People:",
        employees || "- None",
      ].join("<br>");
    })
    .join("<br><br>");
}

function showSelectedDays() {
  const selectedEntries = getSelectedCheckHoursEntries();

  if (!selectedEntries.length) {
    setCheckHoursStatus("Please select at least one recorded day to show.", "error");
    return;
  }

  selectedDaysOutput.innerHTML = buildSelectedDaysReport(selectedEntries);
  setCheckHoursStatus("Showing the selected day details.", "success");
  showScreen("selected-days");
}

async function archiveSelectedDays() {
  const selectedEntries = getSelectedCheckHoursEntries();

  if (!selectedEntries.length) {
    setCheckHoursStatus("Please select at least one recorded day to archive.", "error");
    return;
  }

  const selectedIds = selectedEntries.map((entry) => entry.id);
  const onlineIds = selectedIds.filter(isUuid);
  const archivedAt = new Date().toISOString();

  if (supabaseClient && currentSession?.user && onlineIds.length) {
    const { error } = await supabaseClient
      .from("day_entries")
      .update({ archived_at: archivedAt })
      .in("id", onlineIds);

    if (error) {
      setCheckHoursStatus(
        "Could not archive the selected days online. They were kept active.",
        "error"
      );
      return;
    }
  }

  archiveStoredDayEntries(selectedIds);
  dayEntriesCache = dayEntriesCache.map((entry) =>
    selectedIds.includes(entry.id) ? { ...entry, archivedAt } : entry
  );
  renderCheckHoursEntries();
  setCheckHoursStatus("Selected day entries were archived.", "success");
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
  const hadSession = Boolean(currentSession?.user?.email);
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

    if (!hadSession || !currentScreenName || !screens[currentScreenName]) {
      showScreen("home");
    }

    return;
  }

  authScreen.classList.remove("hidden");
  Object.values(screens).forEach((element) => element.classList.add("hidden"));
  developerCreditCard.classList.add("hidden");
  setSignedInEmail("Not signed in");
  currentScreenName = null;
}

async function initializeAuth() {
  if (!supabaseClient) {
    authScreen.classList.remove("hidden");
    authForm.classList.add("hidden");
    Object.values(screens).forEach((element) => element.classList.add("hidden"));
    await loadRecordedDayDates();
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
  await loadRecordedDayDates();
  await checkPurchaseSupabaseReady();

  supabaseClient.auth.onAuthStateChange((_event, nextSession) => {
    applyAuthState(nextSession);
    loadRecordedDayDates();
    checkPurchaseSupabaseReady();
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

  recordedDayDates = new Set(readStoredRecordedDayDates());
  purchaseSupabaseReady = null;
  updateWorkDateLockState();
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
    checkbox.value = employee.id;
    checkbox.addEventListener("change", renderHoursFields);

    const text = document.createElement("span");
    text.textContent = `${getEmployeeLabel(employee)}${getEmployeeRate(employee) ? ` - $${getEmployeeRate(employee).toFixed(2)}/hr` : ""}`;

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
  const existingAttachments = editingDayExistingAttachments || [];

  if (!attachments.length && !existingAttachments.length) {
    attachmentList.className = "attachment-list empty-state";
    attachmentList.textContent = "No attachments selected yet.";
    return;
  }

  attachmentList.className = "attachment-list";
  attachmentList.innerHTML = "";

  existingAttachments.forEach((file) => {
    const item = document.createElement("div");
    item.className = "attachment-item";
    item.textContent = file.url ? `${file.name} (saved link)` : `${file.name} (saved)`;
    attachmentList.appendChild(item);
  });

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

  newEmployeeDrawer.classList.toggle("hidden", recordDayStepIndex !== 2);

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
  if (recordDayStepIndex === 0) {
    if (!workDateInput.value) {
      setSaveStatus("Please choose the day before continuing.", "error");
      return false;
    }

    const isEditingSameDate = Boolean(
      editingDayEntryId && editingDayOriginalDate && workDateInput.value === editingDayOriginalDate
    );

    if (isRecordedDay(workDateInput.value) && !isEditingSameDate) {
      updateWorkDateLockState();
      setSaveStatus("That day has already been recorded. Please choose a different day.", "error");
      return false;
    }
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

  if (recordDayStepIndex === 3) {
    const selectedEmployees = getSelectedEmployees();
    const hasAllHours = selectedEmployees.every((employee) =>
      document.getElementById(`hours-${employee}`)?.value
    );

    if (!selectedEmployees.length || !hasAllHours) {
      setSaveStatus("Please enter hours for each selected person before continuing.", "error");
      return false;
    }
  }

  if (recordDayStepIndex === 4 && !commentsText.value.trim()) {
    setSaveStatus("Please add comments before continuing.", "error");
    return false;
  }

  if (recordDayStepIndex === 5 && !locationSelect.value) {
    setSaveStatus("Please choose a location before continuing.", "error");
    return false;
  }

  if (
    recordDayStepIndex === 6 &&
    !attachmentInput.files.length &&
    !(editingDayExistingAttachments || []).length
  ) {
    const confirmed = window.confirm("No attachments?");

    if (!confirmed) {
      setSaveStatus("Add attachments if you want them included before saving.", "warning");
      return false;
    }
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
  recordDayForm.classList.remove("hidden");
  savedEntryPanel.classList.add("hidden");
  saveStatus.classList.add("hidden");
  recordDaySaveButton.classList.remove("hidden");
  recordDayCompleted = false;
  editingDayEntryId = null;
  editingDayOriginalDate = "";
  editingDayCreatedAt = null;
  editingDayExistingAttachments = [];
  updateVoiceStatus("");
  renderEmployees();
  renderHoursFields();
  renderLocations();
  renderAttachmentList();
  updateCommentsPreview();
  updateDayReferenceField();
  updateWorkDateLockState();
  recordDayStepIndex = 0;
  updateRecordDayStep();
  recordDayStepTitle.textContent = recordDayStepMeta[recordDayStepIndex].title;
}

function loadDayEntryForEditing(entryId) {
  const entry = dayEntriesCache.find((item) => item.id === entryId);

  if (!entry) {
    setCheckHoursStatus("That day could not be loaded for editing.", "error");
    return;
  }

  resetRecordDayForm();
  editingDayEntryId = entry.id;
  editingDayOriginalDate = entry.date;
  editingDayCreatedAt = entry.createdAt || null;
  editingDayExistingAttachments = Array.isArray(entry.attachments) ? [...entry.attachments] : [];

  workDateInput.value = entry.date || "";
  const isRelated = Boolean(entry.relatedReference);
  dayRelatedInputs.forEach((input) => {
    input.checked = input.value === (isRelated ? "yes" : "no");
  });
  updateDayReferenceField();
  dayReferenceText.value = entry.relatedReference || "";
  commentsText.value = entry.comments || "";
  locationSelect.value = entry.location || "";

  renderEmployees();
  const employeeIds = new Set((entry.employees || []).map((item) => item.employeeId));
  employeeList.querySelectorAll('input[name="employee"]').forEach((checkbox) => {
    checkbox.checked = employeeIds.has(checkbox.value);
  });
  renderHoursFields();
  (entry.employees || []).forEach((item) => {
    const hoursInput = document.getElementById(`hours-${item.employeeId}`);
    if (hoursInput) {
      hoursInput.value = item.hours;
    }
  });

  renderAttachmentList();
  updateCommentsPreview();
  updateWorkDateLockState();
  recordDayStepIndex = 0;
  updateRecordDayStep();
  setSaveStatus(`Editing ${formatDisplayDate(entry.date)}. Save when you are done.`, "warning");
  showScreen("record-day");
  focusCurrentRecordDayStep();
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

  const parseAmounts = (line) =>
    (line.match(/\d{1,5}(?:[.,]\d{2})/g) || [])
      .map((value) => Number(value.replace(",", ".")))
      .filter((value) => Number.isFinite(value));

  const isBadContext = (line) =>
    /subtotal|sales\s*tax|tax|change|cash|debit|credit|auth|survey|policy|expires/i.test(line);
  const isTaxLikeLine = (line) => /sales\s*tax|\btax\b/i.test(line);
  const isSubtotalLikeLine = (line) => /\bsubtotal\b/i.test(line);
  const isTotalLikeLine = (line) => /\bgrand\s*total\b|\btotal\b|\bamount\s*due\b|\bbalance\s*due\b/i.test(line);

  const candidates = [];

  lines.forEach((line, index) => {
    const amounts = parseAmounts(line);

    if (!amounts.length) {
      return;
    }

    const previousLine = lines[index - 1] || "";
    const nextLine = lines[index + 1] || "";
    const combinedLine = `${previousLine} ${line} ${nextLine}`;
    const lineLooksLikeTax = isTaxLikeLine(line);
    const lineLooksLikeSubtotal = isSubtotalLikeLine(line);
    const lineLooksLikeTotal = isTotalLikeLine(line);
    const previousLooksLikeTotal = isTotalLikeLine(previousLine);
    const nextLooksLikeTotal = isTotalLikeLine(nextLine);
    let score = 0;

    if (/grand\s*total/i.test(line)) {
      score += 180;
    } else if (/grand\s*total/i.test(combinedLine)) {
      score += 120;
    }

    if (/amount\s*due|balance\s*due/i.test(line)) {
      score += 170;
    } else if (/amount\s*due|balance\s*due/i.test(combinedLine)) {
      score += 110;
    }

    if (/\btotal\b/i.test(line) && !lineLooksLikeTax && !lineLooksLikeSubtotal) {
      score += 160;
    } else if (/\btotal\b/i.test(combinedLine)) {
      score += 90;
    }

    if (/usd\$|\$\s*\d|\d\s*\$/i.test(combinedLine)) {
      score += 30;
    }

    if (/amex|visa|mastercard|american\s*express/i.test(combinedLine)) {
      score += 12;
    }

    if (lineLooksLikeTax) {
      score -= 240;
    }

    if (lineLooksLikeSubtotal) {
      score -= 180;
    }

    if (isBadContext(previousLine) || isBadContext(nextLine)) {
      score -= 20;
    }

    amounts.forEach((amount, amountIndex) => {
      let amountScore = score + amountIndex;

      if (lineLooksLikeTax || lineLooksLikeSubtotal) {
        amountScore -= 1000;
      }

      if (!lineLooksLikeTotal && previousLooksLikeTotal && !isTaxLikeLine(previousLine)) {
        amountScore += 140;
      }

      if (!lineLooksLikeTotal && nextLooksLikeTotal && !isTaxLikeLine(nextLine)) {
        amountScore += 40;
      }

      candidates.push({
        amount,
        score: amountScore,
        index,
      });
    });
  });

  if (!candidates.length) {
    const amounts = parseAmounts(normalizedText);
    return amounts.length ? amounts[amounts.length - 1] : null;
  }

  candidates.sort((left, right) => {
    if (right.score !== left.score) {
      return right.score - left.score;
    }

    return right.index - left.index;
  });

  return candidates[0].amount;
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
  recordPurchaseForm.classList.remove("hidden");
  recordPurchaseStepIndex = 0;
  receiptAnalysisText = "";
  purchaseSavedPanel.classList.add("hidden");
  purchaseSaveStatus.classList.add("hidden");
  recordPurchaseSaveButton.classList.remove("hidden");
  receiptAnalysisOutput.className = "receipt-analysis-output empty-state";
  receiptAnalysisOutput.textContent = "No analysis yet.";
  updateReceiptAnalysisStatus("");
  renderPurchaseReceiptList();
  updatePurchaseReferenceField();
  updateRecordPurchaseStep();
  recordPurchaseStepTitle.textContent = recordPurchaseStepMeta[recordPurchaseStepIndex].title;
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

    const mergedText = [speechBaseText, transcript].filter(Boolean).join("\n").trim();
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
    const employeeProfile = getEmployeeById(employee);
    const row = document.createElement("div");
    row.className = "hours-row";

    const label = document.createElement("label");
    label.textContent = getEmployeeLabel(employeeProfile || { firstName: employee });
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
  const firstName = newEmployeeFirstNameInput.value.trim();
  const lastName = newEmployeeLastNameInput.value.trim();
  const rate = Number(newEmployeeRateInput.value || 0);

  if (!firstName) {
    return;
  }

  const nextEmployee = normalizeEmployeeProfile(
    {
      firstName,
      lastName,
      rate,
    },
    employees.length
  );

  const alreadyExists = employees.some(
    (employee) =>
      getEmployeeLabel(employee).toLowerCase() === getEmployeeLabel(nextEmployee).toLowerCase()
  );

  if (alreadyExists) {
    return;
  }

  saveEmployees([...employees, nextEmployee]);
  newEmployeeFirstNameInput.value = "";
  newEmployeeLastNameInput.value = "";
  newEmployeeRateInput.value = "";
  newEmployeePanel.classList.add("hidden");
  renderEmployees();
  renderHoursFields();
  renderSettingsEmployees();
}

async function saveEntryToSupabase(payload) {
  if (!supabaseClient) {
    return {
      id: payload.id || null,
      attachments: payload.attachments,
      createdAt: payload.createdAt || null,
      mode: "local-only",
      message: "Saved in this browser. Add Supabase in config.js to save online.",
    };
  }

  if (payload.id && isUuid(payload.id)) {
    const updateVariants = [
      {
        work_date: payload.date,
        location: payload.location,
        comments: payload.comments,
        related_reference: payload.relatedReference,
        attachments: payload.attachments,
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

    let updateError = null;

    for (const updatePayload of updateVariants) {
      const result = await supabaseClient.from("day_entries").update(updatePayload).eq("id", payload.id);

      if (!result.error) {
        updateError = null;
        break;
      }

      updateError = result.error;
    }

    if (updateError) {
      throw updateError;
    }

    const deleteEmployeesResult = await supabaseClient
      .from("day_entry_employees")
      .delete()
      .eq("day_entry_id", payload.id);

    if (deleteEmployeesResult.error) {
      throw deleteEmployeesResult.error;
    }

    const employeeRows = payload.employees.map((item) => ({
      day_entry_id: payload.id,
      employee_id: item.employeeId,
      employee_name: item.employee,
      first_name: item.firstName,
      last_name: item.lastName,
      hours: item.hours,
      hourly_rate: item.rate,
      total_pay: item.totalPay,
    }));
    const employeeInsertVariants = [
      employeeRows,
      payload.employees.map((item) => ({
        day_entry_id: payload.id,
        employee_name: item.employee,
        first_name: item.firstName,
        last_name: item.lastName,
        hours: item.hours,
        hourly_rate: item.rate,
        total_pay: item.totalPay,
      })),
      payload.employees.map((item) => ({
        day_entry_id: payload.id,
        employee_name: item.employee,
        hours: item.hours,
      })),
    ];

    let employeesError = null;

    for (const employeeInsertPayload of employeeInsertVariants) {
      const result = await supabaseClient.from("day_entry_employees").insert(employeeInsertPayload);

      if (!result.error) {
        employeesError = null;
        break;
      }

      employeesError = result.error;
    }

    if (employeesError) {
      throw employeesError;
    }

    let uploadedAttachments = [...(editingDayExistingAttachments || [])];
    const attachmentFiles = [...attachmentInput.files];

    if (attachmentFiles.length) {
      const nextAttachments = [...uploadedAttachments];

      for (const file of attachmentFiles) {
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
        const path = `${currentSession.user.id}/${payload.id}/${Date.now()}-${safeName}`;

        const { error: uploadError } = await supabaseClient.storage
          .from("day-attachments")
          .upload(path, file, { upsert: false });

        if (uploadError) {
          nextAttachments.push({
            name: file.name,
            size: file.size,
            type: file.type,
          });
          continue;
        }

        const { data: publicData } = supabaseClient.storage.from("day-attachments").getPublicUrl(path);
        nextAttachments.push({
          name: file.name,
          size: file.size,
          type: file.type,
          url: publicData.publicUrl,
        });
      }

      uploadedAttachments = nextAttachments;
    }

    await supabaseClient
      .from("day_entries")
      .update({ attachments: uploadedAttachments })
      .eq("id", payload.id);

    return {
      id: payload.id,
      attachments: uploadedAttachments,
      createdAt: payload.createdAt || null,
      mode: "supabase",
      message: "Updated in Supabase and in this browser.",
    };
  }

  const insertVariants = [
    {
      work_date: payload.date,
      location: payload.location,
      comments: payload.comments,
      related_reference: payload.relatedReference,
      attachments: payload.attachments,
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
    employee_id: item.employeeId,
    employee_name: item.employee,
    first_name: item.firstName,
    last_name: item.lastName,
    hours: item.hours,
    hourly_rate: item.rate,
    total_pay: item.totalPay,
  }));
  const employeeInsertVariants = [
    employeeRows,
    payload.employees.map((item) => ({
      day_entry_id: dayEntry.id,
      employee_name: item.employee,
      first_name: item.firstName,
      last_name: item.lastName,
      hours: item.hours,
      hourly_rate: item.rate,
      total_pay: item.totalPay,
    })),
    payload.employees.map((item) => ({
      day_entry_id: dayEntry.id,
      employee_name: item.employee,
      hours: item.hours,
    })),
  ];

  let employeesError = null;

  for (const employeeInsertPayload of employeeInsertVariants) {
    const result = await supabaseClient.from("day_entry_employees").insert(employeeInsertPayload);

    if (!result.error) {
      employeesError = null;
      break;
    }

    employeesError = result.error;
  }

  if (employeesError) {
    throw employeesError;
  }

  let uploadedAttachments = payload.attachments;
  const attachmentFiles = [...attachmentInput.files];

  if (attachmentFiles.length) {
    const nextAttachments = [];

    for (const file of attachmentFiles) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const path = `${currentSession.user.id}/${dayEntry.id}/${Date.now()}-${safeName}`;

      const { error: uploadError } = await supabaseClient.storage
        .from("day-attachments")
        .upload(path, file, { upsert: false });

      if (uploadError) {
        nextAttachments.push({
          name: file.name,
          size: file.size,
          type: file.type,
        });
        continue;
      }

      const { data: publicData } = supabaseClient.storage.from("day-attachments").getPublicUrl(path);
      nextAttachments.push({
        name: file.name,
        size: file.size,
        type: file.type,
        url: publicData.publicUrl,
      });
    }

    uploadedAttachments = nextAttachments;

    await supabaseClient
      .from("day_entries")
      .update({ attachments: uploadedAttachments })
      .eq("id", dayEntry.id);
  }

  return {
    id: dayEntry.id,
    attachments: uploadedAttachments,
    createdAt: payload.createdAt || new Date().toISOString(),
    mode: "supabase",
    message: "Saved to Supabase and to this browser.",
  };
}

async function savePurchaseToSupabase(payload) {
  if (!supabaseClient) {
    return {
      id: null,
      receipts: payload.receipts,
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

  let purchaseEntry = null;
  let purchaseEntryError = null;

  for (const insertPayload of insertVariants) {
    const result = await supabaseClient
      .from("purchase_entries")
      .insert(insertPayload)
      .select("id")
      .single();

    if (!result.error) {
      purchaseEntry = result.data;
      purchaseEntryError = null;
      break;
    }

    purchaseEntryError = result.error;
  }

  if (purchaseEntryError) {
    throw purchaseEntryError;
  }

  let uploadedReceipts = payload.receipts;
  const receiptFiles = [...purchaseReceiptInput.files];

  if (receiptFiles.length) {
    const nextReceipts = [];

    for (const file of receiptFiles) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const path = `${currentSession.user.id}/${purchaseEntry.id}/${Date.now()}-${safeName}`;

      const { error: uploadError } = await supabaseClient.storage
        .from("purchase-receipts")
        .upload(path, file, { upsert: false });

      if (uploadError) {
        nextReceipts.push({
          name: file.name,
          size: file.size,
          type: file.type,
        });
        continue;
      }

      const { data: publicData } = supabaseClient.storage
        .from("purchase-receipts")
        .getPublicUrl(path);

      nextReceipts.push({
        name: file.name,
        size: file.size,
        type: file.type,
        url: publicData.publicUrl,
      });
    }

    uploadedReceipts = nextReceipts;

    await supabaseClient
      .from("purchase_entries")
      .update({ receipt_files: uploadedReceipts })
      .eq("id", purchaseEntry.id);
  }

  return {
    id: purchaseEntry.id,
    receipts: uploadedReceipts,
    mode: "supabase",
    message: "Saved to Supabase and to this browser.",
  };
}

function getPurchaseSaveErrorMessage(error) {
  const message = `${error?.message || ""} ${error?.details || ""}`.toLowerCase();

  if (
    message.includes("purchase_entries") &&
    (message.includes("does not exist") ||
      message.includes("schema cache") ||
      message.includes("setup is missing"))
  ) {
    return "Supabase is missing the purchase table. Run the updated SQL in supabase/schema.sql, then try again.";
  }

  if (
    message.includes("receipt_total") ||
    message.includes("receipt_files") ||
    message.includes("receipt_text") ||
    message.includes("related_reference")
  ) {
    return "Supabase is missing the latest purchase columns. Run the updated SQL in supabase/schema.sql, then try again.";
  }

  if (
    message.includes("row-level security") ||
    message.includes("permission denied") ||
    message.includes("jwt")
  ) {
    return "Supabase blocked the purchase save. Please sign out, sign back in, and make sure the latest SQL policies were run.";
  }

  if (
    message.includes("storage") ||
    message.includes("bucket") ||
    message.includes("purchase-receipts")
  ) {
    return "Supabase saved the purchase, but receipt uploads need the latest storage bucket setup from supabase/schema.sql.";
  }

  return "Supabase save failed, but the purchase was saved in this browser. Run the updated SQL in supabase/schema.sql and check your Supabase setup.";
}

async function checkPurchaseSupabaseReady() {
  if (!supabaseClient || !currentSession?.user) {
    purchaseSupabaseReady = false;
    return false;
  }

  const { error } = await supabaseClient.from("purchase_entries").select("id").limit(1);

  if (error) {
    purchaseSupabaseReady = false;
    setPurchaseSaveStatus(getPurchaseSaveErrorMessage(error), "warning");
    return false;
  }

  purchaseSupabaseReady = true;
  if (!purchaseSaveStatus.classList.contains("error")) {
    purchaseSaveStatus.classList.add("hidden");
  }
  return true;
}

async function saveDayEntry(event) {
  event?.preventDefault();

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
    employeeId: employee,
    profile: getEmployeeById(employee),
    hours: document.getElementById(`hours-${employee}`).value,
  }));

  const payload = {
    id: editingDayEntryId,
    date: workDateInput.value,
    location: locationSelect.value,
    employees: hoursByEmployee.map((item) => ({
      employeeId: item.employeeId,
      employee: getEmployeeLabel(item.profile || { firstName: item.employeeId }),
      firstName: item.profile?.firstName || "",
      lastName: item.profile?.lastName || "",
      hours: Number(item.hours),
      rate: getEmployeeRate(item.profile || { rate: 0 }),
      totalPay: Number(item.hours) * getEmployeeRate(item.profile || { rate: 0 }),
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
    createdAt: editingDayCreatedAt,
    archivedAt: null,
  };

  const isEditingSameDate = Boolean(
    editingDayEntryId && editingDayOriginalDate && payload.date === editingDayOriginalDate
  );

  if (isRecordedDay(payload.date) && !isEditingSameDate) {
    updateWorkDateLockState();
    setSaveStatus("That day has already been recorded. Please choose a different day.", "error");
    return;
  }

  try {
    const saveResult = await saveEntryToSupabase(payload);
    const savedEntry = buildLocalDayEntry(
      { ...payload, attachments: saveResult.attachments || payload.attachments },
      saveResult
    );
    localStorage.setItem("latestDayEntry", JSON.stringify(savedEntry, null, 2));
    upsertStoredDayEntry(savedEntry);
    if (editingDayOriginalDate && editingDayOriginalDate !== payload.date) {
      removeRecordedDayDate(editingDayOriginalDate);
    }
    addRecordedDayDate(payload.date);
    recordDayForm.classList.add("hidden");
    recordDayStepTitle.textContent = "Day Recorded";
    savedEntryTitle.textContent = formatSavedDayTitle(payload.date);
    savedEntryOutput.textContent = formatDaySummary(savedEntry);
    savedEntryPanel.classList.remove("hidden");
    recordDaySaveButton.classList.add("hidden");
    recordDayCompleted = true;
    setSaveStatus(
      saveResult.message,
      saveResult.mode === "supabase" ? "success" : "warning"
    );
    loadCheckHoursEntries();
  } catch (error) {
    console.error(error);

    if (error?.code === "23505") {
      addRecordedDayDate(payload.date);
      setSaveStatus("That day has already been recorded and is locked.", "error");
      return;
    }

    const savedEntry = buildLocalDayEntry(payload, { id: null });
    localStorage.setItem("latestDayEntry", JSON.stringify(savedEntry, null, 2));
    upsertStoredDayEntry(savedEntry);
    if (editingDayOriginalDate && editingDayOriginalDate !== payload.date) {
      removeRecordedDayDate(editingDayOriginalDate);
    }
    addRecordedDayDate(payload.date);
    recordDayForm.classList.add("hidden");
    recordDayStepTitle.textContent = "Day Recorded";
    savedEntryTitle.textContent = formatSavedDayTitle(payload.date);
    savedEntryOutput.textContent = formatDaySummary(savedEntry);
    savedEntryPanel.classList.remove("hidden");
    recordDaySaveButton.classList.add("hidden");
    recordDayCompleted = true;
    setSaveStatus(
      "Supabase save failed, but the entry was saved in this browser. Check your login and Supabase setup.",
      "error"
    );
    renderAttachmentList();
    updateCommentsPreview();
    loadCheckHoursEntries();
  }
}

async function savePurchaseEntry(event) {
  event?.preventDefault();

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
    const savedPurchase = buildLocalPurchaseEntry(
      { ...payload, receipts: saveResult.receipts || payload.receipts },
      saveResult
    );
    localStorage.setItem("latestPurchaseEntry", JSON.stringify(savedPurchase, null, 2));
    upsertStoredPurchaseEntry(savedPurchase);
    recordPurchaseForm.classList.add("hidden");
    recordPurchaseStepTitle.textContent = "Purchase Recorded";
    purchaseSavedTitle.textContent = formatSavedPurchaseTitle(payload.date);
    purchaseSavedOutput.textContent = formatPurchaseSummary(savedPurchase);
    purchaseSavedPanel.classList.remove("hidden");
    recordPurchaseSaveButton.classList.add("hidden");
    setPurchaseSaveStatus(
      saveResult.message,
      saveResult.mode === "supabase" ? "success" : "warning"
    );
    loadCheckReceiptsEntries();
  } catch (error) {
    console.error(error);
    const savedPurchase = buildLocalPurchaseEntry(payload, { id: null });
    localStorage.setItem("latestPurchaseEntry", JSON.stringify(savedPurchase, null, 2));
    upsertStoredPurchaseEntry(savedPurchase);
    recordPurchaseForm.classList.add("hidden");
    recordPurchaseStepTitle.textContent = "Purchase Recorded";
    purchaseSavedTitle.textContent = formatSavedPurchaseTitle(payload.date);
    purchaseSavedOutput.textContent = formatPurchaseSummary(savedPurchase);
    purchaseSavedPanel.classList.remove("hidden");
    recordPurchaseSaveButton.classList.add("hidden");
    setPurchaseSaveStatus(getPurchaseSaveErrorMessage(error), "error");
    loadCheckReceiptsEntries();
  }
}

document.querySelectorAll("[data-screen]").forEach((button) => {
  button.addEventListener("click", () => {
    const screenName = button.dataset.screen;

    if (screenName === "record-day") {
      maybeStartFreshRecordDay();
    }

    showScreen(screenName);
  });
});

addEmployeeButton.addEventListener("click", addEmployee);
toggleNewEmployeeButton.addEventListener("click", toggleNewEmployeePanel);
attachmentInput.addEventListener("change", renderAttachmentList);
workDateInput.addEventListener("input", updateWorkDateLockState);
workDateInput.addEventListener("change", updateWorkDateLockState);
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
recordDaySaveButton.addEventListener("click", () => {
  if (!validateCurrentRecordDayStep()) {
    return;
  }

  saveDayEntry();
});
recordPurchasePrevButton.addEventListener("click", goToPreviousRecordPurchaseStep);
recordPurchaseNextButton.addEventListener("click", goToNextRecordPurchaseStep);
recordPurchaseSaveButton.addEventListener("click", () => {
  if (!validateCurrentRecordPurchaseStep()) {
    return;
  }

  savePurchaseEntry();
});
dayRelatedInputs.forEach((input) => input.addEventListener("change", updateDayReferenceField));
purchaseRelatedInputs.forEach((input) =>
  input.addEventListener("change", updatePurchaseReferenceField)
);
clearCommentsButton.addEventListener("click", clearComments);
voiceCommentButton.addEventListener("click", startVoiceCapture);
voiceStopButton.addEventListener("click", stopVoiceCapture);
analyzeReceiptButton.addEventListener("click", analyzeReceipt);
showDaysButton.addEventListener("click", showSelectedDays);
archiveDaysButton.addEventListener("click", archiveSelectedDays);
selectAllDaysButton.addEventListener("click", toggleSelectAllDays);
emailReceiptsButton.addEventListener("click", emailSelectedReceipts);
archiveReceiptsButton.addEventListener("click", archiveSelectedReceipts);
retrieveArchivedButton.addEventListener("click", retrieveSelectedArchivedItems);
checkHoursList.addEventListener("change", (event) => {
  if (event.target.matches('input[type="checkbox"][data-entry-id]')) {
    updateSelectAllDaysButton();
  }
});
archivedSearchInput.addEventListener("input", renderArchivedItems);
checkHoursList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-day-id]");

  if (!editButton) {
    return;
  }

  loadDayEntryForEditing(editButton.dataset.editDayId);
});
saveSettingsButton.addEventListener("click", saveSettings);
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
newEmployeeFirstNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addEmployee();
  }
});

employees = readStoredEmployees();
renderEmployees();
renderLocations();
renderHoursFields();
renderAttachmentList();
renderPurchaseReceiptList();
renderSettingsEmployees();
updateCommentsPreview();
updateMagicLinkButton();
updateDayReferenceField();
updatePurchaseReferenceField();
setupSpeechRecognition();
updateRecordDayStep();
updateRecordPurchaseStep();
renderCheckHoursEntries();
renderCheckReceiptsEntries();
initializeAuth();
