import actionsConstants from './constants';

const initialState = {
    pageY: 0
};

const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsConstants.CHANGE_Y:
            return {
                ...state,
                pageY: action.payload
            };
        default:
            return state;
    };
};

export default HeaderReducer;