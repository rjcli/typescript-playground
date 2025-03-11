// Unknown type
// Represents a value that is not yet known, and is the least specific type because it can
// contain any possible value.
// It's a safer alternative to `any` and forces the user to check the value's type before using it,
// making code more robust.
// For example, unknown can provide type safety when dealing with unpredictable data sources.

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

// If we consider val as any, then there is no need for the if block inside the function but If we consider
// value as unknown then we have to apply type narrowing at the runtime.
function process(val: unknown) {
  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log === 'function'
  ) {
    val.log();
  }
}

// Never
// Represents a value that never occurs, and is the most specific type because there is no set
// smaller than the empty set.
// It can be used to express that something is impossible or unreachable in code, and to catch errors
// and bugs at compile time.
// For example, `never` can be used in conditional types to prune unwanted cases, or to indicate that a
// function never returns or a branch never executes. It's recommended to avoid assigning any value to
// never.

// A function to raise the error, it won't return anything anytime. So, the
// return type of this function will be `never`.
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
  // while (true) {}
};

generateError('An error occurred!', 500);
