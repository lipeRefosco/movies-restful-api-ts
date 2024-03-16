import express, { } from "express"
import { ExpressServer } from "./Server/ExpressServer.server"

const app: ExpressServer = new ExpressServer(express())

app.listen()