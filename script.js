const subjectname = document.getElementById("subjectname");
const credit = document.getElementById("credit");
const grade = document.getElementById("grade");
const addBtn = document.getElementById("addBtn");
const subjectlist = document.getElementById("subjectlist");

const gpaResult = document.getElementById("gpaResult");
const cgpaResult = document.getElementById("cgpaResult");

// totals
let totalCredits = 0;
let totalPoints = 0;

addBtn.addEventListener("click", function () {

    let subject = subjectname.value;
    let c = Number(credit.value);
    let g = Number(grade.value);

    if (subject === "" || c <= 0) {
        alert("Please enter valid data!");
        return;
    }

    // list add
    let li = document.createElement("li");
    li.innerHTML = `${subject} | Credit: ${c} | Grade: ${g}`;
    subjectlist.appendChild(li);

    // calculation
    totalCredits += c;
    totalPoints += c * g;

    let gpa = totalPoints / totalCredits;

    // show result
    gpaResult.innerText = gpa.toFixed(2);
    cgpaResult.innerText = gpa.toFixed(2); // same for now

    // clear inputs
    subjectname.value = "";
    credit.value = "";
});