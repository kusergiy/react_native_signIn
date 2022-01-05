import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {styles} from './styles';

const DefaultDropdown = ({...props}) => {
    return (
        <RNPickerSelect
            value={props.value}
            placeholder={{}}
            style={styles}
            onValueChange={props.onValueChange}
            items={props.items}
        />
    );
};

export default DefaultDropdown;
