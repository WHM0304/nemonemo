"use client";
import { Nemo_SelectAll } from "@/app/api/nemo";
import { useEffect, useState } from "react";

const GamePage = ({ params }) => {
  const LEVEL = params.level.split("LEVEL");
  const n_num = Number(LEVEL[1]);
  const [nemo, setNemo] = useState([]);

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
          n_block10: item.n_block11,
          n_block10: item.n_block12,
          n_block10: item.n_block13,
          n_block10: item.n_block14,
          n_block10: item.n_block15,
        };
      });
      setNemo([...data]);
    };
    getNemoList();
  }, []);
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
      n_block10: item.n_block11,
      n_block10: item.n_block12,
      n_block10: item.n_block13,
      n_block10: item.n_block14,
      n_block10: item.n_block15,
    };
  });

  console.log(n_blocks);

  const viewList = n_blocks.map((item, index) => {
    return (
      <>
        <input name={`n_block${index}`} type="checkbox" value={item.n_block1} />
        <input name={`n_block${index}`} type="checkbox" value={item.n_block2} />
        <input name={`n_block${index}`} type="checkbox" value={item.n_block3} />
        <input name={`n_block${index}`} type="checkbox" value={item.n_block4} />
        <input name={`n_block${index}`} type="checkbox" value={item.n_block5} />
        <input name={`n_block${index}`} type="checkbox" value={item.n_block6} />
        <input name={`n_block${index}`} type="checkbox" value={item.n_block7} />
      </>
    );
  });

  return (
    <>
      <h1>1 {params.level}</h1>
      <form>{viewList}</form>
    </>
  );
};

export default GamePage;
