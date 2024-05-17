import "./css/App.css";
import HomeMain from "./main/HomeMain";
import GameMain from "./game/GameMain";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [nemo, SetNemo] = useState([]);

  useEffect(() => {
    fetch("/nemo/bridge")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetNemo(data);
      })
      .catch((error) => console.log("error : ", error));
  }, [SetNemo]);
  const onClickNav = (e) => {
    const target = e.target;
    const nav = document.querySelector(".App-nav");
    target.classList.add("hidden");
    nav.classList.remove("hidden");

    // nav.hidden = "";
  };
  // console.log(nemo);

  console.log(nemo);

  // console.log(
  //   nemo.map((e) => ({
  //     1: e.n_block1,
  //     2: e.n_block2,
  //     3: e.n_block3,
  //     4: e.n_block4,
  //     5: e.n_block5,
  //   }))
  // );
  return (
    <div className="App">
      <header className="App-header">
        <h1>스케치북</h1>
        <a href></a>
      </header>
      <section className="App-section">
        {/* {nemo.map((e) => (
          <div>{e}</div>
        ))} */}

        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomeMain />} />
            <Route path="/game" element={<GameMain />} />
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
