import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import apis from '../../common/api';

// initialState
const initialState = {
    user: null,
    is_login: false,
};

// actions
const LOGIN = "LOGIN";
const CHECK_USERNAME = "CHECK_USERNAME";
const CHECK_NICKNAME = "CHECK_NICKNAME";




// action creators
const setLogin = createAction(LOGIN, (user) => ({ user }));
const setCheckUsername = createAction(CHECK_USERNAME, (isCheckUsername) => ({ isCheckUsername }));
const setCheckNickname = createAction(CHECK_USERNAME, (isCheckNickname) => ({ isCheckNickname }));




//middleware actions
const checkUsernameDB = (username, isCheckUsername) => {
    return async function (dispatch, getState, { history }) {
        await apis.post("api/user/userNameCheck", {
            username: username
        }).then((res) => {
            if (res.data.response === false) {
                window.alert("이미 존재하는 닉네임 입니다.");
            } else {
                dispatch(setCheckUsername(true))
            }
        })
    }
}

const checkNicknameDB = (nickname, isCheckNickname) => {
    return async function (dispatch, getState, { history }) {
        await apis.post("api/user/userNameCheck", {
            nickname: nickname
        }).then((res) => {
            if (res.data.response === false) {
                window.alert("이미 존재하는 닉네임 입니다.");
            } else {
                dispatch(setCheckNickname(true))
            }
        })
    }
}

const signupDB = (username, nickname, password, ProfileImage) => {
    return async function (dispatch, getState, { history }) {
        const userInfo = {
            username: username,
            nickname: nickname,
            password: password,
            ProfileImage: ProfileImage ? ProfileImage : null,
        };

        await apis
            .post("/api/user/signup", userInfo)
            .then(function (response) {
                console.log(response)
                history.push("/login");
            })
            .catch((err) => {
                console.log("회원가입 실패", err)
                window.alert("회원가입에 실패했어요");
            });
    };
};


// reducer
export default handleActions(
    {
        [LOGIN]: (state, action) => produce(state, (draft) => {
            draft.name = action.payload.user
            console.log("action.payload.user", action.payload.user)
        }),
        [CHECK_USERNAME]: (state, action) => produce(state, (draft) => {
            console.log("CHECK_USERNAME 리듀서로 적용 완료", state, action.payload);
            draft.isCheckUsername = action.payload.isCheckUsername;

        }),
        [CHECK_NICKNAME]: (state, action) => produce(state, (draft) => {
            console.log("CHECK_NICKNAME 리듀서로 적용 완료", state, action.payload);
            draft.isCheckNickname = action.payload.isCheckNickname;
        }),
    },
    initialState
);




const actionCreators = {
    setCheckUsername,
    setCheckNickname,
    signupDB,
    checkUsernameDB,
    checkNicknameDB,
};

export { actionCreators }