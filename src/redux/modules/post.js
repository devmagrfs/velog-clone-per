import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from 'axios';

import apis from '../../common/api';

// initialState
const initialState = {
    list: []
};


// actions
const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";



// action creators
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));



//middleware actions
const getDatePostDB = () => {
    return async function (dispatch, getState, { history }) {
        await axios.get('http://yuseon.shop/api/posting')
            .then((response) => {
                console.log("response", response.data.articles)
                dispatch(getPost(response.data.articles))
            }).catch((err) => {
                console.log(err)
            })
    }
}

const getLikePostMonthDB = () => {
    return async function (dispatch, getState, { history }) {
        await apis.get('http://yuseon.shop/api/posting/likes/month',).then((response) => {
            console.log((response.data))
            dispatch(getPost(response.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const getLikePostWeekDB = () => {
    return async function (dispatch, getState, { history }) {
        await apis.get('http://yuseon.shop/api/posting/likes/week').then((response) => {
            console.log((response.data))
            dispatch(getPost(response.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const getLikePostTodayDB = () => {
    return async function (dispatch, getState, { history }) {
        await apis.get('http://yuseon.shop/api/posting/today').then((response) => {
            console.log((response.data))
            dispatch(getPost(response.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const addPostDB = () => {
    return async function (dispatch, getState, { history }) {
        const token = sessionStorage.getItem('token');
        const form = new FormData();
        // form.append()

        await apis.post("/posting", form, {
            headers: {
                "X-AUTH-TOKEN": `Bearer ${token}`
            }
        })
    }
}


// reducer
export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        }),
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            console.log(state);
        }),
    },
    initialState
);


const actionCreators = {
    getPost,
    getDatePostDB,
    getLikePostMonthDB,
    getLikePostWeekDB,
    getLikePostTodayDB,
    addPost,
    addPostDB,
};

export { actionCreators }
