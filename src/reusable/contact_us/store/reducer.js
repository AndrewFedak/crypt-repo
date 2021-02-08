import actionConstants from './constants';

const initialState = {
    user: {},
    isSended: false
};

const ContactUsReducer = (state = {}, action) => {
    switch (action.type) {
        case `${actionConstants.SEND_USER}_STARTED`:
            return {
                ...state,
                isSended: false
            };
        case `${actionConstants.SEND_USER}_ENDED`:
            return {
                ...state,
                isSended: true,
                user: action.payload
            };
        default:
            return state;
    }
};

export default ContactUsReducer;