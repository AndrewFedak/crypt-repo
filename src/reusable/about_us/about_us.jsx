import React from 'react';

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
                <img src='' alt='logo' />
            </div>
            <div className='about-us-button'>
                <button>
                    <img src="call.svg" alt=""/>
                    <p>МЫ ВАМ ПЕРЕЗВОНИМ</p>
                </button>
            </div>
            <img src="" alt="cursor" className="cursor"/>
        </div>
    );
};

export default AboutUs;