/**
 * SIMS - Student Information Management System
 * Core Application Engine & Data Controller
 */

// ============================================================================
// DEFAULT SEED DATA
// ============================================================================
const DEFAULT_DATA = {
  students: [
    {
      id: "STU-2024-001",
      name: "Alexander Clark",
      gender: "Male",
      dob: "2003-04-12",
      email: "alexander.c@apex.edu",
      phone: "+1 (555) 019-2834",
      address: "742 Evergreen Terrace, Springfield, OR 97477",
      department: "Computer Science",
      academicYear: "3rd Year",
      section: "A",
      admissionDate: "2022-08-15",
      fee: { total: 50000, paid: 50000, history: [
        { receiptNo: "REC-2024-101", date: "2024-08-10", amount: 25000, method: "Bank Transfer", ref: "TXN-88219" },
        { receiptNo: "REC-2025-204", date: "2025-01-05", amount: 25000, method: "Credit Card", ref: "TXN-91042" }
      ]}
    },
    {
      id: "STU-2024-002",
      name: "Sophia Martinez",
      gender: "Female",
      dob: "2003-09-21",
      email: "sophia.m@apex.edu",
      phone: "+1 (555) 018-9123",
      address: "124 Conch Street, Pacific Grove, CA 93950",
      department: "Computer Science",
      academicYear: "3rd Year",
      section: "A",
      admissionDate: "2022-08-15",
      fee: { total: 50000, paid: 35000, history: [
        { receiptNo: "REC-2024-102", date: "2024-08-11", amount: 35000, method: "UPI", ref: "TXN-77312" }
      ]}
    },
    {
      id: "STU-2024-003",
      name: "Marcus Vance",
      gender: "Male",
      dob: "2003-01-18",
      email: "marcus.v@apex.edu",
      phone: "+1 (555) 017-3829",
      address: "456 Elm Street, Boulder, CO 80302",
      department: "Computer Science",
      academicYear: "3rd Year",
      section: "A",
      admissionDate: "2022-08-16",
      fee: { total: 50000, paid: 15000, history: [
        { receiptNo: "REC-2024-103", date: "2024-08-12", amount: 15000, method: "Cash", ref: "CSH-0021" }
      ]}
    },
    {
      id: "STU-2024-004",
      name: "Emily Watson",
      gender: "Female",
      dob: "2004-11-05",
      email: "emily.w@apex.edu",
      phone: "+1 (555) 016-4433",
      address: "10 Downing Road, Seattle, WA 98101",
      department: "Computer Science",
      academicYear: "3rd Year",
      section: "A",
      admissionDate: "2022-08-16",
      fee: { total: 50000, paid: 50000, history: [
        { receiptNo: "REC-2024-104", date: "2024-08-14", amount: 50000, method: "Bank Transfer", ref: "TXN-99431" }
      ]}
    },
    {
      id: "STU-2024-005",
      name: "Liam O'Connor",
      gender: "Male",
      dob: "2004-03-30",
      email: "liam.oc@apex.edu",
      phone: "+1 (555) 015-7788",
      address: "88 Beacon Street, Boston, MA 02108",
      department: "Electronics & Comm",
      academicYear: "2nd Year",
      section: "A",
      admissionDate: "2023-08-20",
      fee: { total: 48000, paid: 24000, history: [
        { receiptNo: "REC-2024-105", date: "2024-08-15", amount: 24000, method: "Credit Card", ref: "TXN-66412" }
      ]}
    },
    {
      id: "STU-2024-006",
      name: "Aisha Patel",
      gender: "Female",
      dob: "2004-07-14",
      email: "aisha.p@apex.edu",
      phone: "+1 (555) 014-9900",
      address: "302 Fremont Ave, Austin, TX 78701",
      department: "Electronics & Comm",
      academicYear: "2nd Year",
      section: "A",
      admissionDate: "2023-08-20",
      fee: { total: 48000, paid: 48000, history: [
        { receiptNo: "REC-2024-106", date: "2024-08-16", amount: 48000, method: "UPI", ref: "TXN-55123" }
      ]}
    },
    {
      id: "STU-2024-007",
      name: "Daniel Zhang",
      gender: "Male",
      dob: "2003-12-08",
      email: "daniel.z@apex.edu",
      phone: "+1 (555) 013-1122",
      address: "55 Ocean Blvd, Santa Monica, CA 90401",
      department: "Information Technology",
      academicYear: "3rd Year",
      section: "A",
      admissionDate: "2022-08-18",
      fee: { total: 52000, paid: 52000, history: [
        { receiptNo: "REC-2024-107", date: "2024-08-17", amount: 52000, method: "Bank Transfer", ref: "TXN-33299" }
      ]}
    },
    {
      id: "STU-2024-008",
      name: "Chloe Bennett",
      gender: "Female",
      dob: "2003-05-19",
      email: "chloe.b@apex.edu",
      phone: "+1 (555) 012-3344",
      address: "910 Maple Drive, Ann Arbor, MI 48104",
      department: "Information Technology",
      academicYear: "3rd Year",
      section: "B",
      admissionDate: "2022-08-18",
      fee: { total: 52000, paid: 10000, history: [
        { receiptNo: "REC-2024-108", date: "2024-08-18", amount: 10000, method: "Cash", ref: "CSH-0034" }
      ]}
    },
    {
      id: "STU-2024-009",
      name: "Ethan Ramirez",
      gender: "Male",
      dob: "2002-06-25",
      email: "ethan.r@apex.edu",
      phone: "+1 (555) 011-5566",
      address: "140 Pine Hill Road, Denver, CO 80202",
      department: "Mechanical Eng",
      academicYear: "4th Year",
      section: "A",
      admissionDate: "2021-08-12",
      fee: { total: 46000, paid: 46000, history: [
        { receiptNo: "REC-2024-109", date: "2024-08-19", amount: 46000, method: "Bank Transfer", ref: "TXN-22819" }
      ]}
    },
    {
      id: "STU-2024-010",
      name: "Hannah Jenkins",
      gender: "Female",
      dob: "2002-10-11",
      email: "hannah.j@apex.edu",
      phone: "+1 (555) 010-7799",
      address: "67 Highland Way, Atlanta, GA 30303",
      department: "Mechanical Eng",
      academicYear: "4th Year",
      section: "A",
      admissionDate: "2021-08-12",
      fee: { total: 46000, paid: 20000, history: [
        { receiptNo: "REC-2024-110", date: "2024-08-20", amount: 20000, method: "Credit Card", ref: "TXN-11942" }
      ]}
    },
    {
      id: "STU-2024-011",
      name: "James Thornton",
      gender: "Male",
      dob: "2005-02-14",
      email: "james.t@apex.edu",
      phone: "+1 (555) 009-8811",
      address: "21 Jump Street, Portland, OR 97201",
      department: "Civil Eng",
      academicYear: "1st Year",
      section: "A",
      admissionDate: "2024-08-22",
      fee: { total: 45000, paid: 45000, history: [
        { receiptNo: "REC-2024-111", date: "2024-08-22", amount: 45000, method: "UPI", ref: "TXN-44910" }
      ]}
    },
    {
      id: "STU-2024-012",
      name: "Maya Lin",
      gender: "Female",
      dob: "2005-08-04",
      email: "maya.l@apex.edu",
      phone: "+1 (555) 008-6622",
      address: "800 River Road, Chicago, IL 60601",
      department: "Civil Eng",
      academicYear: "1st Year",
      section: "A",
      admissionDate: "2024-08-22",
      fee: { total: 45000, paid: 0, history: [] }
    },
    {
      id: "STU-2024-013",
      name: "Noah Campbell",
      gender: "Male",
      dob: "2003-11-29",
      email: "noah.c@apex.edu",
      phone: "+1 (555) 007-4433",
      address: "18 Sunset Strip, Los Angeles, CA 90069",
      department: "Computer Science",
      academicYear: "3rd Year",
      section: "B",
      admissionDate: "2022-08-15",
      fee: { total: 50000, paid: 50000, history: [
        { receiptNo: "REC-2024-112", date: "2024-08-23", amount: 50000, method: "Bank Transfer", ref: "TXN-77112" }
      ]}
    },
    {
      id: "STU-2024-014",
      name: "Olivia Brooks",
      gender: "Female",
      dob: "2004-04-18",
      email: "olivia.b@apex.edu",
      phone: "+1 (555) 006-2244",
      address: "95 Park Lane, New York, NY 10001",
      department: "Electronics & Comm",
      academicYear: "2nd Year",
      section: "B",
      admissionDate: "2023-08-21",
      fee: { total: 48000, paid: 18000, history: [
        { receiptNo: "REC-2024-113", date: "2024-08-24", amount: 18000, method: "Credit Card", ref: "TXN-88321" }
      ]}
    },
    {
      id: "STU-2024-015",
      name: "Rohan Gupta",
      gender: "Male",
      dob: "2005-09-09",
      email: "rohan.g@apex.edu",
      phone: "+1 (555) 005-9988",
      address: "41 Silicon Valley Blvd, San Jose, CA 95112",
      department: "Computer Science",
      academicYear: "1st Year",
      section: "A",
      admissionDate: "2024-08-23",
      fee: { total: 50000, paid: 50000, history: [
        { receiptNo: "REC-2024-114", date: "2024-08-25", amount: 50000, method: "UPI", ref: "TXN-99841" }
      ]}
    },
    {
      id: "STU-2024-016",
      name: "Zoe Richardson",
      gender: "Female",
      dob: "2003-07-22",
      email: "zoe.r@apex.edu",
      phone: "+1 (555) 004-7711",
      address: "112 Lakeshore Drive, Minneapolis, MN 55401",
      department: "Information Technology",
      academicYear: "3rd Year",
      section: "A",
      admissionDate: "2022-08-19",
      fee: { total: 52000, paid: 52000, history: [
        { receiptNo: "REC-2024-115", date: "2024-08-26", amount: 52000, method: "Bank Transfer", ref: "TXN-55410" }
      ]}
    }
  ],

  faculty: [
    {
      id: "FAC-CSE-101",
      name: "Dr. Eleanor Hayes",
      gender: "Female",
      email: "e.hayes@apex.edu",
      phone: "+1 (555) 234-5678",
      department: "Computer Science",
      designation: "Head of Department",
      qualification: "Ph.D. in Computer Science (MIT)",
      joiningDate: "2016-07-15",
      subjects: "Algorithms, Distributed Systems, Cloud Architecture"
    },
    {
      id: "FAC-CSE-102",
      name: "Prof. Kenneth Sterling",
      gender: "Male",
      email: "k.sterling@apex.edu",
      phone: "+1 (555) 234-5679",
      department: "Computer Science",
      designation: "Professor",
      qualification: "Ph.D. in Software Engineering (Stanford)",
      joiningDate: "2018-08-01",
      subjects: "Data Structures, Database Management, Operating Systems"
    },
    {
      id: "FAC-ECE-201",
      name: "Dr. Arvind Rao",
      gender: "Male",
      email: "a.rao@apex.edu",
      phone: "+1 (555) 234-5680",
      department: "Electronics & Comm",
      designation: "Head of Department",
      qualification: "Ph.D. in VLSI & Microelectronics",
      joiningDate: "2015-06-20",
      subjects: "Digital Electronics, VLSI Design, Embedded Systems"
    },
    {
      id: "FAC-ECE-202",
      name: "Prof. Sarah Jenkins",
      gender: "Female",
      email: "s.jenkins@apex.edu",
      phone: "+1 (555) 234-5681",
      department: "Electronics & Comm",
      designation: "Associate Professor",
      qualification: "M.Tech in Signal Processing",
      joiningDate: "2019-09-10",
      subjects: "Signals & Systems, Communication Theory"
    },
    {
      id: "FAC-IT-301",
      name: "Dr. Jonathan Miller",
      gender: "Male",
      email: "j.miller@apex.edu",
      phone: "+1 (555) 234-5682",
      department: "Information Technology",
      designation: "Professor",
      qualification: "Ph.D. in Information Systems",
      joiningDate: "2017-01-12",
      subjects: "Cybersecurity, Computer Networks, Web Technologies"
    },
    {
      id: "FAC-MECH-401",
      name: "Dr. David Thorne",
      gender: "Male",
      email: "d.thorne@apex.edu",
      phone: "+1 (555) 234-5683",
      department: "Mechanical Eng",
      designation: "Head of Department",
      qualification: "Ph.D. in Thermodynamics & Robotics",
      joiningDate: "2014-04-18",
      subjects: "Fluid Mechanics, Thermodynamics, Mechatronics"
    },
    {
      id: "FAC-CIVIL-501",
      name: "Prof. Melissa Rivera",
      gender: "Female",
      email: "m.rivera@apex.edu",
      phone: "+1 (555) 234-5684",
      department: "Civil Eng",
      designation: "Associate Professor",
      qualification: "M.S. in Structural Engineering (Berkeley)",
      joiningDate: "2020-02-01",
      subjects: "Structural Analysis, Geotechnical Eng, Surveying"
    }
  ],

  // Historical attendance dates
  attendanceRecords: {
    // format: { "date_dept_year_sec": { "STU-ID": "Present" | "Absent" | "Late" } }
  },

  // Marks data: { "exam_dept_year_sec": { "STU-ID": { sub1: 85, sub2: 90, ... } } }
  marksRecords: {},

  // Audit activity log
  activities: [
    { id: 1, text: "Dr. Eleanor Hayes submitted Mid-Term marks for CS 3rd Year", time: "10 mins ago", type: "marks", icon: "fa-file-pen" },
    { id: 2, text: "Fee payment of $25,000 recorded for Alexander Clark", time: "1 hour ago", type: "fee", icon: "fa-receipt" },
    { id: 3, text: "Class attendance recorded for CSE 3rd Year (Sec A)", time: "3 hours ago", type: "attendance", icon: "fa-calendar-check" },
    { id: 4, text: "New student Rohan Gupta enrolled in Computer Science", time: "Yesterday", type: "student", icon: "fa-user-plus" },
    { id: 5, text: "Defaulter alert generated for 3 students with attendance < 75%", time: "2 days ago", type: "alert", icon: "fa-triangle-exclamation" }
  ]
};

