import { assert, expect } from "chai";
import { AppService } from "../src/services/app.service";

let appService: AppService;
before(() => {
  appService = new AppService();
});

describe("isAnagram function tests", () => {
  it("Anagrams words", () => {
    const result: boolean = appService.isAnagram("CAT", "ACT");
    expect(result).equal(true);
  });

  it("Not Anagrams words", () => {
    const result: boolean = appService.isAnagram("HOLA", "ALO");
    expect(result).equal(false);
  });
});

describe("absoluteDifference function tests", () => {
  it("Square matrix", () => {
    const result: number = appService.absoluteDifference([
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ]);
    assert.typeOf<number>(result, "number");
  });

  it("Undefined value", () => {
    assert.throws(
      () => {
        appService.absoluteDifference(undefined);
      },
      Error,
      "Square matrix is needed"
    );
  });

  it("Empty matrix", () => {
    assert.throws(
      () => {
        appService.absoluteDifference([]);
      },
      Error,
      "Square matrix can't be empty"
    );
  });

  it("Matrix s Empty elemnt", () => {
    assert.throws(
      () => {
        appService.absoluteDifference([[]]);
      },
      Error,
      "Square matrix elements can't be empty"
    );
  });

  it("Not square matrix", () => {
    assert.throws(
      () => {
        appService.absoluteDifference([
          [1, 2, 3],
          [4, 5, 6],
        ]);
      },
      Error,
      "Matrix should be square"
    );
  });

  it("Matrix s element with different size", () => {
    assert.throws(
      () => {
        appService.absoluteDifference([
          [1, 2, 3],
          [4, 5, 6],
          [8, 9],
        ]);
      },
      Error,
      "Elements in square matrix should have the same length"
    );
  });
});

describe("applesOrangesInhouse function tests", () => {
  it("Apples and oranges in the house", () => {
    const result = appService.applesOrangesInhouse(
      4,
      12,
      7,
      10,
      [2, 3, -4],
      [3, -2, -4]
    );
    expect(Array.isArray(result)).equal(true);
  });

  it("Fruits arraies empty", () => {
    assert.throws(
      () => {
        appService.applesOrangesInhouse(4, 12, 7, 10, [], [3, -2, -4]);
      },
      Error,
      "Fruits arrays can't be empty"
    );
  });

  it("Apple tree in house", () => {
    assert.throws(
      () => {
        appService.applesOrangesInhouse(7, 12, 7, 10, [2, 3, -4], [3, -2, -4]);
      },
      Error,
      "Apple tree should be to the left of the house"
    );
  });

  it("Orange tree in house", () => {
    assert.throws(
      () => {
        appService.applesOrangesInhouse(4, 10, 7, 10, [2, 3, -4], [3, -2, -4]);
      },
      Error,
      "Orange tree should be to the right of the house"
    );
  });

  it("s-t range incorrect", () => {
    assert.throws(
      () => {
        appService.applesOrangesInhouse(4, 12, 10, 10, [2, 3, -4], [3, -2, -4]);
      },
      Error,
      "House need an area in x-axis"
    );
  });
});

describe("grade function tests", () => {
  it("Rounded grades", () => {
    const result = appService.grades(4, [73, 67, 38, 33]);
    expect(Array.isArray(result)).equal(true);
  });

  it("Number of students out of the range", () => {
    assert.throws(
      () => {
        const result = appService.grades(61, [73, 67, 38, 33]);
      },
      Error,
      "The number of students shoulbe be between 1 and 60"
    );
  });

  it("Number of students and grades length don't match", () => {
    assert.throws(
      () => {
        const result = appService.grades(6, [73, 67, 38, 33]);
      },
      Error,
      "The number of students shoulbe be equal to the total grades"
    );
  });

  it("Grade score is out of the range", () => {
    assert.throws(
      () => {
        const result = appService.grades(4, [101, 67, 38, 33]);
      },
      Error,
      "Grades should be between 0 and 100"
    );
  });
});
