import { IHttpRequest } from "../../Server/IHttpRequest.server"

export interface ICrud {
    create(request: IHttpRequest): void
    read(request: IHttpRequest): void
    update(request: IHttpRequest): void
    delete(request: IHttpRequest): void
}