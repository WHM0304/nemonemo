import { useEffect, useState } from "react";
import "../css/Game.css";
import { useNavigate } from "react-router-dom";

const LEVEL4 = () => {
  const [play, Setplay] = useState(() => {
    const rows = 11;
    const columns = 11;
    return Array.from({ length: rows }, () => Array(columns).fill("0"));
  });
  const [nemo, setNemo] = useState([]);

  useEffect(() => {
    fetch("/nemo/bridge/LEVEL4")
      .then((res) => res.json())
      .then((newData) => {
        const newBlocks = newData.map((item) => [
          item.n_block1 + "",
          item.n_block2 + "",
          item.n_block3 + "",
          item.n_block4 + "",
          item.n_block5 + "",
          item.n_block6 + "",
          item.n_block7 + "",
          item.n_block8 + "",
          item.n_block9 + "",
          item.n_block10 + "",
          item.n_block11 + "",
        ]);

        // nemo 상태를 직접적으로 업데이트
        setNemo(newBlocks);
      })
      .catch((error) => console.log("error : ", error));
  }, []);

  console.log(nemo);
  const [part, SetPart] = useState("1");
  const navigate = useNavigate();
  const OnclickCorrect = () => {
    if (JSON.stringify(play) === JSON.stringify(nemo)) {
      alert("정답");
      navigate("/");
    } else {
      alert("정답이아닙니다 다시 풀어주세요");
    }
  };

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
  };

  useEffect(() => {
    if (JSON.stringify(play) === JSON.stringify(nemo)) {
      alert("정답");
    }
  }, [play]);
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

    if (count !== 0) {
      hints.push(count);
    } else if (hints.length === 0) {
      hints.push(0);
    }

    return hints;
  };

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

    if (count !== 0) {
      hints.push(count);
    } else if (hints.length === 0) {
      hints.push(0);
    }

    return hints;
  };

  if (nemo.length === 0) {
    return <p>Loading...</p>;
  }
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
              {calculateRowHints(row).map((hint, index) => (
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
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num2">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num3">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num4">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num5">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num6">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num7">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num8">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num9">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num10">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <div className="p_row_num11">
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block6"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block7"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block8"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block9"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block10"></input>
            <input type="checkbox" onClick={onClickValue} value={part} name="p_block11"></input>
          </div>
          <button onClick={OnclickCorrect}>제출하기</button>
        </div>
      </div>
    </section>
  );
};

export default LEVEL4;
