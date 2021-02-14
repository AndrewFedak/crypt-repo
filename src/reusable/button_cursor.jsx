import React from 'react';
import mouseIcon from '../images/mouse.png';
import cursorIcon from '../images/cursor.png';

const ButtonAndCursor = () => (
    <button className='cursor'>
        <img src={mouseIcon} alt="mouse" /><br />
        <img src={cursorIcon} alt="cursor" />
    </button>
);

export default ButtonAndCursor;