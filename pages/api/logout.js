import Session from "../../utils/session";
import Cookies from "cookies";

export default async function handler(req, res) {

    const cookies = new Cookies(req, res);
    const token = req.cookies.sessionId;
    await Session.where('token', '=', token).delete();
    cookies.set('sessionId');
    res.redirect('/login');
}