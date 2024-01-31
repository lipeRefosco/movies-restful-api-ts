import { add } from "../src/math/math"

describe("Math test", () => {
    it("shoud add two number happy path", () => {
        expect(add(3, 2)).toEqual(5);
    });
});