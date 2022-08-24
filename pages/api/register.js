import { hash } from "../../utils/helper";
import User from "../../utils/user";
 

export default async function handler(req, res){
    
    const {name, username, password, confirm_password} = req.body;

    if(!name || !username || !password){
        return res.status(422).send('Please fill all fields');
    }

    if(!password || password.length < 5){
        return res.status(422).send('Password length less than 5');
    }

    else if (password !== confirm_password){
        return res.status(422).send('Password does not match');
    }

    else if (username.length < 5) {
        return res.status(422).send('Username too short');
    }

    else {
        const p = hash(password);
        let user = await User.create({name, username, password:p});
        return res.redirect('/login');
    }
}