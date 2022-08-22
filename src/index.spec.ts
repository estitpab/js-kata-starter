import resolveFizzBuzz from ".";

test("Le premier nombre est 1", () => {
  expect(resolveFizzBuzz(1)).toBe("1");
});

test("Le second nombre est 2", () => {
  expect(resolveFizzBuzz(2)).toBe("2");
});

test("Le nombre est un multiple de 3, on renvoie Fizz", () => {
  expect(resolveFizzBuzz(3)).toBe("Fizz");
});

test("Le nombre est un multiple de 3, on renvoie Fizz", () => {
  expect(resolveFizzBuzz(6)).toBe("Fizz");
});

test("Le nombre est un multiple de 5, on renvoie Buzz", () => {
  expect(resolveFizzBuzz(5)).toBe("Buzz");
});

test("Le nombre est un multiple de 5, on renvoie Buzz", () => {
  expect(resolveFizzBuzz(2 * 5)).toBe("Buzz");
});

test("Le nombre est un multiple de 3 et 5, on renvoie Fizz Buzz", () => {
  expect(resolveFizzBuzz(15)).toBe("FizzBuzz");
});
