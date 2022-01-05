import {IAction} from '../../types/IAction';
import AUTH_TYPES from './types';

const initialState = {
    user: [],
    token: null
};

const authReducer = (state = initialState, action: IAction<string>) => {
    switch (action.type) {
        case AUTH_TYPES.SET_USER:
            return {
                ...state,
                user: action?.data
            };
        case AUTH_TYPES.SET_TOKEN:
            return {
                ...state,
                token: action?.data
            };
        default:
            return state;
    }
};

export default authReducer;
