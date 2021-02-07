import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import navItems from './constants/nav_items';
import {changeYCords} from './store/actions';

const PageHeader = (props) => {
    const {currentScrollPos: currentY, changeYCords} = props;

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            changeYCords(window.pageYOffset);
        });
    }, []);

    const renderNavItems = () => {
        return navItems.map(({title, pageY}, index) => {
            const nextPageY = navItems[index+1] && navItems[index+1].pageY;
            const className= classNames({
                'underline': pageY <= currentY && (nextPageY || document.body.scrollHeight) > currentY
            });
            return (
                <li className={className}
                    key={index}
                    onClick={() => window.scrollTo(0, pageY+1)}
                >{title}</li>
            );
        });
    };

    return (
        <header>
            <ul className='page-header-nav'>
                <li>Logo</li>
                {renderNavItems()}
            </ul>
        </header>
    );
};

const mapStateToProps = (state) => ({
    currentScrollPos: state.header.pageY
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeYCords
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);