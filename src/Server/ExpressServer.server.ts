import { Express } from "express"

import { IServerConfiguration } from "./IServerConfiguration.server"

export class ExpressServer {

    private _port: number;

    constructor(
        private _server: Express,
        { port }: IServerConfiguration
    ) {
        this._port = port;
    }

    public listen(): void {
        this._server.listen(this._port, () => {
            console.log(`Server running at: http://localhost:${this._port}`);
        })
    }
}