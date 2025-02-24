// Data storage
let patients = [];
let appointments = [];
let doctors = [];

// Show/hide sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Patient management
function addPatient(event) {
    event.preventDefault();
    const patient = {
        name: document.getElementById('patientName').value,
        age: document.getElementById('patientAge').value,
        gender: document.getElementById('patientGender').value
    };
    patients.push(patient);
    updatePatientsTable();
    updatePatientDropdown();
    event.target.reset();
}

function updatePatientsTable() {
    const tbody = document.querySelector('#patientsTable tbody');
    tbody.innerHTML = '';
    patients.forEach(patient => {
        const row = tbody.insertRow();
        row.insertCell().textContent = patient.name;
        row.insertCell().textContent = patient.age;
        row.insertCell().textContent = patient.gender;
    });
}

// Doctor management
function addDoctor(event) {
    event.preventDefault();
    const doctor = {
        name: document.getElementById('doctorName').value,
        specialization: document.getElementById('doctorSpecialization').value
    };
    doctors.push(doctor);
    updateDoctorsTable();
    updateDoctorDropdown();
    event.target.reset();
}

function updateDoctorsTable() {
    const tbody = document.querySelector('#doctorsTable tbody');
    tbody.innerHTML = '';
    doctors.forEach(doctor => {
        const row = tbody.insertRow();
        row.insertCell().textContent = doctor.name;
        row.insertCell().textContent = doctor.specialization;
    });
}

// Appointment management
function addAppointment(event) {
    event.preventDefault();
    const appointment = {
        patient: document.getElementById('appointmentPatient').value,
        doctor: document.getElementById('appointmentDoctor').value,
        date: document.getElementById('appointmentDate').value,
        time: document.getElementById('appointmentTime').value
    };
    appointments.push(appointment);
    updateAppointmentsTable();
    event.target.reset();
}

function updateAppointmentsTable() {
    const tbody = document.querySelector('#appointmentsTable tbody');
    tbody.innerHTML = '';
    appointments.forEach(appointment => {
        const row = tbody.insertRow();
        row.insertCell().textContent = appointment.patient;
        row.insertCell().textContent = appointment.doctor;
        row.insertCell().textContent = appointment.date;
        row.insertCell().textContent = appointment.time;
    });
}

// Update dropdowns
function updatePatientDropdown() {
    const select = document.getElementById('appointmentPatient');
    select.innerHTML = '';
    patients.forEach(patient => {
        const option = document.createElement('option');
        option.value = patient.name;
        option.textContent = patient.name;
        select.appendChild(option);
    });
}

function updateDoctorDropdown() {
    const select = document.getElementById('appointmentDoctor');
    select.innerHTML = '';
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.name;
        option.textContent = doctor.name ;
        select.appendChild(option);
    });
}

// Show patients section by default
showSection('patients');
showSection('doctors')
