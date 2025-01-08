const gradePoints = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'D-': 0.7,
    'F': 0.0
};
    let subjects = [];
    let subjectCount = 0;
    let totalCredits = 0;
    let totalPoints = 0;

    function addSubject() {
      let subject = document.getElementById('Matkul').value;
      let index = parseInt(document.getElementById('Index').value);
      let credit = parseInt(document.getElementById('SKS').value);
      
      subjects.push({ subject, index, credit });
      totalCredits += credit;
      totalPoints += index * credit;
      subjectCount += 1;

      const courseList = document.getElementById('courseList');
      const courseItem = document.createElement('div');
      courseItem.className = 'course';
      courseItem.textContent = `- ${subject} (${credit} credits)`;
      courseList.appendChild(courseItem);

      document.getElementById('Matkul').value = '';
      document.getElementById('Index').value = '';
      document.getElementById('SKS').value = '';
      document.getElementById('subjectlist').textContent = `Subject You Took: ${subjectCount}`;
    }

    function calculateGPA() {
      let gpa = (totalPoints / totalCredits).toFixed(2);
      if (totalPoints > 0){
      document.getElementById('gpaResult').textContent = `Your GPA: ${gpa}`;
      }
      else{
        document.getElementById('gpaResult').textContent = `Your GPA: 0.00`;
      }
      document.getElementById('credit').textContent = `Your Total Credit: ${totalCredits}`;
    }
    
    function reset() {
      gpa = 0
      totalCredits = 0
      totalPoints = 0
      subjectCount = 0
      document.getElementById('credit').textContent = `Your Total Credit: ${totalCredits}`;
      document.getElementById('subjectlist').textContent = `Subject You Took: ${subjectCount}`;
      document.getElementById('gpaResult').textContent = `Your GPA: 0.00`;
      document.getElementById('courseList').textContent = ''
    }

    

    // document.querySelector('button[type="addsubject"]').addEventListener('click', addSubject);
    // document.querySelector('button[type="GPA"]').addEventListener('click', calculateGPA);
    // document.querySelector('button[type="reset"]').addEventListener('click', reset);