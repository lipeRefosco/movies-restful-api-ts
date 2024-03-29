import { IMovieModel } from "./IMovie.entity";

export class Movie {
    private _id: number;
    public title: string;
    public synopsis: string;
    private _rate: number;

    constructor(movie: IMovieModel) {
        this._id = movie.id;
        this.title = movie.title;
        this.synopsis = movie.synopsis;
        this._rate = movie.rate;
    }

    public set id(_) { }
    
    public get id(): number {
        return this._id;
    }

    public set rate(_) { }
    
    public get rate(): number {
        return this._rate;
    }

    public upRate(): void {
        ++this._rate;
    }

    public downRate(): void {
        if(this._rate == 0) return;
        
        --this._rate;
    }
}