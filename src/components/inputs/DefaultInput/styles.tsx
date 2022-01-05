import {StyleSheet} from 'react-native';

import colors from '@constants/colors';
import {scaledSize} from '@constants/globalStyles';

export default StyleSheet.create({
    wrapper: {
        width: '100%'
    },
    label: {
        display: 'flex',
        textAlign: 'left',
        width: '100%',
        fontSize: 16,
        color: colors.grey,
        fontFamily: 'Catamaran'
    },
    input: {
        width: '100%',
        height: 50,
        paddingTop: scaledSize(10),
        paddingBottom: scaledSize(10),
        paddingLeft: scaledSize(10),
        paddingRight: scaledSize(10),
        marginTop: scaledSize(10),
        backgroundColor: colors.darkGrey,
        color: colors.white,
        borderColor: colors.darkGrey,
        borderWidth: 2,
        fontFamily: 'Catamaran'
    },
    activeInput: {
        borderColor: colors.freshGreen
    },
    helper: {
        marginBottom: scaledSize(5),
        paddingHorizontal: 0
    }
});
