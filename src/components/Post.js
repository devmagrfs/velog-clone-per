import React from 'react';
import styled from 'styled-components';

function Post(props) {

    return (
        <PostContainer>
            <PostStyled>
                <a href="#" alt="">
                    <PostImageStyled>
                        <img
                            src="https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2"
                            alt="" />
                    </PostImageStyled>
                </a>
                <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
                    <a href="#" alt="" style={{ textDecoration: "none" }}>
                        <h4 style={{ color: "#ECECEC" }}>안녕하세요, 프론트엔드 신입에 지원합니다.</h4>
                        <div>
                            <p style={{ color: "#D9D9D9" }}>개발자가 되려고 결심한 이유는 모릅니다</p>
                        </div>
                    </a>

                    <div style={{ fontSize: "0.75rem", lineHeight: 1.5, color: "#ACACAC" }}>
                        <span>날짜</span>
                        <span className="separator">·</span>
                        <span>댓글 갯수</span>
                    </div>
                </div>
                <PostUserBoxStyled style={{ textDecoration: "none" }}>
                    <a href="#">
                        <img src="" alt="" />
                        <span style={{ color: "#ACACAC" }}>by  <b style={{ color: "#ECECEC" }}>이름</b></span>
                    </a>
                    <div className="likes" style={{ alignItems: "center", color: "#ECECEC" }}>
                        <span>하트, </span>
                        라이크 갯수
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

const PostUserBoxStyled = styled.div`
    padding: 0.625rem 1rem;
    border-top: 1px solid #2A2A2A;
    display: flex;
    font-size: 0.75rem;
    line-height: 1.5;
    justify-content: space-between;
`

export default Post;