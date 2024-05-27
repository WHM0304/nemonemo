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
  console.log(formData);
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
  console.log(formData.get("p_num"));
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

//------------------------------------------------------------
// 한꺼번에 처리하려했으나 실패함

// export const GameAction = async (formData) => {
//   console.log(formData);
//   console.log(formData);
//   const parsedData = {};
//   for (const [key, value] of formData) {
//     // p_row_num는 여러 개 올 수 있으므로 배열로 관리
//     if (key === "p_row_num") {
//       if (!parsedData[key]) {
//         parsedData[key] = [];
//       }
//       parsedData[key].push(value);
//     } else {
//       // 블록 값이 'on'으로 오는 것을 1로 변환
//       const rowNum = formData.get("p_row_num"); // 현재 행 번호 가져오기
//       const blockKey = `${rowNum}_${key}`; // 각 블록을 고유하게 식별하기 위해 키 생성
//       parsedData[blockKey] = value === "on" ? 1 : 0;
//     }
//   }
//   //   console.log(parsedData);
//   for (const rowNum of parsedData["p_row_num"]) {
//     const updateData = {};
//     for (const key in parsedData) {
//       if (key.startsWith(`${rowNum}_`)) {
//         // console.log("뭔내용", key);
//         // console.log("뭔내용", rowNum);
//         // console.log(rowNum);
//         // console.log(key.startsWith(`${rowNum}_`));
//         const blockKey = key.split("_")[1] + "_" + key.split("_")[2]; // 블록 키 추출
//         console.log(key.split("_"));
//         // console.log("블락키", blockKey);
//         updateData[blockKey] = parsedData[key];
//         // console.log("밸류값", parsedData);
//         // console.log((updateData[blockKey] = parsedData[key]));
//         // console.log(updateData[blockKey]);
//         // console.log(parsedData[key]);
//       }
//     }

//     // console.log(updateData.p_id);
//     delete updateData["p_num"];
//     delete updateData["p_id"];

//     // console.log("업데이트 내용", updateData);
//     // await prisma.tbl_nemo_play.updateMany({
//     //   where: {
//     //     p_id: formData.get("p_id"),
//     //     p_num: Number(formData.get("p_num")),
//     //     p_row_num: Number(rowNum),
//     //   },
//     //   data: updateData,
//     // });
//     // console.log(updateData);
//   }
//   //   console.log(parsedData);

//   //   console.log(formData);
//   //------------------------------------------------------------
//   //   const parsedData = {};
//   //   parsedData.p_row_num = []; // 행 번호를 저장할 배열
//   //   parsedData.updates = {}; // 각 행에 대한 업데이트를 저장할 객체

//   //   for (const [key, value] of formData) {
//   //     if (key === "p_row_num") {
//   //       parsedData.p_row_num.push(Number(value)); // 행 번호를 숫자로 저장
//   //     } else if (key.startsWith("p_block")) {
//   //       const rowNum = Number(formData.get("p_row_num")); // 현재 행 번호 가져오기

//   //       // ${rowNum}_
//   //       const blockKey = `${key}`; // 행 및 블록 키 결합
//   //       console.log("로우넘", parsedData);

//   //       if (!parsedData.updates[rowNum]) {
//   //         parsedData.updates[rowNum] = {}; // 이 행에 대한 객체 생성
//   //       }

//   //       parsedData.updates[rowNum][blockKey] = value === "on" ? 1 : 0;
//   //     } else {
//   //       // 필요한 경우 p_num, p_id와 같은 다른 폼 데이터 처리
//   //     }
//   //   }

//   //   // 2. 각 행에 대한 업데이트 데이터 준비
//   //   const updates = [];
//   //   const rowNums = new Set(parsedData.p_row_num); // 고유한 행 번호를 가져오려면 Set 사용
//   //   for (const rowNum of rowNums) {
//   //     // console.log("로우넘스", rowNum);
//   //     const updateData = {
//   //       p_id: formData.get("p_id"),
//   //       p_row_num: Number(rowNum),
//   //     };

//   //     // 모든 잠재적인 블록 데이터를 기본값(0)으로 포함
//   //     for (const blockKey in parsedData.updates[rowNum] || {}) {
//   //       updateData[blockKey] =
//   //         parsedData.updates[rowNum][blockKey] || 0;
//   //     }

//   //     updates.push(updateData);
//   //   }

//   //   // 4. (선택사항) 데이터베이스 업데이트 실행 (효율성을 위해 벌크 작업 고려)
//   //   // if (updates.length > 0) {
//   //   //   await prisma.tbl_nemo_play.updateMany({
//   //   //     data: updates,
//   //   //   });
//   //   // }

//   //   console.log(
//   //     "성공적으로 구문 분석하고 업데이트 데이터 준비했습니다:",
//   //     updates
//   //   );
// };
