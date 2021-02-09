import actionConstants from './constants';

const initialState = {
    isShowing: false
};

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionConstants.HIDE_LOADER:
            return {
                ...state,
                isShowing: false
            };
        case actionConstants.SHOW_LOADER:
            return {
                ...state,
                isShowing: true
            };
        default:
            return state;
    }
};

export default RootReducer;