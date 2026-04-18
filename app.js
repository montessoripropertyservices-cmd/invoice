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
  tickets: document.getElementById("tickets-screen"),
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
const dayTicketPicker = document.getElementById("day-ticket-picker");
const dayTicketSearchInput = document.getElementById("day-ticket-search");
const loadDayTicketsButton = document.getElementById("load-day-tickets-button");
const dayTicketPickerStatus = document.getElementById("day-ticket-picker-status");
const dayTicketSelected = document.getElementById("day-ticket-selected");
const dayTicketList = document.getElementById("day-ticket-list");
const commentsText = document.getElementById("comments-text");
const commentsPreview = document.getElementById("comments-preview");
const voiceCommentButton = document.getElementById("voice-comment-button");
const clearCommentsButton = document.getElementById("clear-comments-button");
const voiceStatus = document.getElementById("voice-status");
const voiceModal = document.getElementById("voice-modal");
const voiceStopButton = document.getElementById("voice-stop-button");
const locationList = document.getElementById("location-list");
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
const purchaseLocationSelect = document.getElementById("purchase-location-select");
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
const checkHoursDashboard = document.getElementById("check-hours-dashboard");
const checkHoursList = document.getElementById("check-hours-list");
const selectedDaysOutput = document.getElementById("selected-days-output");
const copySelectedDaysButton = document.getElementById("copy-selected-days-button");
const emailReceiptsButton = document.getElementById("email-receipts-button");
const archiveReceiptsButton = document.getElementById("archive-receipts-button");
const checkReceiptsStatus = document.getElementById("check-receipts-status");
const checkReceiptsDashboard = document.getElementById("check-receipts-dashboard");
const checkReceiptsList = document.getElementById("check-receipts-list");
const syncTicketsButton = document.getElementById("sync-tickets-button");
const ticketSearchInput = document.getElementById("ticket-search-input");
const ticketsByTimeButton = document.getElementById("tickets-by-time-button");
const ticketsByLocationButton = document.getElementById("tickets-by-location-button");
const ticketsStatus = document.getElementById("tickets-status");
const ticketsList = document.getElementById("tickets-list");
const ticketActionsModal = document.getElementById("ticket-actions-modal");
const ticketActionsTitle = document.getElementById("ticket-actions-title");
const ticketActionsDescription = document.getElementById("ticket-actions-description");
const closeTicketActionsButton = document.getElementById("close-ticket-actions-button");
const archivedSearchInput = document.getElementById("archived-search-input");
const archivedItemsEyebrow = document.getElementById("archived-items-eyebrow");
const archivedItemsTitle = document.getElementById("archived-items-title");
const archivedSearchLabel = document.getElementById("archived-search-label");
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
const authUsernameInput = document.getElementById("auth-username");
const authPasswordInput = document.getElementById("auth-password");
const authDebugEmail = document.getElementById("auth-debug-email");
const authStatus = document.getElementById("auth-status");
const signOutButton = document.getElementById("sign-out-button");
const magicLinkButton = document.getElementById("magic-link-button");
const staticLoginButton = document.getElementById("static-login-button");
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
const staticUsers = {
  erik: { username: "erik", password: "E1976", email: "erik.nuno@gmail.com", displayName: "Erik" },
  martin: {
    username: "martin",
    password: "M2026",
    email: "montessoripropertysirvices@gmail.com",
    displayName: "Martin",
  },
};

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
let hoursDashboardExpanded = false;
let recordDayCompleted = false;
let employees = [];
let dayCommentDraft = "";
let editingDayEntryId = null;
let editingDayOriginalDate = "";
let editingDayCreatedAt = null;
let editingDayExistingAttachments = [];
let editingPurchaseEntryId = null;
let editingPurchaseCreatedAt = null;
let editingPurchaseExistingReceipts = [];
let archivedItemsFilter = "day";
let ticketViewMode = "time";
let ticketDiscoveryData = null;
let selectedDayTicket = null;
let currentScreenName = null;

function canUseSupabaseSession() {
  return Boolean(supabaseClient && currentSession?.user);
}

const recordedDayDatesStorageKey = "recordedDayDates";
const dayEntriesStorageKey = "dayEntriesHistory";
const purchaseEntriesStorageKey = "purchaseEntriesHistory";
const employeeProfilesStorageKey = "employeeProfiles";
const archivedDayIdsStorageKey = "archivedDayIds";
const archivedReceiptIdsStorageKey = "archivedReceiptIds";
const deletedDayIdsStorageKey = "deletedDayIds";
const ticketDiscoveryStorageKey = "expansiveTicketDiscovery";

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
  { title: "Step 1 of 5: Purchase Date" },
  { title: "Step 2 of 5: Invoice or Ticket" },
  { title: "Step 3 of 5: Location" },
  { title: "Step 4 of 5: Receipt Photos" },
  { title: "Step 5 of 5: Confirm Total" },
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

function setTicketsStatus(message, tone) {
  setStatusMessage(ticketsStatus, message, tone);
}

function setSettingsStatus(message, tone) {
  setStatusMessage(settingsStatus, message, tone);
}

