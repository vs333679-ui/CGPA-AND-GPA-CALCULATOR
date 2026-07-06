const subjectname=
document.getElementById("subjectname");
const credit=
document.getElementById("credit");
const grade=
document.getElementById("grade");
const addBtn=
document.getElementById("addBtn");
const subjectlist=
document.getElementById("subjectlist");
addBtn.addEventListener("click",function(){
  let subject = subjectname.value;
  let creditValue = credit.value;
  let gradeValue= grade.value; 

 
    let li = document.createElement("li");
  li.innerHTML=subject+" |Credit"+ creditValue+" |Grade"+gradeValue;
      subjectlist.appendChild(li);
      
  
});
