import React from 'react';
import advantagesBlocks from './constants/advantages_blocks_constants';
import ButtonAndCursor from '../../reusable/button_cursor';

const Advantages = (props) => {
    return (
        <div className='advantages'>
            <h1 className='advantages-title'>ПОЧЕМУ ИМЕННО МЫ?</h1>
            <div className='advantages-blocks'>
                {advantagesBlocks.map(({title, description, icon}, index) => (
                    <div key={index} className='advantages-blocks_block'>
                        <img src={icon} alt={title} />
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
            <ButtonAndCursor />
        </div>
    );
};

export default Advantages;