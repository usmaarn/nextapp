import {hash} from './helper';
import Models from './models';

class User extends Models {
    static _table = 'users';
}

export default User;