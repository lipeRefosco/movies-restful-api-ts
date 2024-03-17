import { IHttpRequest } from "./IHttpRequest.server";
import { IHttpResponse } from "./IHttpResponse.server";

export interface IHttpRequestGetMethod {
    get(request?: IHttpRequest) : IHttpResponse;
}

export interface IHttpRequestPostMethod {
    post(request?: IHttpRequest): IHttpResponse;
}

export interface IHttpRequestPatchMethod {
    patch(request?: IHttpRequest): IHttpResponse;
}

export interface IHttpRequestDeleteMethod {
    delete(request?: IHttpRequest): IHttpResponse;
}