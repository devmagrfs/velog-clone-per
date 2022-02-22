import React from 'react';
import Comment from './Comment';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';


function CommentList(props) {
    const dispatch = useDispatch();
    const { postId, comment_list } = props;

    return (
        <>
            {comment_list &&
                comment_list.map((comment, idx) => {
                    return (
                        <div key={idx}>
                            <Comment  {...comment} />
                        </div>
                    )
                })
            }
        </>
    );
}

CommentList.defaultProps = {
    postId: null
};

export default CommentList;