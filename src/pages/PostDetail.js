import React from 'react';
import Grid from '../elements/Grid';
import { history } from '../redux/configStore';
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from "../redux/modules/post"

const PostDetail = (props) => {

    const dispatch = useDispatch()

    React.useEffect(async () => {
        dispatch(postActions.loadPostM())
    }, [])


    const post_list = useSelector(state => state.post.list)
    console.log('post_list', post_list)

    const user_info = useSelector(state => state.user.user)
    console.log('user_info', user_info)

    const post_id = props.match.params.postingId
    console.log(post_id)

    const post_find = post_list.find(p => p.postingId == post_id)
    console.log('post_find', post_find)

    return (
        <Grid>
            <Grid width="760px" height="740px">
                <div style={{ width: "770", height: "370", marginTop: "5.5rem" }}>
                    <div style={{ width: "760", height: "70", marginBottom: "32px" }}>
                        <h1 style={{ lineHeight: "1.5", fontWeight: "800", fontSize: "3rem", color: "#ececec" }}>여기는 제목 입니다.</h1>
                    </div>
                    <div style={{ fontSize: "1rem", color: "#ececec" }}>
                        <span style={{ fontWeight: "400" }}><a>name</a></span>
                        <span> . </span>
                        <span> 현재시간 - 받은값 계산</span>
                    </div>
                    <div style={{ width: "100%", marginTop: "15px" }}>
                        {/* 태그는 맵돌리기 */}
                        <a style={{
                            backgroundColor: "#252525",
                            color: "#96f2d7",
                            borderRadius: "5rem",
                            padding: "5px",
                            fontWeight: "400",
                            marginRight: "0.8rem",
                        }}
                            variant="primary">
                            태그1
                        </a>
                    </div>
                </div>
            </Grid>
            <Grid>
                <button onClick={() => { history.push('/') }}>버어튼</button>
            </Grid>
        </Grid>
    );
};

export default PostDetail;