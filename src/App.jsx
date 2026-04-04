import './global.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import {CommentsPage} from "./pages/CommentsPage.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<CommentsPage />} />
        </Routes>
      </Router>
  )
}

export default App
