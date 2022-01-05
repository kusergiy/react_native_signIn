import React from 'react';

import {View, Text, TextInput} from 'react-native';

import colors from '@constants/colors';
import styles from './styles';
import {HelperText} from 'react-native-paper';

const DefaultInput = ({...props}) => {
    const [isOnFocus, setIsOnFocus] = React.useState(false);
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={isOnFocus ? {...styles.input, ...styles.activeInput} : styles.input}
                placeholder={props.placeholder || ''}
                onFocus={() => setIsOnFocus(true)}
                onBlur={() => setIsOnFocus(false)}
                secureTextEntry={props.isPassword ? props.isPassword : false}
                placeholderTextColor={colors.grey}
                onChangeText={props.onChangeText}
                value={props.value}
                autoCapitalize="none"
            />
            <HelperText type="error" visible={props.validation} style={styles.helper}>
                {props.validation}
            </HelperText>
        </View>
    );
};

export default DefaultInput;
