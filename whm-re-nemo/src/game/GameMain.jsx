import { useEffect, useState } from "react";
import "../css/Game.css";

const GameMain = () => {
  const [play, Setplay] = useState(() => {
    const rows = 5;
    const columns = 5;
    return Array.from({ length: rows }, () => Array(columns).fill("0"));
  });
  const [nemo, SetNemo] = useState([
    ["0", "0", "0", "0", "0"],
    ["0", "1", "0", "1", "0"],
    ["0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "1"],
    ["0", "1", "1", "1", "0"],
  ]);

  const [part, SetPart] = useState("1");

  const onClickValue = (e) => {
    const target = e.target;
    target.checked ? (target.value = "0") : (target.value = "1");
    SetPart(target.value);
    // console.log(target.value);
    // console.log(part);
    const row = target.name.substr(7) - 1;
    const column = target.parentElement.className.substr(9) - 1;

    const newplay = [...play];
    newplay[column][row] = target.checked ? "1" : "0";
    Setplay(newplay);

    // console.log(play);
  };
  // console.log(nemo);
  // console.log(play);
  // console.log(play);
  useEffect(() => {
    if (JSON.stringify(play) === JSON.stringify(nemo)) {
      alert("정답");
    }
  }, [play]);

  const calculateHintsForRow = (row) => {
    const hints = [];
    let count = 0;

    row.forEach((cell) => {
      if (cell !== "0") {
        count++;
      } else {
        if (count !== 0) {
          hints.push(count);
          count = 0;
        }
      }
    });

    // 마지막에 연속된 숫자가 있는 경우
    if (count !== 0) {
      hints.push(count);
    } else if (hints.length === 0) {
      // 모든 숫자가 0인 경우
      hints.push(0);
    }

    return hints;
  };
  const view_rowhint = () => {
    {
      nemo.map((row, rowIndex) => (
        <div key={rowIndex} className="row-hints">
          {calculateHintsForRow(row).map((hint, index) => (
            <div key={index} className="hint">
              {hint}
            </div>
          ))}
        </div>
      ));
    }
  };
  const calculateRowHints = (row) => {
    const hints = [];
    let count = 0;

    row.forEach((cell) => {
      if (cell !== "0") {
        count++;
      } else {
        if (count !== 0) {
          hints.push(count);
          count = 0;
        }
      }
    });

    // 마지막에 연속된 숫자가 있는 경우
    if (count !== 0) {
      hints.push(count);
    } else if (hints.length === 0) {
      // 모든 숫자가 0인 경우
      hints.push(0);
    }

    return hints;
  };

  // 각 열의 힌트를 계산하여 반환하는 함수 (칼럼으로 이름 변경)
  const calculateColumnHintsByColumn = (columnIndex) => {
    const hints = [];
    let count = 0;

    nemo.forEach((row) => {
      if (row[columnIndex] !== "0") {
        count++;
      } else {
        if (count !== 0) {
          hints.push(count);
          count = 0;
        }
      }
    });

    // 마지막에 연속된 숫자가 있는 경우
    if (count !== 0) {
      hints.push(count);
    } else if (hints.length === 0) {
      // 모든 숫자가 0인 경우
      hints.push(0);
    }

    return hints;
  };

  return (
    <section className="GAME-ALL">
      <div className="COLUMN">
        {nemo[0].map((_, columnIndex) => (
          <div key={columnIndex} className="column-hints">
            {calculateColumnHintsByColumn(columnIndex).map((hint, index) => (
              <div key={index} className="hint">
                {hint}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="Game-container">
        <div className="ROW">
          {nemo.map((row, rowIndex) => (
            <div key={rowIndex} className="row-hints">
              {calculateHintsForRow(row).map((hint, index) => (
                <div key={index} className="hint">
                  {hint}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="game-box">
          <div className="p_row_num1">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
          </div>
          <div className="p_row_num2">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
          </div>
          <div className="p_row_num3">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
          </div>
          <div className="p_row_num4">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
          </div>
          <div className="p_row_num5">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameMain;
