import { Movie } from "../src/Domain/Entities/Movie.entities"
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
})