import React from 'react';
import {withRouter} from 'react-router-dom';

const NotFound = ({history}) => {
    return (
        <div>
            <p>404</p>
            <button onClick={() => history.push('/home')}>Вернуться домой</button>
        </div>
    );
};

export default withRouter(NotFound);