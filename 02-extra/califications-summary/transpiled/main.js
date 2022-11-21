var students = [
    { name: 'Juan', califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
    { name: 'Álvaro', califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
    { name: 'María', califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
    { name: 'Jorge', califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
    { name: 'Mónica', califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
];
var studentAverage = [];
var studentSumary = {
    name: '',
    highestCalification: 0,
    averageCalifications: ''
};
var sumarizeClassRoom = function (studentList) {
    studentList.forEach(function (student) {
        var number = Math.max.apply(Math, student.califications);
        var gradesSum = student.califications.reduce(function (pre, curr) { return (curr += pre); });
        var average = (gradesSum / student.califications.length).toFixed(2);
        studentSumary = {
            name: student.name,
            highestCalification: number,
            averageCalifications: average
        };
        return studentAverage.push(studentSumary);
    });
    console.log(studentAverage);
};
sumarizeClassRoom(students);
