import React from "react";
import './Coment.css';
import '../../global.css'
import VoteDisplay from "../VoteDisplay/VoteDisplay.jsx";

const Comment = ({name,body,votes}) => {
    return (
        <div className='comment-container'>
            <div className='box'>
                <p><b>{name}</b></p>
                <p>{body}</p>
                <VoteDisplay votes={votes}></VoteDisplay>
            </div>
        </div>
    );
}

export default Comment;