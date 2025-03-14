type Operations = {
  readonly add: (a: number, b: number) => number;
  readonly subtract: (a: number, b: number) => number;
};

type Results<T> = {
  [Key in keyof T]: number;
  // Making the properties optional
  // [Key in keyof T]?: number;

  // Making the optional properties mandatory
  // [Key in keyof T]-?: number;

  // Making the properties readonly
  // readonly [Key in keyof T]?: number;

  // Removing the readonly property
  // -readonly [Key in keyof T]?: number;
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },

  subtract(a: number, b: number) {
    return a - b;
  },
};

let mathResults: Results<Operations> = {
  add: mathOperations.add(5, 1),
  subtract: mathOperations.subtract(5, 2),
};

// This will produce an error because add is a readonly property.
mathResults.add = 10;
