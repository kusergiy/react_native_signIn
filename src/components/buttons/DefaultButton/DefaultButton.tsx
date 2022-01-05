import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const DefaultButton = ({
    title,
    disabled,
    onPress,
    color
}: {
    title: string;
    disabled: boolean;
    onPress: () => void | null | Promise<void>;
    color?: string;
}) => {
    return (
        <TouchableOpacity
            style={
                // eslint-disable-next-line react-native/no-inline-styles
                color ? {...styles.container, backgroundColor: color, opacity: disabled ? 0.4 : 1} : styles.container
            }
            disabled={disabled}
            onPress={onPress}>
            <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
    );
};
export default DefaultButton;
