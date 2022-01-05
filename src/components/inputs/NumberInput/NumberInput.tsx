import React from 'react';

import {View, TextInput} from 'react-native';

import colors from '@constants/colors';
import styles from './styles';
import {HelperText} from 'react-native-paper';

const NumberInput = ({...props}) => {
    const [isOnFocus, setIsOnFocus] = React.useState(false);
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={isOnFocus ? {...styles.input, borderColor: props.color, color: props.textColor} :
                 [styles.input,{color: props.textColor}]}
                placeholder={props.placeholder || ''}
                onFocus={() => setIsOnFocus(true)}
                onBlur={() => setIsOnFocus(false)}
                placeholderTextColor={colors.grey}
                onChangeText={props.onChangeText}
                autoCapitalize="none"
                value={props.value}
                keyboardType={props.keyboard}
                textAlign="center"
                maxLength={props.maxLength ? props.maxLength : 10}
            />
            {props.validation && (
                <HelperText type="error" visible={props.validation} style={styles.helper}>
                    {props.validation}
                </HelperText>
            )}
        </View>
    );
};

export default NumberInput;
