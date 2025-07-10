export function sumToN(n) {
  if (typeof n !== "number") return NaN;
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

export function factorial(n) {
  if (typeof n !== "number") return NaN;
  if (n < 0) return undefined;
  if (n === 0) return 1;
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

export function buildNArray(n) {
  if (typeof n !== "number") return null;
  if (n <= 0) return [];
  const total = [];
  for (let i = 1; i <= n; i++) {
    total.push(i);
  }
  return total;
}

export function getLongestString(strings) {
  if (!Array.isArray(strings)) return null;
  let longest = "";
  for (let str of strings) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}

export function countPresent(attendance) {
  return attendance.filter(student => student === true).length;
}

export function complementDNA(dna) {
  if (typeof dna !== "string") return null;
  const complements = { A: "T", T: "A", C: "G", G: "C" };
  let result = "";
  for (let char of dna) {
    if (!complements[char]) return null;
    result += complements[char];
  }
  return result;
}