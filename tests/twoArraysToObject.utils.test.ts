import { twoArraysToObject } from "../src/Utils/twoArraysToObject";

describe("Two arrays to one object", () => {
    it("Adding two arrays with same size to a single object", () => {
        const givenA = ["key0", "key1", "key2", "key3", "key4"]
        const givenB = ["value0", "value1", "value2", "value3", "value4"];
        
        const result = twoArraysToObject(givenA, givenB)

        const expectedValue = {
            "key0": "value0",
            "key1": "value1",
            "key2": "value2",
            "key3": "value3",
            "key4": "value4"
        }

        expect(result).toEqual(expectedValue);
    })

    it("Adding two arrays with different lenghts shoud thow a Error", () => {
        const givenA = ["key0", "key1", "key2", "key3"]
        const givenB = ["value0", "value1", "value2", "value3", "value4"];
        
        const result = () => twoArraysToObject(givenA, givenB)

        expect(result).toThrow(Error);
    })
})