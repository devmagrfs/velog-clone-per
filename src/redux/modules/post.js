import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import apis from '../../common/api';

// initialState
const initialState = {
    list: []
};


// actions
const GET_POST = "GET_POST";


// action creators
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));


//middleware actions
const getDatePostDB = () => {
    return async function (dispatch, getState, { history }) {
        const token = localStorage.getItem('token');
        await apis.get('/api/posting', {
            headers: {
                Authorization:
                    `${token}`
            }
        }).then((response) => {
            console.log((response.data))
            dispatch(getPost(response.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const getLikePostMonthDB = () => {
    return async function (dispatch, getState, { history }) {
        const token = localStorage.getItem('token');
        await apis.get('/api/posting/likes/month', {
            headers: {
                Authorization:
                    `${token}`
            }
        }).then((response) => {
            console.log((response.data))
            dispatch(getPost(response.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const getLikePostWeekDB = () => {
    return async function (dispatch, getState, { history }) {
        const token = localStorage.getItem('token');
        await apis.get('/api/posting/likes/week', {
            headers: {
                Authorization:
                    `${token}`
            }
        }).then((response) => {
            console.log((response.data))
            dispatch(getPost(response.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const getLikePostTodayDB = () => {
    return async function (dispatch, getState, { history }) {
        const token = localStorage.getItem('token');
        await apis.get('/api/posting/likes/today', {
            headers: {
                Authorization:
                    `${token}`
            }
        }).then((response) => {
            console.log((response.data))
            dispatch(getPost(response.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}


// reducer
export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        })
    },
    initialState
);


const actionCreators = {
    getPost,
    getDatePostDB,
    getLikePostMonthDB,
    getLikePostWeekDB,
    getLikePostTodayDB,
};

export { actionCreators }