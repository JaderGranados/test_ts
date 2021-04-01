import { Application } from "express";

export abstract class BaseRoutes{
    constructor(public app: Application, public name: string){}

    getName(): string {
        return this.name;
    }

    abstract configureRoutes(): Application
}