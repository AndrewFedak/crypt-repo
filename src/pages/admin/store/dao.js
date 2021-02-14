import client from '../../../reusable/client';
import apiUrls from '../../../constants/constants';

const getUsers = () => {
    return client.get(apiUrls.GET_USERS);
};

export default {
    getUsers
};