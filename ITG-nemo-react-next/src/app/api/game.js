"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

export const nemo_play_select = async ({ p_id, n_num }) => {
  const result = await prisma.tbl_nemo_play.findMany({
    where: {
      p_id: p_id,
      p_num: n_num,
    },
  });
  return result;
};

export const GameAction = async (formData) => {
  // console.log(formData);
  const data = {};
  for (const [key, value] of formData) {
    value === "on" ? 1 : 0;

    const blockKey = `${key}`;
    if (key.startsWith(`p_block`)) {
      data[blockKey] = value === "on" ? 1 : 0;
      //   console.log(parsedData);
    } else {
      //   const p_row_num = Number(formData.get("p_row_num"));
      //   parsedData[1].push(p_row_num);
      //   console.log(parsedData);
    }
  }

  data.p_row_num = Number(formData.get("p_row_num"));
  data.p_num = Number(formData.get("p_num"));
  //   console.log(data.p_num);
  data.p_id = "11";
  // 여기서부터 수정
  let max_row;
  if (data.p_num == 1) {
    max_row = 5;
  }
  if (data.p_num == 2) {
    max_row = 7;
  }
  if (data.p_num == 3) {
    max_row = 9;
  }
  if (data.p_num == 4) {
    max_row = 11;
  }
  if (data.p_num == 5) {
    max_row = 15;
  }
  let new_data = {};

  for (let i = 1; i <= max_row; i++) {
    const updateData = {
      p_id: data.p_id,
      p_num: data.p_num,
      p_row_num: i,
      p_block1: data.p_block1 == 1 ? data.p_block1 : 0,
      p_block2: data.p_block2 == 1 ? data.p_block2 : 0,
      p_block3: data.p_block3 == 1 ? data.p_block3 : 0,
      p_block4: data.p_block4 == 1 ? data.p_block4 : 0,
      p_block5: data.p_block5 == 1 ? data.p_block5 : 0,
      p_block6: data.p_block6 != null || data.p_block6 == 1 ? data.p_block6 : 0,
      p_block7: data.p_block7 != null || data.p_block7 == 1 ? data.p_block7 : 0,
      p_block8: data.p_block8 != null || data.p_block8 == 1 ? data.p_block8 : 0,
      p_block9: data.p_block9 != null || data.p_block9 == 1 ? data.p_block9 : 0,
      p_block10: data.p_block10 || data.p_block10 == null ? null : data.p_block10,
    };

    new_data = updateData;

    // console.log("큐큐", new_data);
  }
  console.log(data);
  console.log(new_data);

  // console.log(qq);
  // console.log(qq);
  // 여기까지
  //   console.log("??????????", data);
  await prisma.tbl_nemo_play.update({
    where: {
      p_id_p_num_p_row_num: {
        p_id: `${data.p_id}`,
        p_num: data.p_num,
        p_row_num: data.p_row_num,
      },
    },
    data: data,
  });
  // console.log(formData.get("p_num"));
  const p_num = formData.get("p_num");
};

export const DELETE_PlAY = async ({ p_id, p_num }) => {
  console.log(`${p_num}`);
  console.log(p_id);
  let max_row;
  if (p_num === 1) {
    max_row = 5;
  } else if (p_num === 2) {
    max_row = 7;
  } else if (p_num === 3) {
    max_row = 9;
  } else if (p_num === 4) {
    max_row = 11;
  } else if (p_num === 5) {
    max_row = 15;
  }

  await prisma.tbl_nemo_play.deleteMany({
    where: {
      p_id: p_id,
      p_num: p_num,
    },
  });
  for (let i = 1; i <= max_row; i++) {
    const startData = {
      p_id: p_id,
      p_num: p_num,
      p_row_num: i,
      p_block1: 0,
      p_block2: 0,
      p_block3: 0,
      p_block4: 0,
      p_block5: 0,
      ...(max_row > 5 && { p_block6: 0 }),
      ...(max_row > 5 && { p_block7: 0 }),
      ...(max_row > 7 && { p_block8: 0 }),
      ...(max_row > 7 && { p_block9: 0 }),
      ...(max_row > 9 && { p_block10: 0 }),
      ...(max_row > 9 && { p_block11: 0 }),
      ...(max_row > 11 && { p_block12: 0 }),
      ...(max_row > 11 && { p_block13: 0 }),
      ...(max_row > 11 && { p_block14: 0 }),
      ...(max_row > 11 && { p_block15: 0 }),
    };
    await prisma.tbl_nemo_play.create({ data: startData });
  }
};

// export const nemo_select = async ({ n_num }) => {
//   const nemo = await prisma.tbl_nemo.findMany({
//     where: {
//       n_num: n_num,
//     },
//   });
//   return nemo;
// };
