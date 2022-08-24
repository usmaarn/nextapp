import DB from "./db";


class Models extends DB {
    static _table = this.name.toLowerCase()+'s';
    static table = DB.table(this._table);
    static create = DB.insert;

    static where(name, cond, value) {
        this.select('*');
        this.sql += ` where ${name} ${cond} '${value}'`;
        return this;
    }
}

export default Models;