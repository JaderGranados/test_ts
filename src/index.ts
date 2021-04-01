import express, { Application } from "express";
import { BaseRoutes } from "./routes/base.route";
import {Server, createServer} from "http";
import { AppRoutes } from "./routes/app.route";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app: Application = express();
const routes: Array<BaseRoutes> = [];
const server: Server = createServer(app);
app.use(express.json());

routes.push(new AppRoutes(app));

server.listen(port, () => {
    console.log(`App running on port ${port}`);
    routes.forEach(route => {
        route.configureRoutes();
        console.log(`Route configured for ${route.getName()}`)
    });
})