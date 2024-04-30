function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  // Filter students by location
  const studentsInCity = students.filter((student) => student.location === city);

  // Function to find grade for student based on ID
  const findGrade = (studentId) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === studentId);
    return matchingGrade ? matchingGrade.grade : 'N/A';
  };

  // Map students to updated objects with grade
  return studentsInCity.map((student) => ({
    ...student,
    grade: findGrade(student.id),
  }));
}

export default updateStudentGradeByCity;
