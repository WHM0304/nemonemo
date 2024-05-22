import logo from "./logo.svg";
import "./css/App.css";
import HomeMain from "./main/HomeMain";
import GameMain from "./game/GameMain";

function App() {
  const onClickNav = (e) => {
    const target = e.target;
    const nav = document.querySelector(".App-nav");
    target.classList.add("hidden");
    nav.classList.remove("hidden");

    // nav.hidden = "";
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>스케치북</h1>
      </header>
      <section className="App-section">
        <GameMain></GameMain>
      </section>
      <div className="App-nav-box" onClick={onClickNav}></div>
      <nav className="App-nav hidden">
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="${rootPath}/user/join">회원가입</a>
          </li>
          <li>
            <a href="${rootPath}/user/login">로그인</a>
          </li>
          <li>
            <a href="${rootPath}/user/logout">로그아웃</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
