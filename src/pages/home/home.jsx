import React, {useEffect} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import PageHeader from '../../reusable/page_header/page_header';
import AboutUs from '../../reusable/about_us/about_us';
import ContactUs from '../../reusable/contact_us/contact_us';
import Advantages from '../../reusable/advantages/advantages';

import {setPositionForNav} from './store/actions';

const Home = ({setPositionForNav, navItems}) => {
    const homeComponent = [
        AboutUs,
        Advantages,
        ContactUs
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        setPositionForNav();
    }, []);

    return (
        <>
            <PageHeader navItems={navItems}/>
            <main>
                {homeComponent.map((Component, idx) => (
                    <div className={'full-page full-page-' + idx} key={idx}>
                        <Component />
                    </div>
                ))}
            </main>
        </>
    );
};

const mapStateToProps = (state) => ({
    navItems: state.home.navItems
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setPositionForNav
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);