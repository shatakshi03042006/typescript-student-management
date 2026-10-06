interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

const students: Student[] = [];

const studentForm = document.getElementById("studentForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const courseInput = document.getElementById("course") as HTMLInputElement;
const studentList = document.getElementById("studentList") as HTMLDivElement;

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const student: Student = {
    id: students.length + 1,
    name: nameInput.value,
    age: Number(ageInput.value),
    course: courseInput.value,
  };

  students.push(student);

  displayStudents();

  studentForm.reset();
});

function displayStudents(): void {
  studentList.innerHTML = "";

  students.forEach((student) => {
    const studentCard = document.createElement("div");

    studentCard.className = "student-card";

    studentCard.innerHTML = `
      <h3>${student.name}</h3>
      <p>Age: ${student.age}</p>
      <p>Course: ${student.course}</p>
    `;

    studentList.appendChild(studentCard);
  });
}