import React from 'react';
import logo from '../../images/crypt.png';
import recallIcon from '../../images/recall.png';
import mouseIcon from '../../images/mouse.png';

const AboutUs = (props) => {
    return (
        <div className='about-us'>
            <div className='about-us-description'>
                <div>
                    <h1>CRYPTONAME</h1>
                    <p>Агентство CRYPTONAME обладает экспертизой в области продвижения сайтов (SEO),
                        контекстной рекламы (PPC) и других инструментов интернет-маркетинга для сайтов в тематике криптовалют.<br></br>
                        Основной показатель качества нашей работы — прибыль для вашего бизнеса.</p>
                </div>
                <img src={logo} alt='logo' />
            </div>
            <div className='about-us-button'>
                <button>
                    <img src={recallIcon} alt="recall-icon"/>
                    <p>МЫ ВАМ ПЕРЕЗВОНИМ</p>
                </button>
                <span>
                    <img src={mouseIcon} alt="cursor" className="cursor"/>
                </span>
            </div>
        </div>
    );
};

export default AboutUs;