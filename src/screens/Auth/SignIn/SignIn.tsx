/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import DefaultButton from '@components/buttons/DefaultButton';
import DefaultInput from '@components/inputs/DefaultInput';
import DefaultDropdown from '@components/DefaultDropdown';
import {EMAIL_REG_EXP, LANGUAGES, LANGUAGES_OPTIONS, ROCK_DOC_PUSH_NOTIFICATIONS_STORAGE_KEY} from '@constants/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import SplashScreen from 'react-native-splash-screen';

import icons from '@constants/icons';
import styles from './styles';
import {refreshToken, setStorageToken, signIn} from '@redux/actions/auth';
import ScreenContainer from '@components/ScreenContainer';
import setI18nConfig, {translate} from '@i18n/index';
import {RootState} from '@redux/reducers';
import {IStringFieldProps} from '@redux/types/IData';
import {store} from '@redux/store';

const initialSignInState: IStringFieldProps = {
    username: '',
    password: ''
};

export type AppDispatch = typeof store.dispatch;

interface NavigationProps {
    navigation: {
        navigate: (t?: string) => void;
        goBack?: () => void;
    };
}

const SignIn = (props: NavigationProps) => {
    const [language, setLanguage] = React.useState(LANGUAGES.ENGLISH);
    const [signInValues, setSignInValues] = React.useState(initialSignInState);
    const [validationState, setValidationState] = React.useState(initialSignInState);
    const token = useSelector((state: RootState) => state?.authReducer?.token);
    const dispatch = useDispatch<AppDispatch>();

    const _storeData = async (key: string, data: string) => {
        try {
            if (key === 'language') setI18nConfig({languageTag: data, isRTL: false});
            await AsyncStorage.setItem(key, data);
        } catch (error) {
            throw error;
        }
    };

    React.useEffect(() => {
        token ? autoLogin() : getToken();
    }, [token]);

    React.useLayoutEffect(() => {
        SplashScreen.hide();
        messaging().registerDeviceForRemoteMessages();
        requestUserPermission();
        createNotificationListeners();
        messaging()
            .hasPermission()
            .then((enabled) => {
                if (!enabled) {
                    getPermission();
                }
            });
    }, []);

    const createNotificationListeners = async () => {
        await messaging().onNotificationOpenedApp(() => {});
        messaging()
            .getInitialNotification()
            .then(async () => {});
        messaging().onMessage(async (message) => {
            await savePushToStorage(message.data);
        });
        messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            await savePushToStorage(remoteMessage.data);
        });
    };

    const savePushToStorage = async (data: {[key: string]: string} | undefined) => {
        const currentMessages = (await AsyncStorage.getItem(ROCK_DOC_PUSH_NOTIFICATIONS_STORAGE_KEY)) || '';
        const isMessages = await AsyncStorage.getItem(ROCK_DOC_PUSH_NOTIFICATIONS_STORAGE_KEY);
        const messageArray = isMessages ? JSON.parse(currentMessages) : [];
        messageArray.push(data);
        await AsyncStorage.setItem(ROCK_DOC_PUSH_NOTIFICATIONS_STORAGE_KEY, JSON.stringify(messageArray));
    };

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        return enabled;
    };

    const getToken = async () => {
        try {
            await AsyncStorage.getItem('@storage_Key').then((key) => {
                if (key !== null) {
                    dispatch(setStorageToken(key));
                    autoLogin();
                }
            });
        } catch (error) {
            throw error;
        }
    };

    const autoLogin = () => {
        dispatch(refreshToken()).then(() => {
            props.navigation.navigate('Home');
        });
    };

    const getPermission = () => {
        messaging()
            .requestPermission()
            .catch(() => {
                getPermission();
            });
    };

    const onValueChange = (languageTag: string) => {
        setLanguage(languageTag);
        _storeData('language', languageTag);
    };

    const validate = () => {
        let isAllFieldsValid = true;
        const copyValidState = {...validationState};
        Object.keys(initialSignInState).map((key) => {
            if (key === 'username') {
                const isValidEmail = EMAIL_REG_EXP.test(signInValues.username);
                if (!isValidEmail) {
                    copyValidState[key] = 'Must be a valid email';
                    isAllFieldsValid = false;
                }
            } else if (key === 'password') {
                if (signInValues.password?.length < 8) {
                    copyValidState[key] = 'Password must be of minimum 8 characters';
                    isAllFieldsValid = false;
                }
            }
        });
        setValidationState(copyValidState);
        return isAllFieldsValid;
    };

    const onChange = (field: string, value: string) => {
        if (validationState[field]) {
            setValidationState({...validationState, ...{[field]: ''}});
        }
        setSignInValues({...signInValues, [field]: value});
    };

    const onSignIn = async () => {
        if (validate()) {
            const fcmToken = await messaging().getToken();
            const loginData = {...signInValues, deviceToken: fcmToken};
            dispatch(signIn(loginData))
                .then(() => {
                    props.navigation.navigate('Home');
                })
                .catch(() => {
                    setValidationState({
                        password: 'Login or password is incorrect'
                    });
                });
        }
    };

    return (
        <ScreenContainer>
            <KeyboardAvoidingScrollView
                scrollEnabled={true}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.containerKeyboard}>
                <View style={{...styles.wrapperView, ...styles.header}}>
                    <View style={styles.logoWrap}>
                        <icons.SmallLogo style={styles.logo} />
                        <View>
                            <Text style={styles.logoTitle}>RockDoc</Text>
                            <Text style={styles.logoText}>by Mank Group</Text>
                        </View>
                    </View>
                    <DefaultDropdown
                        value={language}
                        items={LANGUAGES_OPTIONS}
                        onValueChange={(e: string) => onValueChange(e)}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>{translate('loginScreen.loginWithEmail')}</Text>
                    <Text style={styles.text}>{translate('loginScreen.enterParams')}</Text>
                </View>
                <View style={styles.wrapperView}>
                    <DefaultInput
                        label={translate('loginScreen.email')}
                        placeholder={translate('loginScreen.enterEmail')}
                        onChangeText={(e: string) => onChange('username', e)}
                        validation={validationState.username}
                    />
                    <DefaultInput
                        label="Password"
                        placeholder={translate('loginScreen.enterPassword')}
                        isPassword={true}
                        onChangeText={(e: string) => onChange('password', e)}
                        validation={validationState.password}
                    />
                    <DefaultButton disabled={false} title={translate('loginScreen.logIn')} onPress={() => onSignIn()} />
                </View>
            </KeyboardAvoidingScrollView>
        </ScreenContainer>
    );
};

export default SignIn;
