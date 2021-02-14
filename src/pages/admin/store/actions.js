import {createAsyncActions} from '../../../utils/thunk_utils';
import actionConstants from './constants';
import dao from './dao';

export const getUsers = () => (dispatch) => {
    dispatch(createAsyncActions(
        actionConstants.GET_USERS,
        dao.getUsers
    )());
};