function setArchivedItemsFilter(filterValue = "day") {
  archivedItemsFilter = filterValue === "receipt" ? "receipt" : "day";

  if (archivedItemsFilter === "receipt") {
    archivedItemsEyebrow.textContent = "Invoiced Receipts";
    archivedItemsTitle.textContent = "Search and Retrieve Receipts";
    archivedSearchLabel.textContent = "Search invoiced receipts";
    archivedSearchInput.placeholder =
      "Search by date, location, QuickBooks invoice, ticket, receipt file name";
    return;
  }

  archivedItemsEyebrow.textContent = "Invoiced Days";
  archivedItemsTitle.textContent = "Search and Retrieve Days";
  archivedSearchLabel.textContent = "Search invoiced days";
  archivedSearchInput.placeholder =
    "Search by date, location, QuickBooks invoice, comment, ticket, employee, file name";
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

  if (screenName === "tickets") {
    renderTicketsPlaceholder();
  }

  if (screenName === "archived-items") {
    loadArchivedItems();
  }

  if (screenName === "settings") {
    renderSettingsEmployees();
    loadEmployeeProfilesFromSupabase();
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

function formatShortDate(dateValue) {
  if (!dateValue) {
    return "";
  }

  const parsedDate = new Date(`${dateValue}T12:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return dateValue;
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
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

function mergeEmployeeProfiles(baseEmployees, overrideEmployees) {
  const employeeMap = new Map();

  baseEmployees.forEach((employee, index) => {
    const normalized = normalizeEmployeeProfile(employee, index);
    employeeMap.set(normalized.id, normalized);
  });

  overrideEmployees.forEach((employee, index) => {
    const normalized = normalizeEmployeeProfile(employee, index);
    const existing = employeeMap.get(normalized.id) || {};
    employeeMap.set(normalized.id, {
      ...existing,
      ...normalized,
    });
  });

  return [...employeeMap.values()];
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
  unhideDeletedDayEntry(entry.id);

  if (!entry.archivedAt) {
    const archivedIds = readStoredArchivedIds(archivedDayIdsStorageKey);
    archivedIds.delete(entry.id);
    writeStoredArchivedIds(archivedDayIdsStorageKey, archivedIds);
  }
}

function deleteStoredDayEntry(entryId) {
  const nextEntries = readStoredDayEntries().filter((entry) => entry.id !== entryId);
  writeStoredDayEntries(nextEntries);
  const archivedIds = readStoredArchivedIds(archivedDayIdsStorageKey);
  archivedIds.delete(entryId);
  writeStoredArchivedIds(archivedDayIdsStorageKey, archivedIds);
}

function hideDeletedDayEntry(entryId) {
  const deletedIds = readStoredArchivedIds(deletedDayIdsStorageKey);
  deletedIds.add(entryId);
  writeStoredArchivedIds(deletedDayIdsStorageKey, deletedIds);
}

function unhideDeletedDayEntry(entryId) {
  const deletedIds = readStoredArchivedIds(deletedDayIdsStorageKey);
  deletedIds.delete(entryId);
  writeStoredArchivedIds(deletedDayIdsStorageKey, deletedIds);
}

function replaceEditedDayEntry(previousEntryId, nextEntry) {
  if (previousEntryId && previousEntryId !== nextEntry.id) {
    deleteStoredDayEntry(previousEntryId);
  }

  upsertStoredDayEntry(nextEntry);
  dayEntriesCache = dayEntriesCache
    .filter((entry) => entry.id !== previousEntryId && entry.id !== nextEntry.id)
    .concat(nextEntry)
    .sort((left, right) => right.date.localeCompare(left.date));
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

function replaceEditedPurchaseEntry(previousEntryId, nextEntry) {
  if (previousEntryId && previousEntryId !== nextEntry.id) {
    const nextEntries = readStoredPurchaseEntries().filter((entry) => entry.id !== previousEntryId);
    writeStoredPurchaseEntries(nextEntries);
  }

  upsertStoredPurchaseEntry(nextEntry);
  purchaseEntriesCache = purchaseEntriesCache
    .filter((entry) => entry.id !== previousEntryId && entry.id !== nextEntry.id)
    .concat(nextEntry)
    .sort((left, right) => right.date.localeCompare(left.date));
}

function archiveStoredDayEntries(entryIds, quickbooksInvoiceNumber = "") {
  const entryIdSet = new Set(entryIds);
  const nextEntries = readStoredDayEntries().map((entry) =>
    entryIdSet.has(entry.id)
      ? {
          ...entry,
          archivedAt: new Date().toISOString(),
          quickbooksInvoiceNumber: quickbooksInvoiceNumber || entry.quickbooksInvoiceNumber || "",
        }
      : entry
  );
  writeStoredDayEntries(nextEntries);
  const archivedIds = readStoredArchivedIds(archivedDayIdsStorageKey);
  entryIds.forEach((id) => archivedIds.add(id));
  writeStoredArchivedIds(archivedDayIdsStorageKey, archivedIds);
}

function archiveStoredPurchaseEntries(entryIds, quickbooksInvoiceNumber = "") {
  const entryIdSet = new Set(entryIds);
  const nextEntries = readStoredPurchaseEntries().map((entry) =>
    entryIdSet.has(entry.id)
      ? {
          ...entry,
          archivedAt: new Date().toISOString(),
          quickbooksInvoiceNumber: quickbooksInvoiceNumber || entry.quickbooksInvoiceNumber || "",
        }
      : entry
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
    relatedDescription: payload.relatedDescription || "",
    quickbooksInvoiceNumber: payload.quickbooksInvoiceNumber || "",
    employees: payload.employees,
    attachments: payload.attachments,
    createdAt: payload.createdAt || saveResult.createdAt || new Date().toISOString(),
    archivedAt: payload.archivedAt || null,
  };
}

function buildLocalPurchaseEntry(payload, saveResult) {
  return {
    id: saveResult.id || payload.id || `purchase-${payload.date}-${Date.now()}`,
    date: payload.date,
    location: payload.location || "",
    relatedReference: payload.relatedReference,
    receipts: payload.receipts,
    total: Number(payload.total || 0),
    analysisText: payload.analysisText || "",
    quickbooksInvoiceNumber: payload.quickbooksInvoiceNumber || "",
    createdAt: payload.createdAt || saveResult.createdAt || new Date().toISOString(),
    archivedAt: payload.archivedAt || null,
  };
}

function formatLocationDisplay(locationValue) {
  return String(locationValue || "")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .join(", ");
}

function dedupeEntryEmployees(items) {
  const nextItems = [];
  const seen = new Set();

  (items || []).forEach((item) => {
    const key = String(item.employeeId || item.employee || "")
      .trim()
      .toLowerCase();

    if (!key || seen.has(key)) {
      return;
    }

    seen.add(key);
    nextItems.push(item);
  });

  return nextItems;
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value || "").trim()
  );
}

function getEntryTotalHours(entry) {
  return dedupeEntryEmployees(entry.employees || []).reduce((sum, item) => sum + Number(item.hours || 0), 0);
}

function shouldUseLiveEmployeeRates(entry) {
  return Boolean(entry && !entry.archivedAt && !entry.quickbooksInvoiceNumber);
}

function getEntryEmployeeRate(item, entry) {
  if (shouldUseLiveEmployeeRates(entry)) {
    return Number(getEmployeeById(item.employeeId || "")?.rate ?? item.rate ?? 0);
  }

  return Number(item.rate ?? getEmployeeById(item.employeeId || "")?.rate ?? 0);
}

function getEntryEmployeeCost(item, entry) {
  const rate = getEntryEmployeeRate(item, entry);
  return Number(item.hours || 0) * rate;
}

function getEntryTotalCost(entry) {
  return dedupeEntryEmployees(entry.employees || []).reduce(
    (sum, item) => sum + getEntryEmployeeCost(item, entry),
    0
  );
}

function formatDaySummary(entry) {
  const employeeLine = dedupeEntryEmployees(entry.employees || [])
    .map((item) => `${item.employee}: ${item.hours} hours`)
    .join(", ");
  const attachmentLinks = (entry.attachments || [])
    .map((item) => (item.url ? `${item.name}: ${item.url}` : item.name))
    .join("\n");

  return [
    `Date: ${formatDisplayDate(entry.date)}`,
    `Location: ${formatLocationDisplay(entry.location) || "None"}`,
    `Employees: ${employeeLine || "None"}`,
    `Total Hours: ${getEntryTotalHours(entry).toFixed(2)}`,
    `Total Day: ${formatCurrency(getEntryTotalCost(entry))}`,
    `Ticket #: ${entry.relatedReference || "None"}`,
    `Ticket Description: ${entry.relatedDescription || "None"}`,
    `QuickBooks Invoice #: ${entry.quickbooksInvoiceNumber || "None"}`,
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
    `Location: ${formatLocationDisplay(entry.location) || "None"}`,
    `Reference: ${entry.relatedReference || "None"}`,
    `QuickBooks Invoice #: ${entry.quickbooksInvoiceNumber || "None"}`,
    `Total: ${formatCurrency(entry.total)}`,
    `Receipt images: ${attachmentCount}`,
    `Receipt links: ${receiptLinks || "None"}`,
  ].join("\n");
}

function readStoredTicketDiscovery() {
  try {
    const rawValue = localStorage.getItem(ticketDiscoveryStorageKey);
    return rawValue ? JSON.parse(rawValue) : null;
  } catch (_error) {
    return null;
  }
}

function writeStoredTicketDiscovery(data) {
  try {
    localStorage.setItem(ticketDiscoveryStorageKey, JSON.stringify(data));
  } catch (_error) {
    // Ticket sync still works without local caching.
  }
}

function getAvailableTickets() {
  return ticketDiscoveryData?.tickets || readStoredTicketDiscovery()?.tickets || [];
}

function getArchivedDayIds() {
  return readStoredArchivedIds(archivedDayIdsStorageKey);
}

function getArchivedReceiptIds() {
  return readStoredArchivedIds(archivedReceiptIdsStorageKey);
}

function getDeletedDayIds() {
  return readStoredArchivedIds(deletedDayIdsStorageKey);
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

  if (canUseSupabaseSession()) {
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

  persistEmployeeSettings(nextEmployees);
}

async function loadEmployeeProfilesFromSupabase() {
  if (!canUseSupabaseSession()) {
    return false;
  }

  const { data, error } = await supabaseClient
    .from("employee_profiles")
    .select("id, first_name, last_name, hourly_rate")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    return false;
  }

  const normalizedProfiles = (Array.isArray(data) ? data : []).map((profile, index) =>
    normalizeEmployeeProfile(
      {
        id: profile.id,
        firstName: profile.first_name,
        lastName: profile.last_name,
        rate: profile.hourly_rate,
      },
      index
    )
  );

  if (!normalizedProfiles.length) {
    return true;
  }

  saveEmployees(mergeEmployeeProfiles(defaultEmployees, normalizedProfiles));
  renderEmployees();
  renderHoursFields();
  renderSettingsEmployees();
  return true;
}

async function persistEmployeeSettings(nextEmployees) {
  saveEmployees(nextEmployees);
  renderEmployees();
  renderHoursFields();
  renderSettingsEmployees();
  loadCheckHoursEntries();

  if (!canUseSupabaseSession()) {
    setSettingsStatus("Employee settings saved on this device.", "warning");
    return;
  }

  const rows = nextEmployees.map((employee, index) => {
    const normalized = normalizeEmployeeProfile(employee, index);
    return {
      id: normalized.id,
      first_name: normalized.firstName,
      last_name: normalized.lastName,
      hourly_rate: Number(normalized.rate || 0),
    };
  });

  if (!rows.length) {
    setSettingsStatus("Employee settings saved on this device.", "warning");
    return;
  }

  const { error } = await supabaseClient.from("employee_profiles").upsert(rows, {
    onConflict: "id",
  });

  if (error) {
    console.error(error);
    setSettingsStatus(
      "Employee settings saved on this device, but Supabase could not save them online. Run the latest SQL and check your login.",
      "warning"
    );
    return;
  }

  setSettingsStatus("Employee settings saved online.", "success");
  await loadEmployeeProfilesFromSupabase();
}

function toggleNewEmployeePanel() {
  newEmployeePanel.classList.toggle("hidden");
}

function renderCheckHoursDashboard(entries) {
  if (!checkHoursDashboard) {
    return;
  }

  if (!entries.length) {
    checkHoursDashboard.innerHTML = '<div class="empty-state">No active day stats yet.</div>';
    return;
  }

  const activeLocations = new Set();
  const employeeTotals = new Map();
  const locationTotals = new Map();

  entries.forEach((entry) => {
    const locationName = formatLocationDisplay(entry.location) || "No location";
    activeLocations.add(locationName);

    if (!locationTotals.has(locationName)) {
      locationTotals.set(locationName, { totalHours: 0, employees: new Map() });
    }

    const locationStat = locationTotals.get(locationName);

    (entry.employees || []).forEach((item) => {
      const hours = Number(item.hours || 0);
      const label =
        item.employee || getEmployeeLabel(getEmployeeById(item.employeeId || "") || { firstName: "" });

      locationStat.totalHours += hours;
      locationStat.employees.set(label, (locationStat.employees.get(label) || 0) + hours);
      employeeTotals.set(label, (employeeTotals.get(label) || 0) + hours);
    });
  });

  const totalHours = entries.reduce((sum, entry) => sum + getEntryTotalHours(entry), 0);
  const totalPay = entries.reduce((sum, entry) => sum + getEntryTotalCost(entry), 0);
  const averageHours = entries.length ? totalHours / entries.length : 0;
  const topEmployeeEntry =
    [...employeeTotals.entries()].sort((left, right) => right[1] - left[1])[0] || null;

  const palette = ["#73c98b", "#4f8cff", "#f2a64b", "#d96c8c", "#7d6cff", "#40bfb4"];
  const employeeColors = new Map();
  [...employeeTotals.keys()].forEach((name, index) => {
    employeeColors.set(name, palette[index % palette.length]);
  });

  const summaryCards = [
    { label: "Active Days", value: String(entries.length) },
    { label: "Total Amount", value: formatCurrency(totalPay) },
    { label: "Total Hours", value: totalHours.toFixed(2) },
  ];

  const topEmployees = [...employeeTotals.entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, 6)
    .map(
      ([name, hours]) => `
        <div class="hours-dashboard-mini-card">
          <strong>${name}</strong>
          <span>${hours.toFixed(2)} hours</span>
        </div>
      `
    )
    .join("");

  const locationPalette = [
    "#73c98b",
    "#4f8cff",
    "#f2a64b",
    "#d96c8c",
    "#7d6cff",
    "#40bfb4",
    "#f07f4f",
    "#96b94f",
  ];
  const locationEntries = [...locationTotals.entries()].sort(
    (left, right) => right[1].totalHours - left[1].totalHours
  );
  const locationColors = new Map();
  locationEntries.forEach(([locationName], index) => {
    locationColors.set(locationName, locationPalette[index % locationPalette.length]);
  });

  const pieSegments = [];
  let pieOffset = 0;
  locationEntries.forEach(([locationName, stats]) => {
    const color = locationColors.get(locationName) || locationPalette[0];
    const slice = totalHours ? (stats.totalHours / totalHours) * 100 : 0;
    const end = pieOffset + slice;
    pieSegments.push(`${color} ${pieOffset.toFixed(2)}% ${end.toFixed(2)}%`);
    pieOffset = end;
  });

  const locationPieStyle = `background: conic-gradient(${pieSegments.join(", ")});`;
  const locationLegend = locationEntries
    .map(([locationName, stats]) => {
      const color = locationColors.get(locationName) || locationPalette[0];
      const percentage = totalHours ? (stats.totalHours / totalHours) * 100 : 0;

      return `
        <div class="hours-location-legend-item">
          <span class="hours-location-swatch" style="background:${color};"></span>
          <span>${locationName}</span>
          <strong>${stats.totalHours.toFixed(2)}h (${percentage.toFixed(1)}%)</strong>
        </div>
      `;
    })
    .join("");

  const locationCards = locationEntries
    .map(([locationName, stats]) => {
      const segments = [...stats.employees.entries()]
        .sort((left, right) => right[1] - left[1])
        .map(([employeeName, hours]) => {
          const width = stats.totalHours ? Math.max((hours / stats.totalHours) * 100, 8) : 0;
          const color = employeeColors.get(employeeName) || palette[0];

          return `
            <div
              class="hours-location-bar-segment"
              style="width:${width}%; background:${color};"
              title="${employeeName}: ${hours.toFixed(2)} hours"
            ></div>
          `;
        })
        .join("");

      const legend = [...stats.employees.entries()]
        .sort((left, right) => right[1] - left[1])
        .map(([employeeName, hours]) => {
          const color = employeeColors.get(employeeName) || palette[0];
          return `
            <div class="hours-location-legend-item">
              <span class="hours-location-swatch" style="background:${color};"></span>
              <span>${employeeName}</span>
              <strong>${hours.toFixed(2)}h</strong>
            </div>
          `;
        })
        .join("");

      return `
        <article class="hours-location-card">
          <div class="hours-location-head">
            <h3>${locationName}</h3>
            <p>${stats.totalHours.toFixed(2)} total hours</p>
          </div>
          <div class="hours-location-bar">${segments}</div>
          <div class="hours-location-legend">${legend}</div>
        </article>
      `;
    })
    .join("");

  checkHoursDashboard.innerHTML = `
    <section class="hours-summary-card">
      <div class="hours-summary-grid">
        ${summaryCards
          .map(
            (card) => `
              <div class="hours-summary-item">
                <p>${card.label}</p>
                <strong>${card.value}</strong>
              </div>
            `
          )
          .join("")}
      </div>
      <button
        type="button"
        class="back-button hours-dashboard-toggle"
        id="toggle-hours-dashboard-details"
      >
        ${hoursDashboardExpanded ? "Hide Stats" : "See More"}
      </button>
    </section>
    <div class="hours-dashboard-details ${hoursDashboardExpanded ? "" : "hidden"}">
      <div class="hours-dashboard-grid">
        <article class="hours-dashboard-card">
          <p>Locations</p>
          <strong>${activeLocations.size}</strong>
        </article>
        <article class="hours-dashboard-card">
          <p>Average Hours / Day</p>
          <strong>${averageHours.toFixed(2)}</strong>
        </article>
        <article class="hours-dashboard-card">
          <p>Top Person</p>
          <strong>${topEmployeeEntry ? `${topEmployeeEntry[0]} (${topEmployeeEntry[1].toFixed(2)}h)` : "None"}</strong>
        </article>
      </div>
      <section class="hours-dashboard-section">
      <div class="hours-dashboard-heading">
        <h3>Hours by Person</h3>
        <p>Active totals across all recorded days</p>
      </div>
      <div class="hours-dashboard-mini-grid">
        ${topEmployees || '<div class="empty-state">No people totals yet.</div>'}
      </div>
      </section>
      <section class="hours-dashboard-section">
      <div class="hours-dashboard-heading">
        <h3>Combined Location Hours</h3>
        <p>All active hours grouped by location</p>
      </div>
      <div class="hours-pie-layout">
        <div class="hours-location-pie-card">
          <div class="hours-location-pie" style="${locationPieStyle}">
            <div class="hours-location-pie-center">
              <strong>${totalHours.toFixed(2)}</strong>
              <span>Total Hours</span>
            </div>
          </div>
        </div>
        <div class="hours-location-legend">
          ${locationLegend}
        </div>
      </div>
      </section>
      <section class="hours-dashboard-section">
      <div class="hours-dashboard-heading">
        <h3>Hours by Location and Person</h3>
        <p>Each bar shows where the active hours are going</p>
      </div>
      <div class="hours-location-grid">
        ${locationCards}
      </div>
      </section>
    </div>
  `;
}

function toggleHoursDashboardDetails() {
  hoursDashboardExpanded = !hoursDashboardExpanded;
  renderCheckHoursDashboard(dayEntriesCache.filter((entry) => !entry.archivedAt));
}

function renderCheckReceiptsDashboard(entries) {
  if (!checkReceiptsDashboard) {
    return;
  }

  if (!entries.length) {
    checkReceiptsDashboard.innerHTML = '<div class="empty-state">No active receipt stats yet.</div>';
    return;
  }

  const locationTotals = new Map();
  let totalAmount = 0;

  entries.forEach((entry) => {
    const amount = Number(entry.total || 0);
    const locationName = formatLocationDisplay(entry.location) || "No location";
    totalAmount += amount;
    locationTotals.set(locationName, (locationTotals.get(locationName) || 0) + amount);
  });

  const locationEntries = [...locationTotals.entries()].sort((left, right) => right[1] - left[1]);
  const averageReceipt = entries.length ? totalAmount / entries.length : 0;
  const largestReceipt = [...entries].sort((left, right) => Number(right.total || 0) - Number(left.total || 0))[0];
  const palette = ["#73c98b", "#4f8cff", "#f2a64b", "#d96c8c", "#7d6cff", "#40bfb4", "#f07f4f", "#96b94f"];

  const pieSegments = [];
  let pieOffset = 0;
  locationEntries.forEach(([locationName, amount], index) => {
    const color = palette[index % palette.length];
    const slice = totalAmount ? (amount / totalAmount) * 100 : 0;
    const end = pieOffset + slice;
    pieSegments.push(`${color} ${pieOffset.toFixed(2)}% ${end.toFixed(2)}%`);
    pieOffset = end;
  });

  const summaryCards = [
    { label: "Active Receipts", value: String(entries.length) },
    { label: "Total Receipt Value", value: formatCurrency(totalAmount) },
    { label: "Locations", value: String(locationEntries.length) },
    { label: "Average Receipt", value: formatCurrency(averageReceipt) },
    {
      label: "Largest Receipt",
      value: largestReceipt ? formatCurrency(largestReceipt.total) : formatCurrency(0),
    },
    {
      label: "Top Location",
      value: locationEntries[0]
        ? `${locationEntries[0][0]} (${formatCurrency(locationEntries[0][1])})`
        : "None",
    },
  ];

  const legend = locationEntries
    .map(([locationName, amount], index) => {
      const color = palette[index % palette.length];
      const percentage = totalAmount ? (amount / totalAmount) * 100 : 0;
      return `
        <div class="hours-location-legend-item">
          <span class="hours-location-swatch" style="background:${color};"></span>
          <span>${locationName}</span>
          <strong>${formatCurrency(amount)} (${percentage.toFixed(1)}%)</strong>
        </div>
      `;
    })
    .join("");

  checkReceiptsDashboard.innerHTML = `
    <div class="hours-dashboard-grid">
      ${summaryCards
        .map(
          (card) => `
            <article class="hours-dashboard-card">
              <p>${card.label}</p>
              <strong>${card.value}</strong>
            </article>
          `
        )
        .join("")}
    </div>
    <section class="hours-dashboard-section">
      <div class="hours-dashboard-heading">
        <h3>Receipt Value by Location</h3>
        <p>Active receipt totals grouped by location</p>
      </div>
      <div class="hours-pie-layout">
        <div class="hours-location-pie-card">
          <div class="hours-location-pie" style="background: conic-gradient(${pieSegments.join(", ")});">
            <div class="hours-location-pie-center">
              <strong>${formatCurrency(totalAmount)}</strong>
              <span>Total Value</span>
            </div>
          </div>
        </div>
        <div class="hours-location-legend">
          ${legend}
        </div>
      </div>
    </section>
  `;
}

function renderCheckHoursEntries() {
  const visibleEntries = dayEntriesCache.filter((entry) => !entry.archivedAt);

  renderCheckHoursDashboard(visibleEntries);

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
      const employees = dedupeEntryEmployees(entry.employees || [])
        .map((item) => {
          const label =
            item.employee || getEmployeeLabel(getEmployeeById(item.employeeId || "") || { firstName: "" });
          const liveRate = getEntryEmployeeRate(item, entry);
          return `${label}: ${item.hours}h x $${liveRate.toFixed(2)} = $${getEntryEmployeeCost(item, entry).toFixed(2)}`;
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
              <p>${formatLocationDisplay(entry.location) || "No location"}</p>
              <p class="entry-pill">Total Hours: ${getEntryTotalHours(entry).toFixed(2)}</p>
              <p class="entry-pill">Total Day: $${getEntryTotalCost(entry).toFixed(2)}</p>
              ${entry.relatedReference ? `<p>Ticket #: ${entry.relatedReference}</p>` : ""}
              ${entry.relatedDescription ? `<p>Ticket Description: ${entry.relatedDescription}</p>` : ""}
              ${entry.comments ? `<p>Comment: ${entry.comments}</p>` : ""}
              <div class="entry-employees"><strong>People</strong><span>${employees}</span></div>
              <div class="entry-attachments"><strong>Attachments</strong><span>${attachments || "None"}</span></div>
            </div>
          </div>
          <div class="entry-inline-actions">
            <button class="back-button" type="button" data-edit-day-id="${entry.id}">Edit Day</button>
            <button class="back-button archive-button" type="button" data-delete-day-id="${entry.id}">Delete Day</button>
          </div>
        </div>
      `;
    })
    .join("");

  updateSelectAllDaysButton();
}

function renderCheckReceiptsEntries() {
  const visibleEntries = purchaseEntriesCache.filter((entry) => !entry.archivedAt);

  renderCheckReceiptsDashboard(visibleEntries);

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
              <p>${entry.location || "No location"}</p>
              <p class="entry-pill">Total Receipt: ${formatCurrency(entry.total)}</p>
              ${entry.relatedReference ? `<p>Reference: ${entry.relatedReference}</p>` : ""}
              ${entry.quickbooksInvoiceNumber ? `<p>QuickBooks Invoice #: ${entry.quickbooksInvoiceNumber}</p>` : ""}
              <div class="entry-attachments"><strong>Receipts</strong><span>${receipts || "None"}</span></div>
            </div>
          </div>
          <div class="entry-inline-actions">
            <button class="back-button" type="button" data-edit-receipt-id="${entry.id}">Edit Receipt</button>
          </div>
        </label>
      `;
    })
    .join("");
}

function renderTicketsPlaceholder() {
  if (!ticketsList || ticketsList.dataset.loaded === "true") {
    return;
  }

  ticketsList.className = "entry-list empty-state";
  ticketsList.textContent = "Use the big buttons or search box to organize tickets after syncing.";
}

function setTicketViewMode(nextMode) {
  ticketViewMode = nextMode === "location" ? "location" : "time";
  ticketsByTimeButton.classList.toggle("primary", ticketViewMode === "time");
  ticketsByLocationButton.classList.toggle("primary", ticketViewMode === "location");

  if (ticketDiscoveryData) {
    renderTicketsDiscovery(ticketDiscoveryData);
  }
}

function getTicketSearchTerms() {
  return ticketSearchInput.value
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

function ticketMatchesSearch(ticket, terms) {
  if (!terms.length) {
    return true;
  }

  const haystack = [
    ticket.number,
    ticket.title,
    ticket.location,
    ticket.status,
    ticket.priority,
    ticket.createdAt,
    ticket.dueAt,
  ]
    .join(" ")
    .toLowerCase();

  return terms.every((term) => haystack.includes(term));
}

function getTicketDescription(ticket) {
  return (
    ticket.title ||
    ticket.raw?.description ||
    ticket.raw?.summary ||
    ticket.raw?.name ||
    "No description"
  );
}

function setDayTicketStatus(message, tone = "warning") {
  if (!dayTicketPickerStatus) {
    return;
  }

  dayTicketPickerStatus.textContent = message || "";
  dayTicketPickerStatus.className = `helper-text ${tone}`;
  dayTicketPickerStatus.classList.toggle("hidden", !message);
}

function getDayReferenceMode() {
  return dayRelatedInputs.find((input) => input.checked)?.value || "no";
}

function getDayTicketSearchTerms() {
  return String(dayTicketSearchInput?.value || "")
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

function renderSelectedDayTicket() {
  if (!dayTicketSelected) {
    return;
  }

  if (!selectedDayTicket) {
    dayTicketSelected.classList.add("hidden");
    dayTicketSelected.innerHTML = "";
    return;
  }

  dayTicketSelected.classList.remove("hidden");
  dayTicketSelected.innerHTML = `
    <strong>Selected Ticket # ${selectedDayTicket.number || selectedDayTicket.id || "Unknown"}</strong>
    <span>${getTicketDescription(selectedDayTicket)}</span>
  `;
}

function renderDayTicketPicker() {
  if (!dayTicketList) {
    return;
  }

  const tickets = getAvailableTickets();

  if (!tickets.length) {
    dayTicketList.className = "entry-list ticket-picker-list empty-state";
    dayTicketList.textContent = "No tickets loaded yet. Press Load Tickets.";
    renderSelectedDayTicket();
    return;
  }

  const terms = getDayTicketSearchTerms();
  const visibleTickets = tickets
    .filter((ticket) => ticketMatchesSearch(ticket, terms))
    .slice(0, 30);

  if (!visibleTickets.length) {
    dayTicketList.className = "entry-list ticket-picker-list empty-state";
    dayTicketList.textContent = "No tickets match that search.";
    renderSelectedDayTicket();
    return;
  }

  dayTicketList.className = "entry-list ticket-picker-list";
  dayTicketList.innerHTML = visibleTickets
    .map(
      (ticket) => `
        <article class="entry-card ticket-picker-card">
          <div class="entry-meta">
            <h3>Ticket # ${ticket.number || ticket.id || "Unknown"}</h3>
            <p class="ticket-description">${getTicketDescription(ticket)}</p>
            ${ticket.location ? `<p class="entry-pill">Location: ${ticket.location}</p>` : ""}
            ${ticket.status ? `<p class="entry-pill">Status: ${ticket.status}</p>` : ""}
            ${ticket.createdAt ? `<p>Created: ${formatDisplayDate(ticket.createdAt.slice(0, 10))}</p>` : ""}
          </div>
          <div class="entry-inline-actions">
            <button
              class="submit-button"
              type="button"
              data-day-ticket-select="${ticket.id || ticket.number || ""}"
            >
              Select This Ticket
            </button>
          </div>
        </article>
      `
    )
    .join("");
  renderSelectedDayTicket();
}

function selectDayTicket(ticketId) {
  const ticket = getAvailableTickets().find(
    (item) => String(item.id) === String(ticketId) || String(item.number) === String(ticketId)
  );

  if (!ticket) {
    setDayTicketStatus("That ticket could not be selected. Try loading tickets again.", "error");
    return;
  }

  selectedDayTicket = ticket;
  dayReferenceText.value = ticket.number || ticket.id || "";
  setDayTicketStatus(`Ticket # ${dayReferenceText.value} selected.`, "success");
  renderSelectedDayTicket();
}

function findTicketById(ticketId) {
  return getAvailableTickets().find(
    (item) => String(item.id) === String(ticketId) || String(item.number) === String(ticketId)
  );
}

function openTicketActions(ticketId) {
  const ticket = findTicketById(ticketId);

  if (!ticket || !ticketActionsModal) {
    return;
  }

  ticketActionsTitle.textContent = `Ticket # ${ticket.number || ticket.id || "Unknown"}`;
  ticketActionsDescription.textContent = getTicketDescription(ticket);
  ticketActionsModal.classList.remove("hidden");
  closeTicketActionsButton.focus();
}

function closeTicketActions() {
  ticketActionsModal.classList.add("hidden");
}

async function loadTicketsForDayPicker() {
  if (getAvailableTickets().length) {
    renderDayTicketPicker();
    setDayTicketStatus("Tickets are ready. Search or select one below.", "success");
    return;
  }

  loadDayTicketsButton.disabled = true;
  setDayTicketStatus("Loading Expansive tickets...", "warning");

  try {
    const result = await fetch("/api/sync-tickets", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await result.json();

    if (!result.ok || !data.ok || !(data.tickets || []).length) {
      setDayTicketStatus(data.message || "No tickets could be loaded.", "error");
      renderDayTicketPicker();
      return;
    }

    ticketDiscoveryData = data;
    writeStoredTicketDiscovery(data);
    renderDayTicketPicker();
    setDayTicketStatus(`${data.tickets.length} tickets loaded.`, "success");
  } catch (error) {
    console.error(error);
    setDayTicketStatus("Could not reach the ticket sync service.", "error");
  } finally {
    loadDayTicketsButton.disabled = false;
  }
}

function renderTicketCard(ticket) {
  return `
    <article class="entry-card ticket-card">
      <div class="entry-meta">
        <h3>${ticket.number || ticket.id || "Ticket"}</h3>
        <p class="ticket-description">${ticket.title || "No title"}</p>
        ${ticket.location ? `<p class="entry-pill">Location: ${ticket.location}</p>` : ""}
        ${ticket.status ? `<p class="entry-pill">Status: ${ticket.status}</p>` : ""}
        ${ticket.priority ? `<p class="entry-pill">Priority: ${ticket.priority}</p>` : ""}
        ${ticket.createdAt ? `<p>Created: ${formatDisplayDate(ticket.createdAt.slice(0, 10))}</p>` : ""}
        ${ticket.dueAt ? `<p>Due: ${formatDisplayDate(ticket.dueAt.slice(0, 10))}</p>` : ""}
      </div>
      <div class="entry-inline-actions">
        <button
          class="ticket-actions-button"
          type="button"
          data-ticket-actions="${ticket.id || ticket.number || ""}"
        >
          Actions
        </button>
      </div>
    </article>
  `;
}

function renderTicketGroups(tickets) {
  if (!tickets.length) {
    return '<div class="entry-list empty-state">No tickets match that search.</div>';
  }

  if (ticketViewMode === "location") {
    const groups = new Map();

    tickets.forEach((ticket) => {
      const groupName = ticket.location || "No location";
      groups.set(groupName, [...(groups.get(groupName) || []), ticket]);
    });

    return [...groups.entries()]
      .sort(([left], [right]) => left.localeCompare(right))
      .map(
        ([locationName, groupTickets]) => `
          <section class="ticket-group">
            <h3>${locationName}</h3>
            <div class="entry-list">
              ${groupTickets.map(renderTicketCard).join("")}
            </div>
          </section>
        `
      )
      .join("");
  }

  return tickets
    .sort((left, right) => String(right.createdAt || "").localeCompare(String(left.createdAt || "")))
    .map(renderTicketCard)
    .join("");
}

function renderTicketsDiscovery(data) {
  ticketDiscoveryData = data;
  const searchTerms = getTicketSearchTerms();
  const tickets = (data.tickets || []).filter((ticket) => ticketMatchesSearch(ticket, searchTerms));

  if ((data.tickets || []).length) {
    const viewLabel = ticketViewMode === "location" ? "Tickets by Location" : "Tickets by Time";
    ticketsList.dataset.loaded = "true";
    ticketsList.className = "entry-list";
    ticketsList.innerHTML = `
      <article class="entry-card">
        <div class="entry-meta">
          <h3>${viewLabel}</h3>
          <p>${tickets.length} of ${data.tickets.length} tickets shown.</p>
        </div>
      </article>
      ${renderTicketGroups(tickets)}
    `;
    return;
  }

  const scriptItems = (data.scripts || [])
    .filter((url) => {
      if (!searchTerms.length) {
        return true;
      }

      return searchTerms.every((term) => url.toLowerCase().includes(term));
    })
    .map((url) => `<li><a href="${url}" target="_blank" rel="noreferrer">${url}</a></li>`)
    .join("");
  const linkItems = (data.usefulLinks || [])
    .filter((item) => {
      if (!searchTerms.length) {
        return true;
      }

      const haystack = `${item.label || ""} ${item.url || ""}`.toLowerCase();
      return searchTerms.every((term) => haystack.includes(term));
    })
    .map(
      (item) =>
        `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label || item.url}</a></li>`
    )
    .join("");
  const viewLabel = ticketViewMode === "location" ? "Organized by Location" : "Organized by Time";
  const viewDescription =
    ticketViewMode === "location"
      ? "Once ticket data is available, this view will group tickets under large location headings."
      : "Once ticket data is available, this view will sort newest and urgent tickets first.";

  ticketsList.dataset.loaded = "true";
  ticketsList.className = "entry-list";
  ticketsList.innerHTML = `
    <article class="entry-card">
      <div class="entry-meta">
        <h3>${viewLabel}</h3>
        <p>${viewDescription}</p>
      </div>
    </article>
    <article class="entry-card">
      <div class="entry-meta">
        <h3>Expansive FM Connected</h3>
        <p>${data.message || "Connection checked."}</p>
        <p class="entry-pill">Status: ${data.status || "Unknown"}</p>
        <p class="entry-pill">Checked: ${formatDisplayDate(data.checkedAt?.slice(0, 10) || "")}</p>
      </div>
    </article>
    <article class="entry-card">
      <div class="entry-meta">
        <h3>Next Discovery Targets</h3>
        <p>These app files are where the ticket login/API calls are likely defined.</p>
        <ul class="ticket-link-list">${scriptItems || "<li>No app scripts found.</li>"}</ul>
      </div>
    </article>
    <article class="entry-card">
      <div class="entry-meta">
        <h3>Ticket-Like Links Found</h3>
        <ul class="ticket-link-list">${linkItems || "<li>No ticket links found on the first page.</li>"}</ul>
      </div>
    </article>
  `;
}

async function syncTickets() {
  syncTicketsButton.disabled = true;
  setTicketsStatus("Checking Expansive FM connection...", "warning");

  try {
    const result = await fetch("/api/sync-tickets", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await result.json();

    if (!result.ok || !data.ok) {
      setTicketsStatus(data.message || "Ticket sync failed.", "error");
      ticketsList.className = "entry-list empty-state";
      ticketsList.textContent = data.detail || "No ticket data loaded.";
      return;
    }

    renderTicketsDiscovery(data);
    writeStoredTicketDiscovery(data);
    setTicketsStatus(data.message || "Expansive FM tickets checked.", "success");
  } catch (error) {
    console.error(error);
    setTicketsStatus("Could not reach the ticket sync service.", "error");
  } finally {
    syncTicketsButton.disabled = false;
  }
}

function buildArchivedSearchText(item) {
  if (item.kind === "day") {
    const employees = dedupeEntryEmployees(item.employees || [])
      .map((employee) => `${employee.employee || ""} ${employee.firstName || ""} ${employee.lastName || ""}`)
      .join(" ");
    const attachments = (item.attachments || []).map((attachment) => attachment.name || "").join(" ");

    return [
      item.date,
      item.location,
      item.relatedReference,
      item.relatedDescription,
      item.quickbooksInvoiceNumber,
      item.comments,
      employees,
      attachments,
      "day",
    ]
      .join(" ")
      .toLowerCase();
  }

  const receipts = (item.receipts || []).map((receipt) => receipt.name || "").join(" ");
  return [
    item.date,
    item.location,
    item.relatedReference,
    item.quickbooksInvoiceNumber,
    item.analysisText,
    receipts,
    "receipt",
  ]
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
    if (item.kind !== archivedItemsFilter) {
      return false;
    }

    if (!terms.length) {
      return true;
    }

    const haystack = buildArchivedSearchText(item);
    return terms.every((term) => haystack.includes(term));
  });

  if (!visibleItems.length) {
    archivedItemsList.className = "entry-list empty-state";
    archivedItemsList.textContent =
      archivedItemsFilter === "receipt"
        ? "No invoiced receipts match that search."
        : "No invoiced days match that search.";
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
                <p class="entry-pill">Invoiced Day</p>
                <p>${item.location || ""}</p>
                ${item.relatedReference ? `<p>Ticket #: ${item.relatedReference}</p>` : ""}
                ${item.relatedDescription ? `<p>Ticket Description: ${item.relatedDescription}</p>` : ""}
                ${
                  item.quickbooksInvoiceNumber
                    ? `<p>QuickBooks Invoice #: ${item.quickbooksInvoiceNumber}</p>`
                    : ""
                }
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
              <p class="entry-pill">Invoiced Receipt</p>
              ${item.relatedReference ? `<p>Ticket / Invoice: ${item.relatedReference}</p>` : ""}
              ${
                item.quickbooksInvoiceNumber
                  ? `<p>QuickBooks Invoice #: ${item.quickbooksInvoiceNumber}</p>`
                  : ""
              }
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

  if (canUseSupabaseSession()) {
    const archivedDayQueryVariants = [
      "id, work_date, location, comments, related_reference, related_description, quickbooks_invoice_number, attachments, archived_at, created_at, day_entry_employees(employee_id, employee_name, first_name, last_name, hours, hourly_rate, total_pay)",
      "id, work_date, location, comments, related_reference, quickbooks_invoice_number, attachments, archived_at, created_at, day_entry_employees(employee_id, employee_name, first_name, last_name, hours, hourly_rate, total_pay)",
    ];
    let dayResult = { data: null, error: null };

    for (const selectClause of archivedDayQueryVariants) {
      dayResult = await supabaseClient
        .from("day_entries")
        .select(selectClause)
        .not("archived_at", "is", null)
        .order("work_date", { ascending: false });

      if (!dayResult.error) {
        break;
      }
    }

    if (!dayResult.error && Array.isArray(dayResult.data)) {
      const remoteDays = dayResult.data.map((entry) => ({
        kind: "day",
        id: entry.id,
        date: entry.work_date,
        location: entry.location,
        comments: entry.comments || "",
        relatedReference: entry.related_reference || "",
        relatedDescription: entry.related_description || "",
        quickbooksInvoiceNumber: entry.quickbooks_invoice_number || "",
        attachments: Array.isArray(entry.attachments) ? entry.attachments : [],
        employees: dedupeEntryEmployees(
          (entry.day_entry_employees || []).map((item) => ({
            employeeId: item.employee_id || slugifyEmployeeName(item.employee_name || ""),
            employee: item.employee_name,
            firstName: item.first_name || item.employee_name || "",
            lastName: item.last_name || "",
            hours: Number(item.hours),
            rate: Number(item.hourly_rate || getEmployeeById(item.employee_id || "")?.rate || 0),
          }))
        ),
        archivedAt: entry.archived_at || null,
        createdAt: entry.created_at,
      }));
      nextItems = [...nextItems.filter((item) => !(item.kind === "day" && isUuid(item.id))), ...remoteDays];
    }

    const receiptQueryVariants = [
      "id, purchase_date, location, related_reference, quickbooks_invoice_number, receipt_total, receipt_files, receipt_text, archived_at, created_at",
      "id, purchase_date, location, related_reference, receipt_total, receipt_files, receipt_text, archived_at, created_at",
    ];
    let receiptData = null;

    for (const selectClause of receiptQueryVariants) {
      const receiptResult = await supabaseClient
        .from("purchase_entries")
        .select(selectClause)
        .not("archived_at", "is", null)
        .order("purchase_date", { ascending: false });

      if (!receiptResult.error) {
        receiptData = receiptResult.data;
        break;
      }
    }

    if (Array.isArray(receiptData)) {
      const remoteReceipts = receiptData.map((entry) => ({
        kind: "receipt",
        id: entry.id,
        date: entry.purchase_date,
        location: entry.location || "",
        relatedReference: entry.related_reference || "",
        quickbooksInvoiceNumber: entry.quickbooks_invoice_number || "",
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

  if (canUseSupabaseSession() && onlineDayIds.length) {
    const { error } = await supabaseClient
      .from("day_entries")
      .update({ archived_at: null })
      .in("id", onlineDayIds);

    if (error) {
      setArchivedItemsStatus("Could not retrieve the selected invoiced days online.", "error");
      return;
    }
  }

  if (canUseSupabaseSession() && onlineReceiptIds.length) {
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
  setArchivedItemsStatus("Selected invoiced or archived items were retrieved.", "success");
}

async function loadCheckHoursEntries() {
  const localEntries = readStoredDayEntries().filter((entry) => !entry.archivedAt);
  const archivedDayIds = getArchivedDayIds();
  const deletedDayIds = getDeletedDayIds();
  const localEntryMap = new Map(localEntries.map((entry) => [entry.id, entry]));
  let nextEntries = [...localEntries].filter((entry) => !deletedDayIds.has(entry.id));

  if (canUseSupabaseSession()) {
    const queryVariants = [
      "id, work_date, location, comments, related_reference, related_description, quickbooks_invoice_number, attachments, archived_at, created_at, day_entry_employees(employee_id, employee_name, first_name, last_name, hours, hourly_rate, total_pay)",
      "id, work_date, location, comments, related_reference, quickbooks_invoice_number, attachments, archived_at, created_at, day_entry_employees(employee_id, employee_name, first_name, last_name, hours, hourly_rate, total_pay)",
      "id, work_date, location, comments, related_reference, quickbooks_invoice_number, attachments, archived_at, created_at, day_entry_employees(employee_name, hours)",
      "id, work_date, location, comments, related_reference, quickbooks_invoice_number, attachments, created_at, day_entry_employees(employee_name, hours)",
      "id, work_date, location, comments, related_reference, quickbooks_invoice_number, created_at, day_entry_employees(employee_name, hours)",
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
            relatedDescription: entry.related_description || localEntry?.relatedDescription || "",
            quickbooksInvoiceNumber:
              entry.quickbooks_invoice_number || localEntry?.quickbooksInvoiceNumber || "",
            attachments:
              (Array.isArray(entry.attachments) && entry.attachments.length
                ? entry.attachments
                : localEntry?.attachments) || [],
            employees:
              (entry.day_entry_employees || []).length
                ? dedupeEntryEmployees(
                    (entry.day_entry_employees || []).map((item) => ({
                      employeeId: item.employee_id || slugifyEmployeeName(item.employee_name || ""),
                      employee: item.employee_name,
                      firstName: item.first_name || item.employee_name || "",
                      lastName: item.last_name || "",
                      hours: Number(item.hours),
                      rate: Number(item.hourly_rate || getEmployeeById(item.employee_id || "")?.rate || 0),
                    }))
                  )
                : dedupeEntryEmployees(localEntry?.employees || []),
            archivedAt: entry.archived_at || localEntry?.archivedAt || null,
            createdAt: entry.created_at || localEntry?.createdAt || null,
          };
        })
        .filter(
          (entry) => !entry.archivedAt && !archivedDayIds.has(entry.id) && !deletedDayIds.has(entry.id)
        );
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
      "id, purchase_date, location, related_reference, quickbooks_invoice_number, receipt_total, receipt_files, receipt_text, archived_at, created_at",
      "id, purchase_date, location, related_reference, quickbooks_invoice_number, receipt_total, receipt_files, created_at",
      "id, purchase_date, location, related_reference, receipt_total, receipt_files, receipt_text, archived_at, created_at",
      "id, purchase_date, location, related_reference, receipt_total, receipt_files, created_at",
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
        .map((entry) => {
          const localEntry = localEntries.find((item) => item.id === entry.id);
          return {
            id: entry.id,
            date: entry.purchase_date,
            location: entry.location || localEntry?.location || "",
            relatedReference: entry.related_reference || localEntry?.relatedReference || "",
            quickbooksInvoiceNumber:
              entry.quickbooks_invoice_number || localEntry?.quickbooksInvoiceNumber || "",
            receipts:
              (Array.isArray(entry.receipt_files) && entry.receipt_files.length
                ? entry.receipt_files
                : localEntry?.receipts) || [],
            total: Number(entry.receipt_total || localEntry?.total || 0),
            analysisText: entry.receipt_text || localEntry?.analysisText || "",
            archivedAt: entry.archived_at || localEntry?.archivedAt || null,
            createdAt: entry.created_at || localEntry?.createdAt,
          };
        })
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
        `Location: ${formatLocationDisplay(entry.location) || "None"}`,
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
    setCheckReceiptsStatus("Please select at least one recorded receipt to invoice.", "error");
    return;
  }

  const invoiceNumber = window.prompt("Invoice #");

  if (invoiceNumber === null) {
    return;
  }

  const trimmedInvoiceNumber = invoiceNumber.trim();

  if (!trimmedInvoiceNumber) {
    setCheckReceiptsStatus("Please enter an Invoice # before recording invoiced receipts.", "error");
    return;
  }

  const selectedIds = selectedEntries.map((entry) => entry.id);
  const onlineIds = selectedIds.filter(isUuid);
  const archivedAt = new Date().toISOString();

  if (canUseSupabaseSession() && onlineIds.length) {
    const { error } = await supabaseClient
      .from("purchase_entries")
      .update({ archived_at: archivedAt, quickbooks_invoice_number: trimmedInvoiceNumber })
      .in("id", onlineIds);

    if (error) {
      const message = `${error.message || ""} ${error.details || ""}`.toLowerCase();
      setCheckReceiptsStatus(
        message.includes("quickbooks_invoice_number")
          ? "Supabase is missing the QuickBooks invoice field for receipts. Run the latest supabase/schema.sql, then try again."
          : "Could not record the selected receipts as invoiced online. They were kept active.",
        "error"
      );
      return;
    }
  }

  archiveStoredPurchaseEntries(selectedIds, trimmedInvoiceNumber);
  purchaseEntriesCache = purchaseEntriesCache.map((entry) =>
    selectedIds.includes(entry.id)
      ? { ...entry, archivedAt, quickbooksInvoiceNumber: trimmedInvoiceNumber }
      : entry
  );
  renderCheckReceiptsEntries();
  setCheckReceiptsStatus(
    `Selected receipts were recorded as invoiced under QuickBooks Invoice # ${trimmedInvoiceNumber}.`,
    "success"
  );
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

  const sortedDates = entries
    .map((entry) => String(entry.date || "").trim())
    .filter(Boolean)
    .sort((left, right) => left.localeCompare(right));
  const earliestDate = sortedDates[0] || "";
  const latestDate = sortedDates[sortedDates.length - 1] || "";

  const dayBlocks = entries
    .map((entry) => {
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
        escapeHtml(`Location: ${formatLocationDisplay(entry.location) || "None"}`),
        escapeHtml(`Ticket #: ${entry.relatedReference || "None"}`),
        entry.relatedDescription ? escapeHtml(`Ticket Description: ${entry.relatedDescription}`) : "",
        escapeHtml(`Total Hours: ${getEntryTotalHours(entry).toFixed(2)}`),
        escapeHtml(`Total Day: $${getEntryTotalCost(entry).toFixed(2)}`),
        entry.comments ? escapeHtml(`Comment: ${entry.comments}`) : "",
        attachments ? "Attachments:" : "",
        attachments || "",
      ].join("<br>");
    })
    .join("<br><br>");

  const overallHours = entries.reduce((sum, entry) => sum + getEntryTotalHours(entry), 0);
  const overallTotal = entries.reduce((sum, entry) => sum + getEntryTotalCost(entry), 0);

  return [
    escapeHtml(
      `Work period ${formatShortDate(earliestDate)} --- ${formatShortDate(latestDate)}`
    ),
    "",
    dayBlocks,
    escapeHtml("------------------------- Overall Total -------------------------"),
    escapeHtml(`Days Selected: ${entries.length}`),
    escapeHtml(`Overall Hours: ${overallHours.toFixed(2)}`),
    escapeHtml(`Overall Day Total: $${overallTotal.toFixed(2)}`),
  ].join("<br><br>");
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

async function copySelectedDaysReport() {
  const reportText = selectedDaysOutput.innerText.trim();

  if (!reportText) {
    return;
  }

  let copied = false;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(reportText);
      copied = true;
    }
  } catch (_error) {}

  if (!copied) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = reportText;
    tempTextArea.setAttribute("readonly", "");
    tempTextArea.style.position = "fixed";
    tempTextArea.style.left = "-9999px";
    tempTextArea.style.top = "0";
    document.body.appendChild(tempTextArea);
    tempTextArea.focus();
    tempTextArea.select();
    copied = document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  }

  const originalLabel = copySelectedDaysButton.textContent;
  copySelectedDaysButton.textContent = copied ? "Copied" : "Copy Failed";

  window.setTimeout(() => {
    copySelectedDaysButton.textContent = originalLabel;
  }, 1200);
}

async function archiveSelectedDays() {
  const selectedEntries = getSelectedCheckHoursEntries();

  if (!selectedEntries.length) {
    setCheckHoursStatus("Please select at least one recorded day to invoice.", "error");
    return;
  }

  const invoiceNumber = window.prompt("Invoice #");

  if (invoiceNumber === null) {
    return;
  }

  const trimmedInvoiceNumber = invoiceNumber.trim();

  if (!trimmedInvoiceNumber) {
    setCheckHoursStatus("Please enter an Invoice # before recording invoiced days.", "error");
    return;
  }

  const selectedIds = selectedEntries.map((entry) => entry.id);
  const onlineIds = selectedIds.filter(isUuid);
  const archivedAt = new Date().toISOString();

  if (canUseSupabaseSession() && onlineIds.length) {
    const { error } = await supabaseClient
      .from("day_entries")
      .update({ archived_at: archivedAt, quickbooks_invoice_number: trimmedInvoiceNumber })
      .in("id", onlineIds);

    if (error) {
      const message = `${error.message || ""} ${error.details || ""}`.toLowerCase();
      setCheckHoursStatus(
        message.includes("quickbooks_invoice_number")
          ? "Supabase is missing the QuickBooks invoice field. Run the latest supabase/schema.sql, then try again."
          : "Could not record the selected days as invoiced online. They were kept active.",
        "error"
      );
      return;
    }
  }

  archiveStoredDayEntries(selectedIds, trimmedInvoiceNumber);
  dayEntriesCache = dayEntriesCache.map((entry) =>
    selectedIds.includes(entry.id)
      ? { ...entry, archivedAt, quickbooksInvoiceNumber: trimmedInvoiceNumber }
      : entry
  );
  renderCheckHoursEntries();
  setCheckHoursStatus(
    `Selected day entries were recorded as invoiced under QuickBooks Invoice # ${trimmedInvoiceNumber}.`,
    "success"
  );
}

async function deleteDayEntry(entryId) {
  const entry = dayEntriesCache.find((item) => item.id === entryId) || readStoredDayEntries().find((item) => item.id === entryId);

  if (!entry) {
    setCheckHoursStatus("That day could not be found to delete.", "error");
    return;
  }

  const confirmed = window.confirm(
    `Delete ${formatDisplayDate(entry.date)}? This will permanently remove the day entry.`
  );

  if (!confirmed) {
    return;
  }

  if (canUseSupabaseSession() && isUuid(entryId)) {
    const { error } = await supabaseClient.from("day_entries").delete().eq("id", entryId);

    if (error) {
      hideDeletedDayEntry(entryId);
      deleteStoredDayEntry(entryId);
      removeRecordedDayDate(entry.date);
      dayEntriesCache = dayEntriesCache.filter((item) => item.id !== entryId);
      renderCheckHoursEntries();
      setCheckHoursStatus(
        "Supabase blocked the online delete, but the day is hidden on this device. Run the latest SQL to make deletes permanent online.",
        "warning"
      );
      return;
    }
  }

  unhideDeletedDayEntry(entryId);
  deleteStoredDayEntry(entryId);
  removeRecordedDayDate(entry.date);
  dayEntriesCache = dayEntriesCache.filter((item) => item.id !== entryId);

  if (editingDayEntryId === entryId) {
    resetRecordDayForm();
  }

  renderCheckHoursEntries();
  setCheckHoursStatus("Day entry deleted.", "success");
}

function setSignedInEmail(email) {
  sessionEmailTargets.forEach((target) => {
    if (target) {
      target.textContent = email || "Unknown user";
    }
  });
}

function isAllowedEmail(email) {
  const normalizedEmail = (email || "").toLowerCase().trim();
  const usernameEmails = Object.values(staticUsers).map((user) => user.email.toLowerCase().trim());
  return allowedEmails.includes(normalizedEmail) || usernameEmails.includes(normalizedEmail);
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
    Object.values(screens).forEach((element) => element.classList.add("hidden"));
    await loadRecordedDayDates();
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
  await loadEmployeeProfilesFromSupabase();

  supabaseClient.auth.onAuthStateChange((_event, nextSession) => {
    applyAuthState(nextSession);
    loadRecordedDayDates();
    checkPurchaseSupabaseReady();
    loadEmployeeProfilesFromSupabase();
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

async function signInWithStaticCredentials() {
  const username = authUsernameInput.value.trim().toLowerCase();
  const password = authPasswordInput.value;
  const matchedUser = staticUsers[username];

  if (!matchedUser) {
    setAuthStatus("That username is not recognized.", "error");
    return;
  }

  updateAuthDebugEmail();

  if (!supabaseClient) {
    setAuthStatus("Supabase is not configured yet.", "error");
    return;
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: matchedUser.email,
    password,
  });

  if (error || !data.session) {
    const detail = error?.message ? ` Supabase says: ${error.message}` : "";
    setAuthStatus(`Login failed for ${matchedUser.email}.${detail}`, "error");
    return;
  }

  authForm.reset();
  updateMagicLinkButton();
  applyAuthState(data.session);
  await loadRecordedDayDates();
  await checkPurchaseSupabaseReady();
  await loadEmployeeProfilesFromSupabase();
  setAuthStatus("Signed in with username and password.", "success");
}

function updateMagicLinkButton() {
  magicLinkButton.disabled = authPinInput.value.trim() !== authPinCode;
}

function updateAuthDebugEmail() {
  const username = authUsernameInput.value.trim().toLowerCase();
  const matchedUser = staticUsers[username];
  authDebugEmail.textContent = matchedUser
    ? `Trying email: ${matchedUser.email}`
    : "";
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
  locationList.innerHTML = "";
  if (purchaseLocationSelect) {
    purchaseLocationSelect.innerHTML = "";
  }

  if (!locations.length) {
    locationList.className = "checkbox-list checkbox-list-large empty-state";
    locationList.textContent = "No locations added yet.";
    if (purchaseLocationSelect) {
      const placeholderOption = document.createElement("option");
      placeholderOption.value = "";
      placeholderOption.textContent = "No locations added yet";
      purchaseLocationSelect.appendChild(placeholderOption);
      purchaseLocationSelect.disabled = true;
    }
    locationEmptyState.classList.remove("hidden");
    return;
  }

  locationList.className = "checkbox-list checkbox-list-large";
  if (purchaseLocationSelect) {
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = "Choose a location";
    purchaseLocationSelect.appendChild(placeholderOption);
    purchaseLocationSelect.disabled = false;
  }
  locationEmptyState.classList.add("hidden");

  locations.forEach((location) => {
    const label = document.createElement("label");
    label.className = "checkbox-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "day-location";
    checkbox.value = location;

    const text = document.createElement("span");
    text.textContent = location;

    label.append(checkbox, text);
    locationList.appendChild(label);

    if (purchaseLocationSelect) {
      const purchaseOption = document.createElement("option");
      purchaseOption.value = location;
      purchaseOption.textContent = location;
      purchaseLocationSelect.appendChild(purchaseOption);
    }
  });
}

function getSelectedDayLocations() {
  return [...locationList.querySelectorAll('input[name="day-location"]:checked')].map(
    (checkbox) => checkbox.value
  );
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
  const referenceMode = getDayReferenceMode();
  const isManual = referenceMode === "manual";
  const isExpansive = referenceMode === "expansive";
  const isRelated = isManual || isExpansive;

  dayReferenceField.classList.toggle("hidden", !isRelated);
  dayTicketPicker.classList.toggle("hidden", !isExpansive);
  dayReferenceText.readOnly = isExpansive;
  dayReferenceText.required = isRelated;

  if (!isRelated) {
    dayReferenceText.value = "";
    selectedDayTicket = null;
    renderSelectedDayTicket();
    setDayTicketStatus("");
  }

  if (isManual) {
    selectedDayTicket = null;
    dayReferenceText.readOnly = false;
    renderSelectedDayTicket();
    setDayTicketStatus("");
  }

  if (isExpansive) {
    renderDayTicketPicker();
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

  if (recordDayStepIndex === 4 && commentsText.value !== dayCommentDraft) {
    commentsText.value = dayCommentDraft;
    updateCommentsPreview();
  }

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
    const referenceMode = getDayReferenceMode();
    const isRelated = referenceMode !== "no";

    if (isRelated && !dayReferenceText.value.trim()) {
      setSaveStatus("Please select or enter the ticket number before continuing.", "error");
      return false;
    }

    if (referenceMode === "expansive" && !selectedDayTicket) {
      setSaveStatus("Please choose an Expansive ticket before continuing.", "error");
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

  if (recordDayStepIndex === 4 && !dayCommentDraft.trim()) {
    const confirmed = window.confirm("No Comment?");

    if (!confirmed) {
      setSaveStatus("Add a comment if you want it included before continuing.", "warning");
      return false;
    }
  }

  if (recordDayStepIndex === 5 && !getSelectedDayLocations().length) {
    setSaveStatus("Please choose at least one location before continuing.", "error");
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

  if (recordPurchaseStepIndex === 2 && !purchaseLocationSelect.value) {
    setPurchaseSaveStatus("Please choose the location before continuing.", "error");
    return false;
  }

  if (
    recordPurchaseStepIndex === 3 &&
    !purchaseReceiptInput.files.length &&
    !(editingPurchaseExistingReceipts || []).length
  ) {
    setPurchaseSaveStatus("Please add at least one receipt image before continuing.", "error");
    return false;
  }

  if (recordPurchaseStepIndex === 4 && !receiptTotalInput.value) {
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
  const existingReceipts = editingPurchaseExistingReceipts || [];

  if (!receipts.length && !existingReceipts.length) {
    purchaseReceiptList.className = "attachment-list empty-state";
    purchaseReceiptList.textContent = "No receipt images selected yet.";
    return;
  }

  purchaseReceiptList.className = "attachment-list";
  purchaseReceiptList.innerHTML = "";

  existingReceipts.forEach((receipt) => {
    const item = document.createElement("div");
    item.className = "attachment-item";
    item.textContent = receipt.url ? `${receipt.name || "Receipt"} (already uploaded)` : receipt.name || "Receipt";
    purchaseReceiptList.appendChild(item);
  });

  receipts.forEach((file) => {
    const item = document.createElement("div");
    item.className = "attachment-item";
    item.textContent = `${file.name} (${Math.max(1, Math.round(file.size / 1024))} KB)`;
    purchaseReceiptList.appendChild(item);
  });
}

function updateCommentsPreview() {
  dayCommentDraft = commentsText.value;
  const text = dayCommentDraft.trim();

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
  selectedDayTicket = null;
  dayCommentDraft = "";
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
  const sourceEntry = dayEntriesCache.find((item) => item.id === entryId);

  if (!sourceEntry) {
    setCheckHoursStatus("That day could not be loaded for editing.", "error");
    return;
  }

  const entry = {
    ...sourceEntry,
    employees: dedupeEntryEmployees(sourceEntry.employees || []),
  };

  resetRecordDayForm();
  editingDayEntryId = entry.id;
  editingDayOriginalDate = entry.date;
  editingDayCreatedAt = entry.createdAt || null;
  editingDayExistingAttachments = Array.isArray(entry.attachments) ? [...entry.attachments] : [];

  workDateInput.value = entry.date || "";
  const isRelated = Boolean(entry.relatedReference);
  dayRelatedInputs.forEach((input) => {
    input.checked = input.value === (isRelated ? (entry.relatedDescription ? "expansive" : "manual") : "no");
  });
  updateDayReferenceField();
  dayReferenceText.value = entry.relatedReference || "";
  selectedDayTicket = entry.relatedDescription
    ? {
        id: entry.relatedReference || "saved-ticket",
        number: entry.relatedReference || "",
        title: entry.relatedDescription,
      }
    : null;
  renderSelectedDayTicket();
  commentsText.value = entry.comments || "";
  dayCommentDraft = commentsText.value;

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

  const selectedLocations = new Set(
    String(entry.location || "")
      .split("|")
      .map((part) => part.trim())
      .filter(Boolean)
  );
  locationList.querySelectorAll('input[name="day-location"]').forEach((checkbox) => {
    checkbox.checked = selectedLocations.has(checkbox.value);
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
  editingPurchaseEntryId = null;
  editingPurchaseCreatedAt = null;
  editingPurchaseExistingReceipts = [];
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

function loadPurchaseEntryForEditing(entryId) {
  const entry = purchaseEntriesCache.find((item) => item.id === entryId);

  if (!entry) {
    setCheckReceiptsStatus("That receipt could not be loaded for editing.", "error");
    return;
  }

  resetRecordPurchaseForm();
  editingPurchaseEntryId = entry.id;
  editingPurchaseCreatedAt = entry.createdAt || null;
  editingPurchaseExistingReceipts = Array.isArray(entry.receipts) ? [...entry.receipts] : [];

  document.getElementById("purchase-date").value = entry.date || "";
  purchaseLocationSelect.value = entry.location || "";
  const isRelated = Boolean(entry.relatedReference);
  purchaseRelatedInputs.forEach((input) => {
    input.checked = input.value === (isRelated ? "yes" : "no");
  });
  updatePurchaseReferenceField();
  purchaseReferenceText.value = entry.relatedReference || "";
  receiptTotalInput.value = Number(entry.total || 0).toFixed(2);
  receiptAnalysisText = entry.analysisText || "";
  receiptAnalysisOutput.className = receiptAnalysisText
    ? "receipt-analysis-output"
    : "receipt-analysis-output empty-state";
  receiptAnalysisOutput.textContent = receiptAnalysisText || "No analysis yet.";
  renderPurchaseReceiptList();
  recordPurchaseStepIndex = 0;
  updateRecordPurchaseStep();
  setPurchaseSaveStatus(`Editing receipt from ${formatDisplayDate(entry.date)}. Save when you are done.`, "warning");
  showScreen("record-purchase");
  focusCurrentRecordPurchaseStep();
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
  const isIosDevice = /iPad|iPhone|iPod/.test(window.navigator.userAgent || "");
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition || null;

  if (isIosDevice) {
    updateVoiceStatus("Tap Dictate, then use the iPhone keyboard microphone.");
    voiceCommentButton.disabled = false;
    return;
  }

  if (!SpeechRecognition) {
    updateVoiceStatus("Speech input is not available on this device.");
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
  const isIosDevice = /iPad|iPhone|iPod/.test(window.navigator.userAgent || "");

  if (isIosDevice) {
    commentsText.scrollIntoView({ behavior: "smooth", block: "center" });
    updateVoiceStatus("Opening the keyboard. Tap the microphone on the iPhone keyboard to dictate.");

    const moveCursorToEnd = () => {
      const end = commentsText.value.length;
      commentsText.focus({ preventScroll: true });
      commentsText.click();

      try {
        commentsText.setSelectionRange(end, end);
      } catch (_error) {
        // iOS can reject selection changes before the keyboard is fully ready.
      }
    };

    moveCursorToEnd();
    window.setTimeout(moveCursorToEnd, 60);
    window.setTimeout(moveCursorToEnd, 180);
    return;
  }

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
  if (!dayCommentDraft.trim()) {
    return;
  }

  const confirmed = window.confirm("Clear all comment text?");

  if (!confirmed) {
    return;
  }

  commentsText.value = "";
  dayCommentDraft = "";
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
        related_description: payload.relatedDescription,
        attachments: payload.attachments,
      },
      {
        work_date: payload.date,
        location: payload.location,
        comments: payload.comments,
        related_reference: payload.relatedReference,
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
      related_description: payload.relatedDescription,
      attachments: payload.attachments,
    },
    {
      work_date: payload.date,
      location: payload.location,
      comments: payload.comments,
      related_reference: payload.relatedReference,
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
      id: payload.id || null,
      receipts: payload.receipts,
      createdAt: payload.createdAt || null,
      mode: "local-only",
      message: "Saved in this browser. Add the purchase table in Supabase to save online.",
    };
  }

  if (payload.id && isUuid(payload.id)) {
    const updateVariants = [
      {
        purchase_date: payload.date,
        location: payload.location,
        related_reference: payload.relatedReference,
        quickbooks_invoice_number: payload.quickbooksInvoiceNumber,
        receipt_total: payload.total,
        receipt_files: payload.receipts,
        receipt_text: payload.analysisText,
      },
      {
        purchase_date: payload.date,
        location: payload.location,
        related_reference: payload.relatedReference,
        quickbooks_invoice_number: payload.quickbooksInvoiceNumber,
        receipt_total: payload.total,
        receipt_text: payload.analysisText,
      },
      {
        purchase_date: payload.date,
        receipt_total: payload.total,
      },
    ];

    let updateError = null;

    for (const updatePayload of updateVariants) {
      const result = await supabaseClient
        .from("purchase_entries")
        .update(updatePayload)
        .eq("id", payload.id);

      if (!result.error) {
        updateError = null;
        break;
      }

      updateError = result.error;
    }

    if (updateError) {
      throw updateError;
    }

    let uploadedReceipts = [...(editingPurchaseExistingReceipts || [])];
    const receiptFiles = [...purchaseReceiptInput.files];

    if (receiptFiles.length) {
      const nextReceipts = [...uploadedReceipts];

      for (const file of receiptFiles) {
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
        const path = `${currentSession.user.id}/${payload.id}/${Date.now()}-${safeName}`;

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
    }

    await supabaseClient
      .from("purchase_entries")
      .update({ receipt_files: uploadedReceipts })
      .eq("id", payload.id);

    return {
      id: payload.id,
      receipts: uploadedReceipts,
      createdAt: payload.createdAt || null,
      mode: "supabase",
      message: "Updated in Supabase and in this browser.",
    };
  }

  const insertVariants = [
    {
      purchase_date: payload.date,
      location: payload.location,
      related_reference: payload.relatedReference,
      quickbooks_invoice_number: payload.quickbooksInvoiceNumber,
      receipt_total: payload.total,
      receipt_files: payload.receipts,
      receipt_text: payload.analysisText,
    },
    {
      purchase_date: payload.date,
      location: payload.location,
      related_reference: payload.relatedReference,
      quickbooks_invoice_number: payload.quickbooksInvoiceNumber,
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
    createdAt: payload.createdAt || new Date().toISOString(),
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
    message.includes("location") ||
    message.includes("receipt_total") ||
    message.includes("receipt_files") ||
    message.includes("receipt_text") ||
    message.includes("quickbooks_invoice_number") ||
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
  if (!canUseSupabaseSession()) {
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
    location: getSelectedDayLocations().join(" | "),
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
    comments: dayCommentDraft.trim(),
    relatedReference:
      getDayReferenceMode() !== "no" ? dayReferenceText.value.trim() : "",
    relatedDescription:
      getDayReferenceMode() === "expansive" && selectedDayTicket
        ? getTicketDescription(selectedDayTicket)
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
    const previousEntryId = editingDayEntryId;
    const saveResult = await saveEntryToSupabase(payload);
    const savedEntry = buildLocalDayEntry(
      { ...payload, attachments: saveResult.attachments || payload.attachments },
      saveResult
    );
    localStorage.setItem("latestDayEntry", JSON.stringify(savedEntry, null, 2));
    replaceEditedDayEntry(previousEntryId, savedEntry);
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

    const previousEntryId = editingDayEntryId;
    const savedEntry = buildLocalDayEntry(payload, { id: null });
    localStorage.setItem("latestDayEntry", JSON.stringify(savedEntry, null, 2));
    replaceEditedDayEntry(previousEntryId, savedEntry);
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
    id: editingPurchaseEntryId,
    date: document.getElementById("purchase-date").value,
    location: purchaseLocationSelect.value,
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
    quickbooksInvoiceNumber: "",
    createdAt: editingPurchaseCreatedAt,
    archivedAt: null,
  };

  try {
    const previousEntryId = editingPurchaseEntryId;
    const saveResult = await savePurchaseToSupabase(payload);
    const savedPurchase = buildLocalPurchaseEntry(
      { ...payload, receipts: saveResult.receipts || payload.receipts },
      saveResult
    );
    localStorage.setItem("latestPurchaseEntry", JSON.stringify(savedPurchase, null, 2));
    replaceEditedPurchaseEntry(previousEntryId, savedPurchase);
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
    const previousEntryId = editingPurchaseEntryId;
    const savedPurchase = buildLocalPurchaseEntry(payload, { id: null });
    localStorage.setItem("latestPurchaseEntry", JSON.stringify(savedPurchase, null, 2));
    replaceEditedPurchaseEntry(previousEntryId, savedPurchase);
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

    if (screenName === "archived-items") {
      setArchivedItemsFilter(button.dataset.archivedFilter || "day");
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
staticLoginButton.addEventListener("click", signInWithStaticCredentials);
signOutButton.addEventListener("click", signOut);
authPinInput.addEventListener("input", updateMagicLinkButton);
authUsernameInput.addEventListener("input", updateAuthDebugEmail);
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
copySelectedDaysButton.addEventListener("click", copySelectedDaysReport);
archiveDaysButton.addEventListener("click", archiveSelectedDays);
selectAllDaysButton.addEventListener("click", toggleSelectAllDays);
emailReceiptsButton.addEventListener("click", emailSelectedReceipts);
archiveReceiptsButton.addEventListener("click", archiveSelectedReceipts);
syncTicketsButton.addEventListener("click", syncTickets);
ticketsByTimeButton.addEventListener("click", () => setTicketViewMode("time"));
ticketsByLocationButton.addEventListener("click", () => setTicketViewMode("location"));
loadDayTicketsButton.addEventListener("click", loadTicketsForDayPicker);
dayTicketSearchInput.addEventListener("input", renderDayTicketPicker);
dayTicketList.addEventListener("click", (event) => {
  const selectButton = event.target.closest("[data-day-ticket-select]");

  if (!selectButton) {
    return;
  }

  selectDayTicket(selectButton.dataset.dayTicketSelect);
});
ticketsList.addEventListener("click", (event) => {
  const actionsButton = event.target.closest("[data-ticket-actions]");

  if (!actionsButton) {
    return;
  }

  openTicketActions(actionsButton.dataset.ticketActions);
});
closeTicketActionsButton.addEventListener("click", closeTicketActions);
ticketActionsModal.addEventListener("click", (event) => {
  if (event.target === ticketActionsModal) {
    closeTicketActions();
  }
});
ticketActionsModal.querySelectorAll("[data-ticket-action]").forEach((button) => {
  button.addEventListener("click", () => {
    ticketActionsDescription.textContent = `${button.textContent.trim()} is ready for the next phase. No changes were sent yet.`;
  });
});
ticketSearchInput.addEventListener("input", () => {
  if (ticketDiscoveryData) {
    renderTicketsDiscovery(ticketDiscoveryData);
  }
});
retrieveArchivedButton.addEventListener("click", retrieveSelectedArchivedItems);
checkReceiptsList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-receipt-id]");

  if (!editButton) {
    return;
  }

  event.preventDefault();
  loadPurchaseEntryForEditing(editButton.dataset.editReceiptId);
});
checkHoursList.addEventListener("change", (event) => {
  if (event.target.matches('input[type="checkbox"][data-entry-id]')) {
    updateSelectAllDaysButton();
  }
});
archivedSearchInput.addEventListener("input", renderArchivedItems);
checkHoursList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-day-id]");
  const deleteButton = event.target.closest("[data-delete-day-id]");

  if (deleteButton) {
    deleteDayEntry(deleteButton.dataset.deleteDayId);
    return;
  }

  if (!editButton) {
    return;
  }

  loadDayEntryForEditing(editButton.dataset.editDayId);
});
checkHoursDashboard.addEventListener("click", (event) => {
  const toggleButton = event.target.closest("#toggle-hours-dashboard-details");

  if (!toggleButton) {
    return;
  }

  toggleHoursDashboardDetails();
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
ticketDiscoveryData = readStoredTicketDiscovery();
setTicketViewMode("time");
setupSpeechRecognition();
updateRecordDayStep();
updateRecordPurchaseStep();
renderCheckHoursEntries();
renderCheckReceiptsEntries();
initializeAuth();
