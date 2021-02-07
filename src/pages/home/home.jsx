import React from 'react';
import PageHeader from '../../reusable/page_header/page_header';
import AboutUs from '../../reusable/about_us/about_us';
import ContactUs from '../../reusable/contact_us/contact_us';
import Advantages from '../../reusable/advantages/advantages';

const Home = (props) => {
    const homeComponent = [
        AboutUs,
        Advantages,
        ContactUs
    ];

    return (
        <>
            <PageHeader />
            <main>
                {homeComponent.map((Component, idx) => (
                    <div className='full-page' key={idx}>
                        <Component />
                    </div>
                ))}
            </main>
        </>
    );
};

export default Home;