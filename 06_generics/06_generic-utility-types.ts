interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// The Partial<Type> utility in TypeScript creates a new type by making all properties of an existing
// type optional. This allows you to create flexible object types where only some properties are
// required, streamlining code and reducing redundancy when working with complex data structures.
const createCourseGoal = (
  title: string,
  description: string,
  date: Date,
): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
};

// Readonly<Type> Utility Type is used to create a new type where all properties are readonly,
// meaning they cannot be modified once assigned a value.

const names: Readonly<string[]> = ['Max', 'Anna'];

// These statements will raise an error because push and pop methods doesn't exist on Readonly arrays.
// names.push('Manu');
// names.pop();
