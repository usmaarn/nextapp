import Models from './models';

class Session extends Models {

    static _table = 'sessions';

    static isExpired = async (token) => {
        const session = this.where('token', '=', token).first();
        return (new Date(session.expiresAt)) < (new Date())
    }

    regenerate = async (user) => {
        await this.delete(user.id);
        return await this.create(user);
    }

}


export default Session;
