module.exports = function gpa(grade) {
    var order = ['F-', 'F', 'F+', 'E-', 'E', 'E+', 'D-', 'D', 'D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+'];

    grade = `${grade}`;

    if (grade.match(/^\d+$/)) {
        return order[grade] || '';
    }

    return order.indexOf(grade);
};
