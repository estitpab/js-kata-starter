export type Fraction = {
    numerator:number,
    denominator:number,
}
function scale(fraction1:Fraction, factor:number):Fraction {
  const numerator = fraction1.numerator * factor;
  const denominator = fraction1.denominator * factor;
  return { numerator, denominator };
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function reduction(fraction: Fraction): Fraction {
  const greatestCommonDivisor = gcd(fraction.numerator, fraction.denominator);
  return { numerator: fraction.numerator / greatestCommonDivisor, denominator: fraction.denominator / greatestCommonDivisor };
}

function addFraction(fraction1, fraction2):Fraction {
  if (fraction1.denominator !== fraction2.denominator) {
    const scaledFraction1 = scale(fraction1, fraction2.denominator);
    const scaledFraction2 = scale(fraction2, fraction1.denominator);
    return reduction({ numerator: (scaledFraction1.numerator + scaledFraction2.numerator), denominator: scaledFraction1.denominator });
  }
  return reduction({ numerator: (fraction1.numerator + fraction2.numerator), denominator: fraction1.denominator });
}

export default addFraction;
