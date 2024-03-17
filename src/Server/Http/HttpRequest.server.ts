import { IHttpRequest } from './IHttpRequest.server'

export class HttpRequest implements IHttpRequest {
    headers: Record<string, string>;
    body?: string | object | any[] | undefined;

    constructor(request: IHttpRequest) {
        this.headers = request.headers;
        this.body = request.body;
    }
}