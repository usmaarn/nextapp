import Session from "../../../utils/session";
import User from "../../../utils/user";
import DB from '@/utils/db';


export default async function handler(req, res) {

    // const sessionId = req.cookies.sessionId;
    // if (!sessionId) return res.status(403).send('Unauthorized Access');
    // let session = await Session.get(sessionId);
    // let user = await User.findById(session.user_id);

    let users = await DB.raw('select * from users');
    return res.json(users);
    
}