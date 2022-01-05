import React from 'react';
import {useSelector} from 'react-redux';
import {View, Modal, TouchableWithoutFeedback, ActivityIndicator} from 'react-native';

import {RootState} from '@redux/reducers';
import colors from '@constants/colors';

import styles from './styles';

const BlockerLoader = () => {
    const loading = useSelector((state: RootState) => state.blockerReducer?.loading);

    return (
        <Modal transparent visible={loading}>
            <TouchableWithoutFeedback>
                <View style={styles.modalBacksideContainer} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContainer} pointerEvents="box-none">
                <View style={styles.modalWindow}>
                    <ActivityIndicator size={'large'} color={colors.lightGrey} />
                </View>
            </View>
        </Modal>
    );
};

export default BlockerLoader;
