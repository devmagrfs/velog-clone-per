import React from 'react';
import styled from 'styled-components';

import heart from '../Asset/heart.svg'

function Post(props) {
    const {
        postingId,
        title,
        content,
        dayBefore,
        commentCnt,
        nickname,
        like,
        imageFile,
        userImage,
    } = props;

    return (
        <PostContainer>
            <PostStyled>
                <a href="#" alt="">
                    <PostImageStyled>
                        <img
                            src={imageFile}
                            alt="썸네일" />
                    </PostImageStyled>
                </a>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "1rem"
                    }}>
                    <a href="#" alt="" style={{ textDecoration: "none" }}>
                        <h4 style={{ color: "#ECECEC" }}>{title}</h4>
                        <div>
                            <PostContentStyled style={{ color: "#D9D9D9" }}>{content}</PostContentStyled>
                        </div>
                    </a>

                    <div
                        style={{
                            fontSize: "0.75rem",
                            lineHeight: 1.5,
                            color: "#ACACAC"
                        }}>
                        <span>{dayBefore}</span>
                        <span className="separator">·</span>
                        <span>{commentCnt}개의 댓글</span>
                    </div>
                </div>
                <PostUserBoxStyled style={{ textDecoration: "none" }}>
                    <a href="#">
                        <img
                            src={userImage}
                            alt=""
                            style={{
                                objectFit: "cover",
                                borderRadius: "50%",
                                width: "1.5rem",
                                height: "1.5rem",
                                marginRight: "0.5rem"
                            }}
                        />
                        <span style={{ color: "#ACACAC" }}>by  <b style={{ color: "#ECECEC" }}>{nickname}</b></span>
                    </a>
                    <div className="likes" style={{ alignItems: "center", color: "#ECECEC" }}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ width: "0.75rem", height: "0.75rem", marginRight: "0.5rem" }}>
                            <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
                        </svg>
                        {like}
                    </div>
                </PostUserBoxStyled>
            </PostStyled>
        </PostContainer>
    );
}

const PostContainer = styled.div`
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

    &:hover {
        transform: translateY(-8px);
        box-shadow: rgb(0 0 0 / 8%) 0px 12px 20px 0px;
    }
`

const PostStyled = styled.div`
    width: 20rem;
    // border: 1px solid red;
    border-radius: 4px;
    margin: 1rem;
    background-color: #1E1E1E;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    flex-direction: column
`

const PostImageStyled = styled.div`
    width: 100%;
    position: relative;
    padding-top: 75%;

    img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`

const PostContentStyled = styled.p`
    margin: 0px 0px 1.5rem;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    height: 3.9375rem;
    overflow: hidden;
    text-overflow: ellipsis;
`

const PostUserBoxStyled = styled.div`
    padding: 0.625rem 1rem;
    border-top: 1px solid #2A2A2A;
    display: flex;
    font-size: 0.75rem;
    line-height: 1.5;
    justify-content: space-between;
`

export default Post;