import addFraction, { Fraction } from ".";

test("Addition de fraction nulle", () => {
  const fraction1:Fraction = {
    numerator: 1,
    denominator: 2,
  };
  const fraction2:Fraction = {
    numerator: 0,
    denominator: 2,
  };
  const result:Fraction = {
    numerator: 1,
    denominator: 2,
  };

  expect(addFraction(fraction1, fraction2)).toEqual(result);
});
