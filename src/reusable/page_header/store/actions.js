import actionsConstants from './constants';
import dao from './dao';
import {createAsyncActions} from '../../../utils/uc_thunk_utils';

export const changeYCords = (y) => (dispatch) => dispatch({type: actionsConstants.CHANGE_Y, payload: y});

export const getClient = () => (dispatch) => {
    dispatch(createAsyncActions(
        'GET',
        dao.get
    )());
};