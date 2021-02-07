const types = {
    'json': 'application/json;'
};

export default {
    post(url, data, opts = {}) {
        return fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': types[opts.requestType] || types['json']
            }
        });
    },
    get(url, data, opts = {}) {
        return fetch(url);
    }
};