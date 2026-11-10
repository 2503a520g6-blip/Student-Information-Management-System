# Student Information Management System (SIMS)

A modern, responsive, professional web application designed for college administrators and faculty to manage student records, attendance, examination marks, tuition fees, and academic performance.

![SIMS Dashboard Preview](https://img.shields.io/badge/SIMS-Portal_v1.0-1e40af?style=for-the-badge&logo=academia&logoColor=white)
![Build Status](https://img.shields.io/badge/Status-Production_Ready-10b981?style=for-the-badge)
![Tech](https://img.shields.io/badge/Stack-HTML5_|_TailwindCSS_|_Chart.js_|_Vanilla_JS-2563eb?style=for-the-badge)

---

## 🏛️ System Features & Modules

### 1. 📊 Executive Dashboard
- **6 Key Metrics**: Total Students, Total Faculty, Total Departments, Average Attendance Rate, Total Pending Fees, and Average Academic Performance Score.
- **Interactive Graphs & Charts**:
  - **Student Enrollment Trends**: Multi-year admissions growth and graduation rate tracking.
  - **Department Distribution Chart**: Doughnut chart showing student enrollment across Computer Science, Electronics & Comm, IT, Mechanical, and Civil Engineering.
  - **Monthly Attendance Chart**: Class attendance rate mapped against the mandatory 75% threshold bar.
- **Recent Registrations**: Real-time table of recently admitted students with one-click profile view.
- **Audit Activity Feed**: Live timeline of admissions, fee receipts, marks submissions, and attendance alerts.
- **Quick Action Bar**: Shortcuts to register students, mark attendance, enter marks, and process fees.

### 2. 👨‍🎓 Student Management
- **Full CRUD Operations**: Register new students, update personal/academic info, and safely delete records with confirmation dialogues.
- **Search & Multi-Filter**: Search by Name or Student ID; filter simultaneously by Department, Academic Year (1st–4th Year), and Section (A, B, C).
- **Pagination & Counter**: Clean pagination handling large batches with dynamic record counts.
- **Detailed Profile Modal**:
  - Student photo/avatar, contact details, date of birth, gender, and residential address.
  - Quick summary cards for attendance percentage, GPA, and fee clearance status.
  - Subject breakdown for the latest semester.
  - Transaction history ledger with direct link to view and print official fee receipts.
  - One-click trigger to generate and print the student's official **Academic Report Card**.
- **Data Export**: One-click download of the student registry formatted as CSV.

### 3. 👩‍🏫 Faculty Directory
- **Faculty Directory**: Manage professors, associate professors, assistant professors, and Heads of Departments (HOD).
- **Comprehensive Fields**: Faculty ID, Name, Gender, Email, Phone, Department, Designation, Highest Qualification, Joining Date, and Assigned Courses.
- **Departmental Filtering**: Quick filters for department and academic rank.
- **Profile Cards**: Responsive grid view with contact links and course assignments.

### 4. 📅 Attendance Tracking
- **Batch Selector**: Filter attendance sheets by Department, Academic Year, Section, and Date.
- **Daily Roll Call**: Interactive Present, Absent, and Late toggles with one-click **"Mark All Present"** and **"Mark All Absent"** bulk actions.
- **Automatic Attendance Percentage**: Automatically computes cumulative attendance percentage across all logged dates.
- **Defaulter Warning System**:
  - Visual `< 75% Low Attendance Alert` danger badges for non-compliant students.
  - Dedicated **"Show Defaulters (<75%)"** toggle button to filter and focus solely on students at academic risk.
- **Real-Time Summary**: Live counter of Total Students, Present, Absent, and Today's Batch Attendance Rate %.

### 5. 📝 Marks & Academic Grades
- **Subject-Wise Marksheets**: Pre-configured with department-specific courses (e.g. Data Structures, Operating Systems, VLSI Design, Thermodynamics, etc.).
- **Automatic Grade Computation**:
  - Automatically calculates Total Score (out of 500) and Aggregate Percentage (%).
  - Automatically assigns letter grades according to university criteria:
    - **A+**: 90% – 100% (Outstanding)
    - **A**: 80% – 89% (Excellent)
    - **B**: 70% – 79% (Good)
    - **C**: 60% – 69% (Satisfactory)
    - **D**: 50% – 59% (Pass)
    - **F**: Below 50% (Fail)
  - Automatically flags Pass/Fail status.
- **Printable Official Report Card**:
  - Formatted transcript with college header, student metadata, subject marks table, GPA calculation, degree classification, and signature lines for the Department Head and Controller of Examinations.

### 6. 💳 Tuition Fee Management
- **Financial Metric Cards**: Total Expected Fees, Total Collected Revenue, Outstanding Balance, and Accounts Cleared count.
- **Student Ledger**: Comprehensive tracking of Course Fee, Paid Amount, Balance Due, and Status (Fully Paid, Partial Due, Unpaid).
- **Collect Fee Payment Modal**:
  - Select student, preview outstanding balance, enter installment amount, select payment method (Credit/Debit Card, Bank Transfer, UPI, Cash, Cheque), and specify transaction reference.
- **Printable Official Fee Receipt**:
  - Formal computerized cash receipt with receipt number, verification status, date, line items, and bursar signature block.

### 7. 📑 Reports & Analytics Center
- **4 Dedicated Analytical Reports**:
  1. **Student Enrollment & Demographics Census Report**
  2. **Attendance Compliance & Defaulters Audit Report** (<75% highlighted)
  3. **Academic Performance & Grade Distribution Report**
  4. **Tuition Fee Collection & Balance Audit Report**
- **Dual Export Options**:
  - **Export as CSV**: Instant formatted CSV spreadsheet download for any active report.
  - **Print / Save PDF**: Dedicated `@media print` clean layout tailored for PDF generation or physical printing.

---

## 🎨 Design System & Theme

- **Primary Colors**: Academic Deep Blue (`#1e40af`, `#1e3a8a`), Royal Blue (`#2563eb`), Clean White (`#ffffff`), and Light Grey (`#f8fafc`, `#f1f5f9`).
- **Typography**: Crisp, modern typography utilizing **Plus Jakarta Sans** and **Inter**.
- **Responsive Layout**: Fluid experience across mobile phones, tablets, laptops, and ultra-wide desktop displays.
- **Subtle Interactions**: Hover state micro-elevations, smooth modal transitions, non-intrusive floating toast notifications, and zero clutter.

---

## 🚀 How to Run the Application

The application is completely self-contained and zero-dependency, powered by standard web technologies and CDNs.

### Method 1: Direct File Launch
Simply double-click `index.html` or open it with Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Method 2: Local Node.js Server
If you prefer running via a local HTTP server:
```bash
# 1. Start the server
npm start
# or: node server.js

# 2. Open your web browser
http://localhost:3000
```

### Method 3: Python Built-In Server
```bash
python -m http.server 3000
```

---

## 💾 Data Persistence & Reset

- All data (students, faculty, attendance logs, exam marks, and fee payment history) is automatically persisted in browser `localStorage`.
- To restore the default comprehensive demo data (16 realistic students across 5 engineering wings, 7 faculty members, multi-day attendance records, marks, and transaction receipts), click the **"Reset Demo Data"** button at the bottom of the sidebar.
