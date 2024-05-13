import { useEffect, useState } from "react";
import "../css/Game.css";

const GameMain = () => {
  const [values, SetValues] = useState(() => {
    const rows = 5;
    const columns = 5;
    return Array.from({ length: rows }, () => Array(columns).fill(0));
  });
  const updateState = (rowIndex, columnIndex, value) => {
    SetValues((prevState) => {
      const newState = [...prevState];
      newState[rowIndex][columnIndex] = value;
      return newState;
    });
  };

  const [part, SetPart] = useState("");
  let play = [];
  for (let i = 0; i < 5; i++) {
    let _play = [];
    for (let j = 0; j < 5; j++) {
      _play.push(0);
    }
    play.push(_play);
  }

  const onClickValue = (e) => {
    const target = e.target;
    target.checked ? (target.value = 1) : (target.value = 0);
    SetPart(target.value);
    const row = target.name.substr(7) - 1;
    const column = target.parentElement.className.substr(9) - 1;
    play[column][row] = part;
    // SetValues[column][row] = target.value;
    // console.log(column, row);
    // console.log(play);
    // console.log(part);
    // console.log(values);
    // console.log(row);
    // console.log(target.value);

    // console.log(values);
    // SetValues([[...part, ...part], target.value]);
  };

  useEffect(() => {}, [part]);
  //   const viewList = values.map((e) => {
  //     return (
  //       <>
  //         <input name={"p_block" + e.index}></input>
  //       </>
  //     );
  //   });
  return (
    <div className="Game-container">
      <div className="p_row_num1">
        <input type="checkbox" onClick={onClickValue} value={part} name="p_block1"></input>
        <input type="checkbox" onClick={onClickValue} value={part} name="p_block2"></input>
        <input type="checkbox" onClick={onClickValue} value={part} name="p_block3"></input>
        <input type="checkbox" onClick={onClickValue} value={part} name="p_block4"></input>
        <input type="checkbox" onClick={onClickValue} value={part} name="p_block5"></input>
      </div>
      <div>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      </div>
      <div>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      </div>
      <div>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      </div>
      <div>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      </div>
    </div>
  );
};

export default GameMain;
