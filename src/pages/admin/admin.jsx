import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUsers} from './store/actions';
import {adminTableConfig} from './constants/table_config';

const Admin = ({history, getUsers, users}) => {
    useEffect(() => {
        if (!localStorage.getItem('authorized')) {
            history.push('/login');
        } else {
            getUsers();
        }
    }, []);

    const renderRow = (data) => {
        const allowedData = adminTableConfig.map((item) => item.field);
        return allowedData.map((item, idx) => {
            return (
                <td key={idx}>
                    {data[item].toString()}
                </td>
            );
        });
    };

    if (!users.length) {
        return <p>Loading...</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    {adminTableConfig.map((item, idx) => (
                        <th key={idx}>
                            {item.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {users.map((item, idx) => (
                    <tr key={idx}>
                        {renderRow(item)}
                    </tr>
                ))}
            </tbody>
            <button onClick={() => history.push('/home')}>Вернуться на сайт!</button>
        </table>
    );
};

const mapStateToProps = (state) => ({
    users: state.admin.users
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUsers
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));