import axios from '../../helper/axios';
import moment from 'moment';

const REQUEST_TOKEN = 'eniki/user/REQUEST_TOKEN';
const REQUEST_TOKEN_SUCCESS = 'eniki/user/REQUEST_TOKEN_SUCCESS';
const REQUEST_TOKEN_FAILURE = 'eniki/user/REQUEST_TOKEN_FAILURE';

const REFRESH_TOKEN = 'eniki/user/REFRESH_TOKEN';
const REFRESH_TOKEN_SUCCESS = 'eniki/user/REFRESH_TOKEN_SUCCESS';
const REFRESH_TOKEN_FAILURE = 'eniki/user/REFRESH_TOKEN_FAILURE';

const INVALIDATE_TOKEN = 'eniki/user/INVALIDATE_TOKEN';
const INVALIDATE_TOKEN_SUCCESS = 'eniki/user/INVALIDATE_TOKEN_SUCCESS';
const INVALIDATE_TOKEN_FAILURE = 'eniki/user/INVALIDATE_TOKEN_FAILURE';

const INITIAL_STATE = {
    username: undefined,
    authenticated: false,
    accessToken: undefined,
    refreshToken: undefined,
    expires: undefined,
    error: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_TOKEN:
            return {...state, username: action.payload.username, authenticated: false, error: null};
        case REQUEST_TOKEN_SUCCESS:
            return {...state, ...action.payload, authenticated: true, error: null};
        case REQUEST_TOKEN_FAILURE:
            return {...state, username: action.payload.username, authenticated: false, error: action.payload.error};
    }
    return state;
};

export default reducer;

export const requestToken = (username, password) => dispatch => {
    dispatch({
        type: REQUEST_TOKEN,
        payload: {username}
    });
    return axios.post(`/oauth/token?grant_type=password&username=${username}&password=${password}`)
        .then(response => {
            const {data} = response;
            return dispatch({
                type: REQUEST_TOKEN_SUCCESS,
                payload: {
                    username: data.username,
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token,
                    expires: moment().add(data.expires_in, 's').valueOf()
                }
            });
        }).catch(err => {
            console.error(err);
            return dispatch({
                type: REQUEST_TOKEN_FAILURE,
                payload: {
                    username: username,
                    error: err.toString()
                }
            });
        });
};