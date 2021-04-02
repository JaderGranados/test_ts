export class AppService {
  public isAnagram(string1: string, string2: string): boolean {
    let result: boolean = true;
    if (string1.length != string2.length) {
      result = false;
    } else if (string1.length == 0 && string1.length > 50) {
      result = false;
    }
    const compareString1 = [...string1.toLowerCase()].sort();
    const compareString2 = [...string2.toLowerCase()].sort();
    for (let i = 0; i < compareString1.length; i++) {
      if (compareString1[i] != compareString2[i]) {
        result = false;
        break;
      }
    }
    return result;
  }

  public absoluteDifference(squareMatrix: Array<Array<number>>): number {
    try {
      
      if (!squareMatrix) {
        throw new Error("Square matrix is needed");
      } else if (squareMatrix.length == 0) {
        throw new Error("Square matrix can't be empty");
      } else if (squareMatrix[0].length == 0) {
        throw new Error("Square matrix elements can't be empty");
      }
      const elementLength = squareMatrix[0].length;
      if (elementLength != squareMatrix.length) {
        throw new Error("Matrix should be square");
      }
      let principalDiagonal: number = 0,
        secondaryDiagonal: number = 0;
      squareMatrix.forEach((element) => {
        try {
          if (element.length != elementLength) {
            throw new Error(
              "Elements in square matrix should have the same length"
            );
          }
        } catch (error) {
          throw error;
        }
      });

      for (let i = 0; i < elementLength; i++) {
        principalDiagonal += squareMatrix[i][i];
        secondaryDiagonal += squareMatrix[elementLength - (i + 1)][i];
      }

      return Math.abs(principalDiagonal - secondaryDiagonal);
    } catch (error) {
      throw error;
    }
  }

  public applesOrangesInhouse(
    a: number,
    b: number,
    s: number,
    t: number,
    apples: Array<number>,
    oranges: Array<number>
  ): Array<number> {
    try {
      if (apples.length == 0 || oranges.length == 0) {
        throw new Error("Fruits arrays can't be empty");
      } else if (a >= s) {
        throw new Error("Apple tree should be to the left of the house");
      } else if (b <= t) {
        throw new Error("Orange tree should be to the right of the house");
      } else if (s >= t) {
        throw new Error("House need an area in x-axis");
      }

      let countApples = apples
        .map((value) => a + value)
        .reduce((acc, current, index, array) => {
          if (array[index] <= t && array[index] >= s) {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);

      let countOranges = oranges
        .map((value) => b + value)
        .reduce((acc, current, index, array) => {
          if (array[index] <= t && array[index] >= s) {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);
      return [countApples, countOranges];
    } catch (error) {
      throw error;
    }
  }

  public grades(n: number, grades: Array<number>): Array<number> {
    try {
      if (n > 60 || n < 1) {
        throw new Error("The number of students shoulbe be between 1 and 60");
      } else if (grades.length != n) {
        throw new Error(
          "The number of students shoulbe be equal to the total grades"
        );
      }

      const roundedGrades = grades.map((grade) => {
        try{
          if (grade > 100 || grade < 0) {
            throw new Error("Grades should be between 0 and 100");
          }
        }
        catch (error){
          throw error;
        }
        if (grade < 38) {
          return grade;
        }
        const module = grade % 10;
        let nextMultipleFive;
        if (module > 5) {
          nextMultipleFive = grade + (10 - module);
        } else {
          nextMultipleFive = grade - module + 5;
        }
        if (Math.abs(grade - nextMultipleFive) < 3) {
          return nextMultipleFive;
        } else {
          return grade;
        }
      });

      return roundedGrades;
    } catch (error) {
      throw error;
    }
  }
}