// Seed attendance for multiple dates so calculations are authentic
function seedInitialAttendanceAndMarks(data) {
  const dates = ["2026-11-03", "2026-11-04", "2026-11-05", "2026-11-06", "2026-11-07", "2026-11-08", "2026-11-09", "2026-11-10"];
  
  dates.forEach(d => {
    // CSE 3rd Year Sec A
    const key = `${d}_Computer Science_3rd Year_A`;
    data.attendanceRecords[key] = {
      "STU-2024-001": "Present",
      "STU-2024-002": d === "2026-11-05" || d === "2026-11-08" ? "Absent" : "Present",
      // Marcus Vance has low attendance (<75% defaulter)
      "STU-2024-003": d === "2026-11-03" || d === "2026-11-04" ? "Present" : "Absent",
      "STU-2024-004": "Present"
    };

    // ECE 2nd Year Sec A
    const keyECE = `${d}_Electronics & Comm_2nd Year_A`;
    data.attendanceRecords[keyECE] = {
      "STU-2024-005": d === "2026-11-06" ? "Absent" : "Present",
      "STU-2024-006": "Present"
    };

    // IT 3rd Year Sec A
    const keyIT = `${d}_Information Technology_3rd Year_A`;
    data.attendanceRecords[keyIT] = {
      "STU-2024-007": "Present",
      // Chloe Bennett defaulter
      "STU-2024-008": d === "2026-11-04" || d === "2026-11-09" || d === "2026-11-10" ? "Absent" : (d === "2026-11-06" ? "Absent" : "Present"),
      "STU-2024-016": "Present"
    };

    // Civil 1st Year Sec A
    const keyCIVIL = `${d}_Civil Eng_1st Year_A`;
    data.attendanceRecords[keyCIVIL] = {
      "STU-2024-011": "Present",
      // Maya Lin defaulter
      "STU-2024-012": d === "2026-11-05" || d === "2026-11-07" || d === "2026-11-09" ? "Absent" : (d === "2026-11-10" ? "Absent" : "Present")
    };
  });

  // Seed marks for Final Semester
  const examKey = "Final Semester_Computer Science_3rd Year_A";
  data.marksRecords[examKey] = {
    "STU-2024-001": { sub1: 94, sub2: 91, sub3: 88, sub4: 95, sub5: 90 }, // A+
    "STU-2024-002": { sub1: 82, sub2: 85, sub3: 79, sub4: 88, sub5: 84 }, // A
    "STU-2024-003": { sub1: 65, sub2: 60, sub3: 58, sub4: 70, sub5: 62 }, // C
    "STU-2024-004": { sub1: 96, sub2: 92, sub3: 94, sub4: 98, sub5: 95 }  // A+
  };

  const examKeyECE = "Final Semester_Electronics & Comm_2nd Year_A";
  data.marksRecords[examKeyECE] = {
    "STU-2024-005": { sub1: 76, sub2: 78, sub3: 72, sub4: 80, sub5: 75 }, // B
    "STU-2024-006": { sub1: 91, sub2: 93, sub3: 89, sub4: 94, sub5: 92 }  // A+
  };

  const examKeyIT = "Final Semester_Information Technology_3rd Year_A";
  data.marksRecords[examKeyIT] = {
    "STU-2024-007": { sub1: 88, sub2: 86, sub3: 84, sub4: 90, sub5: 87 }, // A
    "STU-2024-016": { sub1: 85, sub2: 89, sub3: 91, sub4: 88, sub5: 90 }  // A
  };
}

// Subject list definition per department
const DEPARTMENT_SUBJECTS = {
  "Computer Science": [
    { code: "CS-501", name: "Data Structures & Algorithms" },
    { code: "CS-502", name: "Database Management Systems" },
    { code: "CS-503", name: "Computer Networks & Security" },
    { code: "CS-504", name: "Operating Systems Principles" },
    { code: "CS-505", name: "Software Engineering & Architecture" }
  ],
  "Electronics & Comm": [
    { code: "EC-301", name: "Signals and Linear Systems" },
    { code: "EC-302", name: "Digital Integrated Circuits" },
    { code: "EC-303", name: "Microprocessors & Microcontrollers" },
    { code: "EC-304", name: "Analog Communication Systems" },
    { code: "EC-305", name: "Electromagnetic Wave Propagation" }
  ],
  "Information Technology": [
    { code: "IT-501", name: "Enterprise Web Application Dev" },
    { code: "IT-502", name: "Cloud Computing & DevOps" },
    { code: "IT-503", name: "Information Security & Cryptography" },
    { code: "IT-504", name: "Data Warehousing & Mining" },
    { code: "IT-505", name: "Object Oriented Design Patterns" }
  ],
  "Mechanical Eng": [
    { code: "ME-701", name: "Thermodynamics & Heat Transfer" },
    { code: "ME-702", name: "Fluid Mechanics & Turbo Machinery" },
    { code: "ME-703", name: "Manufacturing Technology & CNC" },
    { code: "ME-704", name: "Kinematics & Dynamics of Machinery" },
    { code: "ME-705", name: "Finite Element Method Analysis" }
  ],
  "Civil Eng": [
    { code: "CE-101", name: "Structural Mechanics & Materials" },
    { code: "CE-102", name: "Surveying & Geomatics Engineering" },
    { code: "CE-103", name: "Building Planning & Construction" },
    { code: "CE-104", name: "Engineering Geology & Seismology" },
    { code: "CE-105", name: "Environmental Engineering Fundamentals" }
  ]
};

// ============================================================================
// STATE & STORAGE CONTROLLER
// ============================================================================
const SIMS_STORAGE_KEY = "SIMS_PORTAL_DATABASE_V2";

class SimsDB {
  constructor() {
    this.data = this.load();
  }

