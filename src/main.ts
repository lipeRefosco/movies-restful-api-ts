import express, { } from "express"
import { ExpressServer } from "./Server/ExpressServer.server"
import { IServerConfiguration } from "./Server/IServerConfiguration.server"
import { env } from "../env"

const serverConfigs: IServerConfiguration = {
    port: env.SERVER_PORT || 3000
}

const app: ExpressServer = new ExpressServer(express(), serverConfigs)

app.listen()