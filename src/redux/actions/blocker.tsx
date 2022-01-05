import types from '@redux/reducers/blocker/types';

export const setLoading = (loading: boolean) => ({
    type: types.SET_LOADING,
    data: loading
});
