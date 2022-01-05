import {StyleSheet} from 'react-native';

import colors from '@constants/colors';

export const styles = StyleSheet.create({
    viewContainer: {
        minWidth: 140,
        marginVertical: 10,
        height: 37
    },
    inputIOS: {
        color: colors.lightGrey,
        textAlign: 'center',
        padding: 25,
        backgroundColor: colors.darkGrey,
        fontFamily: 'Catamaran'
    },
    placeholder: {
        color: colors.lightGrey,
        fontFamily: 'Catamaran'
    },
    inputAndroid: {
        color: colors.lightGrey,
        padding: 25,
        backgroundColor: colors.darkGrey,
        fontFamily: 'Catamaran'
    }
});
