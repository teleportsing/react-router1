import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"

import "./server"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">#vanlife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

// function Home() {
//   return (
//     <h1>hello, React Router!</h1>
//   )
// }
// function About() {
//   return (
//     <h1>About page goes here!</h1>
//   )
// }

ReactDOM.
  createRoot(document.getElementById('root'))
  .render(<App />);