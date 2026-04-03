import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//import './App.css'
import './global.css'
import { getBoard, updateVotes } from './api/commentsApi.js'
import Comment from "./components/Comment/Comment.jsx";

function App() {
  const [count, setCount] = useState(0)
  const [commentBoard, setCommentBoard] = useState(null)

  useEffect(() => {
    getBoard("d4196a18-ee70-4520-803c-717af2d51a68").then(setCommentBoard);
  }, []);

  function handleVote(id,type)
  {
    updateVotes("d4196a18-ee70-4520-803c-717af2d51a68",id,type)

    setCommentBoard(prevBoard => {
      const newBoard = {...prevBoard};
      newBoard.children = newBoard.children.map(comment => {
        if (comment.id === id) {
          const upvotes = comment.votes.upvotes + (type ? 1 : 0);
          const downvotes = comment.votes.downvotes + (!type ? 1 : 0);
          return {
            ...comment,
            votes: {...comment.votes, upvotes, downvotes}
          };
        }
        return comment;
      });
      return newBoard
    });
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
          <h1>Get farted {commentBoard ? commentBoard.name : "loading"}</h1>
          {
            commentBoard ?
            commentBoard.children.map((comment, index) => (
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

export default App
