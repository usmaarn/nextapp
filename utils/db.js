import mysql from 'mysql';
import {promisify} from 'util';

class DB {

    static init() {
        this.sql = '';
        this.conn = mysql.createConnection({
                host: 'localhost', 
                user: 'root', 
                password: '', 
                database: 'chatapp'
        });
        this.query = promisify(this.conn.query).bind(this.conn);
    }

    static table(table) {
        this.init();
        this._table = table;
        return this;
    }

    static async insert(obj) {
        this.conn.connect();
        let f = Object.keys(obj).join(',')
        let v = Object.values(obj)
        let sql = `insert into ${this._table} (${f}) values (${v.map(i=> '?').join()})`;
        const res = await this.query(sql, v);
        const data = await this.find(res.insertId)
        return data;
    }

    static select(colums){
        colums = typeof colums == 'string' ? colums : colums.join(',')
        this.sql += 'select ' + colums+' from '+ this._table;
        return this;
    }

    static async delete(){
        this.sql = this.sql.replace('select *', 'delete');
        const res = await this.query(this.sql);
        return res;
    }

    static where(name, cond, value) {
        this.sql += ` where ${name} ${cond} '${value}'`;
        return this;
    }

    static orWhere(name, cond, value) {
        this.sql += ` or ${name} ${cond} '${value}'`;
        return this
    }

    static andWhere(name,cond,value) {
        this.sql += ` and ${name} ${cond} '${value}'`;
        return this;
    }

    static limit(limit) {
        this.sql += ` limit ${limit}`;
        return this;
    }

    static offset(offset){
        this.sql += ` ${offset}`;
        return this;
    }

    static async raw(sql) {
        this.init();
        let res = await this.query(sql);
        return this.json(res);
    }

    static async get(){
        this.conn.connect();
        let res = await this.query(this.sql);
        return this.json(res);
    }

    static async first() {
        this.conn.connect();
        let res = await this.query(this.sql);
        return res[0] ? this.json(res[0]) : null;
    }

    static async find(id){
        this.conn.connect();
        let isArray = Array.isArray(id);
        let cond = isArray ? id.join(' or id=') : id;
        this.sql += 'select * from '+this._table+' where id = ' + cond;
        let res = await this.query(this.sql);
        return this.json(isArray ? res : res[0]);
    }

    static json(data){
        let s = JSON.stringify(data)
        return JSON.parse(s);
    }

    static async all(){
        this.conn.connect();
        let sql = 'select * from '+this._table;
        let res = await this.query(sql);
        return this.json(res);
    }

    static async exists() {
        let record = await this.first();
        return record ? true : false;
    }
}


export default DB;