import React from 'react';
import styled from 'styled-components';

import Post from './Post';

function PostList(props) {
    const post_list = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div>
            <div>
                <div>
                    <div>
                        <a href="#" alt="">
                            <span>svg</span>
                            트렌딩
                        </a>
                        <a href="#" alt="">
                            <span>svg</span>
                            최신
                        </a>
                        <div></div>
                        <div>
                            이번주
                            <span>svg</span>
                        </div>
                    </div>
                    <div>
                        <span>svg</span>
                    </div>
                </div>
            </div>

            <PostListStyled>
                {post_list.map((p, idx) => {
                    return (
                        <Post key={idx} />
                    )
                })}
            </PostListStyled>
        </div>
    );
}

const PostListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 2rem auto;
    justify-content: space-around;
    border: 2px solid blue;
    box-sizing: border-box;
    background-color: #121212;
`

export default PostList;