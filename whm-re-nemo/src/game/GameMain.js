import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const GameMain = () => {
  const [qq, setQq] = useState("");
  const [loc, setLoc] = useState("");
  const location = useLocation().pathname;
  const ss = location.split("/game/");
  useEffect(() => {
    fetch(`/nemo/player/${ss}`)
      .then((res) => res.json())
      .then((newData) => {
        const newqq = newData.map((item) => [
          item.p_block1 + "",
          item.p_block2 + "",
          item.p_block3 + "",
          item.p_block4 + "",
          item.p_block5 + "",
          item.p_block6 + "",
          item.p_block7 + "",
          item.p_block8 + "",
          item.p_block9 + "",
        ]);
        setQq(newqq);
      });
  }, []);
  console.log(qq);
  return (
    <>
      <Outlet loc={loc} setLoc={setLoc} />
      <p>{ss}</p>
    </>
  );
};
export default GameMain;
