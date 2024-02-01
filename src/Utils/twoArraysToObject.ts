export function twoArraysToObject(keys: string[], values: string[]): object {
    if (keys.length != values.length) throw new Error("Different sizes!");
    
    const object: Record<string, string> = {};

    keys.forEach((k, i) => {
        object[k] = values[i]
    });

    return object
}