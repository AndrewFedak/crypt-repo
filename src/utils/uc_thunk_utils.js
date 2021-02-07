const actionConstants = {};

export function createAsyncActions(type, fn, options = {}) {
    let result;
    let error;
    let parsedResult;

    return (requestData, requestOptions) => async (dispatch) => {
        dispatch({type: `${type}_STARTED`, payload: requestData});
        dispatch({type: actionConstants.SHOW_LOADER || 'SHOW_LOADER'});
        try {
            result = !!fn ? await fn(requestData, requestOptions) : requestData;
            parsedResult = await result.json();
        } catch (e) {
            error = e;
        }
        dispatch({type: actionConstants.HIDE_LOADER || 'HIDE_LOADER'});
        dispatch({type: `${type}_ENDED`, payload: parsedResult.title});
        return parsedResult;
    };
}