import { twoArraysToObject } from "../Utils/twoArraysToObject";

export abstract class DatabaseUtils {

    public static convertObjectColumnsToNamedBindColumn(object: object): string[] {
        return Object.keys(object)
                     .map(c => ':' + c)
    }

    public static convertValueToValidSyntax(object: object) {
        return Object.values(object)
                     .map(v => "'" + v + "'");
    }

    public static convertToNamedBindValuesObject(values: object): object {
        const columnsBinded = this.convertObjectColumnsToNamedBindColumn(values);
        const valuesValidSyntax = this.convertValueToValidSyntax(values);
        return twoArraysToObject(columnsBinded, valuesValidSyntax);
    }
}