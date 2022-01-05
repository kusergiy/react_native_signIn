import {Dimensions, StyleSheet} from 'react-native';

import colors from '@constants/colors';
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        width: screenWidth - 30,
        backgroundColor: colors.freshGreen,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 2,
        marginVertical: 5
    },
    titleText: {
        color: colors.darkColor,
        fontSize: 18,
        fontFamily: 'Catamaran'
    }
});
