import {IUser} from '../IData';

export interface AuthAppState {
    user: IUser;
    token: string | undefined;
}
