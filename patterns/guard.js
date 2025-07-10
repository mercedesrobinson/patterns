export function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return NaN;
  return num1 * num2;
}

export function vote(age) {
  if (typeof age !== "number") return "Age not valid.";
  if (age < 18) return "You must be 18 or older to vote.";
  return "Who would you like to vote for?";
}

export function concatenateStrings(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") return undefined;
  return str1 + str2;
}