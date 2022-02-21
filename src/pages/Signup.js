import React from 'react';
import styled from 'styled-components';
import velogImage from "../Asset/velog.svg"

import { useDispatch } from 'react-redux';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { actionCreators as userActions } from '../redux/modules/user';

function SignUp(props) {
    const dispatch = useDispatch();
    const fileInput = React.useRef();

    const [username, setUsername] = React.useState("");
    const [nickname, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [checkPassword, setCheckPassword] = React.useState("");
    const [isCheckUsername, setIsCheckUsername] = React.useState(false);
    const [isCheckNickname, setIsCheckNickname] = React.useState(false);

    const checkUsername = () => {
        if (username === "") {
            window.alert("이메일이 공란입니다!")
            return;
        }

        console.log(username, "의 중복확인 요청을 dispatch 했습니다.");
        dispatch(userActions.checkUsernameDB(username, false));
        setIsCheckUsername(true)
    }

    const checkNickname = () => {
        if (nickname === "") {
            window.alert("닉네임이 공란입니다.")
            return;
        }

        console.log(nickname, "의 중복확인 요청을 dispatch 했습니다.");
        dispatch(userActions.checkNicknameDB(nickname, false));
        setIsCheckNickname(true)
    }

    const onChangeImg = (e) => {
        e.preventDefault();

        if (e.target.files) {
            const uploadFile = e.target.files[0]
            console.log(uploadFile)
        }
    }

    const signup = (e) => {
        e.preventDefault()

        setIsCheckNickname(true)
        setIsCheckUsername(true)
        console.log(isCheckUsername, isCheckNickname)
        if (username === "" || nickname === "" || password === "") {
            window.alert("공란입니다!")
            return;
        } else if (password !== checkPassword) {
            window.alert("패스워드가 다릅니다.")
            return;
        } else if (isCheckUsername === false || isCheckNickname === false) {
            window.alert("중복확인을 해주세요.")
            return;
        }

        const file = fileInput.current.files[0];
        console.log(username, nickname, password, "의 회원가입 요청을 dispatch 했습니다.");
        dispatch(userActions.signupDB(username, nickname, password, file));
        setIsCheckUsername(false);
        setIsCheckNickname(false);
    };


    return (
        <>
            <SignupContainer>
                <SignupLeft>
                    <div className="SignupLeftContainer">
                        <img src={velogImage} alt="welcome" />
                        <div className="welcome">환영합니다!</div>
                    </div>
                </SignupLeft>
                <SignupRight>
                    <h2>회원가입</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>이메일로 회원가입 *</Form.Label>
                            <div className="formFlex">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    aria-describedby="emailHelpBlock"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />
                                <Button className="col-md-auto shadow-none" variant="success" onClick={checkUsername}>
                                    중복확인
                                </Button>
                            </div>
                            <Form.Text id="emailHelpBlock" muted>
                                정확한 이메일 주소를 입력해주세요.
                            </Form.Text>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNickname">
                            <Form.Label>닉네임 *</Form.Label>
                            <div className="formFlex">

                                <Form.Control
                                    type="text"
                                    placeholder="Enter Nickname"
                                    aria-describedby="nameHelpBlock"
                                    onChange={(e) => {
                                        setNickname(e.target.value);
                                    }}
                                />
                                <Button className="col-md-auto shadow-none" variant="success" onClick={checkNickname}>
                                    중복확인
                                </Button>
                            </div>
                            <Form.Text id="nameHelpBlock" muted>
                                닉네임은 영문 3~15자 입니다.
                            </Form.Text>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>비밀번호 *</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckPassword">
                            <Form.Label>비밀번호 확인 *</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password Check"
                                onChange={(e) => {
                                    setCheckPassword(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>프로필 사진</Form.Label>
                            <Form.Control type="file" onChange={onChangeImg} ref={fileInput} />
                        </Form.Group>

                        <Button variant="success" type="submit" onClick={signup}>
                            회원가입
                        </Button>
                    </Form>
                </SignupRight>
            </SignupContainer>
        </>
    );
}

const SignupContainer = styled.div`
    border: 2px solid red;
    margin: 50px auto;
    width: 60%;
    text-align: left;
    padding: 24px;
    display: flex;
    justify-content: center;
    color: #fff;
    box-sizing: border-box;
`

const SignupLeft = styled.div`
    padding: 1.5rem;
    width: 30%;
    background-color: #1E1E1E;

    .SignupLeftContainer{
        padding: 10rem 0;

        img {
            max-width: 100%;
            height: auto;
        }
    
        .welcome {
            font-size: 1.75rem;
            margin-top: 1.5rem;
            text-align: center;
            font-weight: 600;
            color: #D9D9D9;
        }
    }
`

const SignupRight = styled.div`
    padding: 24px;
    width: 70%;
    background-color: #121212;

    h2 {
        font-weight: 600;
    }

    .formFlex {
        display: flex;
    }
`

export default SignUp;