// The satisfies keyword in TypeScript is used to ensure that an expression meets a specific type constraint
// without changing the type of the expression itself. It is useful for type-checking while preserving the
// original type of the expression.

const dataEntries = {
  entry1: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;
