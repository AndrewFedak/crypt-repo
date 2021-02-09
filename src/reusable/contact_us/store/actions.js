import {createAsyncActions} from '../../../utils/thunk_utils';
import dao from './dao';
import actionConstants from './constants';

export const sendUser = (data) => (dispatch) => {
    dispatch(createAsyncActions(
        actionConstants.SEND_USER,
        dao.sendUser
    )(data));
};