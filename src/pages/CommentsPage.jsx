import heroImg from "../assets/hero.png";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import Comment from "../components/Comment/Comment.jsx";
import {useEffect, useState} from "react";
import {getBoardComments, updateVotes} from "../api/commentsApi.js";

export function CommentsPage() {
    const [commentBoard, setCommentBoard] = useState(null)

    useEffect(() => {
        getBoardComments("d4196a18-ee70-4520-803c-717af2d51a68").then(setCommentBoard);
    }, []);

    function handleVote(id,type)
    {
        updateVotes("d4196a18-ee70-4520-803c-717af2d51a68",id,type)

        const updatedComments = commentBoard.map(c => {
            if (c.id !== id) return c;

            return {
                ...c,
                votes: {
                    ...c.votes,
                    upvotes: c.votes.upvotes + (type ? 1 : 0),
                    downvotes: c.votes.downvotes + (!type ? 1 : 0)
                }
            };
        });

        setCommentBoard(updatedComments)
    }

    return (
        <>
            <section id="center">
                <div className="hero">
                    <img src={heroImg} className="base" width="170" height="179" alt="" />
                    <img src={reactLogo} className="framework" alt="React logo" />
                    <img src={viteLogo} className="vite" alt="Vite logo" />
                </div>
                <div>
                    <h1>Reddit 2</h1>
                    <p>the <b>brains</b> 🧠 of the internet</p>
                    {
                        commentBoard ?
                            commentBoard.map((comment, index) => (
                                <div>
                                    <Comment name={comment.name} body={comment.body} votes={comment.votes.upvotes - comment.votes.downvotes} onVote={(isUpvote) => handleVote(comment.id,isUpvote)}></Comment>
                                </div>
                            )) :
                            <p>loading...</p>
                    }
                </div>
            </section>
        </>
    )
}