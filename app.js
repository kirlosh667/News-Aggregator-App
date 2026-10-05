/* ============================================================
   CampusHub — College Campus Management Platform
   Main JavaScript Application
   ============================================================ */

// ==================== SAMPLE DATA ====================

/** Generate realistic sample data for the platform */
function getDefaultData() {
    return {
        students: [
            { id: 'STU001', name: 'Aarav Sharma', department: 'Computer Science', course: 'B.Tech CSE', year: 3, email: 'aarav.sharma@campus.edu', phone: '9876543210', attendance: 88 },
            { id: 'STU002', name: 'Priya Patel', department: 'Electronics', course: 'B.Tech ECE', year: 2, email: 'priya.patel@campus.edu', phone: '9876543211', attendance: 92 },
            { id: 'STU003', name: 'Rohan Gupta', department: 'Mechanical', course: 'B.Tech ME', year: 4, email: 'rohan.gupta@campus.edu', phone: '9876543212', attendance: 74 },
            { id: 'STU004', name: 'Sneha Reddy', department: 'Computer Science', course: 'B.Tech CSE', year: 1, email: 'sneha.reddy@campus.edu', phone: '9876543213', attendance: 96 },
            { id: 'STU005', name: 'Vikram Singh', department: 'Civil', course: 'B.Tech CE', year: 3, email: 'vikram.singh@campus.edu', phone: '9876543214', attendance: 65 },
            { id: 'STU006', name: 'Ananya Iyer', department: 'Computer Science', course: 'MCA', year: 2, email: 'ananya.iyer@campus.edu', phone: '9876543215', attendance: 91 },
            { id: 'STU007', name: 'Karthik Nair', department: 'Electronics', course: 'B.Tech ECE', year: 3, email: 'karthik.nair@campus.edu', phone: '9876543216', attendance: 83 },
            { id: 'STU008', name: 'Meera Joshi', department: 'Mechanical', course: 'B.Tech ME', year: 2, email: 'meera.joshi@campus.edu', phone: '9876543217', attendance: 70 },
            { id: 'STU009', name: 'Arjun Das', department: 'Computer Science', course: 'B.Tech CSE', year: 4, email: 'arjun.das@campus.edu', phone: '9876543218', attendance: 89 },
            { id: 'STU010', name: 'Ishita Verma', department: 'Civil', course: 'B.Tech CE', year: 1, email: 'ishita.verma@campus.edu', phone: '9876543219', attendance: 94 },
            { id: 'STU011', name: 'Rahul Kumar', department: 'Electronics', course: 'B.Tech ECE', year: 4, email: 'rahul.kumar@campus.edu', phone: '9876543220', attendance: 78 },
            { id: 'STU012', name: 'Divya Menon', department: 'Computer Science', course: 'MCA', year: 1, email: 'divya.menon@campus.edu', phone: '9876543221', attendance: 97 },
        ],
        faculty: [
            { id: 'FAC001', name: 'Dr. Rajesh Kumar', department: 'Computer Science', subject: 'Data Structures', email: 'rajesh.kumar@campus.edu', phone: '9876500001' },
            { id: 'FAC002', name: 'Prof. Sunita Sharma', department: 'Electronics', subject: 'Digital Electronics', email: 'sunita.sharma@campus.edu', phone: '9876500002' },
            { id: 'FAC003', name: 'Dr. Amit Patel', department: 'Mechanical', subject: 'Thermodynamics', email: 'amit.patel@campus.edu', phone: '9876500003' },
            { id: 'FAC004', name: 'Prof. Lakshmi Nair', department: 'Computer Science', subject: 'Operating Systems', email: 'lakshmi.nair@campus.edu', phone: '9876500004' },
            { id: 'FAC005', name: 'Dr. Sanjay Gupta', department: 'Civil', subject: 'Structural Analysis', email: 'sanjay.gupta@campus.edu', phone: '9876500005' },
            { id: 'FAC006', name: 'Prof. Neha Singh', department: 'Computer Science', subject: 'Database Management', email: 'neha.singh@campus.edu', phone: '9876500006' },
            { id: 'FAC007', name: 'Dr. Vikash Reddy', department: 'Electronics', subject: 'Microprocessors', email: 'vikash.reddy@campus.edu', phone: '9876500007' },
            { id: 'FAC008', name: 'Prof. Anita Joshi', department: 'Mechanical', subject: 'Fluid Mechanics', email: 'anita.joshi@campus.edu', phone: '9876500008' },
        ],
        courses: [
            { id: 'CRS001', name: 'Data Structures & Algorithms', code: 'CS301', department: 'Computer Science', credits: 4, faculty: 'Dr. Rajesh Kumar' },
            { id: 'CRS002', name: 'Digital Electronics', code: 'EC201', department: 'Electronics', credits: 3, faculty: 'Prof. Sunita Sharma' },
            { id: 'CRS003', name: 'Thermodynamics', code: 'ME301', department: 'Mechanical', credits: 4, faculty: 'Dr. Amit Patel' },
            { id: 'CRS004', name: 'Operating Systems', code: 'CS401', department: 'Computer Science', credits: 4, faculty: 'Prof. Lakshmi Nair' },
            { id: 'CRS005', name: 'Structural Analysis', code: 'CE301', department: 'Civil', credits: 3, faculty: 'Dr. Sanjay Gupta' },
            { id: 'CRS006', name: 'Database Management Systems', code: 'CS302', department: 'Computer Science', credits: 4, faculty: 'Prof. Neha Singh' },
            { id: 'CRS007', name: 'Microprocessors & Microcontrollers', code: 'EC301', department: 'Electronics', credits: 4, faculty: 'Dr. Vikash Reddy' },
            { id: 'CRS008', name: 'Fluid Mechanics', code: 'ME201', department: 'Mechanical', credits: 3, faculty: 'Prof. Anita Joshi' },
            { id: 'CRS009', name: 'Web Technologies', code: 'CS303', department: 'Computer Science', credits: 3, faculty: 'Dr. Rajesh Kumar' },
            { id: 'CRS010', name: 'Machine Learning', code: 'CS501', department: 'Computer Science', credits: 4, faculty: 'Prof. Lakshmi Nair' },
        ],
        attendance: {},  // Will be populated per-date
        assignments: [
            { id: 'ASG001', title: 'Binary Search Tree Implementation', subject: 'Data Structures & Algorithms', description: 'Implement BST with insert, delete, search, and traversal operations in C++.', deadline: '2026-10-10', status: 'Pending' },
            { id: 'ASG002', title: 'Logic Gate Simulation', subject: 'Digital Electronics', description: 'Design and simulate basic and universal logic gates using any simulation tool.', deadline: '2026-10-08', status: 'Submitted' },
            { id: 'ASG003', title: 'Heat Transfer Analysis', subject: 'Thermodynamics', description: 'Analyze heat transfer in a composite wall and calculate temperature distribution.', deadline: '2026-10-03', status: 'Overdue' },
            { id: 'ASG004', title: 'Process Scheduling Algorithms', subject: 'Operating Systems', description: 'Implement FCFS, SJF, and Round Robin scheduling algorithms with Gantt charts.', deadline: '2026-10-15', status: 'Pending' },
            { id: 'ASG005', title: 'ER Diagram Design', subject: 'Database Management Systems', description: 'Design an ER diagram for a university management system with proper relationships.', deadline: '2026-10-12', status: 'Pending' },
            { id: 'ASG006', title: 'Responsive Portfolio Website', subject: 'Web Technologies', description: 'Create a responsive portfolio website using HTML, CSS, and JavaScript.', deadline: '2026-10-01', status: 'Overdue' },
        ],
        exams: [
            { id: 'EXM001', subject: 'Data Structures & Algorithms', date: '2026-11-15', time: '09:00 AM - 12:00 PM', room: 'Hall A - Room 101', department: 'Computer Science' },
            { id: 'EXM002', subject: 'Digital Electronics', date: '2026-11-17', time: '09:00 AM - 12:00 PM', room: 'Hall B - Room 201', department: 'Electronics' },
            { id: 'EXM003', subject: 'Thermodynamics', date: '2026-11-19', time: '02:00 PM - 05:00 PM', room: 'Hall A - Room 102', department: 'Mechanical' },
            { id: 'EXM004', subject: 'Operating Systems', date: '2026-11-21', time: '09:00 AM - 12:00 PM', room: 'Hall C - Room 301', department: 'Computer Science' },
            { id: 'EXM005', subject: 'Structural Analysis', date: '2026-11-23', time: '02:00 PM - 05:00 PM', room: 'Hall B - Room 202', department: 'Civil' },
        ],
        results: [
            { id: 'RES001', studentId: 'STU001', studentName: 'Aarav Sharma', subject: 'Data Structures & Algorithms', marks: 87, total: 100 },
            { id: 'RES002', studentId: 'STU002', studentName: 'Priya Patel', subject: 'Digital Electronics', marks: 92, total: 100 },
            { id: 'RES003', studentId: 'STU003', studentName: 'Rohan Gupta', subject: 'Thermodynamics', marks: 68, total: 100 },
            { id: 'RES004', studentId: 'STU004', studentName: 'Sneha Reddy', subject: 'Data Structures & Algorithms', marks: 95, total: 100 },
            { id: 'RES005', studentId: 'STU005', studentName: 'Vikram Singh', subject: 'Structural Analysis', marks: 54, total: 100 },
            { id: 'RES006', studentId: 'STU006', studentName: 'Ananya Iyer', subject: 'Operating Systems', marks: 89, total: 100 },
            { id: 'RES007', studentId: 'STU009', studentName: 'Arjun Das', subject: 'Database Management Systems', marks: 76, total: 100 },
            { id: 'RES008', studentId: 'STU001', studentName: 'Aarav Sharma', subject: 'Operating Systems', marks: 82, total: 100 },
            { id: 'RES009', studentId: 'STU007', studentName: 'Karthik Nair', subject: 'Microprocessors & Microcontrollers', marks: 71, total: 100 },
            { id: 'RES010', studentId: 'STU010', studentName: 'Ishita Verma', subject: 'Structural Analysis', marks: 90, total: 100 },
        ],
        events: [
            { id: 'EVT001', name: 'TechFest 2026', date: '2026-10-20', time: '10:00 AM', location: 'Main Auditorium', description: 'Annual technology festival featuring coding competitions, robotics challenges, and tech talks by industry experts.' },
            { id: 'EVT002', name: 'Cultural Night', date: '2026-10-25', time: '06:00 PM', location: 'Open Air Theatre', description: 'An evening of music, dance, and drama performances by students from all departments.' },
            { id: 'EVT003', name: 'Campus Placement Drive', date: '2026-11-05', time: '09:00 AM', location: 'Seminar Hall', description: 'Major recruitment drive with top companies including TCS, Infosys, and Wipro visiting campus.' },
            { id: 'EVT004', name: 'Sports Day', date: '2026-11-12', time: '08:00 AM', location: 'Sports Complex', description: 'Inter-department sports competitions including cricket, football, basketball, and athletics.' },
            { id: 'EVT005', name: 'Research Symposium', date: '2026-11-18', time: '10:00 AM', location: 'Conference Hall', description: 'Faculty and students present their research papers and projects across all departments.' },
            { id: 'EVT006', name: 'Alumni Meet 2026', date: '2026-12-01', time: '11:00 AM', location: 'College Grounds', description: 'Annual gathering of alumni with networking sessions, panel discussions, and dinner.' },
        ],
        announcements: [
            { id: 'ANN001', title: 'Mid-Semester Exam Schedule Released', content: 'The mid-semester examination schedule for all departments has been published. Students are advised to check the exam section and prepare accordingly. Hall tickets will be available from October 10th.', date: '2026-10-04', author: 'Examination Cell' },
            { id: 'ANN002', title: 'Library Hours Extended', content: 'The central library will now be open from 8:00 AM to 10:00 PM on weekdays and 9:00 AM to 6:00 PM on Saturdays during the examination period. Make the most of the extended hours.', date: '2026-10-03', author: 'Library Committee' },
            { id: 'ANN003', title: 'Scholarship Applications Open', content: 'Applications for the Merit-cum-Means scholarship for the academic year 2026-27 are now open. Eligible students can apply through the scholarship portal before October 20th.', date: '2026-10-02', author: 'Dean of Students' },
            { id: 'ANN004', title: 'Workshop on AI & Machine Learning', content: 'A two-day workshop on Artificial Intelligence and Machine Learning will be conducted on October 15-16 in the CS Department Lab. Registration is mandatory. Limited seats available.', date: '2026-10-01', author: 'CS Department' },
            { id: 'ANN005', title: 'Hostel Room Allocation Notice', content: 'Room allocation for the new academic session has been finalized. Students can check their allotment on the hostel management portal. Any grievances should be reported within 7 days.', date: '2026-09-28', author: 'Hostel Warden' },
        ],
        timetable: {
            'Computer Science': [
                { time: '09:00 - 10:00', mon: { sub: 'Data Structures', fac: 'Dr. Rajesh Kumar', room: 'CS-101' }, tue: { sub: 'Operating Systems', fac: 'Prof. Lakshmi Nair', room: 'CS-102' }, wed: { sub: 'DBMS', fac: 'Prof. Neha Singh', room: 'CS-103' }, thu: { sub: 'Data Structures', fac: 'Dr. Rajesh Kumar', room: 'CS-101' }, fri: { sub: 'Web Tech', fac: 'Dr. Rajesh Kumar', room: 'CS-Lab1' } },
                { time: '10:00 - 11:00', mon: { sub: 'Operating Systems', fac: 'Prof. Lakshmi Nair', room: 'CS-102' }, tue: { sub: 'DBMS', fac: 'Prof. Neha Singh', room: 'CS-103' }, wed: { sub: 'Machine Learning', fac: 'Prof. Lakshmi Nair', room: 'CS-104' }, thu: { sub: 'Web Tech', fac: 'Dr. Rajesh Kumar', room: 'CS-Lab1' }, fri: { sub: 'Operating Systems', fac: 'Prof. Lakshmi Nair', room: 'CS-102' } },
                { time: '11:00 - 12:00', mon: { sub: 'DBMS', fac: 'Prof. Neha Singh', room: 'CS-103' }, tue: { sub: 'Machine Learning', fac: 'Prof. Lakshmi Nair', room: 'CS-104' }, wed: { sub: 'Data Structures', fac: 'Dr. Rajesh Kumar', room: 'CS-101' }, thu: { sub: 'DBMS Lab', fac: 'Prof. Neha Singh', room: 'CS-Lab2' }, fri: { sub: 'Machine Learning', fac: 'Prof. Lakshmi Nair', room: 'CS-104' } },
                { time: '12:00 - 01:00', mon: null, tue: null, wed: null, thu: null, fri: null },
                { time: '01:00 - 02:00', mon: { sub: 'Web Tech', fac: 'Dr. Rajesh Kumar', room: 'CS-Lab1' }, tue: { sub: 'Data Structures Lab', fac: 'Dr. Rajesh Kumar', room: 'CS-Lab2' }, wed: { sub: 'Operating Systems', fac: 'Prof. Lakshmi Nair', room: 'CS-102' }, thu: { sub: 'Machine Learning', fac: 'Prof. Lakshmi Nair', room: 'CS-104' }, fri: { sub: 'DBMS', fac: 'Prof. Neha Singh', room: 'CS-103' } },
                { time: '02:00 - 03:00', mon: { sub: 'Machine Learning', fac: 'Prof. Lakshmi Nair', room: 'CS-104' }, tue: { sub: 'Data Structures Lab', fac: 'Dr. Rajesh Kumar', room: 'CS-Lab2' }, wed: { sub: 'Web Tech Lab', fac: 'Dr. Rajesh Kumar', room: 'CS-Lab1' }, thu: { sub: 'Operating Systems Lab', fac: 'Prof. Lakshmi Nair', room: 'CS-Lab3' }, fri: { sub: 'Data Structures', fac: 'Dr. Rajesh Kumar', room: 'CS-101' } },
            ],
            'Electronics': [
                { time: '09:00 - 10:00', mon: { sub: 'Digital Electronics', fac: 'Prof. Sunita Sharma', room: 'EC-101' }, tue: { sub: 'Microprocessors', fac: 'Dr. Vikash Reddy', room: 'EC-102' }, wed: { sub: 'Digital Electronics', fac: 'Prof. Sunita Sharma', room: 'EC-101' }, thu: { sub: 'Microprocessors', fac: 'Dr. Vikash Reddy', room: 'EC-102' }, fri: { sub: 'Digital Electronics', fac: 'Prof. Sunita Sharma', room: 'EC-101' } },
                { time: '10:00 - 11:00', mon: { sub: 'Microprocessors', fac: 'Dr. Vikash Reddy', room: 'EC-102' }, tue: { sub: 'Digital Electronics', fac: 'Prof. Sunita Sharma', room: 'EC-101' }, wed: { sub: 'Microprocessors Lab', fac: 'Dr. Vikash Reddy', room: 'EC-Lab1' }, thu: { sub: 'Digital Electronics', fac: 'Prof. Sunita Sharma', room: 'EC-101' }, fri: { sub: 'Microprocessors', fac: 'Dr. Vikash Reddy', room: 'EC-102' } },
                { time: '11:00 - 12:00', mon: { sub: 'Signals & Systems', fac: 'Prof. Sunita Sharma', room: 'EC-103' }, tue: { sub: 'Signals & Systems', fac: 'Prof. Sunita Sharma', room: 'EC-103' }, wed: { sub: 'Microprocessors Lab', fac: 'Dr. Vikash Reddy', room: 'EC-Lab1' }, thu: { sub: 'Signals & Systems', fac: 'Prof. Sunita Sharma', room: 'EC-103' }, fri: { sub: 'DE Lab', fac: 'Prof. Sunita Sharma', room: 'EC-Lab2' } },
                { time: '12:00 - 01:00', mon: null, tue: null, wed: null, thu: null, fri: null },
                { time: '01:00 - 02:00', mon: { sub: 'DE Lab', fac: 'Prof. Sunita Sharma', room: 'EC-Lab2' }, tue: { sub: 'Analog Circuits', fac: 'Dr. Vikash Reddy', room: 'EC-104' }, wed: { sub: 'Signals & Systems', fac: 'Prof. Sunita Sharma', room: 'EC-103' }, thu: { sub: 'DE Lab', fac: 'Prof. Sunita Sharma', room: 'EC-Lab2' }, fri: { sub: 'DE Lab', fac: 'Prof. Sunita Sharma', room: 'EC-Lab2' } },
                { time: '02:00 - 03:00', mon: { sub: 'DE Lab', fac: 'Prof. Sunita Sharma', room: 'EC-Lab2' }, tue: { sub: 'Analog Circuits', fac: 'Dr. Vikash Reddy', room: 'EC-104' }, wed: { sub: 'Analog Circuits', fac: 'Dr. Vikash Reddy', room: 'EC-104' }, thu: { sub: 'Analog Circuits', fac: 'Dr. Vikash Reddy', room: 'EC-104' }, fri: { sub: 'Signals & Systems', fac: 'Prof. Sunita Sharma', room: 'EC-103' } },
            ],
            'Mechanical': [
                { time: '09:00 - 10:00', mon: { sub: 'Thermodynamics', fac: 'Dr. Amit Patel', room: 'ME-101' }, tue: { sub: 'Fluid Mechanics', fac: 'Prof. Anita Joshi', room: 'ME-102' }, wed: { sub: 'Thermodynamics', fac: 'Dr. Amit Patel', room: 'ME-101' }, thu: { sub: 'Fluid Mechanics', fac: 'Prof. Anita Joshi', room: 'ME-102' }, fri: { sub: 'Thermodynamics', fac: 'Dr. Amit Patel', room: 'ME-101' } },
                { time: '10:00 - 11:00', mon: { sub: 'Fluid Mechanics', fac: 'Prof. Anita Joshi', room: 'ME-102' }, tue: { sub: 'Thermodynamics', fac: 'Dr. Amit Patel', room: 'ME-101' }, wed: { sub: 'Manufacturing', fac: 'Dr. Amit Patel', room: 'ME-103' }, thu: { sub: 'Thermodynamics', fac: 'Dr. Amit Patel', room: 'ME-101' }, fri: { sub: 'Fluid Mechanics', fac: 'Prof. Anita Joshi', room: 'ME-102' } },
                { time: '11:00 - 12:00', mon: { sub: 'Manufacturing', fac: 'Dr. Amit Patel', room: 'ME-103' }, tue: { sub: 'Manufacturing', fac: 'Dr. Amit Patel', room: 'ME-103' }, wed: { sub: 'Fluid Mechanics', fac: 'Prof. Anita Joshi', room: 'ME-102' }, thu: { sub: 'Manufacturing', fac: 'Dr. Amit Patel', room: 'ME-103' }, fri: { sub: 'Workshop', fac: 'Prof. Anita Joshi', room: 'ME-Lab1' } },
                { time: '12:00 - 01:00', mon: null, tue: null, wed: null, thu: null, fri: null },
                { time: '01:00 - 02:00', mon: { sub: 'Thermo Lab', fac: 'Dr. Amit Patel', room: 'ME-Lab2' }, tue: { sub: 'Workshop', fac: 'Prof. Anita Joshi', room: 'ME-Lab1' }, wed: { sub: 'Manufacturing', fac: 'Dr. Amit Patel', room: 'ME-103' }, thu: { sub: 'Fluid Lab', fac: 'Prof. Anita Joshi', room: 'ME-Lab3' }, fri: { sub: 'Manufacturing', fac: 'Dr. Amit Patel', room: 'ME-103' } },
                { time: '02:00 - 03:00', mon: { sub: 'Thermo Lab', fac: 'Dr. Amit Patel', room: 'ME-Lab2' }, tue: { sub: 'Workshop', fac: 'Prof. Anita Joshi', room: 'ME-Lab1' }, wed: { sub: 'CAD Lab', fac: 'Dr. Amit Patel', room: 'ME-Lab4' }, thu: { sub: 'Fluid Lab', fac: 'Prof. Anita Joshi', room: 'ME-Lab3' }, fri: { sub: 'CAD Lab', fac: 'Dr. Amit Patel', room: 'ME-Lab4' } },
            ],
            'Civil': [
                { time: '09:00 - 10:00', mon: { sub: 'Structural Analysis', fac: 'Dr. Sanjay Gupta', room: 'CE-101' }, tue: { sub: 'Surveying', fac: 'Dr. Sanjay Gupta', room: 'CE-102' }, wed: { sub: 'Structural Analysis', fac: 'Dr. Sanjay Gupta', room: 'CE-101' }, thu: { sub: 'Surveying', fac: 'Dr. Sanjay Gupta', room: 'CE-102' }, fri: { sub: 'Structural Analysis', fac: 'Dr. Sanjay Gupta', room: 'CE-101' } },
                { time: '10:00 - 11:00', mon: { sub: 'Surveying', fac: 'Dr. Sanjay Gupta', room: 'CE-102' }, tue: { sub: 'Structural Analysis', fac: 'Dr. Sanjay Gupta', room: 'CE-101' }, wed: { sub: 'Concrete Tech', fac: 'Dr. Sanjay Gupta', room: 'CE-103' }, thu: { sub: 'Structural Analysis', fac: 'Dr. Sanjay Gupta', room: 'CE-101' }, fri: { sub: 'Surveying', fac: 'Dr. Sanjay Gupta', room: 'CE-102' } },
                { time: '11:00 - 12:00', mon: { sub: 'Concrete Tech', fac: 'Dr. Sanjay Gupta', room: 'CE-103' }, tue: { sub: 'Concrete Tech', fac: 'Dr. Sanjay Gupta', room: 'CE-103' }, wed: { sub: 'Surveying', fac: 'Dr. Sanjay Gupta', room: 'CE-102' }, thu: { sub: 'Concrete Tech', fac: 'Dr. Sanjay Gupta', room: 'CE-103' }, fri: { sub: 'Survey Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab1' } },
                { time: '12:00 - 01:00', mon: null, tue: null, wed: null, thu: null, fri: null },
                { time: '01:00 - 02:00', mon: { sub: 'Survey Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab1' }, tue: { sub: 'Structures Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab2' }, wed: { sub: 'Concrete Tech', fac: 'Dr. Sanjay Gupta', room: 'CE-103' }, thu: { sub: 'Survey Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab1' }, fri: { sub: 'Survey Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab1' } },
                { time: '02:00 - 03:00', mon: { sub: 'Survey Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab1' }, tue: { sub: 'Structures Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab2' }, wed: { sub: 'Structures Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab2' }, thu: { sub: 'Structures Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab2' }, fri: { sub: 'Concrete Lab', fac: 'Dr. Sanjay Gupta', room: 'CE-Lab3' } },
            ]
        },
        activities: [
            { text: 'New student <strong>Divya Menon</strong> enrolled in MCA program.', time: '2 hours ago', color: 'blue' },
            { text: 'Assignment <strong>"BST Implementation"</strong> deadline approaching.', time: '3 hours ago', color: 'orange' },
            { text: 'Faculty <strong>Dr. Rajesh Kumar</strong> updated course materials.', time: '5 hours ago', color: 'green' },
            { text: 'Attendance marked for <strong>CS 3rd Year</strong> students.', time: '6 hours ago', color: 'purple' },
            { text: 'New announcement: <strong>Mid-Semester Exam Schedule Released</strong>.', time: '1 day ago', color: 'blue' },
            { text: 'Event <strong>"TechFest 2026"</strong> registration opened.', time: '1 day ago', color: 'green' },
        ]
    };
}

