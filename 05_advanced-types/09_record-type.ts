// Both DataStore and someObj infer to same type. One is user-defined and the other one is created using in-built
// Record keyword.
type DataStore = {
  [prop: string]: number | boolean;
};

let someObj: Record<string, number | boolean>;
