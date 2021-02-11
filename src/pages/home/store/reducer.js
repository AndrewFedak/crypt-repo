import actionConstants from './constants';

const initialState = {
    navItems: []
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionConstants.SET_PAGES_COORD:
            return {
                ...state,
                navItems: action.payload
            };
        default:
            return state;
    };
};

export default HomeReducer;