const DEPARTMENTS = ['Computer Science', 'Electronics', 'Mechanical', 'Civil'];

// ==================== DATA MANAGEMENT ====================

/** Load data from LocalStorage or initialize with defaults */
function loadData() {
    const stored = localStorage.getItem('campushub_data');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.warn('Failed to parse stored data, using defaults.');
        }
    }
    const defaultData = getDefaultData();
    saveData(defaultData);
    return defaultData;
}

/** Save data to LocalStorage */
function saveData(data) {
    localStorage.setItem('campushub_data', JSON.stringify(data));
}

let appData = loadData();

// ==================== UTILITY FUNCTIONS ====================

/** Generate a unique ID with a prefix */
function generateId(prefix) {
    return prefix + Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
}

/** Format date to readable string */
function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

/** Get today's date in YYYY-MM-DD format */
function getTodayStr() {
    const d = new Date();
    return d.toISOString().split('T')[0];
}

/** Calculate grade from percentage */
function getGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    if (percentage >= 40) return 'D';
    return 'F';
}

/** Get grade badge class */
function getGradeBadgeClass(grade) {
    if (['A+', 'A'].includes(grade)) return 'badge-success';
    if (['B+', 'B'].includes(grade)) return 'badge-info';
    if (grade === 'C') return 'badge-warning';
    return 'badge-danger';
}

