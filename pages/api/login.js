import Cookies from "cookies";
import { compare, hash } from "../../utils/helper";
import Session from "../../utils/session";
import User from "../../utils/user";
import date from '../../utils/date';
 

export default async function handler(req, res){

    const cookies = Cookies(req, res);
    const intendedUrl = cookies.get('intendedUrl');
    const {username, password} = req.body;
    
    let user = await User.where('username','=', username).first();

    if(user && compare(user.password, password)){
        delete user.password;
        const token = hash(user);
        const expiresAt = date.format(Date.now() + 60 * 60 * 1000)
        const session = await Session.create({user_id: user.id, token, expiresAt});
        cookies.set('sessionId', session.token, {req, res, maxAge: new Date(session.expiresAt)})
        cookies.set('intendedUrl');
        return res.redirect(intendedUrl ?? '/');
    }

    return res.status(422).send({message: 'invalid credentials'})
}