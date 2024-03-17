import { HttpRoute } from "./HttpRoute/HttpRoute.server"
import { IServerConfiguration } from "./IServerConfiguration.server";

export abstract class HttpServer {
    private _isAllSetted: boolean = false;

    constructor(
        protected _routes: HttpRoute[],
        protected _configs: IServerConfiguration
    ) { }

    abstract setAllRoutes(): void;

    abstract runForever(): void;
}