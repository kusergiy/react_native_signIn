import {StyleSheet} from 'react-native';

import colors from '@constants/colors';
import {scaledSize} from '@constants/globalStyles';

export default StyleSheet.create({
    wrapper: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: scaledSize(0)
    },
    label: {
        marginBottom: scaledSize(0),
        fontSize: 20,
        color: colors.lightGrey,
        fontFamily: 'Catamaran',
    },
    input: {
        width: '80%',
        height: 60,
        paddingTop: scaledSize(10),
        paddingBottom: scaledSize(10),
        paddingLeft: scaledSize(10),
        paddingRight: scaledSize(10),
        marginTop: scaledSize(10),
        backgroundColor: colors.darkGrey,
        color: colors.grey,
        borderColor: colors.darkGrey,
        borderWidth: 2,
        fontSize: scaledSize(27),
        letterSpacing: 2,
        fontWeight: '600'
    },

    helper: {
        marginBottom: scaledSize(5),
        paddingHorizontal: 0
    }
});
