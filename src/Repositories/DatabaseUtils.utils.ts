import { twoArraysToObject } from "../Utils/twoArraysToObject";

export abstract class DatabaseUtils {

    public static convertObjectColumnsToNamedBindColumn(object: object): string[] {
        return Object.keys(object)
                     .map(c => ':' + c)
    }

    public static convertToNamedBindValuesObject(values: object): object {
        const columnsBinded = this.convertObjectColumnsToNamedBindColumn(values);
        return twoArraysToObject(columnsBinded, Object.values(values));
    }
}