import React from 'react';
import styled from 'styled-components';
import Grid from '../elements/Geid';
import { history } from '../redux/configureStore'
import { Container, Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from "../redux/modules/post"
import { actionCreators as commentActions } from '../redux/modules/comment';
import ReactMarkdown from 'react-markdown';
import CommentList from '../components/CommentList';
import CommentWrite from '../components/CommentWrite';

const PostDetail = (props) => {

    const dispatch = useDispatch()

    // console.log(props)

    const post_list = useSelector(state => state.post.list2)
    console.log('post_list', post_list)

    const user_info = useSelector(state => state.user.userInfo)
    const comment_list = useSelector(state => state.comment.list)

    const post_id = props.match.params.id
    // console.log(post_id)

    React.useEffect(() => {
        console.log("ehlsk")
        dispatch(postActions.detailPostDB(post_id))
        dispatch(commentActions.getComment(comment_list))
    }, []);


    return (
        <>
            <Grid>
                <Grid width="760px" height="100%">
                    <div style={{ width: "770", height: "370", marginTop: "3rem" }}>
                        <div style={{ width: "760", height: "70", marginBottom: "32px" }}>
                            <h1 style={{ lineHeight: "1.5", fontWeight: "800", fontSize: "3rem", color: "#ececec" }}>{post_list.title}</h1>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ fontSize: "1rem", color: "#ececec" }}>
                                <span style={{ fontWeight: "400" }}><a>{post_list.nickname}</a></span>
                                <span> . </span>
                                <span>{post_list.dayBefore},{post_list.comentCnt}</span>
                            </div>
                            <div
                                style={{
                                    width: "73px",
                                    height: "24px",
                                    display: "flex",
                                    alignItems: "center",
                                    WebkitBoxAlign: "center",
                                    boxSizing: "inherit",
                                    fontSize: "1rem",
                                    color: "#d9d9d9",
                                    backgroundColor: "#1e1e1e",
                                }}>
                                <button style={{
                                    background: "#1e1e1e",
                                    border: "1px solid #a0a0a0",
                                    paddingLeft: "0.75rem",
                                    paddingRight: "0.75rem",
                                    display: "flex",
                                    WebkitBoxAlign: "center",
                                    alignItems: "center",
                                    height: "1.5rem",
                                    borderRadius: "0.75rem",
                                    outline: "none",
                                    color: "#a0a0a0"
                                }}>
                                    <svg width="0.75rem" height="0.75rem" viewBox="0 0 24 24" style={{ marginRight: "0.75rem", fontFamily: "inherit" }}>
                                        <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
                                    </svg>
                                    <span>{post_list.like}</span>
                                </button>
                            </div>
                        </div>
                        <div style={{ width: "100%", marginTop: "15px" }}>
                            {/* {post_list.tags.map((t, idx) => {
                                console.log(t)
                                return (
                                    <a
                                        key={idx}
                                        style={{
                                            backgroundColor: "#252525",
                                            color: "#96f2d7",
                                            borderRadius: "5rem",
                                            padding: "5px",
                                            fontWeight: "400",
                                            marginRight: "0.8rem",
                                        }}
                                        variant="primary">
                                        {t}
                                    </a>
                                )
                            })} */}
                        </div>
                        <div>
                            <img src={post_list.thumnail} />
                        </div>
                    </div>

                    <div style={{
                        color: "#ECECEC", fontSize: "1.125rem", lineHeight: "1.7", letterSpacing: "-0.004em", overflowWrap: "break-word",
                        workBreack: "keep-all"
                    }}>
                        <ReactMarkdown>
                            {post_list.content}
                        </ReactMarkdown>
                    </div>
                    <div style={{ display: "flex", WebkitBoxAlign: "center", alignItems: "center" }}>
                        <div style={{ color: "WenkitLink", cursor: "pointer", textDecoration: "underline" }}>
                            <img src={post_list.profileImage}
                                style={{
                                    display: "block", width: "8rem", height: "8rem", borderRadius: "505", objectFit: "cover", boxShadow: "rgb(0 0 0 / 6%) 0px 0px 4px 0px"
                                }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", WebkitBoxPack: "center", justifyContent: "center", marginLeft: "1rem" }}>

                        </div>
                    </div>
                </Grid>
            </Grid>
            <CommentContainer>
                <h4 style={{
                    fontSize: "1.125rem",
                    lineHeight: "1.5",
                    fontWeight: "600",
                    marginBottom: "1rem"
                }}>
                    {post_list.commentCnt}개의 댓글
                </h4>
                <div style={{ color: "#ECECEC" }}>
                    <CommentWrite postId={post_id} />
                    <CommentList postId={post_id} comment_list={comment_list} />
                </div>
            </CommentContainer>
            <div style={{
                zIndex: "30",
                position: "relative",
                paddingTop: "4rem",
                paddingBottom: "4rem",
                marginTop: "4rem",
                background: "#121212",
                boxShadow: "rgb(0 0 0 / 8%) 0px 0px 32px",
            }}></div>
        </>
    );
};

const CommentContainer = styled.div`
    margin-top: 3rem;
    width: 768px;
    color: #ECECEC;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export default PostDetail;