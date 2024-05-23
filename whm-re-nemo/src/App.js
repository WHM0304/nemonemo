import "./css/App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Outlet, Route, Routes } from "react-router-dom";

function App() {
  // console.log(nemo);

  const onClickNav = (e) => {
    const target = e.target;
    const nav = document.querySelector(".App-nav");
    target.classList.add("hidden");
    nav.classList.remove("hidden");

    // nav.hidden = "";
  };
  // console.log(nemo);

  return (
    <div className="App">
      <header className="App-header">
        <h1>스케치북</h1>
      </header>
      <section className="App-section">
        <Outlet />
      </section>
      <div className="App-nav-box" onClick={onClickNav}></div>
      <nav className="App-nav hidden">
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/">회원가입</a>
          </li>
          <li>
            <a href="/">로그인</a>
          </li>
          <li>
            <a href="/">로그아웃</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
