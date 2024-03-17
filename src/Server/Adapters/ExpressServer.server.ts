import { Express } from "express"

import { IServerConfiguration } from "../IServerConfiguration.server"
import { HttpServer } from "../HttpServer.server";
import { HttpRoute } from "../HttpRoute/HttpRoute.server";

import { ExpressRequestAdapter } from './ExpressRequestAdapter.server'

interface ExpressServerConfigs {
    _server: Express,
    routes: HttpRoute[],
    configs: IServerConfiguration
}

export class ExpressServer extends HttpServer {
    private _server: Express;

    constructor({_server, routes, configs}: ExpressServerConfigs) {
        super(routes, configs);
        this._server = _server;
    }

    private _processRequest(route: HttpRoute): void {
        this._server.route(route.name)
                    .get((req, res) => {
                        const requestAdapted = new ExpressRequestAdapter(req);
                        const {headers, body} = route.get(requestAdapted.toHttpRequest());
                        res.header(headers);
                        res.send(body);
                    })
                    .post((req, res) => {
                        const requestAdapted = new ExpressRequestAdapter(req);
                        const {headers, body} = route.post(requestAdapted.toHttpRequest());
                        res.header(headers);
                        res.send(body);
                    })
                    .patch((req, res) => {
                        const requestAdapted = new ExpressRequestAdapter(req);
                        const {headers, body} = route.patch(requestAdapted.toHttpRequest());
                        res.header(headers);
                        res.send(body);
                    })
                    .delete((req, res) => {
                        const requestAdapted = new ExpressRequestAdapter(req);
                        const {headers, body} = route.delete(requestAdapted.toHttpRequest());
                        res.header(headers);
                        res.send(body);
                    })
    }

    public setAllRoutes(): void {
        this._routes.forEach(
            (route: HttpRoute) => this._processRequest(route)
        );
    }

    public runForever(): void {
        this._server.listen(this._configs.port, () => {
            console.log(`Server running at: http://localhost:${this._configs.port}`);
        })
    }

}