/** Show toast notification */
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-circle', info: 'fa-info-circle' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${icons[type]} toast-icon"></i>
        <span class="toast-message">${message}</span>
        <button class="toast-close"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(toast);
    toast.querySelector('.toast-close').addEventListener('click', () => removeToast(toast));
    setTimeout(() => removeToast(toast), 4000);
}

function removeToast(toast) {
    if (!toast.parentNode) return;
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
}

// ==================== SIDEBAR & NAVIGATION ====================

const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebarClose = document.getElementById('sidebarClose');

hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
});

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

/** Navigate to a page */
function navigateTo(pageName) {
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageName);
    });
    // Update page visibility
    document.querySelectorAll('.page').forEach(page => {
        page.classList.toggle('active', page.id === 'page-' + pageName);
    });
    closeSidebar();
    window.scrollTo(0, 0);
    // Render page content
    renderPage(pageName);
}

// Nav link clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.page);
    });
});

// View-all links
document.querySelectorAll('.view-all-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.page);
    });
});

// ==================== THEME TOGGLE ====================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('campushub_theme', theme);
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    // Redraw charts with updated colors if they exist
    if (window.attendanceChartInstance) {
        renderAttendanceChart();
        renderPerformanceChart();
    }
}

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('campushub_theme') || 'light';
setTheme(savedTheme);

// ==================== NOTIFICATION DROPDOWN ====================

const notificationBtn = document.getElementById('notificationBtn');
const notifDropdown = document.getElementById('notifDropdown');
const notifBadge = document.getElementById('notifBadge');

let notifications = [
    { icon: 'fas fa-calendar-check', type: 'info', text: 'Mid-semester exam schedule released.', time: '2 hours ago' },
    { icon: 'fas fa-exclamation-triangle', type: 'warning', text: 'Assignment "Heat Transfer Analysis" is overdue.', time: '5 hours ago' },
    { icon: 'fas fa-user-plus', type: 'success', text: 'New student Divya Menon enrolled.', time: '1 day ago' },
];

function renderNotifications() {
    const list = document.getElementById('notifList');
    if (notifications.length === 0) {
        list.innerHTML = '<div style="padding:30px;text-align:center;color:var(--text-tertiary);font-size:13px;">No notifications</div>';
        notifBadge.style.display = 'none';
    } else {
        notifBadge.style.display = 'flex';
        notifBadge.textContent = notifications.length;
        list.innerHTML = notifications.map(n => `
            <div class="notif-item">
                <div class="notif-icon ${n.type}"><i class="${n.icon}"></i></div>
                <div class="notif-content">
                    <p>${n.text}</p>
                    <span>${n.time}</span>
                </div>
            </div>
        `).join('');
    }
}

notificationBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('active');
});

document.getElementById('clearNotifs').addEventListener('click', () => {
    notifications = [];
    renderNotifications();
});

document.addEventListener('click', (e) => {
    if (!notifDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
        notifDropdown.classList.remove('active');
    }
});

renderNotifications();

// ==================== MODAL SYSTEM ====================

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalFooter = document.getElementById('modalFooter');
const modalSave = document.getElementById('modalSave');
const modalCancel = document.getElementById('modalCancel');
const modalCloseBtn = document.getElementById('modalClose');

let currentModalCallback = null;

function openModal(title, bodyHTML, saveCallback, saveLabel = 'Save') {
    modalTitle.textContent = title;
    modalBody.innerHTML = bodyHTML;
    modalSave.textContent = saveLabel;
    currentModalCallback = saveCallback;
    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
    currentModalCallback = null;
}

modalCloseBtn.addEventListener('click', closeModal);
modalCancel.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

modalSave.addEventListener('click', () => {
    if (currentModalCallback) currentModalCallback();
});

// ==================== CONFIRM DIALOG ====================

const confirmOverlay = document.getElementById('confirmOverlay');
const confirmTitle = document.getElementById('confirmTitle');
const confirmMessage = document.getElementById('confirmMessage');
const confirmDeleteBtn = document.getElementById('confirmDelete');
const confirmCancelBtn = document.getElementById('confirmCancel');

let confirmCallback = null;

function showConfirm(title, message, callback) {
    confirmTitle.textContent = title;
    confirmMessage.textContent = message;
    confirmCallback = callback;
    confirmOverlay.classList.add('active');
}

confirmDeleteBtn.addEventListener('click', () => {
    if (confirmCallback) confirmCallback();
    confirmOverlay.classList.remove('active');
    confirmCallback = null;
});

confirmCancelBtn.addEventListener('click', () => {
    confirmOverlay.classList.remove('active');
    confirmCallback = null;
});

confirmOverlay.addEventListener('click', (e) => {
    if (e.target === confirmOverlay) {
        confirmOverlay.classList.remove('active');
        confirmCallback = null;
    }
});

// ==================== FORM VALIDATION HELPER ====================

function validateForm(fields) {
    let valid = true;
    fields.forEach(({ id, message }) => {
        const el = document.getElementById(id);
        const group = el.closest('.form-group');
        const errEl = group.querySelector('.form-error');
        if (!el.value.trim()) {
            group.classList.add('error');
            if (errEl) errEl.textContent = message || 'This field is required.';
            valid = false;
        } else {
            group.classList.remove('error');
        }
    });
    return valid;
}

// ==================== POPULATE DEPARTMENT FILTERS ====================

function populateDeptFilters() {
    const selectors = [
        'studentDeptFilter', 'facultyDeptFilter', 'courseDeptFilter',
        'attendanceDeptFilter', 'timetableDeptFilter'
    ];
    selectors.forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        // Keep the first "All" option
        const firstOpt = sel.querySelector('option');
        sel.innerHTML = '';
        sel.appendChild(firstOpt);
        DEPARTMENTS.forEach(dept => {
            const opt = document.createElement('option');
            opt.value = dept;
            opt.textContent = dept;
            sel.appendChild(opt);
        });
    });
}

populateDeptFilters();

// ==================== RENDER PAGE ====================

function renderPage(pageName) {
    switch (pageName) {
        case 'dashboard': renderDashboard(); break;
        case 'students': renderStudents(); break;
        case 'faculty': renderFaculty(); break;
        case 'courses': renderCourses(); break;
        case 'attendance': renderAttendance(); break;
        case 'timetable': renderTimetable(); break;
        case 'assignments': renderAssignments(); break;
        case 'exams': renderExams(); renderResults(); break;
        case 'events': renderEvents(); break;
        case 'announcements': renderAnnouncements(); break;
    }
}

