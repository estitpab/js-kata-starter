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

test("Addition de fraction denominateur commun", () => {
  const fraction1:Fraction = {
    numerator: 1,
    denominator: 3,
  };
  const fraction2:Fraction = {
    numerator: 1,
    denominator: 3,
  };
  const result:Fraction = {
    numerator: 2,
    denominator: 3,
  };

  expect(addFraction(fraction1, fraction2)).toEqual(result);
});

test("Addition de fraction denominateur différent", () => {
  const fraction1:Fraction = {
    numerator: 1,
    denominator: 2,
  };
  const fraction2:Fraction = {
    numerator: 1,
    denominator: 3,
  };
  const result:Fraction = {
    numerator: 5,
    denominator: 6,
  };

  expect(addFraction(fraction1, fraction2)).toEqual(result);
});

test("Réduire la fraction", () => {
  const fraction1:Fraction = {
    numerator: 3,
    denominator: 9,
  };
  const fraction2:Fraction = {
    numerator: 3,
    denominator: 9,
  };
  const result:Fraction = {
    numerator: 2,
    denominator: 3,
  };

  expect(addFraction(fraction1, fraction2)).toEqual(result);
});
