import { DatabaseUtils } from "../Repositories/DatabaseUtils.utils";
import { IDatabase } from "../Repositories/IDatabase.repository";
import { ICrud } from "./ICrud.service"

export class CrudService implements ICrud {
    constructor(
        private _database: IDatabase,
        private _tableName: string
    ) { }

    public create(values: object): void {
        const bindedColumns = DatabaseUtils.convertObjectColumnsToNamedBindColumn(values);
        const sql = `INSERT INTO ${this._tableName} VALUES (${bindedColumns.join(', ')});`;
        this._database.exec({sql, values})
    }

    public read(values: object): object {
        const bindedColumns = DatabaseUtils.convertObjectColumnsToNamedBindColumn(values);
        const sql = `SELECT (${bindedColumns}) FROM ${this._tableName};`;
        const row = this._database.fetch({sql, values})

        return row
    }

    public update(values: object, condition: object): void {
        const columnValueBinded = DatabaseUtils.convertToNamedBindValuesObject(values)
        const columnValueRelation = Object.keys(columnValueBinded).map(k => [k, values[k]])
        
        const conditionBinded = DatabaseUtils.convertToNamedBindValuesObject(condition)
        const conditionColValueRelation = Object.keys(conditionBinded).map(k => [k, condition[k]])
        const sql = `UPDATE ${this._tableName} SET ${columnValueRelation} WHERE ${conditionColValueRelation};`;

        this._database.exec({sql, values: {...values, ...condition}})
    }

    public delete(condition: object): void {
        const conditionBinded = DatabaseUtils.convertToNamedBindValuesObject(condition)
        const conditionColValueRelation = Object.keys(conditionBinded).map(k => [k, condition[k]])
        
        const sql = `DELETE FROM ${this._tableName} WHERE ${conditionColValueRelation};`

        this._database.exec({sql, values: condition})
    }
}