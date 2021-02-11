import actionConstants from './constants';

const pages = [
    {
        title: 'О НАС',
        class: 'about-us'
    },
    {
        title: 'ПРИЕМУЩЕВСТВО',
        class: 'advantages'
    },
    {
        title: 'СВЯЗАТЬСЯ',
        class: 'contact-us'
    }
];

export const setPositionForNav = () => (dispatch) => {
    const changedPages = pages.map((item) => ({
        ...item,
        pageY: document.querySelector(`.${item.class}`).getBoundingClientRect().y
    }));
    dispatch({type: actionConstants.SET_PAGES_COORD, payload: changedPages});
};