// Must Not Be Null type - For this, {} is used as an type.
let val: {} = 'some text';

// This will produce an error.
val = null;
val = undefined;

// However, any not null value can be assigned to val
val = false;
val = 'abc';
val = 34;
