import React from 'react';
import PageHeader from '../../reusable/page_header/page_header';
import AboutUs from '../../reusable/about_us/about_us';
import ContactUs from '../../reusable/contact_us/contact_us';
import Advantages from '../../reusable/advantages/advantages';

const Home = (props) => {
    return (
        <div>
            <PageHeader />
            <AboutUs />
            <Advantages />
            <ContactUs />
        </div>
    );
};

export default Home;