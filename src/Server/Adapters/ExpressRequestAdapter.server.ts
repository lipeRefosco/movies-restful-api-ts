import { Request } from "express";
import { IHttpRequest } from "../Http/IHttpRequest.server";

export class ExpressRequestAdapter {
    constructor(private request: Request) { }

    toHttpRequest(): IHttpRequest {
        const { headers, body } = this.request;

        return {
            headers: Object(headers),
            ...body
        }
    }
}