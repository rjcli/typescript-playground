var createCourseGoal = function (title, description, date) {
  var courseGoal = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal;
};
var names = ['Max', 'Anna'];
// These statements will raise an error because push and pop methods doesn't exist on Readonly arrays.
// names.push('Manu');
// names.pop();
