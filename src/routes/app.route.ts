import { Application, Request, Response } from "express";
import { BaseRoutes } from "./base.route";
import { ResponseType } from "../interfaces/response-type.interface";
import { AppService } from "../services/app.service";

export class AppRoutes extends BaseRoutes {
  constructor(app: Application) {
    super(app, "AppRoutes");
  }
  configureRoutes(): Application {
    const appService = new AppService();
    this.app.route("/anagram").post((req: Request, res: Response) => {
      let response: ResponseType<"Anagrams" | "Not Anagrams"> = null;
      let statusCode: number = 200;
      try {
        response = {
          success: true,
          data: "Anagrams",
        };
        const string1: string = req.body.string1,
          string2: string = req.body.string2;
        if (!string1 || !string2) {
          throw new Error("Words can't be null");
        } 

        response.data = appService.isAnagram(string1, string2)
          ? "Anagrams"
          : "Not Anagrams";
        // console.log(compareString1, compareString2);
      } catch (error) {
        statusCode = 500;
        response = {
          success: false,
          errorMessage: error.message,
        };
      }
      res.status(statusCode).send(response);
    });

    this.app
      .route("/absolute-difference")
      .post((req: Request, res: Response) => {
        let response: ResponseType<number> = null;
        let statusCode: number = 200;
        try {
          response = {
            success: true,
          };
          const squareMatrix: Array<Array<number>> = req.body.squareMatrix;

          response.data = appService.absoluteDifference(squareMatrix);

          // console.log(compareString1, compareString2);
        } catch (error) {
          statusCode = 500;
          response = {
            success: false,
            errorMessage: error.message,
          };
        }
        res.status(statusCode).send(response);
      });

    this.app
      .route("/apple-orange-inhouse")
      .post((req: Request, res: Response) => {
        let response: ResponseType<number> = null;
        let statusCode: number = 200;
        try {
          response = {
            success: true,
          };
          const a: number = req.body.a,
            b: number = req.body.b,
            s: number = req.body.s,
            t: number = req.body.t,
            apples: Array<number> = req.body.apples,
            oranges: Array<number> = req.body.oranges;

          if (!a || !b || !s || !t || !apples || !oranges) {
            throw new Error("All variables are needed");
          }

          response.data = appService.applesOrangesInhouse(
            a,
            b,
            s,
            t,
            apples,
            oranges
          );
          // console.log(compareString1, compareString2);
        } catch (error) {
          statusCode = 500;
          response = {
            success: false,
            errorMessage: error.message,
          };
        }
        res.status(statusCode).send(response);
      });

    this.app.route("/grades").post((req: Request, res: Response) => {
      let response: ResponseType<number> = null;
      let statusCode: number = 200;
      try {
        response = {
          success: true,
        };
        const n: number = req.body.n,
          grades: Array<number> = req.body.grades;

        if (!n || !grades) {
          throw new Error("Variables are needed");
        }

        response.data = appService.grades(n, grades);
        // console.log(compareString1, compareString2);
      } catch (error) {
        statusCode = 500;
        response = {
          success: false,
          errorMessage: error.message,
        };
      }
      res.status(statusCode).send(response);
    });

    return this.app;
  }
}
