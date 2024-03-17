import { HttpRoute } from "../../Server/HttpRoute/HttpRoute.server";
import { IHttpRequest } from "../../Server/Http/IHttpRequest.server";
import { IHttpResponse } from "../../Server/Http/IHttpResponse.server";

export
    class MoviesRoute
    extends HttpRoute {
    
    private static _routeName: string = '/movies';

    constructor() {
        super(MoviesRoute._routeName);
    }

    public get(request: IHttpRequest): IHttpResponse {
        console.log(request.headers['user-agent'])
        
        return {
            headers: {
                status: 200
            },
            body: "Movie Route is working!!!"
        }
    }

    public post(): IHttpResponse {
        return this.defaultResponse();
    }

    public patch(): IHttpResponse {
        return this.defaultResponse();
    }

    public delete(): IHttpResponse {
        return this.defaultResponse();
    }
}