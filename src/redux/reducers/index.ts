import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {AuthAppState} from '@redux/types/stores/auth';
import {ReportAppState} from '@redux/types/stores/report';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './auth/reducer';
import reportReducer from './report/reducer';
import blockerReducer from './blocker/reducer';
import {BlockerAppState} from '@redux/types/stores/blocker';

const persistConfig: any = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth, report'],
    blacklist: ['error'],
    timeout: null
};

export interface RootState {
    authReducer: AuthAppState;
    reportReducer: ReportAppState;
    blockerReducer: BlockerAppState;
}

const rootReducer = combineReducers({
    authReducer,
    reportReducer,
    blockerReducer
});

const pReducer = persistReducer(persistConfig, rootReducer);

export default pReducer;