// ============================================================
//                        DASHBOARD
// ============================================================

function renderDashboard() {
    // Date
    const dateEl = document.getElementById('currentDate');
    const today = new Date();
    dateEl.innerHTML = `<i class="fas fa-calendar-day" style="margin-right:6px;"></i>${today.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;

    // Stats
    const upcomingEvents = appData.events.filter(e => new Date(e.date) >= today).length;
    const pendingAssignments = appData.assignments.filter(a => a.status === 'Pending').length;

    const stats = [
        { icon: 'fas fa-user-graduate', color: 'blue', value: appData.students.length, label: 'Total Students' },
        { icon: 'fas fa-chalkboard-teacher', color: 'green', value: appData.faculty.length, label: 'Faculty Members' },
        { icon: 'fas fa-book-open', color: 'purple', value: appData.courses.length, label: 'Courses' },
        { icon: 'fas fa-building', color: 'orange', value: DEPARTMENTS.length, label: 'Departments' },
        { icon: 'fas fa-calendar-check', color: 'pink', value: upcomingEvents, label: 'Upcoming Events' },
        { icon: 'fas fa-tasks', color: 'indigo', value: pendingAssignments, label: 'Pending Assignments' },
    ];

    document.getElementById('dashboardStats').innerHTML = stats.map(s => `
        <div class="stat-card">
            <div class="stat-icon ${s.color}"><i class="${s.icon}"></i></div>
            <div class="stat-info">
                <h3>${s.value}</h3>
                <p>${s.label}</p>
            </div>
        </div>
    `).join('');

    // Activities
    document.getElementById('recentActivities').innerHTML = appData.activities.map(a => `
        <div class="activity-item">
            <div class="activity-dot ${a.color}"></div>
            <div>
                <div class="activity-text">${a.text}</div>
                <span class="activity-time">${a.time}</span>
            </div>
        </div>
    `).join('');

    // Announcements
    document.getElementById('dashAnnouncements').innerHTML = appData.announcements.slice(0, 4).map(a => `
        <div class="announcement-preview">
            <h4>${a.title}</h4>
            <p>${a.content}</p>
            <div class="ann-date"><i class="fas fa-clock"></i> ${formatDate(a.date)}</div>
        </div>
    `).join('');

    // Events
    const upEvents = appData.events.filter(e => new Date(e.date) >= today).slice(0, 4);
    document.getElementById('dashEvents').innerHTML = upEvents.map(e => {
        const d = new Date(e.date);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return `
            <div class="event-preview-card">
                <div class="event-date-box">
                    <span class="day">${d.getDate()}</span>
                    <span class="month">${months[d.getMonth()]}</span>
                </div>
                <div class="event-preview-info">
                    <h4>${e.name}</h4>
                    <p>${e.description.substring(0, 80)}...</p>
                    <div class="event-meta"><i class="fas fa-map-marker-alt"></i> ${e.location} &bull; ${e.time}</div>
                </div>
            </div>
        `;
    }).join('') || '<p style="color:var(--text-tertiary);font-size:13px;padding:10px;">No upcoming events.</p>';

    // Charts
    renderAttendanceChart();
    renderPerformanceChart();
}

// ==================== CHARTS ====================

window.attendanceChartInstance = null;
window.performanceChartInstance = null;

function getChartTextColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#475569';
}

function getChartGridColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || '#e2e8f0';
}

function renderAttendanceChart() {
    const ctx = document.getElementById('attendanceChart');
    if (!ctx) return;
    if (window.attendanceChartInstance) window.attendanceChartInstance.destroy();

    const textColor = getChartTextColor();
    const gridColor = getChartGridColor();

    window.attendanceChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
                {
                    label: 'Present',
                    data: [85, 90, 78, 88, 92, 45],
                    backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    borderRadius: 6,
                    borderSkipped: false,
                },
                {
                    label: 'Absent',
                    data: [15, 10, 22, 12, 8, 55],
                    backgroundColor: 'rgba(239, 68, 68, 0.5)',
                    borderRadius: 6,
                    borderSkipped: false,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: textColor, font: { family: 'Inter', size: 12 } } }
            },
            scales: {
                x: { ticks: { color: textColor, font: { family: 'Inter', size: 11 } }, grid: { display: false } },
                y: { ticks: { color: textColor, font: { family: 'Inter', size: 11 } }, grid: { color: gridColor }, beginAtZero: true }
            }
        }
    });
}

function renderPerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    if (window.performanceChartInstance) window.performanceChartInstance.destroy();

    const textColor = getChartTextColor();
    const gridColor = getChartGridColor();

    // Calculate department averages from results
    const deptMarks = {};
    appData.results.forEach(r => {
        const student = appData.students.find(s => s.id === r.studentId);
        if (student) {
            if (!deptMarks[student.department]) deptMarks[student.department] = [];
            deptMarks[student.department].push((r.marks / r.total) * 100);
        }
    });

    const labels = Object.keys(deptMarks);
    const averages = labels.map(dept => {
        const arr = deptMarks[dept];
        return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    });

    const colors = [
        'rgba(99, 102, 241, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(245, 158, 11, 0.7)',
        'rgba(239, 68, 68, 0.7)',
        'rgba(236, 72, 153, 0.7)',
    ];

    window.performanceChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: averages,
                backgroundColor: colors.slice(0, labels.length),
                borderWidth: 0,
                spacing: 4,
                borderRadius: 4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: textColor,
                        font: { family: 'Inter', size: 12 },
                        padding: 16,
                        usePointStyle: true,
                        pointStyleWidth: 10,
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (ctx) => ` ${ctx.label}: ${ctx.parsed}% avg`
                    }
                }
            }
        }
    });
}

// ============================================================
//                    STUDENT MANAGEMENT
// ============================================================

function renderStudents() {
    const search = document.getElementById('studentSearch').value.toLowerCase();
    const deptFilter = document.getElementById('studentDeptFilter').value;
    const yearFilter = document.getElementById('studentYearFilter').value;
    const sortFilter = document.getElementById('studentSortFilter').value;

    let filtered = appData.students.filter(s => {
        const matchSearch = !search || s.name.toLowerCase().includes(search) || s.id.toLowerCase().includes(search);
        const matchDept = !deptFilter || s.department === deptFilter;
        const matchYear = !yearFilter || s.year === parseInt(yearFilter);
        return matchSearch && matchDept && matchYear;
    });

    // Sort
    filtered.sort((a, b) => {
        switch (sortFilter) {
            case 'name-asc': return a.name.localeCompare(b.name);
            case 'name-desc': return b.name.localeCompare(a.name);
            case 'id-asc': return a.id.localeCompare(b.id);
            case 'id-desc': return b.id.localeCompare(a.id);
            default: return 0;
        }
    });

    const tbody = document.getElementById('studentsTableBody');
    const emptyState = document.getElementById('studentsEmpty');

    if (filtered.length === 0) {
        tbody.innerHTML = '';
        emptyState.classList.remove('hidden');
        document.getElementById('studentsTable').style.display = 'none';
    } else {
        emptyState.classList.add('hidden');
        document.getElementById('studentsTable').style.display = '';
        tbody.innerHTML = filtered.map(s => `
            <tr>
                <td><span class="badge badge-primary">${s.id}</span></td>
                <td><strong>${s.name}</strong></td>
                <td>${s.department}</td>
                <td>${s.course}</td>
                <td>${s.year}${getYearSuffix(s.year)} Year</td>
                <td>${s.email}</td>
                <td><span class="${s.attendance < 75 ? 'low-attendance' : ''}">${s.attendance}%</span></td>
                <td>
                    <div class="table-actions">
                        <button class="action-btn view" title="View Profile" onclick="viewStudentProfile('${s.id}')"><i class="fas fa-eye"></i></button>
                        <button class="action-btn edit" title="Edit" onclick="editStudent('${s.id}')"><i class="fas fa-pen"></i></button>
                        <button class="action-btn delete" title="Delete" onclick="deleteStudent('${s.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
}

function getYearSuffix(y) {
    if (y === 1) return 'st';
    if (y === 2) return 'nd';
    if (y === 3) return 'rd';
    return 'th';
}

// Student form HTML
function studentFormHTML(data = {}) {
    return `
        <div class="form-row">
            <div class="form-group">
                <label>Student ID <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_studentId" value="${data.id || ''}" ${data.id ? 'readonly' : ''} placeholder="e.g., STU013">
                <div class="form-error">Student ID is required.</div>
            </div>
            <div class="form-group">
                <label>Full Name <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_studentName" value="${data.name || ''}" placeholder="Enter full name">
                <div class="form-error">Name is required.</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Department <span class="required">*</span></label>
                <select class="form-select" id="f_studentDept">
                    <option value="">Select Department</option>
                    ${DEPARTMENTS.map(d => `<option value="${d}" ${data.department === d ? 'selected' : ''}>${d}</option>`).join('')}
                </select>
                <div class="form-error">Department is required.</div>
            </div>
            <div class="form-group">
                <label>Course <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_studentCourse" value="${data.course || ''}" placeholder="e.g., B.Tech CSE">
                <div class="form-error">Course is required.</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Year <span class="required">*</span></label>
                <select class="form-select" id="f_studentYear">
                    <option value="">Select Year</option>
                    ${[1,2,3,4].map(y => `<option value="${y}" ${data.year === y ? 'selected' : ''}>${y}${getYearSuffix(y)} Year</option>`).join('')}
                </select>
                <div class="form-error">Year is required.</div>
            </div>
            <div class="form-group">
                <label>Attendance %</label>
                <input type="number" class="form-input" id="f_studentAttendance" value="${data.attendance || 0}" min="0" max="100">
                <div class="form-error"></div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Email <span class="required">*</span></label>
                <input type="email" class="form-input" id="f_studentEmail" value="${data.email || ''}" placeholder="email@campus.edu">
                <div class="form-error">Email is required.</div>
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-input" id="f_studentPhone" value="${data.phone || ''}" placeholder="Phone number">
                <div class="form-error"></div>
            </div>
        </div>
    `;
}

// Add Student
document.getElementById('addStudentBtn').addEventListener('click', () => {
    openModal('Add New Student', studentFormHTML(), () => {
        const fields = [
            { id: 'f_studentId', message: 'Student ID is required.' },
            { id: 'f_studentName', message: 'Name is required.' },
            { id: 'f_studentDept', message: 'Department is required.' },
            { id: 'f_studentCourse', message: 'Course is required.' },
            { id: 'f_studentYear', message: 'Year is required.' },
            { id: 'f_studentEmail', message: 'Email is required.' },
        ];
        if (!validateForm(fields)) return;

        const newStudent = {
            id: document.getElementById('f_studentId').value.trim(),
            name: document.getElementById('f_studentName').value.trim(),
            department: document.getElementById('f_studentDept').value,
            course: document.getElementById('f_studentCourse').value.trim(),
            year: parseInt(document.getElementById('f_studentYear').value),
            email: document.getElementById('f_studentEmail').value.trim(),
            phone: document.getElementById('f_studentPhone').value.trim(),
            attendance: parseInt(document.getElementById('f_studentAttendance').value) || 0,
        };

        // Check for duplicate ID
        if (appData.students.find(s => s.id === newStudent.id)) {
            showToast('A student with this ID already exists!', 'error');
            return;
        }

        appData.students.push(newStudent);
        saveData(appData);
        closeModal();
        renderStudents();
        showToast('Student added successfully!');
    });
});

