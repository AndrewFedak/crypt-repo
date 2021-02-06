import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import navItems from './constants/nav_items';

const PageHeader = (props) => {
    const [currentY, changePageStyle] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            changePageStyle(window.scrollY);
        });
    }, []);

    const renderNavItems = () => {
        const heights = Object.values(navItems);
        return Object.entries(navItems).map((nav, index) => {
            const [navTitle, height] = nav;
            console.log(heights[index+1] || window.innerHeight);
            return (
                <li className={classNames(
                    {'underline': (heights[index+1] || window.innerHeight) - height >= currentY}
                    )}
                    key={index}
                >{navTitle}</li>
            );
        });
    };

    return (
        <ul className='page-header-nav'>
            <li>Logo</li>
            {renderNavItems()}
        </ul>
    );
};

export default PageHeader;