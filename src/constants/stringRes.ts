export const technicianEndpoints = {
  getAllTechnicians: "/user",
};
export const customerEndpoints = {
  getAllCustomers: "/customers",
};
export const warehouseEndpoints = {
  getAllWarehouses: "/warehouses",
};
export const ticketEnpoints = {
  getTechnicianTickets: "/tickets",
  EmpoyeeOfTheMonth: "/tickets/employeeOfTheMonth",
  TicketsByTechId: "/tickets/byTechnician", // used with /id
  createTicket: "/tickets",
  updateTicket: "/tickets",
  deleteTicket: "/tickets",
};

export const screens = {
  technicians: "/technician",
  admin: "/admin",
};

export const uiText = {
  startButton: "התחל",
  couldNotLoadTech: "לא ניתן היה לטעון את רשימת הטכנאים",
  admin: "מנהל",
  createTicketError: "מצטערים הייתה בעיה ביצירת הכרטיס",
  adminTicketError:
    "מצטערים הייתה בעיה בטעינת הכרטיסים אנא בדוק מול צוות התמיכה",
  doneBtn: "בוצע",
  homeBtn: "\u2302",
  TechnicianApplication: "אפליקציית טכנאים",
  createTicket: "צור קריאה",
  deleteTicket: "מחק קריאה",
  congratulationsTo: "ברכות ל",
  BeingEmpOfMonth: "על היותו העובד המצטיין החודש",
  TicketInfo: ":פרטי הכרטיס",
  title: "כותרת",
  desc: "פירוט",
  customerId: "מזהה לקוח",
  hardwareType: "כרטיס תקול",
  date: "תאריך",
  createAnother: "צור כרטיס נוסף",
};
