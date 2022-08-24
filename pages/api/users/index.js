import User from '@/utils/user';

export default async function handler(req, res){
    const users = await User.all();
    return res.json(users);
}