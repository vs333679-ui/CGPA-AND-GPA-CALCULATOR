const subjectname = document.getElementById("subjectname");
const credit = document.getElementById("credit");
const grade = document.getElementById("grade");
const addBtn = document.getElementById("addBtn");
const subjectlist = document.getElementById("subjectlist");

const gpaResult = document.getElementById("gpaResult");
const cgpaResult = document.getElementById("cgpaResult");

const semGPA = document.getElementById("semGPA");
const addSemBtn = document.getElementById("addSemBtn");
const semList = document.getElementById("semList");
const finalCGPA = document.getElementById("finalCGPA");


// ===== GPA SYSTEM (SUBJECT BASED) =====
let totalCredits = 0;
let totalPoints = 0;


// ===== CGPA SYSTEM (SEMESTER BASED) =====
let semesterGPAs = [];


// ---------------- SUBJECT ADD ----------------
addBtn.addEventListener("click", function () {

    let subject = subjectname.value;
    let c = Number(credit.value);
    let g = Number(grade.value);

    if (subject === "" || c <= 0) {
        alert("Enter valid subject and credit!");
        return;
    }

    // list show
    let li = document.createElement("li");
    li.innerHTML = `${subject} | Credit: ${c} | Grade: ${g}`;
    subjectlist.appendChild(li);

    // GPA calculation
    totalCredits += c;
    totalPoints += c * g;

    let gpa = totalPoints / totalCredits;

    gpaResult.innerText = gpa.toFixed(2);

    // current CGPA (same as GPA in this model)
    cgpaResult.innerText = gpa.toFixed(2);

    // clear
    subjectname.value = "";
    credit.value = "";
});


// ---------------- SEMESTER ADD ----------------
addSemBtn.addEventListener("click", function () {

    let gpa = Number(semGPA.value);

    if (gpa <= 0 || gpa > 10) {
        alert("Enter valid GPA between 0 and 10");
        return;
    }

    // add semester list
    let li = document.createElement("li");
    li.innerText = "Semester " + (semesterGPAs.length + 1) + " GPA: " + gpa;
    semList.appendChild(li);

    // store GPA
    semesterGPAs.push(gpa);

    // calculate final CGPA
    let sum = 0;
    for (let i = 0; i < semesterGPAs.length; i++) {
        sum += semesterGPAs[i];
    }

    let cgpa = sum / semesterGPAs.length;

    finalCGPA.innerText = cgpa.toFixed(2);

    // clear input
    semGPA.value = "";
});