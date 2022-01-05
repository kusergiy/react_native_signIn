import {IAction} from '../../types/IAction';
import BLOCKER_TYPES from './types';

const initialState = {
    loading: false
};

const blockerReducer = (state = initialState, action: IAction<any>) => {
    switch (action.type) {
        case BLOCKER_TYPES.SET_LOADING:
            return {
                ...state,
                loading: action?.data
            };
        default:
            return state;
    }
};

export default blockerReducer;
