import React from 'react';
import logo from '../../images/crypt.png';
import recallIcon from '../../images/recall.png';
import mouseIcon from '../../images/mouse.png';
import cursorIcon from '../../images/cursor.png';

const AboutUs = (props) => {
    return (
        <div className='about-us'>
            <div className='about-us-description'>
                <div>
                    <h1>CRYPTONAME</h1>
                    <p>Агентство CRYPTONAME обладает экспертизой в области продвижения сайтов (SEO),
                        контекстной рекламы (PPC) и других инструментов интернет-маркетинга для сайтов в тематике криптовалют.
                        Основной показатель качества нашей работы — прибыль для вашего бизнеса.</p>
                </div>
                <img src={logo} alt='logo' />
            </div>
            <div className='about-us-button'>
                <button className='recall'>
                    <img src={recallIcon} alt="recall-icon"/>
                    <p>МЫ ВАМ ПЕРЕЗВОНИМ</p>
                </button>
                <button className='cursor'>
                    <img src={mouseIcon} alt="mouse" /><br />
                    <img src={cursorIcon} alt="cursor" />
                </button>
            </div>
        </div>
    );
};

export default AboutUs;