import * as sqlite3 from "sqlite3"
import { env } from "../../env";
import { IDatabase, InputDatabase } from "./IDatabase.repository";
import { DatabaseUtils } from "./DatabaseUtils.utils";

export class SqliteDatabase implements IDatabase {
    private _db: sqlite3.Database;

    constructor() {
        this.connect();
    }

    private connect(): void {
        this._db = new sqlite3.Database(env.DB_HOST);
    }

    public close(): void {
        this._db.close();
    }

    public exec({ sql, values }: InputDatabase): void {
        const bindedValues = DatabaseUtils.convertToNamedBindValuesObject(values)

        this._db.run(sql, bindedValues);
    }

    public fetch({ sql, values }: InputDatabase): object | object[] {
        const bindedValues = DatabaseUtils.convertToNamedBindValuesObject(values)

        return this._db.run(sql, bindedValues);
    }
}