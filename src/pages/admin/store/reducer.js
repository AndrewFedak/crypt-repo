import actionConstants from './constants';

const initialState = {
    users: []
};

const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${actionConstants.GET_USERS}_ENDED`:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
};

export default AdminReducer;