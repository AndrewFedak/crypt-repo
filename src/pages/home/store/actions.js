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
    const changedPages = pages.map((item, idx) => ({
        ...item,
        pageY: document.querySelector(`.full-page-${idx}`).getBoundingClientRect().y
    }));
    dispatch({type: actionConstants.SET_PAGES_COORD, payload: changedPages});
};