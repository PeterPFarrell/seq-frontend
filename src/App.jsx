import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {API_COMMENT_BOARDS, API_URI_V1} from "./constants.js";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [commentBoard, setCommentBoard] = useState(null)

  useEffect(() => {
    async function fetchCommentBoard(boardId)
    {
      const response = await fetch(API_URI_V1+API_COMMENT_BOARDS+`/${boardId}`, {
        method: "GET",
      }).then(response => response.json())

      setCommentBoard(response)
    }
    fetchCommentBoard("d4196a18-ee70-4520-803c-717af2d51a68")
  }, []);

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
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
