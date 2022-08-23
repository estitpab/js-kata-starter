export type Tableau = [
    value:string,
]

export function generateRow(dimension: number, index: number):string[] {
  const starNumber = 1 + index * 2;
  const arrayOfStarsLength = new Array(starNumber);
  const arrayOfStars = arrayOfStarsLength.fill("x");
  const numberOfSpacesBetween = (dimension - starNumber) / 2;
  const arrayOfSpacesLength = new Array(numberOfSpacesBetween);
  const arrayOfSpaces = arrayOfSpacesLength.fill(" ");
  if (dimension === starNumber) {
    return [...arrayOfStars];
  }
  return [...arrayOfSpaces, ...arrayOfStars, ...arrayOfSpaces];
}

export function generateDiamond(dimension: number): string[][] {
  const result = [];
  for (let i = 0; i < dimension; i++) {
    result[i] = generateRow(dimension, i);
  }
  return result;
}
