import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from '../../common/api';
import { setToken } from "../../shared/token";
import { setCookie, deleteCookie } from "../../shared/Cookie";
import axios from 'axios';

// initialState
const initialState = {
    user: null,
    is_login: false,
    isCheckUsername: false,
    isCheckNickname: false,
    userInfo: {
        username: "",
        nickname: "",
    },
    isLogin: false,
};


// actions
const CHECK_USERNAME = "CHECK_USERNAME";
const CHECK_NICKNAME = "CHECK_NICKNAME";
const LOGIN = "LOGIN"
const LOG_OUT = "LOG_OUT"
const USER_INFO = "USER_INFO"


// action creators
const setLogin = createAction(LOGIN, user => ({ user }));
const logOut = createAction(LOG_OUT, () => ({}));
const setCheckUsername = createAction(CHECK_USERNAME, (isCheckUsername) => ({ isCheckUsername }));
const setCheckNickname = createAction(CHECK_NICKNAME, (isCheckNickname) => ({ isCheckNickname }));



//middleware actions
const checkUsernameDB = (username, isCheckUsername) => {
    return async function (dispatch, getState, { history }) {
        console.log(username, isCheckUsername)
        await apis.post("/user/usernameCheck", { "username": username }
        ).then((res) => {
            if (res.data === false) {
                window.alert("이미 존재하는 이메일 입니다.");
                return;
            }
            dispatch(setCheckUsername(!isCheckUsername))
        })
    }
}

const checkNicknameDB = (nickname, isCheckNickname) => {
    return async function (dispatch, getState, { history }) {
        await apis.post("/user/nicknameCheck", { "nickname": nickname }
        ).then((res) => {
            if (res.data === false) {
                window.alert("이미 존재하는 닉네임 입니다.");
                return;
            }
            dispatch(setCheckNickname(!isCheckNickname))
        })
    }
}

const signupDB = (username, nickname, password, ProfileImage) => {
    return async function (dispatch, getState, { history }) {
        console.log(username, nickname, password)
        // const form = new FormData();
        // form.append('username', username);
        // form.append('nickname', nickname);
        // form.append('password', password);
        // form.append('ProfileImage', ProfileImage ? ProfileImage : null)
        // ProfileImage: ProfileImage ? ProfileImage : null,

        await apis
            .post("/user/signup", {
                "username": username,
                "nickname": nickname,
                "password": password,
            })
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

const loginCheckM = () => {
    const token = sessionStorage.getItem("token");
    return function (dispatch, getState, { history }) {
        axios.post("http://yuseon.shop/islogin", {}, {
            headers: {
                "Authorization": `${token}`,
            },
        })
            .then((res) => {
                dispatch(setLogin(
                    {
                        username: res.data.username,
                        nickname: res.data.nickname
                    })
                );
            })
            .catch((err) => {
                console.log("로그인 확인 실패", err)
            })
    }
}

const loginM = (username, password) => {
    return function (dispatch, getState, { history }) {
        axios
            /* .post('http://yuseon.shop/user/login',{ */
            .post('http://yuseon.shop/user/login', {
                username: username,
                password: password,
            })
            .then((res) => {
                const token_res = res.headers.authorization;
                setToken(token_res);

                return token_res
            })
            .then((token_res) => {
                axios({
                    method: "post",
                    url: "http://yuseon.shop/islogin",
                    headers: {
                        /* "content-type": "applicaton/json;charset=UTF-8", 
                        "accept": "application/json",  */
                        "Authorization": `${token_res}`,
                    },
                })
                    .then((res) => {
                        dispatch(setLogin(
                            {
                                username: res.data.username,
                                nickname: res.data.nickname
                            })
                        );
                    })
                    .catch((err) => {
                        console.log("로그인 확인 실패", err)
                    })
                history.replace('/')
            })
            .catch((err) => {
                window.alert("이메일이나 패스워드를 다시 확인해주세요!")
            })
    };
};

export const logoutM = () =>
    async (dispatch, getState, { history }) => {
        axios.get("http://yuseon.shop/user/logout")
            .then(res => {
                // deleteCookie = (name)
                deleteCookie("token")
                localStorage.removeItem("username")
                localStorage.removeItem("token")
                dispatch(logOut())
                history.replace("/")
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }


// reducer
export default handleActions(
    {
        [CHECK_USERNAME]: (state, action) => produce(state, (draft) => {
            console.log("CHECK_USERNAME 리듀서로 적용 완료", state, action.payload);
            draft.isCheckUsername = action.payload.isCheckUsername;
            window.alert("해당 이메일은 사용 가능합니다.")
        }),
        [CHECK_NICKNAME]: (state, action) => produce(state, (draft) => {
            console.log("CHECK_NICKNAME 리듀서로 적용 완료", state, action.payload);
            draft.isCheckNickname = action.payload.isCheckNickname;
            window.alert("해당 닉네임은 사용 가능합니다.")
        }),
        [LOGIN]: (state, action) => {
            // console.log("setUser 리듀서로 도착했습니다", state, action.payload);
            state.user = action.payload.user
            state.is_login = true
            console.log("setUser 리듀서로 적용 완료", state, action.payload, state.user)
        },
        [LOG_OUT]: (state, action) => {
            console.log("logOut 리듀서로 도착했습니다", state, action.payload)
            state.user = null
            state.is_login = false
            return state
        },

        [USER_INFO]: (state, action) => {
            console.log("setUserInfo 리듀서로 도착했습니다", state, action.payload)
            state.user = action.payload.userinfo
            return state
        },
    },
    initialState
);



const actionCreators = {
    loginM,
    logoutM,
    loginCheckM,
    setCheckUsername,
    setCheckNickname,
    signupDB,
    checkUsernameDB,
    checkNicknameDB,
}


export { actionCreators };