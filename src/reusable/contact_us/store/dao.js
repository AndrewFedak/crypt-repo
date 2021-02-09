import client from '../../client';
import urlConstants from '../../../constants/constants';

export default {
    sendUser(data) {
        return client.post(urlConstants.SEND_USER, data);
    }
};