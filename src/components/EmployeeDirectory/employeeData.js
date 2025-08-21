// src/employeeData.js

export const employeeData = [
  // Top Level
  { id: 1, name: "MARK", role: "CEO", reportsTo: null, initials: "MK" },
  { id: 2, name: "RYAN", role: "CTO", reportsTo: null, initials: "RY" },
  
  // Second Level (reporting to Mark)
  { id: 3, name: "Minhae", role: "Admin/HR/Operations", reportsTo: 1, initials: "MH" },
  
  // Third Level (reporting to Minhae)
  { id: 4, name: "SUMMER", role: "Office Manager", reportsTo: 3, initials: "SM" },
  { id: 5, name: "DAVID LEE", role: "Logistics Manager", reportsTo: 3, initials: "DL" },
  { id: 6, name: "JAMIE ALLEN", role: "Technical Advisor", reportsTo: 3, initials: "JA" },
  { id: 7, name: "AMEENA", role: "Acct Manager/Automation", reportsTo: 3, initials: "AM" },
  { id: 8, name: "DUSTIN", role: "AOX Manager", reportsTo: 3, initials: "DS" },
  { id: 9, name: "WUJIN", role: "CAD Designer", reportsTo: 3, initials: "WJ" },
  { id: 10, name: "JOON KIM", role: "Tech Manager", reportsTo: 3, initials: "JK" },
  { id: 11, name: "RICHARD", role: "Sales/Marketing Manager", reportsTo: 3, initials: "RD" },

  // Fourth Level (Examples)
  { id: 12, name: "NANA", role: "Office Admin Support", reportsTo: 4, initials: "NA" },
  { id: 13, name: "BLAYE", role: "Inventory", reportsTo: 4, initials: "BY" },
  { id: 14, name: "JIYOUNG", role: "Record Keeping", reportsTo: 5, initials: "JY" },
  { id: 15, name: "CARLOS", role: "Driver", reportsTo: 5, initials: "CR" },
  { id: 16, name: "LORENA", role: "Collections", reportsTo: 7, initials: "LR" },
  { id: 17, name: "ZEINAB", role: "AOX Admin Support", reportsTo: 8, initials: "ZB" },
  { id: 18, name: "CHEN", role: "Technician", reportsTo: 9, initials: "CH" },
  { id: 19, name: "MR SEO", role: "Contour/Glazing Tech", reportsTo: 10, initials: "MS" },
  { id: 20, name: "GENELLE", role: "Sales Representative", reportsTo: 11, initials: "GN" },
  { id: 21, name: "AQIL", role: "Back End Developer", reportsTo: 2, initials: "AQ" },
  { id: 22, name: "SHAHZAIB", role: "Front End Developer", reportsTo: 2, initials: "SH" },
];