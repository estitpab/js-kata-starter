function isDivisibleBy(x:number, divisor:number): boolean {
  return x % divisor === 0;
}

function resolveFizzBuzz(x: number): string {
  let result = "";
  if (isDivisibleBy(x, 3)) {
    result += "Fizz";
  }
  if (isDivisibleBy(x, 5)) {
    result += "Buzz";
  }
  return result || x.toString();
}

export default resolveFizzBuzz;
