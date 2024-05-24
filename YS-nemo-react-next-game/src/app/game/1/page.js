"use client"; // 클라이언트 컴포넌트로 지정

import { playDataCheck } from "@/app/api/nemo_play";
import { compareNemoData } from "@/app/api/nemo";
import "@/css/game.css";

const first = () => {
  const checkCorrect = async (formData) => {
    const result = await compareNemoData(formData);
    console.log(result);

    const level = 1;

    if (result === "정답입니다") {
      window.location.href = `/clear/${level}`;
    } else if (result === "틀렸습니다") {
      alert("틀렸습니다.");
    }
  };

  const gameaction = async (formData) => {
    const rows = [1, 2, 3, 4, 5];
    for (let row of rows) {
      const game1Data = {
        p_id: "11",
        p_num: 1,
        p_row_num: row,
        p_block1: formData.get(`p_block${row}_1`) === "on" ? 1 : 0,
        p_block2: formData.get(`p_block${row}_2`) === "on" ? 1 : 0,
        p_block3: formData.get(`p_block${row}_3`) === "on" ? 1 : 0,
        p_block4: formData.get(`p_block${row}_4`) === "on" ? 1 : 0,
        p_block5: formData.get(`p_block${row}_5`) === "on" ? 1 : 0,
      };

      await playDataCheck(game1Data);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    await gameaction(formData);
  };

  return (
    <>
      <section className="game-container">
        <div className="main-hint-container">
          <div className="blank"></div>
          <div className="main-column-hint">
            <div id="column1-hint"></div>
            <div id="column2-hint"></div>
            <div id="column3-hint"></div>
            <div id="column4-hint"></div>
            <div id="column5-hint"></div>
          </div>
        </div>
        <div className="main-form-container">
          <div className="main-row-hint">
            <div id="row1-hint"></div>
            <div id="row2-hint"></div>
            <div id="row3-hint"></div>
            <div id="row4-hint"></div>
            <div id="row5-hint"></div>
          </div>
          <div className="main-input-box">
            <form method="POST" onSubmit={handleSubmit}>
              {[1, 2, 3, 4, 5].map((row) => (
                <div key={row} className={`p_row_num${row} row`}>
                  <input type="checkbox" name={`p_block${row}_1`} />
                  <input type="checkbox" name={`p_block${row}_2`} />
                  <input type="checkbox" name={`p_block${row}_3`} />
                  <input type="checkbox" name={`p_block${row}_4`} />
                  <input type="checkbox" name={`p_block${row}_5`} />
                  <input type="hidden" name="p_num" value={1} />
                  <input type="hidden" name="p_row_num" value={row} />
                </div>
              ))}
              <button type="submit">저장</button>
            </form>
          </div>
          <div className="main-delete">
            <button id="ALL_DELETE">전체 삭제</button>
          </div>
        </div>
        <div id="lives">목숨: </div>
        <div className="clear">
          <form method="POST" action={checkCorrect}>
            <input name="p_id" value="11" hidden />
            <input name="p_num" value="1" hidden />
            <button type="submit" id="clear">
              정답확인
            </button>
          </form>
        </div>
        <div id="CLEAR_IS"></div>
      </section>
    </>
  );
};

export default first;
