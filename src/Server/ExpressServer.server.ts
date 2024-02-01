import { Express } from "express"
import { env } from "../../env"

export class ExpressServer {

    private _port: number = env.SERVER_PORT || 3000

    constructor(private _server: Express) { }

    public listen(): void {
        this._server.listen(this._port, () => {
            console.log(`Server running at: http://localhost:${this._port}`)
        })
    }
}