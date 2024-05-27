"use client";
import { Nemo_SelectAll } from "@/app/api/nemo";
import { useCallback, useEffect, useState } from "react";
import "@/css/game_a.css";
import { DELETE_PlAY, GameAction, nemo_play_select } from "@/app/api/game";
import { useRouter } from "next/navigation";

const GamePage = ({ params }) => {
  const n_num = Number(params.level);
  const router = useRouter();
  const [nemo, setNemo] = useState([]);
  const [play, setPlay] = useState([]);
  const [checkboxState, setCheckboxState] = useState("");

  console.log(nemo.length);

  const actionHandler = async (formData) => {
    // const target =fo;
    // console.log(formData);
    GameAction(formData);
  };
  const DELETE_EVENT = async () => {
    let p_num = parseInt(params.level);
    if (confirm("삭제하시겠습니까?")) {
      await DELETE_PlAY({ p_id: "11", p_num });
    }
    // router.push(`/game/${p_num}`);
    location.reload();
  };

  const OnclickCorrect = () => {
    if (JSON.stringify(play) === JSON.stringify(nemo)) {
      alert("정답");
      navigate("/");
    } else {
      alert("정답이아닙니다 다시 풀어주세요");
    }
  };

  const ChangeHandler = (e, index, blockName) => {
    const newValue = e.target.checked ? 1 : 0;
    const updatedCheckboxState = [...checkboxState];
    updatedCheckboxState[index][blockName] = newValue;

    setCheckboxState(updatedCheckboxState);
    console.log(`Index: ${index}, ${blockName}: ${newValue}`);
    console.log(checkboxState);
  };
  // console.log(nemo);
  // console.log(checkboxState);
  // console.log("체크", checkboxState);

  useEffect(() => {
    const getNemoList = async () => {
      const result = await Nemo_SelectAll({ n_num });

      const data = result.map((item) => {
        return {
          n_num: item.n_num,
          n_row_num: item.n_row_num,
          n_block1: item.n_block1,
          n_block2: item.n_block2,
          n_block3: item.n_block3,
          n_block4: item.n_block4,
          n_block5: item.n_block5,
          n_block6: item.n_block6,
          n_block7: item.n_block7,
          n_block8: item.n_block9,
          n_block9: item.n_block9,
          n_block10: item.n_block10,
          n_block11: item.n_block11,
          n_block12: item.n_block12,
          n_block13: item.n_block13,
          n_block14: item.n_block14,
          n_block15: item.n_block15,
        };
      });
      setNemo([...data]);
    };
    getNemoList();
  }, []);
  useEffect(() => {
    const getPlayList = async () => {
      const p_id = "11";
      const result = await nemo_play_select({ p_id, n_num });

      const data = result.map((item) => {
        return {
          p_block1: item.p_block1,
          p_block2: item.p_block2,
          p_block3: item.p_block3,
          p_block4: item.p_block4,
          p_block5: item.p_block5,
          p_block6: item.p_block6,
          p_block7: item.p_block7,
          p_block8: item.p_block8,
          p_block9: item.p_block9,
          p_block10: item.p_block10,
          p_block11: item.p_block11,
          p_block12: item.p_block12,
          p_block13: item.p_block13,
          p_block14: item.p_block14,
          p_block15: item.p_block15,
        };
      });
      setCheckboxState(data);
      setPlay(data);
    };
    getPlayList();
  }, []);
  console.log(play);

  // 시작할때 play 없으면 인서트하기
  if (play.length < 1) {
    let p_id = "11";
    let p_num = Number(params.level);
    DELETE_PlAY({ p_id, p_num });
  }
  console.log(play.length);
  // console.log(play);
  const n_blocks = nemo.map((item) => {
    return {
      n_block1: item.n_block1,
      n_block2: item.n_block2,
      n_block3: item.n_block3,
      n_block4: item.n_block4,
      n_block5: item.n_block5,
      n_block6: item.n_block6,
      n_block7: item.n_block7,
      n_block8: item.n_block9,
      n_block9: item.n_block9,
      n_block10: item.n_block10,
      n_block11: item.n_block11,
      n_block12: item.n_block12,
      n_block13: item.n_block13,
      n_block14: item.n_block14,
      n_block15: item.n_block15,
    };
  });
  const viewList = play.map((item, index) => {
    return (
      <form method="POST" action={actionHandler}>
        <div className="input_box" key={`${index}`}>
          <input name={`p_row_num`} value={index + 1} hidden="hidden" readOnly />
          <input name={"p_num"} value={params.level} hidden="hidden" readOnly />

          {Object.keys(item).map(
            (blockName) =>
              item[blockName] != null && (
                <input
                  name={blockName}
                  key={`${blockName}${index}`}
                  type="checkbox"
                  onChange={(e) => ChangeHandler(e, index, blockName)}
                  checked={checkboxState[index] && checkboxState[index][blockName] === 1}
                />
              )
          )}
          <button>저장</button>
        </div>
      </form>
    );
  });

  return (
    <>
      {viewList}
      <input hidden="hidden" name="p_num" value={n_num} readOnly />
      <input hidden="hidden" name="p_id" value="11" readOnly />
      <br />
      <button className="save" onClick={OnclickCorrect}>
        정답확인
      </button>
      {/* {checkboxState.map((item, index) => (
          <div key={index}>
            {Object.keys(item).map((blockName) => (
              <div key={blockName}>
                <input
                  name={blockName}
                  type="checkbox"
                  value={item[blockName]}
                  onChange={(e) => ChangeHandler(e, index, blockName)}
                  checked={item[blockName] === 1}
                />
                <label>{`${blockName} (Index: ${index})`}</label>
              </div>
            ))}
          </div>
        ))} */}
      <button className="delete" onClick={DELETE_EVENT}>
        삭제
      </button>
    </>
  );
};

export default GamePage;
