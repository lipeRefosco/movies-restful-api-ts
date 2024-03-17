import { IHttpRequest } from "../Http/IHttpRequest.server";
import { IHttpRequestDeleteMethod, IHttpRequestGetMethod, IHttpRequestPostMethod, IHttpRequestPatchMethod } from "../Http/IHttpRequestMethods.server";
import { IHttpResponse } from "../Http/IHttpResponse.server";

export abstract class HttpRoute
                implements IHttpRequestGetMethod,
                           IHttpRequestPostMethod,
                           IHttpRequestPatchMethod,
                           IHttpRequestDeleteMethod {

    constructor(
        protected readonly _name: string
    ) { }

    get name(): string {
        return this._name
    }

    protected defaultResponse(): IHttpResponse {
        return {
            headers: {
                status: 500
            },
            body: "Default message for all request when route is not implemented"
        }
    }

    abstract get(request?: IHttpRequest | undefined): IHttpResponse;
    abstract post(request?: IHttpRequest | undefined): IHttpResponse;
    abstract patch(request?: IHttpRequest | undefined): IHttpResponse;
    abstract delete(request?: IHttpRequest | undefined): IHttpResponse;
}