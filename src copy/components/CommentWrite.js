import React from 'react';
import styled from 'styled-components';
import TextAreaAutoResize from "react-textarea-autosize";


import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';



function CommentWrite(props) {
    const { postId } = props;
    const dispatch = useDispatch();
    const [commentContent, setCommentContent] = React.useState("");
    const textareaRef = React.createRef(null);
    const user_info = useSelector(state => state.user.userInfo)
    const nickname = user_info.nickname;
    const is_token = sessionStorage.getItem("token") ? true : false;
    // const is_me=(nickname === post?.loginId)?true:false;

    const changeComments = (e) => {
        setCommentContent(e.target.value);
    }

    const commentWrite = () => {
        if (is_token === false) {
            window.alert("로그인 후 작성해주세요.")
            return;
        }
        if (commentContent === "") {
            window.alert("댓글을 입력해주세요.");
            return;
        }

        dispatch(commentActions.addCommentDB(nickname, commentContent, postId, user_info.imgUrl))
        textareaRef.current.value = "";
    }

    return (
        <>
            <div>
                <TextAreaAutoResize
                    minRows={3}
                    placeholder="댓글을 입력해주세요."
                    style={{
                        resize: "none",
                        padding: "1rem 1rem 1.5rem",
                        outline: "none",
                        border: "1px solid #2A2A2A",
                        marginBottom: "1.5rem",
                        width: "100%",
                        borderRadius: "4px",
                        fontSize: "1rem",
                        color: "#ECECEC",
                        lineHeight: "1.75",
                        background: "#1E1E1E",
                    }}
                    onChange={changeComments}
                    ref={textareaRef}
                />
                <div className="buttons-wrapper" style={{ display: "flex", justifyContent: "flex-end" }}>
                    <CommentWriteBtn onClick={commentWrite}>
                        댓글 작성
                    </CommentWriteBtn>
                </div>
            </div>
        </>
    );
}

const CommentWriteBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background: #96F2D7;
    color: #121212;
    border-radius: 4px;
    padding: 0px 1.25rem;
    height: 2rem;
    font-size: 1rem;
`

export default CommentWrite;