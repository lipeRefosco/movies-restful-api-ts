import * as sqlite3 from "sqlite3"
import { env } from "../../env";
import { twoArraysToObject } from "../Utils/twoArraysToObject"
import {
    IDatabase,
    InputDatabase
} from "./IDatabase.repository";


export class SqliteDatabase implements IDatabase {
    private _db: sqlite3.Database;

    constructor() {
        this.connect();
    }

    private connect(): void {
        this._db = new sqlite3.Database(env.DB_HOST);
    }

    private convertToNamedBindValues(values: object): object {
        const columnsBinded = Object.keys(values).map(c => ':' + c);
        return twoArraysToObject(columnsBinded, Object.values(values));
    }

    public close(): void {
        this._db.close();
    }

    public exec({ sql, values }: InputDatabase): void {
        const bindedValues = this.convertToNamedBindValues(values)

        this._db.run(sql, bindedValues);
    }

    public fetch({ sql, values }: InputDatabase): object | object[] {
        const bindedValues = this.convertToNamedBindValues(values)

        return this._db.run(sql, bindedValues);
    }
}