export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    if (isNaN(number)) {
      return NaN;
    }
    sum += number;
  }
  return sum;
}