  load() {
    try {
      const stored = localStorage.getItem(SIMS_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to load local storage:", e);
    }
    const fresh = JSON.parse(JSON.stringify(DEFAULT_DATA));
    seedInitialAttendanceAndMarks(fresh);
    this.save(fresh);
    return fresh;
  }

  save(dataToSave) {
    if (dataToSave) this.data = dataToSave;
    try {
      localStorage.setItem(SIMS_STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error("Failed to save to local storage:", e);
    }
  }

  reset() {
    const fresh = JSON.parse(JSON.stringify(DEFAULT_DATA));
    seedInitialAttendanceAndMarks(fresh);
    this.save(fresh);
    return fresh;
  }
}

const db = new SimsDB();

// ============================================================================
// MAIN APPLICATION CONTROLLER
// ============================================================================
window.SIMS = {
  activeView: "dashboard",
  activeReportTab: "student",
  charts: {},
  studentPagination: {
    page: 1,
    pageSize: 8
  },
  showDefaultersOnly: false,

  // Initialize Application
  init() {
    this.bindEvents();
    this.setupCurrentDate();
    this.updateCounters();
    this.renderDashboard();
    this.navigateTo("dashboard");
    this.initDefaultDateInputs();
  },

  // Setup Date Displays
  setupCurrentDate() {
    const now = new Date();
    const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
    const dateStr = now.toLocaleDateString("en-US", options);
    const dateDisplay = document.getElementById("current-date-display");
    if (dateDisplay) dateDisplay.textContent = dateStr;
  },

  initDefaultDateInputs() {
    const todayISO = new Date().toISOString().split("T")[0];
    const attDate = document.getElementById("att-date-input");
    if (attDate) attDate.value = todayISO;
    const payDate = document.getElementById("pay-date-input");
    if (payDate) payDate.value = todayISO;
    const admDate = document.getElementById("stu-admission-input");
    if (admDate && !admDate.value) admDate.value = todayISO;
    const facJoining = document.getElementById("fac-joining-input");
    if (facJoining && !facJoining.value) facJoining.value = todayISO;
  },

  // Bind Event Listeners
  bindEvents() {
    // Sidebar Navigation
    document.querySelectorAll("#sidebar-nav .nav-item").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const view = link.getAttribute("data-view");
        this.navigateTo(view);
        this.closeMobileSidebar();
      });
    });

    // Mobile Sidebar Toggles
    const openBtn = document.getElementById("open-sidebar-btn");
    const closeBtn = document.getElementById("close-sidebar-btn");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (openBtn) openBtn.addEventListener("click", () => this.openMobileSidebar());
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeMobileSidebar());
    if (backdrop) backdrop.addEventListener("click", () => this.closeMobileSidebar());

    // Top action: Add Student
    const topAddBtn = document.getElementById("top-add-student-btn");
    if (topAddBtn) topAddBtn.addEventListener("click", () => this.openAddStudentModal());

    // Reset Demo Data button
    const resetBtn = document.getElementById("reset-data-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Reset all student, faculty, attendance, marks, and fee data to default demo state?")) {
          db.reset();
          this.showToast("System database successfully restored to demo dataset", "info");
          this.updateCounters();
          this.renderAll();
        }
      });
    }

    // Student Filter inputs
    ["student-search-input", "student-dept-filter", "student-year-filter", "student-sec-filter"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => {
          this.studentPagination.page = 1;
          this.renderStudents();
        });
        el.addEventListener("change", () => {
          this.studentPagination.page = 1;
          this.renderStudents();
        });
      }
    });

    // Student Pagination
    const prevBtn = document.getElementById("student-prev-page");
    const nextBtn = document.getElementById("student-next-page");
    if (prevBtn) prevBtn.addEventListener("click", () => {
      if (this.studentPagination.page > 1) {
        this.studentPagination.page--;
        this.renderStudents();
      }
    });
    if (nextBtn) nextBtn.addEventListener("click", () => {
      this.studentPagination.page++;
      this.renderStudents();
    });

    // Faculty Filter inputs
    ["faculty-search-input", "faculty-dept-filter", "faculty-designation-filter"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => this.renderFaculty());
        el.addEventListener("change", () => this.renderFaculty());
      }
    });

    // Attendance Batch Selectors
    ["att-dept-select", "att-year-select", "att-sec-select", "att-date-input"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("change", () => this.renderAttendance());
    });

    // Marks Batch Selectors
    ["marks-dept-select", "marks-year-select", "marks-sec-select", "marks-exam-select"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("change", () => this.renderMarks());
    });

    // Fee Filter inputs
    ["fee-search-input", "fee-status-filter", "fee-dept-filter"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => this.renderFees());
        el.addEventListener("change", () => this.renderFees());
      }
    });

    // Global Search Bar in Top Navbar
    const globalSearch = document.getElementById("global-search-input");
    const globalResults = document.getElementById("global-search-results");
    if (globalSearch && globalResults) {
      globalSearch.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length < 1) {
          globalResults.classList.add("hidden");
          return;
        }
        const matches = db.data.students.filter(s =>
          s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query) || s.department.toLowerCase().includes(query)
        ).slice(0, 5);

        if (matches.length === 0) {
          globalResults.innerHTML = `<div class="p-3 text-xs text-slate-500 text-center">No students found</div>`;
        } else {
          globalResults.innerHTML = matches.map(s => `
            <div onclick="SIMS.viewStudentProfile('${s.id}'); document.getElementById('global-search-results').classList.add('hidden');" class="p-2.5 hover:bg-slate-50 border-b border-slate-100 cursor-pointer flex items-center justify-between text-xs">
              <div>
                <p class="font-bold text-slate-800">${this.escapeHTML(s.name)}</p>
                <p class="text-[11px] text-slate-500 font-mono">${s.id} &bull; ${s.department}</p>
              </div>
              <span class="text-brand-700 text-[10px] font-semibold"><i class="fa-solid fa-chevron-right"></i></span>
            </div>
          `).join("");
        }
        globalResults.classList.remove("hidden");
      });

      // Close global search when clicking outside
      document.addEventListener("click", (e) => {
        if (!globalSearch.contains(e.target) && !globalResults.contains(e.target)) {
          globalResults.classList.add("hidden");
        }
      });
    }

    // Modal ESC key listener
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop:not(.hidden)").forEach(modal => {
          modal.classList.add("hidden");
        });
      }
    });
  },

  // Navigation Controller
  navigateTo(viewName) {
    this.activeView = viewName;

    // Toggle active link in sidebar
    document.querySelectorAll("#sidebar-nav .nav-item").forEach(link => {
      if (link.getAttribute("data-view") === viewName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Hide all views, display active view
    const viewIDs = ["dashboard", "students", "faculty", "attendance", "marks", "fees", "reports"];
    viewIDs.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) {
        if (v === viewName) {
          el.classList.remove("hidden");
        } else {
          el.classList.add("hidden");
        }
      }
    });

    // Update Topbar Title
    const titles = {
      dashboard: { title: "Dashboard Overview", subtitle: "Academic Year 2026-2027 | Central Campus" },
      students: { title: "Student Management", subtitle: "Comprehensive Records, Profiles & Enrolment" },
      faculty: { title: "Faculty Directory", subtitle: "Professors, Instructors & Departmental Roles" },
      attendance: { title: "Attendance Tracking", subtitle: "Daily Batch Rollcall, Stats & Defaulter Alerts" },
      marks: { title: "Marks & Grades Management", subtitle: "Subject Examination Scores, GPA & Transcripts" },
      fees: { title: "Tuition Fee Management", subtitle: "Student Fee Ledger, Transaction Logs & Receipts" },
      reports: { title: "Reports & Analytics Center", subtitle: "Exportable CSV & Printable Performance Summaries" }
    };
    if (titles[viewName]) {
      document.getElementById("page-title").textContent = titles[viewName].title;
      document.getElementById("page-subtitle").textContent = titles[viewName].subtitle;
    }

    // Trigger view-specific rendering
    switch (viewName) {
      case "dashboard":
        this.renderDashboard();
        break;
      case "students":
        this.renderStudents();
        break;
      case "faculty":
        this.renderFaculty();
        break;
      case "attendance":
        this.renderAttendance();
        break;
      case "marks":
        this.renderMarks();
        break;
      case "fees":
        this.renderFees();
        break;
      case "reports":
        this.renderReportPreview();
        break;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  renderAll() {
    this.renderDashboard();
    this.renderStudents();
    this.renderFaculty();
    this.renderAttendance();
    this.renderMarks();
    this.renderFees();
    this.renderReportPreview();
  },

  openMobileSidebar() {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (sidebar) sidebar.classList.remove("-translate-x-full");
    if (backdrop) backdrop.classList.remove("hidden");
  },

  closeMobileSidebar() {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (sidebar) sidebar.classList.add("-translate-x-full");
    if (backdrop) backdrop.classList.add("hidden");
  },

  // Update Navigation and Badge Counters
  updateCounters() {
    const stuCount = db.data.students.length;
    const facCount = db.data.faculty.length;
    const navStu = document.getElementById("nav-student-count");
    const navFac = document.getElementById("nav-faculty-count");
    if (navStu) navStu.textContent = stuCount;
    if (navFac) navFac.textContent = facCount;
  },

  // ============================================================================
  // MODULE 1: DASHBOARD OVERVIEW
  // ============================================================================
  renderDashboard() {
    const students = db.data.students;
    const faculty = db.data.faculty;

    // 1. Total Students
    const dashStudents = document.getElementById("dash-total-students");
    if (dashStudents) dashStudents.textContent = students.length;

    // 2. Total Faculty
    const dashFaculty = document.getElementById("dash-total-faculty");
    if (dashFaculty) dashFaculty.textContent = faculty.length;

    // 3. Total Departments
    const depts = new Set(students.map(s => s.department));
    const dashDepts = document.getElementById("dash-total-departments");
    if (dashDepts) dashDepts.textContent = Math.max(depts.size, 5);

    // 4. Average Attendance Percentage across all students
    let totalPresentSlots = 0;
    let totalSlots = 0;
    Object.values(db.data.attendanceRecords).forEach(record => {
      Object.values(record).forEach(status => {
        totalSlots++;
        if (status === "Present" || status === "Late") totalPresentSlots++;
      });
    });
    const avgAtt = totalSlots > 0 ? ((totalPresentSlots / totalSlots) * 100).toFixed(1) : "86.4";
    const dashAtt = document.getElementById("dash-avg-attendance");
    if (dashAtt) dashAtt.textContent = `${avgAtt}%`;

    // 5. Total Pending Fees
    let totalExpected = 0;
    let totalPaid = 0;
    let pendingCount = 0;
    students.forEach(s => {
      const t = s.fee?.total || 50000;
      const p = s.fee?.paid || 0;
      totalExpected += t;
      totalPaid += p;
      if (t - p > 0) pendingCount++;
    });
    const pendingDue = Math.max(0, totalExpected - totalPaid);
    const dashPending = document.getElementById("dash-pending-fees");
    const dashPendingCount = document.getElementById("dash-pending-count");
    if (dashPending) dashPending.textContent = `$${pendingDue.toLocaleString()}`;
    if (dashPendingCount) dashPendingCount.textContent = `${pendingCount} students have dues`;

    // 6. Academic Performance Average %
    let allPercentages = [];
    Object.values(db.data.marksRecords).forEach(examRecord => {
      Object.values(examRecord).forEach(subs => {
        const scores = Object.values(subs);
        if (scores.length > 0) {
          const sum = scores.reduce((a, b) => a + Number(b), 0);
          allPercentages.push(sum / scores.length);
        }
      });
    });
    const avgScore = allPercentages.length > 0 
      ? (allPercentages.reduce((a, b) => a + b, 0) / allPercentages.length).toFixed(1)
      : "82.5";
    const dashAcademic = document.getElementById("dash-academic-perf");
    if (dashAcademic) dashAcademic.textContent = `${avgScore}%`;

    // Render Recent Registrations Table
    this.renderDashboardRecentStudents();

    // Render Recent Activities
    this.renderDashboardActivities();

    // Initialize or update Chart.js instances
    this.initDashboardCharts();
  },

  renderDashboardRecentStudents() {
    const tableBody = document.getElementById("dash-recent-students-table");
    if (!tableBody) return;

    const recent = [...db.data.students].reverse().slice(0, 5);
    tableBody.innerHTML = recent.map(s => {
      const isPaid = (s.fee?.paid || 0) >= (s.fee?.total || 50000);
      const isPartial = (s.fee?.paid || 0) > 0 && !isPaid;
      const feeBadge = isPaid 
        ? `<span class="badge badge-success">Paid</span>`
        : (isPartial ? `<span class="badge badge-warning">Partial</span>` : `<span class="badge badge-danger">Pending</span>`);

      return `
        <tr>
          <td>
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-xs">
                ${s.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <p class="font-bold text-slate-800 text-xs">${this.escapeHTML(s.name)}</p>
                <p class="text-[11px] text-slate-400">${this.escapeHTML(s.email)}</p>
              </div>
            </div>
          </td>
          <td class="font-mono text-xs font-semibold text-slate-700">${s.id}</td>
          <td><span class="text-xs font-medium text-slate-700">${s.department}</span></td>
          <td><span class="text-xs text-slate-600">${s.academicYear} (${s.section})</span></td>
          <td><span class="text-xs text-slate-500">${s.admissionDate || "2024-08-15"}</span></td>
          <td>${feeBadge}</td>
          <td class="text-right">
            <button onclick="SIMS.viewStudentProfile('${s.id}')" class="text-xs font-semibold text-brand-700 hover:text-brand-900 bg-brand-50 hover:bg-brand-100 px-2.5 py-1 rounded transition">
              Profile
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  renderDashboardActivities() {
    const feed = document.getElementById("dash-activity-feed");
    if (!feed) return;
    const activities = db.data.activities || [];
    if (activities.length === 0) {
      feed.innerHTML = `<div class="text-center text-slate-400 py-4">No recent activity logs</div>`;
      return;
    }
    feed.innerHTML = activities.slice(0, 5).map(act => `
      <div class="flex items-start gap-2.5">
        <div class="w-6 h-6 rounded-md bg-slate-100 text-slate-600 flex items-center justify-center text-[10px] mt-0.5 shrink-0">
          <i class="fa-solid ${act.icon || 'fa-bell'}"></i>
        </div>
        <div class="flex-1">
          <p class="text-slate-700 leading-snug">${this.escapeHTML(act.text)}</p>
          <span class="text-[10px] text-slate-400">${act.time}</span>
        </div>
      </div>
    `).join("");
  },

  clearActivities() {
    db.data.activities = [];
    db.save();
    this.renderDashboardActivities();
    this.showToast("Activity history cleared", "info");
  },

  logActivity(text, icon = "fa-bell", type = "general") {
    db.data.activities.unshift({
      id: Date.now(),
      text,
      time: "Just now",
      icon,
      type
    });
    db.save();
    this.renderDashboardActivities();
  },

  // Dashboard Charts using Chart.js
  initDashboardCharts() {
    // 1. Enrollment Trend Chart
    const ctxEnroll = document.getElementById("chart-enrollment")?.getContext("2d");
    if (ctxEnroll) {
      if (this.charts.enrollment) this.charts.enrollment.destroy();
      this.charts.enrollment = new Chart(ctxEnroll, {
        type: "bar",
        data: {
          labels: ["2022-23", "2023-24", "2024-25", "2025-26", "2026-27"],
          datasets: [
            {
              label: "New Enrollments",
              data: [380, 440, 510, 590, 680],
              backgroundColor: "#1e40af",
              borderRadius: 6,
              barThickness: 24
            },
            {
              type: "line",
              label: "Graduation Rate %",
              data: [88, 91, 93, 94, 96],
              borderColor: "#10b981",
              backgroundColor: "#10b981",
              borderWidth: 2,
              pointRadius: 4,
              yAxisID: "y1"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
              labels: { boxWidth: 12, font: { size: 11, family: "Plus Jakarta Sans" } }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: "#f1f5f9" },
              ticks: { font: { size: 10 } }
            },
            y1: {
              position: "right",
              min: 50,
              max: 100,
              grid: { drawOnChartArea: false },
              ticks: {
                callback: v => `${v}%`,
                font: { size: 10 }
              }
            },
            x: {
              grid: { display: false },
              ticks: { font: { size: 10 } }
            }
          }
        }
      });
    }

    // 2. Department-wise Distribution (Doughnut)
    const ctxDept = document.getElementById("chart-department")?.getContext("2d");
    if (ctxDept) {
      if (this.charts.department) this.charts.department.destroy();

      const deptCounts = {};
      db.data.students.forEach(s => {
        deptCounts[s.department] = (deptCounts[s.department] || 0) + 1;
      });

      this.charts.department = new Chart(ctxDept, {
        type: "doughnut",
        data: {
          labels: Object.keys(deptCounts),
          datasets: [{
            data: Object.values(deptCounts),
            backgroundColor: ["#1e40af", "#3b82f6", "#06b6d4", "#f59e0b", "#10b981"],
            borderWidth: 2,
            borderColor: "#ffffff"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 10, font: { size: 10, family: "Plus Jakarta Sans" } }
            }
          },
          cutout: "68%"
        }
      });
    }

    // 3. Monthly Attendance Chart
    const ctxAtt = document.getElementById("chart-attendance")?.getContext("2d");
    if (ctxAtt) {
      if (this.charts.attendance) this.charts.attendance.destroy();
      this.charts.attendance = new Chart(ctxAtt, {
        type: "line",
        data: {
          labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
          datasets: [
            {
              label: "Average Attendance %",
              data: [89, 92, 85, 87, 83, 88],
              borderColor: "#2563eb",
              backgroundColor: "rgba(37, 99, 235, 0.08)",
              fill: true,
              tension: 0.35,
              borderWidth: 2.5,
              pointBackgroundColor: "#1e40af",
              pointRadius: 4
            },
            {
              label: "75% Minimum Bar",
              data: [75, 75, 75, 75, 75, 75],
              borderColor: "#ef4444",
              borderDash: [5, 5],
              borderWidth: 1.5,
              pointRadius: 0,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              min: 60,
              max: 100,
              ticks: { callback: v => `${v}%`, font: { size: 10 } },
              grid: { color: "#f1f5f9" }
            },
            x: {
              grid: { display: false },
              ticks: { font: { size: 10 } }
            }
          }
        }
      });
    }
  },

  // ============================================================================
  // MODULE 2: STUDENT MANAGEMENT
  // ============================================================================
  renderStudents() {
    const tableBody = document.getElementById("student-list-table");
    const emptyState = document.getElementById("student-empty-state");
    if (!tableBody) return;

    const search = document.getElementById("student-search-input")?.value.trim().toLowerCase() || "";
    const deptFilter = document.getElementById("student-dept-filter")?.value || "";
    const yearFilter = document.getElementById("student-year-filter")?.value || "";
    const secFilter = document.getElementById("student-sec-filter")?.value || "";

    // Filter students
    let filtered = db.data.students.filter(s => {
      const matchSearch = !search || s.name.toLowerCase().includes(search) || s.id.toLowerCase().includes(search) || s.email.toLowerCase().includes(search);
      const matchDept = !deptFilter || s.department === deptFilter;
      const matchYear = !yearFilter || s.academicYear === yearFilter;
      const matchSec = !secFilter || s.section === secFilter;
      return matchSearch && matchDept && matchYear && matchSec;
    });

    // Counts
    const totalCountEl = document.getElementById("student-total-count");
    const displayedCountEl = document.getElementById("student-displayed-count");
    if (totalCountEl) totalCountEl.textContent = db.data.students.length;
    if (displayedCountEl) displayedCountEl.textContent = filtered.length;

    // Pagination
    const totalPages = Math.max(1, Math.ceil(filtered.length / this.studentPagination.pageSize));
    if (this.studentPagination.page > totalPages) this.studentPagination.page = totalPages;
    const startIndex = (this.studentPagination.page - 1) * this.studentPagination.pageSize;
    const paginated = filtered.slice(startIndex, startIndex + this.studentPagination.pageSize);

    // Update pagination controls
    const pageInfo = document.getElementById("student-page-info");
    const prevBtn = document.getElementById("student-prev-page");
    const nextBtn = document.getElementById("student-next-page");
    if (pageInfo) pageInfo.textContent = `Page ${this.studentPagination.page} of ${totalPages}`;
    if (prevBtn) prevBtn.disabled = this.studentPagination.page <= 1;
    if (nextBtn) nextBtn.disabled = this.studentPagination.page >= totalPages;

    if (paginated.length === 0) {
      tableBody.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    tableBody.innerHTML = paginated.map(s => {
      const attRate = this.calculateStudentAttendance(s.id);
      const isDefaulter = attRate < 75;
      const attBadge = isDefaulter
        ? `<span class="badge badge-danger" title="Attendance is below mandatory 75% threshold"><i class="fa-solid fa-triangle-exclamation"></i> ${attRate}% (Low)</span>`
        : `<span class="badge badge-success">${attRate}%</span>`;

      const isPaid = (s.fee?.paid || 0) >= (s.fee?.total || 50000);
      const isPartial = (s.fee?.paid || 0) > 0 && !isPaid;
      const feeBadge = isPaid
        ? `<span class="badge badge-success">Paid</span>`
        : (isPartial ? `<span class="badge badge-warning">Partial</span>` : `<span class="badge badge-danger">Pending</span>`);

      return `
        <tr>
          <td class="font-mono text-xs font-bold text-brand-900 cursor-pointer hover:underline" onclick="SIMS.viewStudentProfile('${s.id}')">
            ${s.id}
          </td>
          <td>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-slate-100 text-brand-800 flex items-center justify-center font-bold text-xs border border-slate-200">
                ${s.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <p class="font-bold text-slate-800 text-xs hover:text-brand-800 cursor-pointer" onclick="SIMS.viewStudentProfile('${s.id}')">
                  ${this.escapeHTML(s.name)}
                </p>
                <p class="text-[11px] text-slate-400">${s.gender} &bull; DOB: ${s.dob || 'N/A'}</p>
              </div>
            </div>
          </td>
          <td>
            <p class="text-xs font-semibold text-slate-800">${s.department}</p>
            <p class="text-[11px] text-slate-500">${s.academicYear} (Section ${s.section})</p>
          </td>
          <td>
            <p class="text-xs text-slate-700">${this.escapeHTML(s.email)}</p>
            <p class="text-[11px] text-slate-400">${this.escapeHTML(s.phone)}</p>
          </td>
          <td>${attBadge}</td>
          <td>${feeBadge}</td>
          <td class="text-right whitespace-nowrap">
            <button onclick="SIMS.viewStudentProfile('${s.id}')" title="View Full Profile" class="p-1.5 text-slate-500 hover:text-brand-700 hover:bg-slate-100 rounded transition">
              <i class="fa-solid fa-eye text-xs"></i>
            </button>
            <button onclick="SIMS.openEditStudentModal('${s.id}')" title="Edit Student Record" class="p-1.5 text-slate-500 hover:text-amber-600 hover:bg-slate-100 rounded transition">
              <i class="fa-solid fa-pen-to-square text-xs"></i>
            </button>
            <button onclick="SIMS.confirmDeleteStudent('${s.id}')" title="Delete Student" class="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-slate-100 rounded transition">
              <i class="fa-solid fa-trash text-xs"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  resetStudentFilters() {
    document.getElementById("student-search-input").value = "";
    document.getElementById("student-dept-filter").value = "";
    document.getElementById("student-year-filter").value = "";
    document.getElementById("student-sec-filter").value = "";
    this.studentPagination.page = 1;
    this.renderStudents();
  },

  openAddStudentModal() {
    document.getElementById("form-student").reset();
    document.getElementById("student-edit-id").value = "";
    document.getElementById("modal-student-title").textContent = "Register New Student";
    // Generate next Student ID automatically
    const nextNum = String(db.data.students.length + 1).padStart(3, "0");
    document.getElementById("stu-id-input").value = `STU-2024-${nextNum}`;
    document.getElementById("stu-id-input").readOnly = false;
    document.getElementById("stu-admission-input").value = new Date().toISOString().split("T")[0];
    this.showModal("modal-add-student");
  },

  openEditStudentModal(id) {
    const student = db.data.students.find(s => s.id === id);
    if (!student) return;

    document.getElementById("modal-student-title").textContent = "Edit Student Information";
    document.getElementById("student-edit-id").value = student.id;
    document.getElementById("stu-id-input").value = student.id;
    document.getElementById("stu-id-input").readOnly = true;
    document.getElementById("stu-name-input").value = student.name;
    document.getElementById("stu-gender-input").value = student.gender || "Male";
    document.getElementById("stu-dob-input").value = student.dob || "";
    document.getElementById("stu-email-input").value = student.email;
    document.getElementById("stu-phone-input").value = student.phone;
    document.getElementById("stu-dept-input").value = student.department;
    document.getElementById("stu-year-input").value = student.academicYear;
    document.getElementById("stu-sec-input").value = student.section;
    document.getElementById("stu-admission-input").value = student.admissionDate || "";
    document.getElementById("stu-address-input").value = student.address || "";

    this.showModal("modal-add-student");
  },

  handleSaveStudent(e) {
    e.preventDefault();
    const editId = document.getElementById("student-edit-id").value;
    const id = document.getElementById("stu-id-input").value.trim();
    const name = document.getElementById("stu-name-input").value.trim();
    const gender = document.getElementById("stu-gender-input").value;
    const dob = document.getElementById("stu-dob-input").value;
    const email = document.getElementById("stu-email-input").value.trim();
    const phone = document.getElementById("stu-phone-input").value.trim();
    const department = document.getElementById("stu-dept-input").value;
    const academicYear = document.getElementById("stu-year-input").value;
    const section = document.getElementById("stu-sec-input").value;
    const admissionDate = document.getElementById("stu-admission-input").value;
    const address = document.getElementById("stu-address-input").value.trim();

    if (editId) {
      // Editing existing student
      const index = db.data.students.findIndex(s => s.id === editId);
      if (index !== -1) {
        db.data.students[index] = {
          ...db.data.students[index],
          name, gender, dob, email, phone, department, academicYear, section, admissionDate, address
        };
        db.save();
        this.showToast(`Student ${name} updated successfully`, "success");
        this.logActivity(`Updated academic profile for ${name} (${id})`, "fa-pen-to-square");
      }
    } else {
      // Check for duplicate ID
      if (db.data.students.some(s => s.id === id)) {
        alert(`Student with ID ${id} already exists.`);
        return;
      }
      // Create new student
      const newStudent = {
        id, name, gender, dob, email, phone, address, department, academicYear, section, admissionDate,
        fee: { total: 50000, paid: 0, history: [] }
      };
      db.data.students.push(newStudent);
      db.save();
      this.showToast(`New student ${name} registered successfully`, "success");
      this.logActivity(`Enrolled new student ${name} into ${department}`, "fa-user-plus");
    }

    this.closeModal("modal-add-student");
    this.updateCounters();
    this.renderStudents();
    this.renderDashboard();
  },

  confirmDeleteStudent(id) {
    const student = db.data.students.find(s => s.id === id);
    if (!student) return;

    document.getElementById("delete-modal-title").textContent = "Delete Student Record";
    document.getElementById("delete-modal-message").textContent = `Are you sure you want to permanently delete ${student.name} (${student.id})? All associated marks and attendance will also be cleared.`;
    
    const confirmBtn = document.getElementById("delete-confirm-btn");
    confirmBtn.onclick = () => {
      db.data.students = db.data.students.filter(s => s.id !== id);
      db.save();
      this.closeModal("modal-confirm-delete");
      this.showToast(`Student ${student.name} deleted`, "info");
      this.logActivity(`Deleted student record for ${student.name} (${id})`, "fa-trash", "alert");
      this.updateCounters();
      this.renderStudents();
      this.renderDashboard();
    };

    this.showModal("modal-confirm-delete");
  },

  viewStudentProfile(id) {
    const student = db.data.students.find(s => s.id === id);
    if (!student) return;

    // Header info
    document.getElementById("prof-name").textContent = student.name;
    document.getElementById("prof-id").textContent = student.id;
    document.getElementById("prof-avatar").textContent = student.name.substring(0, 2).toUpperCase();
    document.getElementById("prof-dept-year").textContent = `${student.department} • ${student.academicYear} (Section ${student.section})`;

    // Metrics strip
    const attRate = this.calculateStudentAttendance(student.id);
    const attValEl = document.getElementById("prof-attendance-val");
    if (attValEl) {
      attValEl.textContent = `${attRate}%`;
      attValEl.className = attRate < 75 ? "text-lg font-bold text-rose-600" : "text-lg font-bold text-emerald-600";
    }

    // Average grade calculation
    const examSummary = this.getStudentExamSummary(student);
    document.getElementById("prof-grade-val").textContent = `${examSummary.grade} (${examSummary.percent}%)`;

    // Fee balance
    const feeTotal = student.fee?.total || 50000;
    const feePaid = student.fee?.paid || 0;
    const feeDue = Math.max(0, feeTotal - feePaid);
    const feeValEl = document.getElementById("prof-fee-val");
    if (feeValEl) {
      feeValEl.textContent = feeDue === 0 ? "Fully Paid" : `$${feeDue.toLocaleString()} Due`;
      feeValEl.className = feeDue === 0 ? "text-lg font-bold text-emerald-600" : "text-lg font-bold text-rose-600";
    }

    // Personal details
    document.getElementById("prof-dob").textContent = student.dob || "N/A";
    document.getElementById("prof-gender").textContent = student.gender || "N/A";
    document.getElementById("prof-email").textContent = student.email;
    document.getElementById("prof-phone").textContent = student.phone;
    document.getElementById("prof-admission").textContent = student.admissionDate || "N/A";
    document.getElementById("prof-section").textContent = student.section;
    document.getElementById("prof-address").textContent = student.address || "N/A";

    // Marks breakdown
    const marksBreakdown = document.getElementById("prof-marks-breakdown");
    const subjects = DEPARTMENT_SUBJECTS[student.department] || DEPARTMENT_SUBJECTS["Computer Science"];
    const examKey = `Final Semester_${student.department}_${student.academicYear}_${student.section}`;
    const studentMarks = db.data.marksRecords[examKey]?.[student.id] || {};

    marksBreakdown.innerHTML = `
      <table class="w-full text-left text-xs">
        <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
          <tr>
            <th class="p-2.5">Subject</th>
            <th class="p-2.5 text-center">Score (Max 100)</th>
            <th class="p-2.5 text-center">Grade</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          ${subjects.map((sub, i) => {
            const score = studentMarks[`sub${i+1}`] !== undefined ? studentMarks[`sub${i+1}`] : 75;
            const grade = this.calculateGrade(score);
            return `
              <tr>
                <td class="p-2.5 font-medium text-slate-800">${sub.name} <span class="text-slate-400 font-mono text-[10px]">(${sub.code})</span></td>
                <td class="p-2.5 text-center font-bold text-slate-900">${score}</td>
                <td class="p-2.5 text-center"><span class="badge ${grade.badge}">${grade.grade}</span></td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;

    // Fee History
    const feeHistory = document.getElementById("prof-fee-history");
    const history = student.fee?.history || [];
    if (history.length === 0) {
      feeHistory.innerHTML = `<p class="text-slate-400 italic">No payments logged yet.</p>`;
    } else {
      feeHistory.innerHTML = history.map(item => `
        <div class="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs">
          <div>
            <span class="font-mono font-bold text-slate-800">${item.receiptNo}</span>
            <span class="text-slate-400 text-[11px] ml-2">${item.date} &bull; ${item.method}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-emerald-600">+$${Number(item.amount).toLocaleString()}</span>
            <button onclick="SIMS.showReceiptModal('${student.id}', '${item.receiptNo}')" class="text-brand-700 hover:text-brand-900 font-semibold text-[11px]">Receipt</button>
          </div>
        </div>
      `).join("");
    }

    // Connect Print Report Card button
    const printCardBtn = document.getElementById("prof-print-report-card-btn");
    if (printCardBtn) {
      printCardBtn.onclick = () => this.showReportCardModal(student.id);
    }

    this.showModal("modal-student-profile");
  },

  exportStudentsCSV() {
    const students = db.data.students;
    const headers = ["Student ID", "Full Name", "Gender", "Date of Birth", "Email", "Phone", "Department", "Academic Year", "Section", "Admission Date", "Total Fee", "Paid Fee", "Attendance %"];
    const rows = students.map(s => [
      `"${s.id}"`,
      `"${s.name}"`,
      `"${s.gender || ''}"`,
      `"${s.dob || ''}"`,
      `"${s.email}"`,
      `"${s.phone}"`,
      `"${s.department}"`,
      `"${s.academicYear}"`,
      `"${s.section}"`,
      `"${s.admissionDate || ''}"`,
      s.fee?.total || 50000,
      s.fee?.paid || 0,
      `"${this.calculateStudentAttendance(s.id)}%"`
    ]);

    this.downloadCSV("SIMS_Students_Directory.csv", [headers.join(","), ...rows.map(r => r.join(","))].join("\n"));
  },

  // ============================================================================
  // MODULE 3: FACULTY MANAGEMENT
  // ============================================================================
  renderFaculty() {
    const grid = document.getElementById("faculty-grid");
    if (!grid) return;

    const search = document.getElementById("faculty-search-input")?.value.trim().toLowerCase() || "";
    const deptFilter = document.getElementById("faculty-dept-filter")?.value || "";
    const desigFilter = document.getElementById("faculty-designation-filter")?.value || "";

    const filtered = db.data.faculty.filter(f => {
      const matchSearch = !search || f.name.toLowerCase().includes(search) || f.id.toLowerCase().includes(search) || (f.subjects && f.subjects.toLowerCase().includes(search));
      const matchDept = !deptFilter || f.department === deptFilter;
      const matchDesig = !desigFilter || f.designation === desigFilter;
      return matchSearch && matchDept && matchDesig;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full p-8 text-center bg-white rounded-xl border border-slate-200">
          <p class="text-sm font-bold text-slate-700">No Faculty Members Found</p>
          <p class="text-xs text-slate-400 mt-1">Try adjusting your search criteria</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(f => `
      <div class="sims-card p-5 flex flex-col justify-between sims-card-hover">
        <div>
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-700 to-indigo-800 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                ${f.name.replace("Dr. ", "").replace("Prof. ", "").substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-sm leading-tight">${this.escapeHTML(f.name)}</h4>
                <span class="inline-block mt-0.5 text-[11px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">${f.designation}</span>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <button onclick="SIMS.openEditFacultyModal('${f.id}')" title="Edit Faculty" class="p-1 text-slate-400 hover:text-amber-600 rounded">
                <i class="fa-solid fa-pen-to-square text-xs"></i>
              </button>
              <button onclick="SIMS.confirmDeleteFaculty('${f.id}')" title="Delete Faculty" class="p-1 text-slate-400 hover:text-rose-600 rounded">
                <i class="fa-solid fa-trash text-xs"></i>
              </button>
            </div>
          </div>

          <div class="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-400">Department:</span>
              <strong class="text-slate-800 font-semibold">${f.department}</strong>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-400">Faculty ID:</span>
              <span class="font-mono text-slate-700">${f.id}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-400">Qualification:</span>
              <span class="text-slate-700 truncate max-w-[160px]" title="${this.escapeHTML(f.qualification)}">${this.escapeHTML(f.qualification)}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-400">Email:</span>
              <a href="mailto:${f.email}" class="text-brand-700 hover:underline truncate max-w-[170px]">${f.email}</a>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-400">Phone:</span>
              <span>${f.phone}</span>
            </div>
          </div>

          ${f.subjects ? `
            <div class="mt-3 pt-3 border-t border-slate-100">
              <p class="text-[10px] uppercase font-bold text-slate-400 mb-1">Assigned Courses</p>
              <p class="text-xs text-slate-600 leading-relaxed">${this.escapeHTML(f.subjects)}</p>
            </div>
          ` : ''}
        </div>
      </div>
    `).join("");
  },

  openAddFacultyModal() {
    document.getElementById("form-faculty").reset();
    document.getElementById("faculty-edit-id").value = "";
    document.getElementById("modal-faculty-title").textContent = "Add Faculty Member";
    const nextNum = String(db.data.faculty.length + 101);
    document.getElementById("fac-id-input").value = `FAC-100-${nextNum}`;
    document.getElementById("fac-id-input").readOnly = false;
    document.getElementById("fac-joining-input").value = new Date().toISOString().split("T")[0];
    this.showModal("modal-add-faculty");
  },

  openEditFacultyModal(id) {
    const f = db.data.faculty.find(item => item.id === id);
    if (!f) return;

    document.getElementById("modal-faculty-title").textContent = "Edit Faculty Details";
    document.getElementById("faculty-edit-id").value = f.id;
    document.getElementById("fac-id-input").value = f.id;
    document.getElementById("fac-id-input").readOnly = true;
    document.getElementById("fac-name-input").value = f.name;
    document.getElementById("fac-dept-input").value = f.department;
    document.getElementById("fac-designation-input").value = f.designation;
    document.getElementById("fac-qual-input").value = f.qualification || "";
    document.getElementById("fac-joining-input").value = f.joiningDate || "";
    document.getElementById("fac-email-input").value = f.email;
    document.getElementById("fac-phone-input").value = f.phone;
    document.getElementById("fac-subjects-input").value = f.subjects || "";

    this.showModal("modal-add-faculty");
  },

  handleSaveFaculty(e) {
    e.preventDefault();
    const editId = document.getElementById("faculty-edit-id").value;
    const id = document.getElementById("fac-id-input").value.trim();
    const name = document.getElementById("fac-name-input").value.trim();
    const department = document.getElementById("fac-dept-input").value;
    const designation = document.getElementById("fac-designation-input").value;
    const qualification = document.getElementById("fac-qual-input").value.trim();
    const joiningDate = document.getElementById("fac-joining-input").value;
    const email = document.getElementById("fac-email-input").value.trim();
    const phone = document.getElementById("fac-phone-input").value.trim();
    const subjects = document.getElementById("fac-subjects-input").value.trim();

    if (editId) {
      const idx = db.data.faculty.findIndex(f => f.id === editId);
      if (idx !== -1) {
        db.data.faculty[idx] = {
          ...db.data.faculty[idx],
          name, department, designation, qualification, joiningDate, email, phone, subjects
        };
        db.save();
        this.showToast(`Faculty record for ${name} updated`, "success");
        this.logActivity(`Updated faculty profile for ${name}`, "fa-chalkboard-user");
      }
    } else {
      if (db.data.faculty.some(f => f.id === id)) {
        alert(`Faculty member with ID ${id} already exists`);
        return;
      }
      db.data.faculty.push({
        id, name, department, designation, qualification, joiningDate, email, phone, subjects
      });
      db.save();
      this.showToast(`Faculty member ${name} added successfully`, "success");
      this.logActivity(`Added faculty member ${name} to ${department}`, "fa-user-tie");
    }

    this.closeModal("modal-add-faculty");
    this.updateCounters();
    this.renderFaculty();
    this.renderDashboard();
  },

  confirmDeleteFaculty(id) {
    const f = db.data.faculty.find(item => item.id === id);
    if (!f) return;

    document.getElementById("delete-modal-title").textContent = "Delete Faculty Member";
    document.getElementById("delete-modal-message").textContent = `Are you sure you want to remove ${f.name} (${f.id}) from the faculty roster?`;
    
    const confirmBtn = document.getElementById("delete-confirm-btn");
    confirmBtn.onclick = () => {
      db.data.faculty = db.data.faculty.filter(item => item.id !== id);
      db.save();
      this.closeModal("modal-confirm-delete");
      this.showToast(`Faculty member ${f.name} removed`, "info");
      this.logActivity(`Removed faculty member ${f.name}`, "fa-trash", "alert");
      this.updateCounters();
      this.renderFaculty();
      this.renderDashboard();
    };

    this.showModal("modal-confirm-delete");
  },

  // ============================================================================
  // MODULE 4: ATTENDANCE MANAGEMENT
  // ============================================================================
  toggleDefaultersFilter() {
    this.showDefaultersOnly = !this.showDefaultersOnly;
    const btn = document.getElementById("attendance-defaulter-toggle-btn");
    if (btn) {
      if (this.showDefaultersOnly) {
        btn.classList.add("bg-rose-100", "text-rose-800", "border-rose-300");
        btn.classList.remove("bg-amber-50", "text-amber-800", "border-amber-200");
        btn.innerHTML = `<i class="fa-solid fa-filter-circle-xmark mr-1"></i> Showing Defaulters Only (Reset)`;
      } else {
        btn.classList.remove("bg-rose-100", "text-rose-800", "border-rose-300");
        btn.classList.add("bg-amber-50", "text-amber-800", "border-amber-200");
        btn.innerHTML = `<i class="fa-solid fa-triangle-exclamation mr-1"></i> Show Defaulters (&lt;75%)`;
      }
    }
    this.renderAttendance();
  },

  renderAttendance() {
    const dept = document.getElementById("att-dept-select")?.value || "Computer Science";
    const year = document.getElementById("att-year-select")?.value || "3rd Year";
    const sec = document.getElementById("att-sec-select")?.value || "A";
    const date = document.getElementById("att-date-input")?.value || new Date().toISOString().split("T")[0];

    const tableBody = document.getElementById("attendance-list-table");
    if (!tableBody) return;

    // Filter students for this batch
    let batchStudents = db.data.students.filter(s =>
      s.department === dept && s.academicYear === year && s.section === sec
    );

    if (this.showDefaultersOnly) {
      batchStudents = batchStudents.filter(s => this.calculateStudentAttendance(s.id) < 75);
    }

    const key = `${date}_${dept}_${year}_${sec}`;
    const todayRecords = db.data.attendanceRecords[key] || {};

    let presentCount = 0;
    let absentCount = 0;

    tableBody.innerHTML = batchStudents.map(s => {
      // Default to recorded status, or 'Present' if not yet recorded
      const status = todayRecords[s.id] || "Present";
      if (status === "Present" || status === "Late") presentCount++;
      else absentCount++;

      const overallPercent = this.calculateStudentAttendance(s.id);
      const isDefaulter = overallPercent < 75;

      const defaulterBadge = isDefaulter 
        ? `<span class="badge badge-danger"><i class="fa-solid fa-triangle-exclamation"></i> Below 75% (${overallPercent}%)</span>`
        : `<span class="badge badge-success">Good Standing (${overallPercent}%)</span>`;

      return `
        <tr class="${isDefaulter ? 'bg-rose-50/30' : ''}">
          <td class="font-mono text-xs font-bold text-slate-800">${s.id}</td>
          <td>
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-slate-100 text-brand-800 flex items-center justify-center font-bold text-xs">
                ${s.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <p class="font-bold text-slate-900 text-xs">${this.escapeHTML(s.name)}</p>
                <p class="text-[11px] text-slate-400">${s.email}</p>
              </div>
            </div>
          </td>
          <td>
            <div class="flex items-center gap-2">
              <div class="w-24 bg-slate-200 rounded-full h-2 overflow-hidden">
                <div class="h-full ${isDefaulter ? 'bg-rose-500' : 'bg-emerald-500'}" style="width: ${overallPercent}%"></div>
              </div>
              <span class="text-xs font-bold ${isDefaulter ? 'text-rose-600' : 'text-emerald-600'}">${overallPercent}%</span>
            </div>
          </td>
          <td>${defaulterBadge}</td>
          <td class="text-center">
            <div class="inline-flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <label class="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold cursor-pointer ${status === 'Present' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                <input type="radio" name="att_status_${s.id}" value="Present" ${status === 'Present' ? 'checked' : ''} class="hidden" onchange="SIMS.onAttendanceStatusChange('${s.id}', 'Present')">
                <i class="fa-solid fa-check text-[10px]"></i> Present
              </label>
              <label class="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold cursor-pointer ${status === 'Absent' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                <input type="radio" name="att_status_${s.id}" value="Absent" ${status === 'Absent' ? 'checked' : ''} class="hidden" onchange="SIMS.onAttendanceStatusChange('${s.id}', 'Absent')">
                <i class="fa-solid fa-xmark text-[10px]"></i> Absent
              </label>
              <label class="flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold cursor-pointer ${status === 'Late' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                <input type="radio" name="att_status_${s.id}" value="Late" ${status === 'Late' ? 'checked' : ''} class="hidden" onchange="SIMS.onAttendanceStatusChange('${s.id}', 'Late')">
                Late
              </label>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    // Update Summary Header
    const totalStudents = batchStudents.length;
    const rate = totalStudents > 0 ? ((presentCount / totalStudents) * 100).toFixed(0) : 0;

    const elTotal = document.getElementById("att-summary-total");
    const elPres = document.getElementById("att-summary-present");
    const elAbs = document.getElementById("att-summary-absent");
    const elRate = document.getElementById("att-summary-rate");

    if (elTotal) elTotal.textContent = totalStudents;
    if (elPres) elPres.textContent = presentCount;
    if (elAbs) elAbs.textContent = absentCount;
    if (elRate) elRate.textContent = `${rate}%`;
  },

  onAttendanceStatusChange(studentId, newStatus) {
    const dept = document.getElementById("att-dept-select").value;
    const year = document.getElementById("att-year-select").value;
    const sec = document.getElementById("att-sec-select").value;
    const date = document.getElementById("att-date-input").value;
    const key = `${date}_${dept}_${year}_${sec}`;

    if (!db.data.attendanceRecords[key]) {
      db.data.attendanceRecords[key] = {};
    }
    db.data.attendanceRecords[key][studentId] = newStatus;
    // Don't auto-save immediately to disk until user clicks 'Save Attendance' or marks
    this.renderAttendance();
  },

  markAllAttendance(status) {
    const dept = document.getElementById("att-dept-select").value;
    const year = document.getElementById("att-year-select").value;
    const sec = document.getElementById("att-sec-select").value;
    const date = document.getElementById("att-date-input").value;
    const key = `${date}_${dept}_${year}_${sec}`;

    if (!db.data.attendanceRecords[key]) {
      db.data.attendanceRecords[key] = {};
    }

    const batchStudents = db.data.students.filter(s =>
      s.department === dept && s.academicYear === year && s.section === sec
    );

    batchStudents.forEach(s => {
      db.data.attendanceRecords[key][s.id] = status;
    });

    this.renderAttendance();
    this.showToast(`Marked all ${batchStudents.length} students as ${status}`, "info");
  },

  saveAttendanceBatch() {
    const dept = document.getElementById("att-dept-select").value;
    const year = document.getElementById("att-year-select").value;
    const sec = document.getElementById("att-sec-select").value;
    const date = document.getElementById("att-date-input").value;
    const key = `${date}_${dept}_${year}_${sec}`;

    // Guarantee that every student in batch has an entry
    if (!db.data.attendanceRecords[key]) {
      db.data.attendanceRecords[key] = {};
    }

    const batchStudents = db.data.students.filter(s =>
      s.department === dept && s.academicYear === year && s.section === sec
    );

    batchStudents.forEach(s => {
      if (!db.data.attendanceRecords[key][s.id]) {
        db.data.attendanceRecords[key][s.id] = "Present";
      }
    });

    db.save();
    this.showToast(`Attendance for ${dept} (${date}) recorded successfully!`, "success");
    this.logActivity(`Saved attendance records for ${dept} ${year} Sec ${sec} (${date})`, "fa-calendar-check");
    this.renderAttendance();
    this.renderDashboard();
  },

  calculateStudentAttendance(studentId) {
    let attended = 0;
    let totalClasses = 0;

    Object.values(db.data.attendanceRecords).forEach(classBatch => {
      if (classBatch[studentId]) {
        totalClasses++;
        if (classBatch[studentId] === "Present" || classBatch[studentId] === "Late") {
          attended++;
        }
      }
    });

    if (totalClasses === 0) return 92; // default high attendance for new demo enrollments
    return Math.round((attended / totalClasses) * 100);
  },

  // ============================================================================
  // MODULE 5: MARKS & GRADES MANAGEMENT
  // ============================================================================
  renderMarks() {
    const dept = document.getElementById("marks-dept-select")?.value || "Computer Science";
    const year = document.getElementById("marks-year-select")?.value || "3rd Year";
    const sec = document.getElementById("marks-sec-select")?.value || "A";
    const exam = document.getElementById("marks-exam-select")?.value || "Final Semester";

    const thead = document.getElementById("marks-table-header");
    const tbody = document.getElementById("marks-table-body");
    if (!thead || !tbody) return;

    const subjects = DEPARTMENT_SUBJECTS[dept] || DEPARTMENT_SUBJECTS["Computer Science"];

    // Render Subjects in Table Header
    thead.innerHTML = `
      <tr>
        <th class="whitespace-nowrap">Student</th>
        ${subjects.map((sub, i) => `
          <th class="text-center whitespace-nowrap" title="${sub.name}">
            <div class="text-[11px] font-bold text-slate-700">${sub.code}</div>
            <div class="text-[10px] text-slate-400 font-normal truncate max-w-[100px]">${sub.name}</div>
          </th>
        `).join("")}
        <th class="text-center">Total (500)</th>
        <th class="text-center">Percentage</th>
        <th class="text-center">Grade</th>
        <th class="text-center">Status</th>
        <th class="text-right">Action</th>
      </tr>
    `;

    // Filter students for this batch
    const batchStudents = db.data.students.filter(s =>
      s.department === dept && s.academicYear === year && s.section === sec
    );

    const examKey = `${exam}_${dept}_${year}_${sec}`;
    const examData = db.data.marksRecords[examKey] || {};

    if (batchStudents.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="${subjects.length + 6}" class="p-8 text-center text-slate-400">
            No students found in ${dept} (${year}, Sec ${sec})
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = batchStudents.map(s => {
      const studentScores = examData[s.id] || { sub1: 78, sub2: 82, sub3: 85, sub4: 80, sub5: 88 };
      
      let sum = 0;
      subjects.forEach((_, i) => {
        sum += Number(studentScores[`sub${i+1}`] || 0);
      });
      const percent = (sum / (subjects.length * 100) * 100).toFixed(1);
      const gradeInfo = this.calculateGrade(Number(percent));

      return `
        <tr>
          <td>
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-xs">
                ${s.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <p class="font-bold text-xs text-slate-900">${this.escapeHTML(s.name)}</p>
                <p class="font-mono text-[10px] text-slate-500">${s.id}</p>
              </div>
            </div>
          </td>

          ${subjects.map((_, i) => {
            const val = studentScores[`sub${i+1}`] !== undefined ? studentScores[`sub${i+1}`] : 80;
            return `
              <td class="text-center">
                <input type="number" min="0" max="100" value="${val}"
                  id="mark_${s.id}_sub${i+1}"
                  onchange="SIMS.updateStudentMarkInput('${s.id}', ${i+1}, this.value)"
                  class="w-14 text-center px-1.5 py-1 bg-slate-50 border border-slate-200 rounded font-bold text-slate-800 text-xs focus:ring-1 focus:ring-brand-500 focus:bg-white transition">
              </td>
            `;
          }).join("")}

          <td class="text-center font-bold text-slate-900" id="mark_total_${s.id}">${sum}</td>
          <td class="text-center font-bold text-brand-900" id="mark_pct_${s.id}">${percent}%</td>
          <td class="text-center" id="mark_grade_${s.id}">
            <span class="badge ${gradeInfo.badge}">${gradeInfo.grade}</span>
          </td>
          <td class="text-center" id="mark_status_${s.id}">
            ${Number(percent) >= 50 ? `<span class="badge badge-success">PASS</span>` : `<span class="badge badge-danger">FAIL</span>`}
          </td>
          <td class="text-right whitespace-nowrap">
            <button onclick="SIMS.saveStudentMarksRow('${s.id}')" title="Save Marks" class="px-2 py-1 bg-brand-800 hover:bg-brand-900 text-white rounded text-xs font-semibold mr-1 transition">
              Save
            </button>
            <button onclick="SIMS.showReportCardModal('${s.id}')" title="Generate Report Card" class="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold transition">
              <i class="fa-solid fa-print"></i> Card
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  updateStudentMarkInput(studentId, subIndex, newValue) {
    const val = Math.min(100, Math.max(0, Number(newValue) || 0));
    const dept = document.getElementById("marks-dept-select").value;
    const year = document.getElementById("marks-year-select").value;
    const sec = document.getElementById("marks-sec-select").value;
    const exam = document.getElementById("marks-exam-select").value;
    const examKey = `${exam}_${dept}_${year}_${sec}`;

    if (!db.data.marksRecords[examKey]) db.data.marksRecords[examKey] = {};
    if (!db.data.marksRecords[examKey][studentId]) {
      db.data.marksRecords[examKey][studentId] = { sub1: 75, sub2: 75, sub3: 75, sub4: 75, sub5: 75 };
    }
    db.data.marksRecords[examKey][studentId][`sub${subIndex}`] = val;

    // Recalculate row totals
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
      sum += Number(db.data.marksRecords[examKey][studentId][`sub${i}`] || 0);
    }
    const percent = (sum / 5).toFixed(1);
    const gradeInfo = this.calculateGrade(Number(percent));

    const totalEl = document.getElementById(`mark_total_${studentId}`);
    const pctEl = document.getElementById(`mark_pct_${studentId}`);
    const gradeEl = document.getElementById(`mark_grade_${studentId}`);
    const statusEl = document.getElementById(`mark_status_${studentId}`);

    if (totalEl) totalEl.textContent = sum;
    if (pctEl) pctEl.textContent = `${percent}%`;
    if (gradeEl) gradeEl.innerHTML = `<span class="badge ${gradeInfo.badge}">${gradeInfo.grade}</span>`;
    if (statusEl) statusEl.innerHTML = Number(percent) >= 50 
      ? `<span class="badge badge-success">PASS</span>` 
      : `<span class="badge badge-danger">FAIL</span>`;
  },

  saveStudentMarksRow(studentId) {
    db.save();
    const student = db.data.students.find(s => s.id === studentId);
    this.showToast(`Marks for ${student ? student.name : studentId} saved successfully!`, "success");
    this.logActivity(`Updated semester examination marks for ${student?.name || studentId}`, "fa-file-signature");
    this.renderDashboard();
  },

  calculateGrade(score) {
    if (score >= 90) return { grade: "A+", badge: "badge-success", desc: "Outstanding" };
    if (score >= 80) return { grade: "A", badge: "badge-info", desc: "Excellent" };
    if (score >= 70) return { grade: "B", badge: "badge-primary", desc: "Good" };
    if (score >= 60) return { grade: "C", badge: "badge-warning", desc: "Satisfactory" };
    if (score >= 50) return { grade: "D", badge: "bg-amber-100 text-amber-900 border border-amber-200", desc: "Pass" };
    return { grade: "F", badge: "badge-danger", desc: "Fail" };
  },

  getStudentExamSummary(student) {
    const examKey = `Final Semester_${student.department}_${student.academicYear}_${student.section}`;
    const scores = db.data.marksRecords[examKey]?.[student.id];
    if (!scores) return { total: 420, percent: "84.0", grade: "A", gpa: "3.6" };

    const vals = Object.values(scores);
    const sum = vals.reduce((a, b) => a + Number(b), 0);
    const pct = (sum / vals.length).toFixed(1);
    const gradeInfo = this.calculateGrade(Number(pct));
    const gpa = ((Number(pct) / 100) * 4).toFixed(2);
    return { total: sum, percent: pct, grade: gradeInfo.grade, gpa };
  },

  showReportCardModal(studentId) {
    const student = db.data.students.find(s => s.id === studentId);
    if (!student) return;

    document.getElementById("rc-name").textContent = student.name;
    document.getElementById("rc-id").textContent = student.id;
    document.getElementById("rc-dept").textContent = student.department;
    document.getElementById("rc-year-sec").textContent = `${student.academicYear} (Sec ${student.section})`;
    document.getElementById("rc-date").textContent = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    const subjects = DEPARTMENT_SUBJECTS[student.department] || DEPARTMENT_SUBJECTS["Computer Science"];
    const examKey = `Final Semester_${student.department}_${student.academicYear}_${student.section}`;
    const marks = db.data.marksRecords[examKey]?.[student.id] || { sub1: 88, sub2: 85, sub3: 90, sub4: 84, sub5: 89 };

    let total = 0;
    const body = document.getElementById("rc-subjects-body");
    body.innerHTML = subjects.map((sub, i) => {
      const score = marks[`sub${i+1}`] !== undefined ? marks[`sub${i+1}`] : 80;
      total += Number(score);
      const grade = this.calculateGrade(score);
      return `
        <tr>
          <td class="p-3 font-semibold text-slate-800">${sub.name} <span class="text-slate-400 font-mono text-[10px]">(${sub.code})</span></td>
          <td class="p-3 text-center text-slate-600">100</td>
          <td class="p-3 text-center font-bold text-slate-900">${score}</td>
          <td class="p-3 text-center"><span class="badge ${grade.badge}">${grade.grade}</span></td>
          <td class="p-3 text-center font-bold ${score >= 50 ? 'text-emerald-600' : 'text-rose-600'}">${score >= 50 ? 'PASS' : 'FAIL'}</td>
        </tr>
      `;
    }).join("");

    const pct = (total / (subjects.length * 100) * 100).toFixed(1);
    const overallGrade = this.calculateGrade(Number(pct));
    const gpa = ((Number(pct) / 100) * 4).toFixed(2);

    document.getElementById("rc-total-marks").textContent = total;
    document.getElementById("rc-overall-grade").textContent = overallGrade.grade;
    document.getElementById("rc-overall-status").textContent = Number(pct) >= 50 ? "PASS" : "FAIL";
    document.getElementById("rc-percent").textContent = `${pct}%`;
    document.getElementById("rc-gpa").textContent = `${gpa} / 4.0`;
    document.getElementById("rc-classification").textContent = Number(pct) >= 75 ? "First Class with Distinction" : (Number(pct) >= 60 ? "First Class" : "Pass Division");

    this.showModal("modal-report-card");
  },

  // ============================================================================
  // MODULE 6: FEE MANAGEMENT
  // ============================================================================
  renderFees() {
    const tableBody = document.getElementById("fee-ledger-table");
    if (!tableBody) return;

    const search = document.getElementById("fee-search-input")?.value.trim().toLowerCase() || "";
    const statusFilter = document.getElementById("fee-status-filter")?.value || "";
    const deptFilter = document.getElementById("fee-dept-filter")?.value || "";

    let totalExpected = 0;
    let totalCollected = 0;
    let clearedCount = 0;

    // Filter fee records
    const filtered = db.data.students.filter(s => {
      const total = s.fee?.total || 50000;
      const paid = s.fee?.paid || 0;
      const isPaid = paid >= total;
      const isPartial = paid > 0 && !isPaid;
      const status = isPaid ? "Paid" : (isPartial ? "Partial" : "Pending");

      totalExpected += total;
      totalCollected += paid;
      if (isPaid) clearedCount++;

      const matchSearch = !search || s.name.toLowerCase().includes(search) || s.id.toLowerCase().includes(search);
      const matchStatus = !statusFilter || status === statusFilter;
      const matchDept = !deptFilter || s.department === deptFilter;

      return matchSearch && matchStatus && matchDept;
    });

    // Metric cards
    const pendingDue = Math.max(0, totalExpected - totalCollected);
    const collectionRate = totalExpected > 0 ? ((totalCollected / totalExpected) * 100).toFixed(1) : 0;

    const elTotal = document.getElementById("fee-stat-total");
    const elColl = document.getElementById("fee-stat-collected");
    const elPend = document.getElementById("fee-stat-pending");
    const elClear = document.getElementById("fee-stat-cleared-count");
    const elRate = document.getElementById("fee-collection-rate");

    if (elTotal) elTotal.textContent = `$${totalExpected.toLocaleString()}`;
    if (elColl) elColl.textContent = `$${totalCollected.toLocaleString()}`;
    if (elPend) elPend.textContent = `$${pendingDue.toLocaleString()}`;
    if (elClear) elClear.textContent = `${clearedCount} / ${db.data.students.length} Accounts Cleared`;
    if (elRate) elRate.textContent = `${collectionRate}% collection rate`;

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="8" class="p-8 text-center text-slate-400">No fee ledger records match the search criteria</td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = filtered.map(s => {
      const total = s.fee?.total || 50000;
      const paid = s.fee?.paid || 0;
      const due = Math.max(0, total - paid);
      const isPaid = paid >= total;
      const isPartial = paid > 0 && !isPaid;

      const badge = isPaid
        ? `<span class="badge badge-success">Fully Paid</span>`
        : (isPartial ? `<span class="badge badge-warning">Partial Due</span>` : `<span class="badge badge-danger">Unpaid / Due</span>`);

      return `
        <tr>
          <td class="font-mono text-xs font-bold text-slate-900">${s.id}</td>
          <td>
            <div class="font-bold text-slate-800 text-xs">${this.escapeHTML(s.name)}</div>
            <div class="text-[11px] text-slate-400">${s.academicYear}</div>
          </td>
          <td><span class="text-xs font-semibold text-slate-700">${s.department}</span></td>
          <td class="font-bold text-slate-900 text-xs">$${total.toLocaleString()}</td>
          <td class="font-bold text-emerald-600 text-xs">$${paid.toLocaleString()}</td>
          <td class="font-bold ${due > 0 ? 'text-rose-600' : 'text-slate-400'} text-xs">$${due.toLocaleString()}</td>
          <td>${badge}</td>
          <td class="text-right whitespace-nowrap">
            ${due > 0 ? `
              <button onclick="SIMS.openFeePaymentModal('${s.id}')" class="px-2.5 py-1 bg-brand-800 hover:bg-brand-900 text-white rounded text-xs font-semibold mr-1 shadow-xs transition">
                <i class="fa-solid fa-receipt mr-1"></i> Pay
              </button>
            ` : `
              <span class="text-emerald-600 font-semibold text-xs mr-2"><i class="fa-solid fa-check"></i> Cleared</span>
            `}
            <button onclick="SIMS.showLatestReceiptForStudent('${s.id}')" title="Print Recent Receipt" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold transition">
              Receipt
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  openFeePaymentModal(studentId = "") {
    const select = document.getElementById("pay-student-select");
    if (!select) return;

    // Populate students list with balance
    select.innerHTML = db.data.students.map(s => {
      const total = s.fee?.total || 50000;
      const paid = s.fee?.paid || 0;
      const due = Math.max(0, total - paid);
      return `<option value="${s.id}" ${s.id === studentId ? 'selected' : ''}>${s.name} (${s.id}) - Due: $${due.toLocaleString()}</option>`;
    }).join("");

    document.getElementById("pay-date-input").value = new Date().toISOString().split("T")[0];
    document.getElementById("pay-amount-input").value = "";
    document.getElementById("pay-ref-input").value = `TXN-${Math.floor(100000 + Math.random() * 900000)}`;
    
    this.updateFeePaymentModalDetails();
    this.showModal("modal-fee-payment");
  },

  updateFeePaymentModalDetails() {
    const studentId = document.getElementById("pay-student-select")?.value;
    const student = db.data.students.find(s => s.id === studentId);
    if (!student) return;

    const total = student.fee?.total || 50000;
    const paid = student.fee?.paid || 0;
    const due = Math.max(0, total - paid);

    document.getElementById("pay-due-amount").textContent = `$${due.toLocaleString()}`;
    if (!document.getElementById("pay-amount-input").value && due > 0) {
      document.getElementById("pay-amount-input").value = Math.min(25000, due);
    }
  },

  handleRecordPayment(e) {
    e.preventDefault();
    const studentId = document.getElementById("pay-student-select").value;
    const amount = Number(document.getElementById("pay-amount-input").value);
    const method = document.getElementById("pay-method-select").value;
    const date = document.getElementById("pay-date-input").value;
    const ref = document.getElementById("pay-ref-input").value || `TXN-${Date.now()}`;

    if (!amount || amount <= 0) {
      alert("Please enter a valid payment amount");
      return;
    }

    const student = db.data.students.find(s => s.id === studentId);
    if (!student) return;

    if (!student.fee) student.fee = { total: 50000, paid: 0, history: [] };
    const receiptNo = `REC-2026-${String(Math.floor(1000 + Math.random() * 9000))}`;

    student.fee.paid += amount;
    if (!student.fee.history) student.fee.history = [];
    student.fee.history.unshift({
      receiptNo,
      date,
      amount,
      method,
      ref
    });

    db.save();
    this.closeModal("modal-fee-payment");
    this.showToast(`Payment of $${amount.toLocaleString()} received for ${student.name}`, "success");
    this.logActivity(`Processed fee payment of $${amount.toLocaleString()} for ${student.name} (${receiptNo})`, "fa-receipt");
    this.renderFees();
    this.renderDashboard();

    // Show printable receipt immediately
    this.showReceiptModal(student.id, receiptNo);
  },

  showLatestReceiptForStudent(studentId) {
    const student = db.data.students.find(s => s.id === studentId);
    if (!student || !student.fee?.history || student.fee.history.length === 0) {
      alert("No transaction receipts available for this student.");
      return;
    }
    this.showReceiptModal(studentId, student.fee.history[0].receiptNo);
  },

  showReceiptModal(studentId, receiptNo) {
    const student = db.data.students.find(s => s.id === studentId);
    if (!student) return;

    const receipt = student.fee?.history?.find(r => r.receiptNo === receiptNo) || {
      receiptNo: "REC-2026-0001",
      date: new Date().toISOString().split("T")[0],
      amount: 25000,
      method: "Online",
      ref: "TXN-AUTO"
    };

    const total = student.fee?.total || 50000;
    const paid = student.fee?.paid || 0;
    const due = Math.max(0, total - paid);

    document.getElementById("receipt-no").textContent = receipt.receiptNo;
    document.getElementById("receipt-date").textContent = `Date: ${receipt.date}`;
    document.getElementById("receipt-student-name").textContent = student.name;
    document.getElementById("receipt-student-id").textContent = `ID: ${student.id}`;
    document.getElementById("receipt-dept-year").textContent = `${student.department} • ${student.academicYear}`;
    document.getElementById("receipt-method").textContent = `Payment Via: ${receipt.method} (${receipt.ref || 'Ref: Confirmed'})`;
    document.getElementById("receipt-amount-paid").textContent = `$${Number(receipt.amount).toLocaleString()}.00`;
    document.getElementById("receipt-balance-due").textContent = `$${due.toLocaleString()}.00`;

    this.showModal("modal-fee-receipt");
  },

  // ============================================================================
  // MODULE 7: REPORTS & ANALYTICS
  // ============================================================================
  switchReportTab(category) {
    this.activeReportTab = category;
    document.querySelectorAll(".report-tab-btn").forEach(btn => {
      btn.classList.remove("active", "bg-brand-800", "text-white", "border-brand-800");
      btn.classList.add("bg-white", "text-slate-700", "border-slate-200");
    });
    const activeBtn = document.getElementById(`rep-btn-${category}`);
    if (activeBtn) {
      activeBtn.classList.add("active", "bg-brand-800", "text-white", "border-brand-800");
      activeBtn.classList.remove("bg-white", "text-slate-700", "border-slate-200");
    }
    this.renderReportPreview();
  },

  renderReportPreview() {
    const container = document.getElementById("report-preview-container");
    if (!container) return;

    const now = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

    switch (this.activeReportTab) {
      case "student":
        this.renderStudentReport(container, now);
        break;
      case "attendance":
        this.renderAttendanceReport(container, now);
        break;
      case "marks":
        this.renderAcademicReport(container, now);
        break;
      case "fee":
        this.renderFeeReport(container, now);
        break;
    }
  },

  renderStudentReport(container, dateStr) {
    const students = db.data.students;
    const deptSummary = {};
    students.forEach(s => {
      if (!deptSummary[s.department]) deptSummary[s.department] = { total: 0, male: 0, female: 0, other: 0 };
      deptSummary[s.department].total++;
      if (s.gender === "Male") deptSummary[s.department].male++;
      else if (s.gender === "Female") deptSummary[s.department].female++;
      else deptSummary[s.department].other++;
    });

    container.innerHTML = `
      <div class="print-area space-y-6">
        <div class="border-b-2 border-brand-800 pb-4 flex items-center justify-between">
          <div>
            <h3 class="text-lg font-black text-slate-900 uppercase">Apex Institute of Technology</h3>
            <p class="text-xs text-brand-800 font-bold uppercase tracking-wider">Student Enrolment & Demographics Census Report</p>
          </div>
          <div class="text-right text-xs text-slate-500">
            <p>Generated: ${dateStr}</p>
            <p class="font-bold text-slate-700">Total Enrolled: ${students.length} Students</p>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">1. Departmental Enrollment Breakdown</h4>
          <table class="w-full sims-table text-xs text-left">
            <thead>
              <tr>
                <th>Department</th>
                <th class="text-center">Male</th>
                <th class="text-center">Female</th>
                <th class="text-center">Total Students</th>
                <th class="text-right">Share %</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(deptSummary).map(([dept, counts]) => `
                <tr>
                  <td class="font-bold text-slate-800">${dept}</td>
                  <td class="text-center">${counts.male}</td>
                  <td class="text-center">${counts.female}</td>
                  <td class="text-center font-bold text-slate-900">${counts.total}</td>
                  <td class="text-right font-semibold text-brand-700">${((counts.total / students.length) * 100).toFixed(1)}%</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div>
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">2. Master Student Directory Registry</h4>
          <table class="w-full sims-table text-xs text-left">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Full Name</th>
                <th>Department</th>
                <th>Year & Section</th>
                <th>Admission Date</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              ${students.map(s => `
                <tr>
                  <td class="font-mono font-bold">${s.id}</td>
                  <td class="font-semibold text-slate-800">${this.escapeHTML(s.name)}</td>
                  <td>${s.department}</td>
                  <td>${s.academicYear} (${s.section})</td>
                  <td>${s.admissionDate || 'N/A'}</td>
                  <td>${s.phone}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderAttendanceReport(container, dateStr) {
    const students = db.data.students;
    const defaulters = [];
    const regular = [];

    students.forEach(s => {
      const att = this.calculateStudentAttendance(s.id);
      if (att < 75) defaulters.push({ ...s, att });
      else regular.push({ ...s, att });
    });

    container.innerHTML = `
      <div class="print-area space-y-6">
        <div class="border-b-2 border-brand-800 pb-4 flex items-center justify-between">
          <div>
            <h3 class="text-lg font-black text-slate-900 uppercase">Apex Institute of Technology</h3>
            <p class="text-xs text-brand-800 font-bold uppercase tracking-wider">Attendance Compliance & Defaulter Audit Report</p>
          </div>
          <div class="text-right text-xs text-slate-500">
            <p>Generated: ${dateStr}</p>
            <p class="font-bold text-rose-600">${defaulters.length} Defaulters Identified (&lt;75%)</p>
          </div>
        </div>

        <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
          <div class="flex items-center gap-2 mb-2 text-rose-800 font-bold text-xs uppercase tracking-wide">
            <i class="fa-solid fa-triangle-exclamation"></i> Mandatory Action: Attendance Defaulters List (&lt;75%)
          </div>
          <p class="text-xs text-rose-700 mb-3">The following students do not meet the mandatory 75% classroom attendance threshold for examination eligibility:</p>
          <table class="w-full sims-table text-xs text-left bg-white rounded-lg overflow-hidden border border-rose-100">
            <thead>
              <tr class="bg-rose-100/50">
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Department</th>
                <th>Year / Sec</th>
                <th>Current Attendance</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${defaulters.map(d => `
                <tr>
                  <td class="font-mono font-bold text-rose-900">${d.id}</td>
                  <td class="font-bold text-slate-800">${this.escapeHTML(d.name)}</td>
                  <td>${d.department}</td>
                  <td>${d.academicYear} (${d.section})</td>
                  <td class="font-bold text-rose-600">${d.att}%</td>
                  <td>${d.phone}</td>
                  <td><span class="badge badge-danger">Notice Issued</span></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div>
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Overall Institutional Attendance Register</h4>
          <table class="w-full sims-table text-xs text-left">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Class</th>
                <th>Attendance %</th>
                <th>Standing</th>
              </tr>
            </thead>
            <tbody>
              ${students.map(s => {
                const att = this.calculateStudentAttendance(s.id);
                const isDef = att < 75;
                return `
                  <tr>
                    <td class="font-mono font-bold">${s.id}</td>
                    <td class="font-semibold text-slate-800">${this.escapeHTML(s.name)}</td>
                    <td>${s.department}</td>
                    <td>${s.academicYear}</td>
                    <td class="font-bold ${isDef ? 'text-rose-600' : 'text-emerald-600'}">${att}%</td>
                    <td>${isDef ? '<span class="badge badge-danger">Defaulter</span>' : '<span class="badge badge-success">Regular</span>'}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderAcademicReport(container, dateStr) {
    const students = db.data.students;
    const gradeCounts = { "A+": 0, "A": 0, "B": 0, "C": 0, "D": 0, "F": 0 };

    students.forEach(s => {
      const summary = this.getStudentExamSummary(s);
      if (gradeCounts[summary.grade] !== undefined) {
        gradeCounts[summary.grade]++;
      }
    });

    container.innerHTML = `
      <div class="print-area space-y-6">
        <div class="border-b-2 border-brand-800 pb-4 flex items-center justify-between">
          <div>
            <h3 class="text-lg font-black text-slate-900 uppercase">Apex Institute of Technology</h3>
            <p class="text-xs text-brand-800 font-bold uppercase tracking-wider">Academic Performance & Grade Distribution Report</p>
          </div>
          <div class="text-right text-xs text-slate-500">
            <p>Generated: ${dateStr}</p>
            <p class="font-bold text-slate-700">Exam: Final Semester Assessment</p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-6 gap-3">
          ${Object.entries(gradeCounts).map(([grade, count]) => `
            <div class="sims-card p-3 text-center">
              <span class="text-xs font-bold text-slate-500">Grade ${grade}</span>
              <div class="text-xl font-bold text-brand-900 mt-1">${count}</div>
              <p class="text-[10px] text-slate-400">${((count / students.length) * 100).toFixed(0)}% of class</p>
            </div>
          `).join("")}
        </div>

        <div>
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Student Merit Ranking & Transcripts</h4>
          <table class="w-full sims-table text-xs text-left">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Department</th>
                <th>Academic Year</th>
                <th class="text-center">Total Score (500)</th>
                <th class="text-center">Aggregate %</th>
                <th class="text-center">Grade Point (GPA)</th>
                <th class="text-center">Grade</th>
              </tr>
            </thead>
            <tbody>
              ${students.map(s => {
                const summary = this.getStudentExamSummary(s);
                return `
                  <tr>
                    <td class="font-mono font-bold">${s.id}</td>
                    <td class="font-semibold text-slate-800">${this.escapeHTML(s.name)}</td>
                    <td>${s.department}</td>
                    <td>${s.academicYear}</td>
                    <td class="text-center font-bold text-slate-900">${summary.total}</td>
                    <td class="text-center font-bold text-brand-800">${summary.percent}%</td>
                    <td class="text-center font-bold text-slate-700">${summary.gpa}</td>
                    <td class="text-center"><span class="badge ${this.calculateGrade(Number(summary.percent)).badge}">${summary.grade}</span></td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderFeeReport(container, dateStr) {
    const students = db.data.students;
    let grandExpected = 0;
    let grandCollected = 0;

    students.forEach(s => {
      grandExpected += s.fee?.total || 50000;
      grandCollected += s.fee?.paid || 0;
    });

    const grandPending = Math.max(0, grandExpected - grandCollected);

    container.innerHTML = `
      <div class="print-area space-y-6">
        <div class="border-b-2 border-brand-800 pb-4 flex items-center justify-between">
          <div>
            <h3 class="text-lg font-black text-slate-900 uppercase">Apex Institute of Technology</h3>
            <p class="text-xs text-brand-800 font-bold uppercase tracking-wider">Tuition Fee Collection & Balance Audit Report</p>
          </div>
          <div class="text-right text-xs text-slate-500">
            <p>Generated: ${dateStr}</p>
            <p class="font-bold text-slate-700">Fiscal Session 2026-27</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="sims-card p-4">
            <span class="text-xs font-semibold text-slate-500 uppercase">Total Billed Fees</span>
            <div class="text-xl font-bold text-slate-900 mt-1">$${grandExpected.toLocaleString()}</div>
          </div>
          <div class="sims-card p-4">
            <span class="text-xs font-semibold text-emerald-600 uppercase">Total Revenue Collected</span>
            <div class="text-xl font-bold text-emerald-600 mt-1">$${grandCollected.toLocaleString()}</div>
          </div>
          <div class="sims-card p-4">
            <span class="text-xs font-semibold text-rose-600 uppercase">Total Outstanding Balance</span>
            <div class="text-xl font-bold text-rose-600 mt-1">$${grandPending.toLocaleString()}</div>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Student-by-Student Fee Ledger</h4>
          <table class="w-full sims-table text-xs text-left">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Department</th>
                <th>Total Course Fee</th>
                <th>Paid Amount</th>
                <th>Pending Balance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${students.map(s => {
                const total = s.fee?.total || 50000;
                const paid = s.fee?.paid || 0;
                const due = Math.max(0, total - paid);
                const isPaid = paid >= total;
                const isPartial = paid > 0 && !isPaid;
                return `
                  <tr>
                    <td class="font-mono font-bold">${s.id}</td>
                    <td class="font-semibold text-slate-800">${this.escapeHTML(s.name)}</td>
                    <td>${s.department}</td>
                    <td>$${total.toLocaleString()}</td>
                    <td class="font-bold text-emerald-600">$${paid.toLocaleString()}</td>
                    <td class="font-bold ${due > 0 ? 'text-rose-600' : 'text-slate-400'}">$${due.toLocaleString()}</td>
                    <td>${isPaid ? '<span class="badge badge-success">Paid</span>' : (isPartial ? '<span class="badge badge-warning">Partial</span>' : '<span class="badge badge-danger">Pending</span>')}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  exportCurrentReportCSV() {
    switch (this.activeReportTab) {
      case "student":
        this.exportStudentsCSV();
        break;
      case "attendance":
        {
          const headers = ["Student ID", "Full Name", "Department", "Academic Year", "Section", "Attendance %", "Defaulter (<75%)"];
          const rows = db.data.students.map(s => {
            const att = this.calculateStudentAttendance(s.id);
            return [`"${s.id}"`, `"${s.name}"`, `"${s.department}"`, `"${s.academicYear}"`, `"${s.section}"`, `${att}%`, att < 75 ? "YES" : "NO"];
          });
          this.downloadCSV("SIMS_Attendance_Compliance_Report.csv", [headers.join(","), ...rows.map(r => r.join(","))].join("\n"));
        }
        break;
      case "marks":
        {
          const headers = ["Student ID", "Full Name", "Department", "Academic Year", "Total (500)", "Percentage", "Grade", "GPA", "Status"];
          const rows = db.data.students.map(s => {
            const sum = this.getStudentExamSummary(s);
            return [`"${s.id}"`, `"${s.name}"`, `"${s.department}"`, `"${s.academicYear}"`, sum.total, `${sum.percent}%`, sum.grade, sum.gpa, Number(sum.percent) >= 50 ? "PASS" : "FAIL"];
          });
          this.downloadCSV("SIMS_Academic_Performance_Report.csv", [headers.join(","), ...rows.map(r => r.join(","))].join("\n"));
        }
        break;
      case "fee":
        {
          const headers = ["Student ID", "Full Name", "Department", "Academic Year", "Total Fee", "Paid Fee", "Pending Due", "Payment Status"];
          const rows = db.data.students.map(s => {
            const t = s.fee?.total || 50000;
            const p = s.fee?.paid || 0;
            const due = Math.max(0, t - p);
            const status = due === 0 ? "Paid" : (p > 0 ? "Partial" : "Pending");
            return [`"${s.id}"`, `"${s.name}"`, `"${s.department}"`, `"${s.academicYear}"`, t, p, due, status];
          });
          this.downloadCSV("SIMS_Fee_Collection_Report.csv", [headers.join(","), ...rows.map(r => r.join(","))].join("\n"));
        }
        break;
    }
  },

  downloadCSV(filename, csvContent) {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showToast(`Downloaded ${filename}`, "info");
  },

  // ============================================================================
  // UI UTILITIES & MODALS
  // ============================================================================
  showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  },

  showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const colors = {
      success: "bg-emerald-800 text-white border-emerald-700",
      info: "bg-brand-900 text-white border-brand-800",
      warning: "bg-amber-800 text-white border-amber-700",
      error: "bg-rose-800 text-white border-rose-700"
    };

    const icons = {
      success: "fa-circle-check",
      info: "fa-circle-info",
      warning: "fa-triangle-exclamation",
      error: "fa-circle-exclamation"
    };

    const toast = document.createElement("div");
    toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-xs font-semibold border ${colors[type] || colors.info} transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-auto max-w-sm`;
    toast.innerHTML = `
      <i class="fa-solid ${icons[type] || icons.info} text-base"></i>
      <div class="flex-1">${this.escapeHTML(message)}</div>
      <button onclick="this.parentElement.remove()" class="text-white/60 hover:text-white p-0.5"><i class="fa-solid fa-xmark text-xs"></i></button>
    `;

    container.appendChild(toast);

    // Trigger animate-in
    setTimeout(() => {
      toast.classList.remove("translate-y-4", "opacity-0");
    }, 10);

    // Auto-remove after 4.5s
    setTimeout(() => {
      toast.classList.add("translate-y-4", "opacity-0");
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  },

  escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

// ============================================================================
// INITIALIZE ON DOM READY
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  SIMS.init();
});
