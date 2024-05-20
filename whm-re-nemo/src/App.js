import "./css/App.css";
import HomeMain from "./main/HomeMain";
import GameMain from "./game/LEVEL1";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LEVEL1 from "./game/LEVEL1";
import LEVEL2 from "./game/LEVEL2";
import LEVEL3 from "./game/LEVEL3";
import LEVEL4 from "./game/LEVEL4";
import LEVEL5 from "./game/LEVEL5";

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
        <a href></a>
      </header>
      <section className="App-section">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomeMain />} />
            <Route path="/game/LEVEL1" element={<LEVEL1 />} />
            <Route path="/game/LEVEL2" element={<LEVEL2 />} />
            <Route path="/game/LEVEL3" element={<LEVEL3 />} />
            <Route path="/game/LEVEL4" element={<LEVEL4 />} />
            <Route path="/game/LEVEL5" element={<LEVEL5 />} />
          </Routes>
        </BrowserRouter>
      </section>
      <div className="App-nav-box" onClick={onClickNav}></div>
      <nav className="App-nav hidden">
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/user/join">회원가입</a>
          </li>
          <li>
            <a href="/user/login">로그인</a>
          </li>
          <li>
            <a href="/user/logout">로그아웃</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
