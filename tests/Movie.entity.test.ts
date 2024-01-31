import { Movie } from "../src/Domain/Entities/Movie.entity"
import { IMovieRepository } from "../src/Domain/Interfaces/IMovieRepository.interface"

describe("Movie Entity Tests", () => {
    it("Shoud up the rate when use upRate method.", () => {
        const given: IMovieRepository = {
            id: 0,
            title: "Lorem Ipsum",
            synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            rate: 0
        }

        const movie: Movie = new Movie(given);
        movie.upRate();

        expect(movie.rate).toEqual(1);
    })

    it("Shoud down the rate when use downRate method.", () => {
        const given: IMovieRepository = {
            id: 0,
            title: "Lorem Ipsum",
            synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            rate: 1
        }

        const movie: Movie = new Movie(given);
        
        movie.downRate();
        expect(movie.rate).toEqual(0);
    })

    it("The rate shoud't be less than 0.", () => {
        const given: IMovieRepository = {
            id: 0,
            title: "Lorem Ipsum",
            synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            rate: 0
        }

        const movie: Movie = new Movie(given);

        movie.downRate();
        expect(movie.rate).not.toBeLessThan(0);
    })
})