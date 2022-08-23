export type Tableau = [
    value:string,
]

export function generateRow(dimension: number, index: number):string[] {
  const starNumber = 1 + index * 2;
  const arrayOfStarsLength = new Array(starNumber);
  const arrayOfStars = arrayOfStarsLength.fill("x");
  if (dimension === starNumber) {
    return [...arrayOfStars];
  }
  return [" ", ...arrayOfStars, " "];
}

export function generateDiamond(dimension: number): string[][] {
  if (dimension === 3) {
    const ligne1 = [" ", "x", " "];
    const ligne2 = ["x", "x", "x"];
    const ligne3 = [" ", "x", " "];
    return [ligne1, ligne2, ligne3];
  }
  return [["x"]];
}
