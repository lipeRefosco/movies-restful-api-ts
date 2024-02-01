export interface InputDatabase {
    sql: string,
    values: object
}

export interface IDatabase {
    fetch(data: InputDatabase): object | object[];
    exec(data: InputDatabase): void;
    close(): void;
}