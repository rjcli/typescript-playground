namespace App {
  // Validate user input Interface
  export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export const validate = (validatableInput: Validatable) => {
    let isValid = true;

    // required check
    if (validatableInput.required) {
      isValid =
        isValid && validatableInput.value.toString().trim().length !== 0;
    }

    // minLength check (Only valid for strings)
    if (
      validatableInput.minLength !== undefined &&
      typeof validatableInput.value === 'string'
    ) {
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    }

    // maxLength check (Only valid for strings)
    if (
      validatableInput.maxLength !== undefined &&
      typeof validatableInput.value === 'string'
    ) {
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    }

    // min check (Only valid for numbers)
    if (
      validatableInput.min !== undefined &&
      typeof validatableInput.value === 'number'
    ) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
    }

    // max check (Only valid for numbers)
    if (
      validatableInput.max !== undefined &&
      typeof validatableInput.value === 'number'
    ) {
      isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
  };
}
