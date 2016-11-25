import axios from '../../helper/axios';

const FETCH_ENTRIES = 'eniki/entries/FETCH_ENTRIES';
const FETCH_ENTRIES_SUCCESS = 'eniki/user/FETCH_ENTRIES_SUCCESS';
const FETCH_ENTRIES_FAILURE = 'eniki/user/FETCH_ENTRIES_FAILURE';

const INITIAL_STATE = {
    items: undefined,
    searchText: '',
    isFetching: false
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ENTRIES:
            return {...state, searchText: action.payload.searchText, isFetching: true};
        case FETCH_ENTRIES_SUCCESS:
            return {...state, searchText: action.payload.searchText, items: action.payload.entries, isFetching: false};
    }
    return state;
};

export default reducer;

export const fetchEntries = searchText => dispatch => {
    dispatch({
        type: FETCH_ENTRIES,
        payload: {searchText}
    });
    return axios.get(`/api/entries?searchText=${searchText}`)
        .then(response => {
            const {data: {content}} = response;
            return dispatch({
                type: FETCH_ENTRIES_SUCCESS,
                payload: {
                    searchText,
                    entries: content
                }
            });
        }).catch(err => {
            console.error(err);
            return dispatch({
                type: FETCH_ENTRIES_FAILURE,
                payload: {
                    error: err.toString()
                }
            });
        });
};