// Edit Student
window.editStudent = function(id) {
    const student = appData.students.find(s => s.id === id);
    if (!student) return;
    openModal('Edit Student', studentFormHTML(student), () => {
        const fields = [
            { id: 'f_studentName', message: 'Name is required.' },
            { id: 'f_studentDept', message: 'Department is required.' },
            { id: 'f_studentCourse', message: 'Course is required.' },
            { id: 'f_studentYear', message: 'Year is required.' },
            { id: 'f_studentEmail', message: 'Email is required.' },
        ];
        if (!validateForm(fields)) return;

        student.name = document.getElementById('f_studentName').value.trim();
        student.department = document.getElementById('f_studentDept').value;
        student.course = document.getElementById('f_studentCourse').value.trim();
        student.year = parseInt(document.getElementById('f_studentYear').value);
        student.email = document.getElementById('f_studentEmail').value.trim();
        student.phone = document.getElementById('f_studentPhone').value.trim();
        student.attendance = parseInt(document.getElementById('f_studentAttendance').value) || 0;

        saveData(appData);
        closeModal();
        renderStudents();
        showToast('Student updated successfully!');
    }, 'Update');
};

// Delete Student
window.deleteStudent = function(id) {
    showConfirm('Delete Student', 'Are you sure you want to delete this student? This action cannot be undone.', () => {
        appData.students = appData.students.filter(s => s.id !== id);
        saveData(appData);
        renderStudents();
        showToast('Student deleted successfully.', 'info');
    });
};

// View Student Profile
window.viewStudentProfile = function(id) {
    const student = appData.students.find(s => s.id === id);
    if (!student) return;

    // Hide students page, show profile
    document.getElementById('page-students').classList.remove('active');
    document.getElementById('page-student-profile').classList.add('active');
    document.getElementById('profileStudentName').textContent = student.name;

    // Get student results
    const studentResults = appData.results.filter(r => r.studentId === id);
    const avgMarks = studentResults.length > 0
        ? Math.round(studentResults.reduce((sum, r) => sum + (r.marks / r.total) * 100, 0) / studentResults.length)
        : 0;

    const profileHTML = `
        <div class="profile-sidebar">
            <div class="profile-avatar"><i class="fas fa-user-graduate"></i></div>
            <h2>${student.name}</h2>
            <p class="profile-id">${student.id}</p>
            <span class="badge badge-primary">${student.course}</span>
            <div style="margin-top:20px;">
                <div class="profile-detail-item"><i class="fas fa-building"></i><span>${student.department}</span></div>
                <div class="profile-detail-item"><i class="fas fa-calendar-alt"></i><span>${student.year}${getYearSuffix(student.year)} Year</span></div>
                <div class="profile-detail-item"><i class="fas fa-envelope"></i><span>${student.email}</span></div>
                <div class="profile-detail-item"><i class="fas fa-phone"></i><span>${student.phone || 'N/A'}</span></div>
            </div>
        </div>
        <div class="profile-main">
            <div class="profile-card">
                <h3><i class="fas fa-chart-bar"></i> Academic Overview</h3>
                <div class="profile-stats-grid">
                    <div class="profile-stat">
                        <div class="stat-num">${student.attendance}%</div>
                        <div class="stat-label">Attendance</div>
                    </div>
                    <div class="profile-stat">
                        <div class="stat-num">${studentResults.length}</div>
                        <div class="stat-label">Exams Taken</div>
                    </div>
                    <div class="profile-stat">
                        <div class="stat-num">${avgMarks}%</div>
                        <div class="stat-label">Avg. Score</div>
                    </div>
                    <div class="profile-stat">
                        <div class="stat-num">${avgMarks > 0 ? getGrade(avgMarks) : 'N/A'}</div>
                        <div class="stat-label">Grade</div>
                    </div>
                </div>
            </div>
            <div class="profile-card">
                <h3><i class="fas fa-list-alt"></i> Exam Results</h3>
                ${studentResults.length > 0 ? `
                    <table class="data-table">
                        <thead>
                            <tr><th>Subject</th><th>Marks</th><th>Percentage</th><th>Grade</th></tr>
                        </thead>
                        <tbody>
                            ${studentResults.map(r => {
                                const pct = Math.round((r.marks / r.total) * 100);
                                const grade = getGrade(pct);
                                return `<tr>
                                    <td>${r.subject}</td>
                                    <td>${r.marks}/${r.total}</td>
                                    <td>${pct}%</td>
                                    <td><span class="badge ${getGradeBadgeClass(grade)}">${grade}</span></td>
                                </tr>`;
                            }).join('')}
                        </tbody>
                    </table>
                ` : '<p style="color:var(--text-tertiary);font-size:13px;">No exam results available.</p>'}
            </div>
        </div>
    `;

    document.getElementById('studentProfileContent').innerHTML = profileHTML;
};

// Back to students
document.getElementById('backToStudents').addEventListener('click', () => {
    document.getElementById('page-student-profile').classList.remove('active');
    document.getElementById('page-students').classList.add('active');
});

// Student search/filter listeners
['studentSearch', 'studentDeptFilter', 'studentYearFilter', 'studentSortFilter'].forEach(id => {
    document.getElementById(id).addEventListener('input', renderStudents);
    document.getElementById(id).addEventListener('change', renderStudents);
});

// ============================================================
//                    FACULTY MANAGEMENT
// ============================================================

