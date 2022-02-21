import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Post from './Post';

function PostList(props) {
    const post_list = useSelector(state => state.post.list)

    // const post_list = [
    //     {
    //         postingId: 1,
    //         title: "안녕하세요",
    //         content: "개발자가 되려고 결심한 이유는",
    //         dayBefore: "24일 전",
    //         commentCnt: 3,
    //         nickname: "yepp",
    //         like: 4,
    //         imageFile: "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2",
    //         userImage: "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2",
    //     },
    //     {
    //         postingId: 2,
    //         title: "안녕하세요",
    //         content: "개발자가 되려고 결심한 이유는 없습니다",
    //         dayBefore: "한달 전",
    //         commentCnt: 10,
    //         nickname: "lala",
    //         like: 8,
    //         imageFile: "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2",
    //         userImage: "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2",
    //     },
    //     {
    //         postingId: 3,
    //         title: "안녕하세요",
    //         content: "개발자가 되려고 결심한 이유는 어쩌구 저쩌구 글씨 길이 테스트중입니다. 몇 자 까지 가능한 걸까요. 라라라라라라라라",
    //         dayBefore: "10일 전",
    //         commentCnt: 1,
    //         nickname: "ruru",
    //         like: 4,
    //         imageFile: "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2",
    //         userImage: "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2",
    //     },
    //     {
    //         postingId: 4,
    //         title: "안녕하세요",
    //         content: "벨로그 클론코딩하면서 벨로그 글 보는 맛이 있습니다.",
    //         dayBefore: "24일 전",
    //         commentCnt: 2,
    //         nickname: "roro",
    //         like: 0,
    //         imageFile: "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2",
    //         userImage: "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2",
    //     },
    // ]

    return (
        <>
            <PostListStyled>
                {post_list.map((p, idx) => {
                    return (
                        <Post key={idx} {...p} />
                    )
                })}
            </PostListStyled>
        </>
    );
}

const PostListStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    // width: 90%;
    margin: 2rem auto;
    justify-content: space-around;
    // border: 2px solid blue;
    box-sizing: border-box;
    background-color: #121212;
`

export default PostList;