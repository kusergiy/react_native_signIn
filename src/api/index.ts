import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '@constants/data';

const Api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

Api.defaults.headers.common['Content-Type'] = `application/json`;
Api.defaults.headers.common['Accept'] = `application/json`;

Api.interceptors.response.use(
    (request) => {
        return request;
    },
    (error) => {
        throw error.response;
    }
);

export const setToken = (token: string) => {
    async () => {
       
        await AsyncStorage.setItem('@storage_Key', token);
    };
    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
    delete Api.defaults.headers.common['Authorization'];
};

export default Api;