function renderFaculty() {
    const search = document.getElementById('facultySearch').value.toLowerCase();
    const deptFilter = document.getElementById('facultyDeptFilter').value;
    const sortFilter = document.getElementById('facultySortFilter').value;

    let filtered = appData.faculty.filter(f => {
        const matchSearch = !search || f.name.toLowerCase().includes(search) || f.id.toLowerCase().includes(search);
        const matchDept = !deptFilter || f.department === deptFilter;
        return matchSearch && matchDept;
    });

    filtered.sort((a, b) => {
        switch (sortFilter) {
            case 'name-asc': return a.name.localeCompare(b.name);
            case 'name-desc': return b.name.localeCompare(a.name);
            default: return 0;
        }
    });

    const tbody = document.getElementById('facultyTableBody');
    const emptyState = document.getElementById('facultyEmpty');

    if (filtered.length === 0) {
        tbody.innerHTML = '';
        emptyState.classList.remove('hidden');
        document.getElementById('facultyTable').style.display = 'none';
    } else {
        emptyState.classList.add('hidden');
        document.getElementById('facultyTable').style.display = '';
        tbody.innerHTML = filtered.map(f => `
            <tr>
                <td><span class="badge badge-primary">${f.id}</span></td>
                <td><strong>${f.name}</strong></td>
                <td>${f.department}</td>
                <td>${f.subject}</td>
                <td>${f.email}</td>
                <td>${f.phone}</td>
                <td>
                    <div class="table-actions">
                        <button class="action-btn edit" title="Edit" onclick="editFaculty('${f.id}')"><i class="fas fa-pen"></i></button>
                        <button class="action-btn delete" title="Delete" onclick="deleteFaculty('${f.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
}

function facultyFormHTML(data = {}) {
    return `
        <div class="form-row">
            <div class="form-group">
                <label>Faculty ID <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_facId" value="${data.id || ''}" ${data.id ? 'readonly' : ''} placeholder="e.g., FAC009">
                <div class="form-error">Faculty ID is required.</div>
            </div>
            <div class="form-group">
                <label>Full Name <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_facName" value="${data.name || ''}" placeholder="Enter full name">
                <div class="form-error">Name is required.</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Department <span class="required">*</span></label>
                <select class="form-select" id="f_facDept">
                    <option value="">Select Department</option>
                    ${DEPARTMENTS.map(d => `<option value="${d}" ${data.department === d ? 'selected' : ''}>${d}</option>`).join('')}
                </select>
                <div class="form-error">Department is required.</div>
            </div>
            <div class="form-group">
                <label>Subject <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_facSubject" value="${data.subject || ''}" placeholder="Primary subject">
                <div class="form-error">Subject is required.</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Email <span class="required">*</span></label>
                <input type="email" class="form-input" id="f_facEmail" value="${data.email || ''}" placeholder="email@campus.edu">
                <div class="form-error">Email is required.</div>
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-input" id="f_facPhone" value="${data.phone || ''}" placeholder="Phone number">
                <div class="form-error"></div>
            </div>
        </div>
    `;
}

document.getElementById('addFacultyBtn').addEventListener('click', () => {
    openModal('Add New Faculty', facultyFormHTML(), () => {
        const fields = [
            { id: 'f_facId', message: 'Faculty ID is required.' },
            { id: 'f_facName', message: 'Name is required.' },
            { id: 'f_facDept', message: 'Department is required.' },
            { id: 'f_facSubject', message: 'Subject is required.' },
            { id: 'f_facEmail', message: 'Email is required.' },
        ];
        if (!validateForm(fields)) return;

        const newFac = {
            id: document.getElementById('f_facId').value.trim(),
            name: document.getElementById('f_facName').value.trim(),
            department: document.getElementById('f_facDept').value,
            subject: document.getElementById('f_facSubject').value.trim(),
            email: document.getElementById('f_facEmail').value.trim(),
            phone: document.getElementById('f_facPhone').value.trim(),
        };

        if (appData.faculty.find(f => f.id === newFac.id)) {
            showToast('A faculty member with this ID already exists!', 'error');
            return;
        }

        appData.faculty.push(newFac);
        saveData(appData);
        closeModal();
        renderFaculty();
        showToast('Faculty member added successfully!');
    });
});

window.editFaculty = function(id) {
    const fac = appData.faculty.find(f => f.id === id);
    if (!fac) return;
    openModal('Edit Faculty', facultyFormHTML(fac), () => {
        const fields = [
            { id: 'f_facName', message: 'Name is required.' },
            { id: 'f_facDept', message: 'Department is required.' },
            { id: 'f_facSubject', message: 'Subject is required.' },
            { id: 'f_facEmail', message: 'Email is required.' },
        ];
        if (!validateForm(fields)) return;

        fac.name = document.getElementById('f_facName').value.trim();
        fac.department = document.getElementById('f_facDept').value;
        fac.subject = document.getElementById('f_facSubject').value.trim();
        fac.email = document.getElementById('f_facEmail').value.trim();
        fac.phone = document.getElementById('f_facPhone').value.trim();

        saveData(appData);
        closeModal();
        renderFaculty();
        showToast('Faculty member updated successfully!');
    }, 'Update');
};

window.deleteFaculty = function(id) {
    showConfirm('Delete Faculty', 'Are you sure you want to delete this faculty member?', () => {
        appData.faculty = appData.faculty.filter(f => f.id !== id);
        saveData(appData);
        renderFaculty();
        showToast('Faculty member deleted.', 'info');
    });
};

['facultySearch', 'facultyDeptFilter', 'facultySortFilter'].forEach(id => {
    document.getElementById(id).addEventListener('input', renderFaculty);
    document.getElementById(id).addEventListener('change', renderFaculty);
});

// ============================================================
//                    COURSE MANAGEMENT
// ============================================================

function renderCourses() {
    const search = document.getElementById('courseSearch').value.toLowerCase();
    const deptFilter = document.getElementById('courseDeptFilter').value;

    let filtered = appData.courses.filter(c => {
        const matchSearch = !search || c.name.toLowerCase().includes(search) || c.code.toLowerCase().includes(search);
        const matchDept = !deptFilter || c.department === deptFilter;
        return matchSearch && matchDept;
    });

    const grid = document.getElementById('coursesGrid');
    const emptyState = document.getElementById('coursesEmpty');

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        const accentColors = ['purple', 'blue', 'green', 'orange', 'red'];
        grid.innerHTML = filtered.map((c, i) => `
            <div class="item-card">
                <div class="card-accent ${accentColors[i % accentColors.length]}"></div>
                <div class="item-card-header">
                    <h3>${c.name}</h3>
                    <span class="badge badge-primary">${c.code}</span>
                </div>
                <div class="item-card-body">
                    <p><i class="fas fa-building"></i> ${c.department}</p>
                    <p><i class="fas fa-star"></i> ${c.credits} Credits</p>
                    <p><i class="fas fa-user-tie"></i> ${c.faculty}</p>
                </div>
                <div class="item-card-footer">
                    <button class="btn btn-sm btn-secondary" onclick="editCourse('${c.id}')"><i class="fas fa-pen"></i> Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteCourse('${c.id}')"><i class="fas fa-trash"></i> Delete</button>
                </div>
            </div>
        `).join('');
    }
}

function courseFormHTML(data = {}) {
    return `
        <div class="form-row">
            <div class="form-group">
                <label>Course Name <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_courseName" value="${data.name || ''}" placeholder="e.g., Data Structures">
                <div class="form-error">Course name is required.</div>
            </div>
            <div class="form-group">
                <label>Course Code <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_courseCode" value="${data.code || ''}" placeholder="e.g., CS301">
                <div class="form-error">Course code is required.</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Department <span class="required">*</span></label>
                <select class="form-select" id="f_courseDept">
                    <option value="">Select Department</option>
                    ${DEPARTMENTS.map(d => `<option value="${d}" ${data.department === d ? 'selected' : ''}>${d}</option>`).join('')}
                </select>
                <div class="form-error">Department is required.</div>
            </div>
            <div class="form-group">
                <label>Credits <span class="required">*</span></label>
                <input type="number" class="form-input" id="f_courseCredits" value="${data.credits || ''}" min="1" max="6" placeholder="Credits">
                <div class="form-error">Credits are required.</div>
            </div>
        </div>
        <div class="form-group">
            <label>Faculty <span class="required">*</span></label>
            <select class="form-select" id="f_courseFaculty">
                <option value="">Select Faculty</option>
                ${appData.faculty.map(f => `<option value="${f.name}" ${data.faculty === f.name ? 'selected' : ''}>${f.name} (${f.department})</option>`).join('')}
            </select>
            <div class="form-error">Faculty is required.</div>
        </div>
    `;
}

document.getElementById('addCourseBtn').addEventListener('click', () => {
    openModal('Add New Course', courseFormHTML(), () => {
        const fields = [
            { id: 'f_courseName', message: 'Course name is required.' },
            { id: 'f_courseCode', message: 'Course code is required.' },
            { id: 'f_courseDept', message: 'Department is required.' },
            { id: 'f_courseCredits', message: 'Credits are required.' },
            { id: 'f_courseFaculty', message: 'Faculty is required.' },
        ];
        if (!validateForm(fields)) return;

        appData.courses.push({
            id: generateId('CRS'),
            name: document.getElementById('f_courseName').value.trim(),
            code: document.getElementById('f_courseCode').value.trim(),
            department: document.getElementById('f_courseDept').value,
            credits: parseInt(document.getElementById('f_courseCredits').value),
            faculty: document.getElementById('f_courseFaculty').value,
        });
        saveData(appData);
        closeModal();
        renderCourses();
        showToast('Course added successfully!');
    });
});

window.editCourse = function(id) {
    const course = appData.courses.find(c => c.id === id);
    if (!course) return;
    openModal('Edit Course', courseFormHTML(course), () => {
        const fields = [
            { id: 'f_courseName', message: 'Course name is required.' },
            { id: 'f_courseCode', message: 'Course code is required.' },
            { id: 'f_courseDept', message: 'Department is required.' },
            { id: 'f_courseCredits', message: 'Credits are required.' },
            { id: 'f_courseFaculty', message: 'Faculty is required.' },
        ];
        if (!validateForm(fields)) return;

        course.name = document.getElementById('f_courseName').value.trim();
        course.code = document.getElementById('f_courseCode').value.trim();
        course.department = document.getElementById('f_courseDept').value;
        course.credits = parseInt(document.getElementById('f_courseCredits').value);
        course.faculty = document.getElementById('f_courseFaculty').value;

        saveData(appData);
        closeModal();
        renderCourses();
        showToast('Course updated successfully!');
    }, 'Update');
};

window.deleteCourse = function(id) {
    showConfirm('Delete Course', 'Are you sure you want to delete this course?', () => {
        appData.courses = appData.courses.filter(c => c.id !== id);
        saveData(appData);
        renderCourses();
        showToast('Course deleted.', 'info');
    });
};

['courseSearch', 'courseDeptFilter'].forEach(id => {
    document.getElementById(id).addEventListener('input', renderCourses);
    document.getElementById(id).addEventListener('change', renderCourses);
});

// ============================================================
//                   ATTENDANCE MANAGEMENT
// ============================================================

function renderAttendance() {
    const deptFilter = document.getElementById('attendanceDeptFilter').value;
    const dateStr = document.getElementById('attendanceDateFilter').value || getTodayStr();

    // Set date input default
    if (!document.getElementById('attendanceDateFilter').value) {
        document.getElementById('attendanceDateFilter').value = getTodayStr();
    }

    let filtered = appData.students.filter(s => !deptFilter || s.department === deptFilter);

    // Load saved attendance for this date
    const savedAtt = appData.attendance[dateStr] || {};

    const tbody = document.getElementById('attendanceTableBody');
    tbody.innerHTML = filtered.map(s => {
        const status = savedAtt[s.id] || 'present';
        const isPresent = status === 'present';
        return `
            <tr>
                <td><span class="badge badge-primary">${s.id}</span></td>
                <td><strong>${s.name}</strong></td>
                <td>${s.department}</td>
                <td>
                    <div class="attendance-toggle">
                        <button class="${isPresent ? 'active-present' : ''}" onclick="toggleAttendance('${s.id}', 'present', this)">Present</button>
                        <button class="${!isPresent ? 'active-absent' : ''}" onclick="toggleAttendance('${s.id}', 'absent', this)">Absent</button>
                    </div>
                </td>
                <td class="${s.attendance < 75 ? 'low-attendance' : ''}">${s.attendance}%</td>
            </tr>
        `;
    }).join('');
}

// Temp attendance state
let tempAttendance = {};

window.toggleAttendance = function(studentId, status, btn) {
    tempAttendance[studentId] = status;
    const row = btn.closest('.attendance-toggle');
    row.querySelectorAll('button').forEach(b => {
        b.classList.remove('active-present', 'active-absent');
    });
    if (status === 'present') {
        btn.classList.add('active-present');
    } else {
        btn.classList.add('active-absent');
    }
};

document.getElementById('saveAttendanceBtn').addEventListener('click', () => {
    const dateStr = document.getElementById('attendanceDateFilter').value || getTodayStr();

    // Build attendance from current table state
    const rows = document.querySelectorAll('#attendanceTableBody tr');
    const attendance = {};
    rows.forEach(row => {
        const id = row.querySelector('.badge').textContent;
        const presentBtn = row.querySelector('.active-present');
        attendance[id] = presentBtn ? 'present' : 'absent';
    });

    appData.attendance[dateStr] = { ...attendance, ...tempAttendance };
    saveData(appData);
    tempAttendance = {};
    showToast(`Attendance saved for ${formatDate(dateStr)}!`);
});

['attendanceDeptFilter', 'attendanceDateFilter'].forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
        tempAttendance = {};
        renderAttendance();
    });
});

// ============================================================
//                       TIMETABLE
// ============================================================

function renderTimetable() {
    const deptFilter = document.getElementById('timetableDeptFilter').value || 'Computer Science';
    const table = document.getElementById('timetableGrid');
    const schedule = appData.timetable[deptFilter];

    if (!schedule) {
        table.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:40px;color:var(--text-tertiary);">No timetable available for this department.</td></tr>';
        return;
    }

    const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    let html = `<thead><tr><th>Time</th>${dayNames.map(d => `<th>${d}</th>`).join('')}</tr></thead><tbody>`;

    schedule.forEach(slot => {
        html += '<tr>';
        html += `<td>${slot.time}</td>`;
        days.forEach(day => {
            const cell = slot[day];
            if (cell) {
                html += `<td><div class="tt-cell"><div class="tt-subject">${cell.sub}</div><div class="tt-faculty">${cell.fac}</div><div class="tt-room">${cell.room}</div></div></td>`;
            } else {
                html += `<td style="color:var(--text-tertiary);font-style:italic;font-size:12px;">Lunch Break</td>`;
            }
        });
        html += '</tr>';
    });

    html += '</tbody>';
    table.innerHTML = html;
}

document.getElementById('timetableDeptFilter').addEventListener('change', renderTimetable);

// ============================================================
//                      ASSIGNMENTS
// ============================================================

function renderAssignments() {
    const search = document.getElementById('assignmentSearch').value.toLowerCase();
    const statusFilter = document.getElementById('assignmentStatusFilter').value;

    // Auto-update overdue status
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    appData.assignments.forEach(a => {
        if (a.status === 'Pending' && new Date(a.deadline) < today) {
            a.status = 'Overdue';
        }
    });
    saveData(appData);

    let filtered = appData.assignments.filter(a => {
        const matchSearch = !search || a.title.toLowerCase().includes(search) || a.subject.toLowerCase().includes(search);
        const matchStatus = !statusFilter || a.status === statusFilter;
        return matchSearch && matchStatus;
    });

    const grid = document.getElementById('assignmentsGrid');
    const emptyState = document.getElementById('assignmentsEmpty');

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        grid.innerHTML = filtered.map(a => {
            const statusClass = a.status === 'Submitted' ? 'badge-success' : a.status === 'Overdue' ? 'badge-danger' : 'badge-warning';
            const accentColor = a.status === 'Submitted' ? 'green' : a.status === 'Overdue' ? 'red' : 'orange';
            const daysLeft = Math.ceil((new Date(a.deadline) - today) / (1000 * 60 * 60 * 24));
            let deadlineText = '';
            if (a.status === 'Overdue') {
                deadlineText = `<span style="color:var(--danger);font-weight:600;">Overdue by ${Math.abs(daysLeft)} days</span>`;
            } else if (daysLeft <= 3 && daysLeft >= 0) {
                deadlineText = `<span style="color:var(--warning);font-weight:600;">${daysLeft} days left</span>`;
            } else {
                deadlineText = formatDate(a.deadline);
            }

            return `
                <div class="item-card">
                    <div class="card-accent ${accentColor}"></div>
                    <div class="item-card-header">
                        <h3>${a.title}</h3>
                        <span class="badge ${statusClass}">${a.status}</span>
                    </div>
                    <div class="item-card-body">
                        <p><i class="fas fa-book"></i> ${a.subject}</p>
                        <p><i class="fas fa-align-left"></i> ${a.description.substring(0, 100)}${a.description.length > 100 ? '...' : ''}</p>
                        <p><i class="fas fa-clock"></i> Deadline: ${deadlineText}</p>
                    </div>
                    <div class="item-card-footer">
                        <button class="btn btn-sm btn-secondary" onclick="editAssignment('${a.id}')"><i class="fas fa-pen"></i> Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteAssignment('${a.id}')"><i class="fas fa-trash"></i> Delete</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function assignmentFormHTML(data = {}) {
    return `
        <div class="form-group">
            <label>Title <span class="required">*</span></label>
            <input type="text" class="form-input" id="f_asgTitle" value="${data.title || ''}" placeholder="Assignment title">
            <div class="form-error">Title is required.</div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Subject <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_asgSubject" value="${data.subject || ''}" placeholder="Subject name">
                <div class="form-error">Subject is required.</div>
            </div>
            <div class="form-group">
                <label>Deadline <span class="required">*</span></label>
                <input type="date" class="form-input" id="f_asgDeadline" value="${data.deadline || ''}">
                <div class="form-error">Deadline is required.</div>
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="form-textarea" id="f_asgDesc" placeholder="Assignment description...">${data.description || ''}</textarea>
            <div class="form-error"></div>
        </div>
        <div class="form-group">
            <label>Status</label>
            <select class="form-select" id="f_asgStatus">
                <option value="Pending" ${data.status === 'Pending' ? 'selected' : ''}>Pending</option>
                <option value="Submitted" ${data.status === 'Submitted' ? 'selected' : ''}>Submitted</option>
                <option value="Overdue" ${data.status === 'Overdue' ? 'selected' : ''}>Overdue</option>
            </select>
            <div class="form-error"></div>
        </div>
    `;
}

document.getElementById('addAssignmentBtn').addEventListener('click', () => {
    openModal('Add Assignment', assignmentFormHTML(), () => {
        const fields = [
            { id: 'f_asgTitle', message: 'Title is required.' },
            { id: 'f_asgSubject', message: 'Subject is required.' },
            { id: 'f_asgDeadline', message: 'Deadline is required.' },
        ];
        if (!validateForm(fields)) return;

        appData.assignments.push({
            id: generateId('ASG'),
            title: document.getElementById('f_asgTitle').value.trim(),
            subject: document.getElementById('f_asgSubject').value.trim(),
            description: document.getElementById('f_asgDesc').value.trim(),
            deadline: document.getElementById('f_asgDeadline').value,
            status: document.getElementById('f_asgStatus').value,
        });
        saveData(appData);
        closeModal();
        renderAssignments();
        showToast('Assignment added successfully!');
    });
});

window.editAssignment = function(id) {
    const asg = appData.assignments.find(a => a.id === id);
    if (!asg) return;
    openModal('Edit Assignment', assignmentFormHTML(asg), () => {
        const fields = [
            { id: 'f_asgTitle', message: 'Title is required.' },
            { id: 'f_asgSubject', message: 'Subject is required.' },
            { id: 'f_asgDeadline', message: 'Deadline is required.' },
        ];
        if (!validateForm(fields)) return;

        asg.title = document.getElementById('f_asgTitle').value.trim();
        asg.subject = document.getElementById('f_asgSubject').value.trim();
        asg.description = document.getElementById('f_asgDesc').value.trim();
        asg.deadline = document.getElementById('f_asgDeadline').value;
        asg.status = document.getElementById('f_asgStatus').value;

        saveData(appData);
        closeModal();
        renderAssignments();
        showToast('Assignment updated successfully!');
    }, 'Update');
};

window.deleteAssignment = function(id) {
    showConfirm('Delete Assignment', 'Are you sure you want to delete this assignment?', () => {
        appData.assignments = appData.assignments.filter(a => a.id !== id);
        saveData(appData);
        renderAssignments();
        showToast('Assignment deleted.', 'info');
    });
};

['assignmentSearch', 'assignmentStatusFilter'].forEach(id => {
    document.getElementById(id).addEventListener('input', renderAssignments);
    document.getElementById(id).addEventListener('change', renderAssignments);
});

// ============================================================
//                    EXAMS & RESULTS
// ============================================================

// Tabs
document.querySelectorAll('#examTabs .tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('#examTabs .tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
});

function renderExams() {
    const tbody = document.getElementById('examsTableBody');
    tbody.innerHTML = appData.exams.map(e => `
        <tr>
            <td><strong>${e.subject}</strong></td>
            <td>${formatDate(e.date)}</td>
            <td>${e.time}</td>
            <td>${e.room}</td>
            <td>${e.department}</td>
            <td>
                <div class="table-actions">
                    <button class="action-btn edit" title="Edit" onclick="editExam('${e.id}')"><i class="fas fa-pen"></i></button>
                    <button class="action-btn delete" title="Delete" onclick="deleteExam('${e.id}')"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function examFormHTML(data = {}) {
    return `
        <div class="form-group">
            <label>Subject <span class="required">*</span></label>
            <input type="text" class="form-input" id="f_examSubject" value="${data.subject || ''}" placeholder="Subject name">
            <div class="form-error">Subject is required.</div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Date <span class="required">*</span></label>
                <input type="date" class="form-input" id="f_examDate" value="${data.date || ''}">
                <div class="form-error">Date is required.</div>
            </div>
            <div class="form-group">
                <label>Time <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_examTime" value="${data.time || ''}" placeholder="e.g., 09:00 AM - 12:00 PM">
                <div class="form-error">Time is required.</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Room <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_examRoom" value="${data.room || ''}" placeholder="e.g., Hall A - Room 101">
                <div class="form-error">Room is required.</div>
            </div>
            <div class="form-group">
                <label>Department <span class="required">*</span></label>
                <select class="form-select" id="f_examDept">
                    <option value="">Select Department</option>
                    ${DEPARTMENTS.map(d => `<option value="${d}" ${data.department === d ? 'selected' : ''}>${d}</option>`).join('')}
                </select>
                <div class="form-error">Department is required.</div>
            </div>
        </div>
    `;
}

document.getElementById('addExamBtn').addEventListener('click', () => {
    openModal('Add Exam Schedule', examFormHTML(), () => {
        const fields = [
            { id: 'f_examSubject' }, { id: 'f_examDate' }, { id: 'f_examTime' },
            { id: 'f_examRoom' }, { id: 'f_examDept' },
        ];
        if (!validateForm(fields)) return;

        appData.exams.push({
            id: generateId('EXM'),
            subject: document.getElementById('f_examSubject').value.trim(),
            date: document.getElementById('f_examDate').value,
            time: document.getElementById('f_examTime').value.trim(),
            room: document.getElementById('f_examRoom').value.trim(),
            department: document.getElementById('f_examDept').value,
        });
        saveData(appData);
        closeModal();
        renderExams();
        showToast('Exam schedule added!');
    });
});

window.editExam = function(id) {
    const exam = appData.exams.find(e => e.id === id);
    if (!exam) return;
    openModal('Edit Exam Schedule', examFormHTML(exam), () => {
        const fields = [
            { id: 'f_examSubject' }, { id: 'f_examDate' }, { id: 'f_examTime' },
            { id: 'f_examRoom' }, { id: 'f_examDept' },
        ];
        if (!validateForm(fields)) return;

        exam.subject = document.getElementById('f_examSubject').value.trim();
        exam.date = document.getElementById('f_examDate').value;
        exam.time = document.getElementById('f_examTime').value.trim();
        exam.room = document.getElementById('f_examRoom').value.trim();
        exam.department = document.getElementById('f_examDept').value;

        saveData(appData);
        closeModal();
        renderExams();
        showToast('Exam schedule updated!');
    }, 'Update');
};

window.deleteExam = function(id) {
    showConfirm('Delete Exam', 'Are you sure you want to remove this exam schedule?', () => {
        appData.exams = appData.exams.filter(e => e.id !== id);
        saveData(appData);
        renderExams();
        showToast('Exam schedule removed.', 'info');
    });
};

// ==================== RESULTS ====================

function renderResults() {
    const search = document.getElementById('resultSearch').value.toLowerCase();

    let filtered = appData.results.filter(r => {
        return !search || r.studentName.toLowerCase().includes(search) || r.studentId.toLowerCase().includes(search);
    });

    const tbody = document.getElementById('resultsTableBody');
    tbody.innerHTML = filtered.map(r => {
        const pct = Math.round((r.marks / r.total) * 100);
        const grade = getGrade(pct);
        return `
            <tr>
                <td><span class="badge badge-primary">${r.studentId}</span></td>
                <td><strong>${r.studentName}</strong></td>
                <td>${r.subject}</td>
                <td>${r.marks}/${r.total}</td>
                <td>${pct}%</td>
                <td><span class="badge ${getGradeBadgeClass(grade)}">${grade}</span></td>
                <td>
                    <div class="table-actions">
                        <button class="action-btn edit" title="Edit" onclick="editResult('${r.id}')"><i class="fas fa-pen"></i></button>
                        <button class="action-btn delete" title="Delete" onclick="deleteResult('${r.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function resultFormHTML(data = {}) {
    return `
        <div class="form-row">
            <div class="form-group">
                <label>Student <span class="required">*</span></label>
                <select class="form-select" id="f_resStudent">
                    <option value="">Select Student</option>
                    ${appData.students.map(s => `<option value="${s.id}" ${data.studentId === s.id ? 'selected' : ''}>${s.name} (${s.id})</option>`).join('')}
                </select>
                <div class="form-error">Student is required.</div>
            </div>
            <div class="form-group">
                <label>Subject <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_resSubject" value="${data.subject || ''}" placeholder="Subject name">
                <div class="form-error">Subject is required.</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Marks Obtained <span class="required">*</span></label>
                <input type="number" class="form-input" id="f_resMarks" value="${data.marks || ''}" min="0" placeholder="Marks">
                <div class="form-error">Marks are required.</div>
            </div>
            <div class="form-group">
                <label>Total Marks <span class="required">*</span></label>
                <input type="number" class="form-input" id="f_resTotal" value="${data.total || 100}" min="1" placeholder="Total">
                <div class="form-error">Total marks are required.</div>
            </div>
        </div>
    `;
}

document.getElementById('addResultBtn').addEventListener('click', () => {
    openModal('Add Student Result', resultFormHTML(), () => {
        const fields = [
            { id: 'f_resStudent' }, { id: 'f_resSubject' }, { id: 'f_resMarks' }, { id: 'f_resTotal' },
        ];
        if (!validateForm(fields)) return;

        const studentId = document.getElementById('f_resStudent').value;
        const student = appData.students.find(s => s.id === studentId);

        appData.results.push({
            id: generateId('RES'),
            studentId: studentId,
            studentName: student ? student.name : 'Unknown',
            subject: document.getElementById('f_resSubject').value.trim(),
            marks: parseInt(document.getElementById('f_resMarks').value),
            total: parseInt(document.getElementById('f_resTotal').value),
        });
        saveData(appData);
        closeModal();
        renderResults();
        showToast('Result added successfully!');
    });
});

window.editResult = function(id) {
    const res = appData.results.find(r => r.id === id);
    if (!res) return;
    openModal('Edit Result', resultFormHTML(res), () => {
        const fields = [
            { id: 'f_resStudent' }, { id: 'f_resSubject' }, { id: 'f_resMarks' }, { id: 'f_resTotal' },
        ];
        if (!validateForm(fields)) return;

        const studentId = document.getElementById('f_resStudent').value;
        const student = appData.students.find(s => s.id === studentId);

        res.studentId = studentId;
        res.studentName = student ? student.name : 'Unknown';
        res.subject = document.getElementById('f_resSubject').value.trim();
        res.marks = parseInt(document.getElementById('f_resMarks').value);
        res.total = parseInt(document.getElementById('f_resTotal').value);

        saveData(appData);
        closeModal();
        renderResults();
        showToast('Result updated successfully!');
    }, 'Update');
};

window.deleteResult = function(id) {
    showConfirm('Delete Result', 'Are you sure you want to delete this result?', () => {
        appData.results = appData.results.filter(r => r.id !== id);
        saveData(appData);
        renderResults();
        showToast('Result deleted.', 'info');
    });
};

document.getElementById('resultSearch').addEventListener('input', renderResults);

// ============================================================
//                         EVENTS
// ============================================================

function renderEvents() {
    const search = document.getElementById('eventSearch').value.toLowerCase();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let filtered = appData.events.filter(e => {
        return !search || e.name.toLowerCase().includes(search) || e.description.toLowerCase().includes(search);
    });

    // Sort by date ascending
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

    const grid = document.getElementById('eventsGrid');
    const emptyState = document.getElementById('eventsEmpty');

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        grid.innerHTML = filtered.map(e => {
            const d = new Date(e.date);
            const isPast = d < today;
            const accentColor = isPast ? 'red' : 'blue';
            return `
                <div class="item-card" style="${isPast ? 'opacity:0.7;' : ''}">
                    <div class="card-accent ${accentColor}"></div>
                    <div class="item-card-header">
                        <h3>${e.name}</h3>
                        <span class="badge ${isPast ? 'badge-danger' : 'badge-success'}">${isPast ? 'Past' : 'Upcoming'}</span>
                    </div>
                    <div class="item-card-body">
                        <p><i class="fas fa-calendar"></i> ${formatDate(e.date)}</p>
                        <p><i class="fas fa-clock"></i> ${e.time}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${e.location}</p>
                        <p><i class="fas fa-info-circle"></i> ${e.description.substring(0, 120)}${e.description.length > 120 ? '...' : ''}</p>
                    </div>
                    <div class="item-card-footer">
                        <button class="btn btn-sm btn-secondary" onclick="editEvent('${e.id}')"><i class="fas fa-pen"></i> Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteEvent('${e.id}')"><i class="fas fa-trash"></i> Delete</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function eventFormHTML(data = {}) {
    return `
        <div class="form-group">
            <label>Event Name <span class="required">*</span></label>
            <input type="text" class="form-input" id="f_eventName" value="${data.name || ''}" placeholder="Event name">
            <div class="form-error">Event name is required.</div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Date <span class="required">*</span></label>
                <input type="date" class="form-input" id="f_eventDate" value="${data.date || ''}">
                <div class="form-error">Date is required.</div>
            </div>
            <div class="form-group">
                <label>Time <span class="required">*</span></label>
                <input type="text" class="form-input" id="f_eventTime" value="${data.time || ''}" placeholder="e.g., 10:00 AM">
                <div class="form-error">Time is required.</div>
            </div>
        </div>
        <div class="form-group">
            <label>Location <span class="required">*</span></label>
            <input type="text" class="form-input" id="f_eventLocation" value="${data.location || ''}" placeholder="Event location">
            <div class="form-error">Location is required.</div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="form-textarea" id="f_eventDesc" placeholder="Event description...">${data.description || ''}</textarea>
            <div class="form-error"></div>
        </div>
    `;
}

document.getElementById('addEventBtn').addEventListener('click', () => {
    openModal('Add Event', eventFormHTML(), () => {
        const fields = [
            { id: 'f_eventName' }, { id: 'f_eventDate' }, { id: 'f_eventTime' }, { id: 'f_eventLocation' },
        ];
        if (!validateForm(fields)) return;

        appData.events.push({
            id: generateId('EVT'),
            name: document.getElementById('f_eventName').value.trim(),
            date: document.getElementById('f_eventDate').value,
            time: document.getElementById('f_eventTime').value.trim(),
            location: document.getElementById('f_eventLocation').value.trim(),
            description: document.getElementById('f_eventDesc').value.trim(),
        });
        saveData(appData);
        closeModal();
        renderEvents();
        showToast('Event added successfully!');
    });
});

window.editEvent = function(id) {
    const evt = appData.events.find(e => e.id === id);
    if (!evt) return;
    openModal('Edit Event', eventFormHTML(evt), () => {
        const fields = [
            { id: 'f_eventName' }, { id: 'f_eventDate' }, { id: 'f_eventTime' }, { id: 'f_eventLocation' },
        ];
        if (!validateForm(fields)) return;

        evt.name = document.getElementById('f_eventName').value.trim();
        evt.date = document.getElementById('f_eventDate').value;
        evt.time = document.getElementById('f_eventTime').value.trim();
        evt.location = document.getElementById('f_eventLocation').value.trim();
        evt.description = document.getElementById('f_eventDesc').value.trim();

        saveData(appData);
        closeModal();
        renderEvents();
        showToast('Event updated successfully!');
    }, 'Update');
};

window.deleteEvent = function(id) {
    showConfirm('Delete Event', 'Are you sure you want to delete this event?', () => {
        appData.events = appData.events.filter(e => e.id !== id);
        saveData(appData);
        renderEvents();
        showToast('Event deleted.', 'info');
    });
};

document.getElementById('eventSearch').addEventListener('input', renderEvents);

// ============================================================
//                     ANNOUNCEMENTS
// ============================================================

function renderAnnouncements() {
    const search = document.getElementById('announcementSearch').value.toLowerCase();

    let filtered = appData.announcements.filter(a => {
        return !search || a.title.toLowerCase().includes(search) || a.content.toLowerCase().includes(search);
    });

    // Sort by date descending (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    const container = document.getElementById('announcementsListPage');
    const emptyState = document.getElementById('announcementsEmpty');

    if (filtered.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        container.innerHTML = filtered.map(a => `
            <div class="announcement-card">
                <div class="announcement-card-header">
                    <h3>${a.title}</h3>
                    <div class="table-actions">
                        <button class="action-btn edit" title="Edit" onclick="editAnnouncement('${a.id}')"><i class="fas fa-pen"></i></button>
                        <button class="action-btn delete" title="Delete" onclick="deleteAnnouncement('${a.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <p>${a.content}</p>
                <div class="ann-meta">
                    <i class="fas fa-calendar"></i> ${formatDate(a.date)} &bull; <i class="fas fa-user"></i> ${a.author}
                </div>
            </div>
        `).join('');
    }
}

function announcementFormHTML(data = {}) {
    return `
        <div class="form-group">
            <label>Title <span class="required">*</span></label>
            <input type="text" class="form-input" id="f_annTitle" value="${data.title || ''}" placeholder="Announcement title">
            <div class="form-error">Title is required.</div>
        </div>
        <div class="form-group">
            <label>Content <span class="required">*</span></label>
            <textarea class="form-textarea" id="f_annContent" placeholder="Announcement content..." rows="4">${data.content || ''}</textarea>
            <div class="form-error">Content is required.</div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Date</label>
                <input type="date" class="form-input" id="f_annDate" value="${data.date || getTodayStr()}">
                <div class="form-error"></div>
            </div>
            <div class="form-group">
                <label>Author</label>
                <input type="text" class="form-input" id="f_annAuthor" value="${data.author || 'Admin'}" placeholder="Author name">
                <div class="form-error"></div>
            </div>
        </div>
    `;
}

document.getElementById('addAnnouncementBtn').addEventListener('click', () => {
    openModal('Add Announcement', announcementFormHTML(), () => {
        const fields = [
            { id: 'f_annTitle', message: 'Title is required.' },
            { id: 'f_annContent', message: 'Content is required.' },
        ];
        if (!validateForm(fields)) return;

        appData.announcements.push({
            id: generateId('ANN'),
            title: document.getElementById('f_annTitle').value.trim(),
            content: document.getElementById('f_annContent').value.trim(),
            date: document.getElementById('f_annDate').value || getTodayStr(),
            author: document.getElementById('f_annAuthor').value.trim() || 'Admin',
        });
        saveData(appData);
        closeModal();
        renderAnnouncements();
        showToast('Announcement added successfully!');
    });
});

window.editAnnouncement = function(id) {
    const ann = appData.announcements.find(a => a.id === id);
    if (!ann) return;
    openModal('Edit Announcement', announcementFormHTML(ann), () => {
        const fields = [
            { id: 'f_annTitle', message: 'Title is required.' },
            { id: 'f_annContent', message: 'Content is required.' },
        ];
        if (!validateForm(fields)) return;

        ann.title = document.getElementById('f_annTitle').value.trim();
        ann.content = document.getElementById('f_annContent').value.trim();
        ann.date = document.getElementById('f_annDate').value || getTodayStr();
        ann.author = document.getElementById('f_annAuthor').value.trim() || 'Admin';

        saveData(appData);
        closeModal();
        renderAnnouncements();
        showToast('Announcement updated successfully!');
    }, 'Update');
};

window.deleteAnnouncement = function(id) {
    showConfirm('Delete Announcement', 'Are you sure you want to delete this announcement?', () => {
        appData.announcements = appData.announcements.filter(a => a.id !== id);
        saveData(appData);
        renderAnnouncements();
        showToast('Announcement deleted.', 'info');
    });
};

document.getElementById('announcementSearch').addEventListener('input', renderAnnouncements);

// ============================================================
//                    GLOBAL SEARCH
// ============================================================

document.getElementById('globalSearch').addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    if (!query) return;

    // Search across students, faculty, courses
    const studentMatch = appData.students.find(s => s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query));
    if (studentMatch) {
        navigateTo('students');
        document.getElementById('studentSearch').value = query;
        renderStudents();
        return;
    }

    const facultyMatch = appData.faculty.find(f => f.name.toLowerCase().includes(query) || f.id.toLowerCase().includes(query));
    if (facultyMatch) {
        navigateTo('faculty');
        document.getElementById('facultySearch').value = query;
        renderFaculty();
        return;
    }

    const courseMatch = appData.courses.find(c => c.name.toLowerCase().includes(query) || c.code.toLowerCase().includes(query));
    if (courseMatch) {
        navigateTo('courses');
        document.getElementById('courseSearch').value = query;
        renderCourses();
        return;
    }
});

// ============================================================
//                    INITIAL RENDER
// ============================================================

renderDashboard();
