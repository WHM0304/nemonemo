import { playDataCheck } from "@/app/api/nemo_play";
import { compareNemoData } from "@/app/api/nemo";

import { redirect } from "next/navigation";
import "@/css/game.css";

const first = () => {
  // 지우개 버튼 : 수동..   / 온클릭
  // const blockCounter = 5;
  // const deleteData = async (blockCounter) => {
  //   console.log("리셋 만들기");
  // };

  // 정답확인용
  const checkCorrect = async (formData) => {
    "use server";
    let result = "";

    result = await compareNemoData(formData); // 정답확인결과 잘와짐
    console.log(result);

    // 여기게임레벨 : 수동..
    const level = 1;

    if (result === "정답입니다") {
      redirect(`/clear/${level}`); // 클리어주소로 적기
    } else if (result === "틀렸습니다") {
      // 틀렸으면 메시지를 보여줘야 하는데...
    }

    // alert(result);
    // return result;

    // document.getElementById("CLEAR_IS").innerText = result;
  };

  //-- 게임정보생성
  const gameaction = async (formData) => {
    "use server";
    const game1Data = {
      p_id: "11",
      p_num: parseInt(formData.get("p_num"), 10), // 문자열을 정수로 변환
      p_row_num: parseInt(formData.get("p_row_num"), 10), // 문자열을 정수로 변환
      p_block1: formData.get("p_block1") === "on" ? 1 : 0,
      p_block2: formData.get("p_block2") === "on" ? 1 : 0,
      p_block3: formData.get("p_block3") === "on" ? 1 : 0,
      p_block4: formData.get("p_block4") === "on" ? 1 : 0,
      p_block5: formData.get("p_block5") === "on" ? 1 : 0,
      ...(formData.get("p_block6") !== null && {
        p_block6: formData.get("p_block6") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block7") !== null && {
        p_block7: formData.get("p_block7") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block8") !== null && {
        p_block8: formData.get("p_block8") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block9") !== null && {
        p_block9: formData.get("p_block9") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block10") !== null && {
        p_block10: formData.get("p_block10") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block11") !== null && {
        p_block11: formData.get("p_block11") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block12") !== null && {
        p_block12: formData.get("p_block12") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block13") !== null && {
        p_block13: formData.get("p_block13") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block14") !== null && {
        p_block14: formData.get("p_block14") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block15") !== null && {
        p_block15: formData.get("p_block15") === "on" ? 1 : 0,
      }),
    };

    // await createPlayData(game1Data);
    await playDataCheck(game1Data);
    // redirect("/game/first"); // 한줄저장하고 다시 겜화면..
    // 안해도 화면안바뀌네
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
            <form method="POST" action={gameaction}>
              <div className="p_row_num1 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="hidden" readOnly />
                <input name="p_row_num" value="1" hidden="hidden" readOnly />
                <button>저장</button>
              </div>
            </form>
            <form method="POST" action={gameaction}>
              <div className="p_row_num2 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="hidden" readOnly />
                <input name="p_row_num" value="2" hidden="hidden" readOnly />
                <button>저장</button>
              </div>
            </form>
            <form method="POST" action={gameaction}>
              <div className="p_row_num3 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="hidden" readOnly />
                <input name="p_row_num" value="3" hidden="hidden" readOnly />
                <button>저장</button>
              </div>
            </form>
            <form method="POST" action={gameaction}>
              <div className="p_row_num4 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="hidden" readOnly />
                <input name="p_row_num" value="4" hidden="hidden" readOnly />
                <button>저장</button>
              </div>
            </form>
            <form method="POST" action={gameaction}>
              <div className="p_row_num5 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="hidden" readOnly />
                <input name="p_row_num" value="5" hidden="hidden" readOnly />
                <button>저장</button>
              </div>
            </form>
          </div>
          <div className="main-delete">
            <button id="ALL_DELETE"></button>
          </div>
        </div>
        <div id="lives">목숨: </div>
        <div className="clear">
          <form method="POST" action={checkCorrect}>
            <input name="p_id" value="11" hidden="hidden" readOnly />
            <input name="p_num" value="1" hidden="hidden" readOnly />
            <button id="clear">정답확인</button>
          </form>
        </div>
        <div id="CLEAR_IS"></div>
      </section>
    </>
  );
};
export default first;

// 할거 : 정답확인버튼에 정답확인핸들러 만들어서 붙이기 - 판별은 됨
//- 틀렸을때 알려줄거 필요

// 플레이js에다가 지우개만들기 -해야함
