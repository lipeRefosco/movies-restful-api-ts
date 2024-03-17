export interface IHttpRequest {
    headers: Record<string, string>;
    body?: object | string | Array<any>;
}