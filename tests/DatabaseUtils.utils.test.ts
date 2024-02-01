import { DatabaseUtils } from "../src/Repositories/DatabaseUtils.utils"

describe("Test Database Utils methods",  () => {
    it("Convert values to named bind values", () => {
        const object = {
            key: "value",
            anotherkey: "another value"
        }

        const result = DatabaseUtils.convertObjectColumnsToNamedBindColumn(object)

        const valueExpected = [":key", ":anotherkey"]

        expect(result).toEqual(valueExpected);
    })

    it("Convert value of object to valid sql syntax", () => {
        const object = {
            key: "value",
            anotherkey: "another value"
        }

        const result = DatabaseUtils.convertValueToValidSyntax(object)
    
        const valueExpected = ["'value'", "'another value'"];

        expect(result).toEqual(valueExpected)
    })

    it("Convert object values to a binded object with value", () => {
        const object = {
            key: "value",
            anotherkey: "another value"
        }

        const result = DatabaseUtils.convertToNamedBindValuesObject(object);

        const expectedValue = {
            ":key": "'value'",
            ":anotherkey": "'another value'"
        }
        
        expect(result).toEqual(expectedValue)
    })
})