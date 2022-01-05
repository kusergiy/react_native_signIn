import {Dimensions, StyleSheet} from 'react-native';

import colors from '@constants/colors';
import {scaledSize} from '@constants/globalStyles';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    containerKeyboard: {
        width: screenWidth - 60,
        flexGrow: 1,
        alignItems: 'center'
    },
    wrapperView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scaledSize(30)
    },
    logo: {
        margin: scaledSize(10)
    },
    logoWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoTitle: {
        color: colors.white,
        fontSize: scaledSize(23),
        fontWeight: '900',
        fontFamily: 'Catamaran'
    },
    logoText: {
        color: colors.white,
        fontSize: scaledSize(9),
        fontFamily: 'Catamaran'
    },
    textWrap: {
        margin: scaledSize(30),
        width: '100%'
    },
    title: {
        color: colors.lightGrey,
        fontSize: scaledSize(22),
        textAlign: 'left',
        marginVertical: scaledSize(10),
        fontFamily: 'Catamaran'
    },
    text: {
        color: colors.grey,
        fontSize: scaledSize(16),
        textAlign: 'left',
        fontFamily: 'Catamaran'
    }
});
