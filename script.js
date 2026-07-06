window.onload = function () {

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

let totalCredits = 0;
let totalPoints = 0;
let semesterGPAs = [];


// ===== SUBJECT GPA =====
addBtn.addEventListener("click", function () {

    let subject = subjectname.value;
    let c = Number(credit.value);
    let g = Number(grade.value);

    if (!subject || c <= 0 || isNaN(g)) {
        alert("Fill all fields correctly");
        return;
    }

    let li = document.createElement("li");
    li.innerText = `${subject} | Credit: ${c} | Grade: ${g}`;
    subjectlist.appendChild(li);

    totalCredits += c;
    totalPoints += c * g;

    let gpa = totalPoints / totalCredits;

    gpaResult.innerText = gpa.toFixed(2);
    cgpaResult.innerText = gpa.toFixed(2);

    subjectname.value = "";
    credit.value = "";
});


// ===== SEMESTER CGPA =====
addSemBtn.addEventListener("click", function () {

    let gpa = Number(semGPA.value);

    if (isNaN(gpa) || gpa <= 0 || gpa > 10) {
        alert("Enter GPA between 0 - 10");
        return;
    }

    let li = document.createElement("li");
    li.innerText = `Semester ${semesterGPAs.length + 1}: ${gpa}`;
    semList.appendChild(li);

    semesterGPAs.push(gpa);

    let sum = 0;
    for (let i = 0; i < semesterGPAs.length; i++) {
        sum += semesterGPAs[i];
    }

    let cgpa = sum / semesterGPAs.length;

    finalCGPA.innerText = cgpa.toFixed(2);

    semGPA.value = "";
});

};