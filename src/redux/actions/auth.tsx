import AsyncStorage from '@react-native-async-storage/async-storage';
import {_storeData} from '@constants/helpers';
import {IStringFieldProps} from '@redux/types/IData';
import types from '@redux/reducers/auth/types';
import API, {deleteToken, setToken} from '../../api';
import {setLoading} from './blocker';

export const signIn =
    (data: IStringFieldProps) => (dispatch: (arg0: {type: string; data: string | boolean}) => void) => {
        dispatch(setLoading(true));
        deleteToken();
        return API.post('/auth/login', data)
            .then((response) => {
                const token = response.data.access_token;
                setToken(token);
                AsyncStorage.setItem('@storage_Key', token);
                dispatch({
                    type: types.SET_USER,
                    data: response.data?.userInfo
                });
                dispatch({
                    type: types.SET_TOKEN,
                    data: token
                });
                dispatch(setLoading(false));
                return response.data.data;
            })
            .catch((error) => {
                dispatch(setLoading(false));
                throw error;
            });
    };

export const refreshToken = () => {
    return (dispatch: (arg0: {type: string; data: boolean}) => Promise<void>) => {
        dispatch(setLoading(true));
        return API.get(`auth/token/refresh`)
            .then((response) => {
                const token = response.data?.access_token;
                setToken(token);
                AsyncStorage.setItem('@storage_Key', token);
                dispatch({
                    type: types.SET_TOKEN,
                    data: token
                });
                dispatch({
                    type: types.SET_USER,
                    data: response.data?.userInfo
                });
                dispatch(setLoading(false));
                return response;
            })
            .catch((error) => {
                dispatch(setLoading(false));
                throw error;
            });
    };
};

export const logOut = () => (dispatch: (arg0: {type: string; data: boolean | null}) => void) => {
    deleteToken();
    AsyncStorage.setItem('@storage_Key', '');
    dispatch({
        type: types.SET_TOKEN,
        data: null
    });
};

export const setStorageToken = (token: string) => (dispatch: (arg0: {type: string; token: string}) => void) => {
    setToken(token);
    dispatch({
        type: types.SET_TOKEN,
        token: token
    });
};
export const updateUser = (data: string) => (dispatch: (arg0: {type: string; data: string | boolean}) => void) => {
    dispatch(setLoading(true));
    return API.post('/user-infos/update', data)
        .then((response) => {
            let savedData = JSON.parse(data);
            dispatch({
                type: types.SET_USER,
                data: savedData
            });
            _storeData('language', savedData.language);
            dispatch(setLoading(false));
            return response.data.data;
        })
        .catch((error) => {
            dispatch(setLoading(false));

            throw error;
        });
};
