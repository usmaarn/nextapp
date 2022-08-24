import {v4} from 'uuid';
var CryptoJS = require("crypto-js");

export function hash(data, secret='') {
    const string = JSON.stringify(data);
    return CryptoJS.AES.encrypt(string, secret).toString();
}

export function unhash(data, secret=''){
    var bytes  = CryptoJS.AES.decrypt(data, secret);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

export function compare(hash, string, secret=''){
    hash = unhash(hash, secret);
    return hash === string;
}

export function uuid() {
    return v4();
}