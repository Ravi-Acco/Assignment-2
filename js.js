let students = [];

    function createStudent() {
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const age = document.getElementById('age').value;
        const rollNo = document.getElementById('rollno').value;
        const dob = document.getElementById('date').value;
        const hobbies = document.getElementById('hobby').value.split(',').map(item => item.trim());
        if (firstName === "") {
            document.getElementById('firstnameError').innerText = "First name is required";
            return;
        }
        if (lastName === "") {
            document.getElementById('lastnameError').innerText = "Last name is required";
            return;
        }
        if (age === "" && age<0 && age>100) {
            document.getElementById('ageError').innerText = "Age is required";
            return;
        }
        if (rollNo === "") {
            document.getElementById('rollnoError').innerText = "roll number is required";
            return;
        }
        if (dob === "") {
            document.getElementById('dateError').innerText = "date of birth is required";
            return;
        }
        const student = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            rollNo: rollNo,
            dob: dob,
            hobbies: hobbies
        };

        students.push(student);
    }

    function getStudentDetails() {
        const rollNo = document.getElementById('rollnoinput').value;
        let student = null;
        for(let i=0;i<students.length;i++){
            if (students[i]['rollNo'] ===rollNo){
                student=students[i];
                break;
            }
        }
        if (student) {
            let studentInfo =` Student Details:\n\n`;
        studentInfo += `First Name: ${student.firstName}\n`;
        studentInfo += `Last Name: ${student.lastName}\n`;
        studentInfo += `Age: ${student.age}\n`;
        studentInfo += `Roll Number: ${student.rollNo}\n`;
        studentInfo += `Date of Birth: ${student.dob}\n`;
        studentInfo += `Hobbies: ${student.hobbies.join(', ')}\n`;

        alert(studentInfo);
    } else {
        alert("Student not found!");
    }
    }