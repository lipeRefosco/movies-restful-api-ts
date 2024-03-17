import express, { } from "express"
import { ExpressServer } from "./Server/Adapters/ExpressServer.server"
import { IServerConfiguration } from "./Server/IServerConfiguration.server"
import { env } from "../env"
import { HttpRoute } from "./Server/HttpRoute/HttpRoute.server"
import { MoviesRoute } from "./Services/MoviesService/MoviesRoute.service"
import { HttpServer } from "./Server/HttpServer.server"

const serverConfigs: IServerConfiguration = {
    port: env.SERVER_PORT || 3000
};

const routes: HttpRoute[] = [
    new MoviesRoute()
];

const server: HttpServer = new ExpressServer({
                                _server: express(),
                                routes: routes,
                                configs: serverConfigs
                            });

server.setAllRoutes();
server.runForever();