import { useEffect, useState } from "react";
import "../css/Game.css";

const GameMain = () => {
  const [values, SetValues] = useState([5][5]);
  const [part, SetPart] = useState("");
  const onClickValue = (e) => {
    const target = e.target;
    target.checked ? (target.value = "1") : (target.value = "0");
    SetPart(target.value);
    const row = target.name.substr(7) - 1;
    // console.log(target.closest("div").name);
    console.log(row);
    console.log(target.value);

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
