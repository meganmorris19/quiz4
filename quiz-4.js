var students = ["Joe", "Jack", "Jane", "Jill"];
var gradeMean = [90, 68, 92, 88];

//Using the data above write a JavaScript that is linked to an html page that determines who has the lowest score.
//Write the answer in sentence form that includes both the name of the student and the score they have.
//Write the answer to both the console and the html page using the document write or other command.

var lowestGrade = 100;
var worstStudent;

for (i=0; i<students.length; i++){
  if (gradeMean[i]<lowestGrade){
    lowestGrade = gradeMean[i];
    worstStudent = [i];
  }
}

console.log(students[worstStudent] + " has the lowest score (" + gradeMean[worstStudent] + ").");

document.getElementById("content").innerHTML = (students[worstStudent] + " has the lowest score (" + gradeMean[worstStudent] + ").");
