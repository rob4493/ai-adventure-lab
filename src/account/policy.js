export const ageBands = [
  { id: "under13", label: "12 and under" },
  { id: "teen", label: "13-15" },
  { id: "older", label: "16 or older" },
];
export const canRegister = (age, managed, guardian) =>
  ["teen", "older"].includes(age) && (!managed || guardian);
export const validUsername = (name) => /^[a-zA-Z0-9-]{3,24}$/.test(name);
