import { generateDiamond, generateRow } from ".";

test("La dimension 1 du tableau est une étoile", () => {
  // GIVEN
  const dimension = 1;
  // WHEN
  const result = generateDiamond(dimension);
  // THEN
  const expected = [["x"]];
  expect(result).toEqual(expected);
});

/*
test("La dimension 3 du tableau est une croix", () => {
  // GIVEN
  const dimension = 3;
  // WHEN
  const result = generateDiamond(dimension);
  // THEN
  const expected = [
    [" ", "x", " "],
    ["x", "x", "x"],
    [" ", "x", " "],
  ];
  expect(result).toEqual(expected);
});
*/

test("La ligne centrale du tableau de dimension 3 est remplie", () => {
  // GIVEN
  const dimension = 3;
  // WHEN
  const result = generateRow(dimension, 1);
  // THEN
  const expected = ["x", "x", "x"];
  expect(result).toEqual(expected);
});

test("La ligne centrale du tableau de dimension 5 est remplie", () => {
  // GIVEN
  const dimension = 5;
  // WHEN
  const result = generateRow(dimension, 2);
  // THEN
  const expected = ["x", "x", "x", "x", "x"];
  expect(result).toEqual(expected);
});

test("La ligne précédent la ligne centrale de la dimension 3 doit contenir 2 étoiles en moins", () => {
  // GIVEN
  const dimension = 3;
  // WHEN
  const result = generateRow(dimension, 0);
  // THEN
  const expected = [" ", "x", " "];
  expect(result).toEqual(expected);
});

test("La ligne de l'index 1 pour une dimension 7 doit contenir 3 étoiles", () => {
  // GIVEN
  const dimension = 7;
  // WHEN
  const result = generateRow(dimension, 1);
  // THEN
  const expected = [" ", " ", "x", "x", "x", " ", " "];
  expect(result).toEqual(expected);
});

test.skip("La dimension 3 du tableau est une croix", () => {
  // GIVEN
  const dimension = 3;
  // WHEN
  const result = generateDiamond(dimension);
  // THEN
  const expected = [
    [" ", "x", " "],
    ["x", "x", "x"],
    [" ", "x", " "],
  ];
  expect(result).toEqual(expected);
});
