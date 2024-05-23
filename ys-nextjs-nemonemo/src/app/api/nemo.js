"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const NemoCheck = async (data) => {
  const result = await prisma.tbl_nemo.findMany({
    where: {
      n_num: data.p_num,
    },
  });
  // prisma.$disconnect();
  return result;
};

export const PlayNemoCheck = async (data) => {
  const result = await prisma.tbl_nemo_play.findMany({
    where: {
      p_id: data.p_id,
      p_num: data.p_num,
    },
  });
  prisma.$disconnect();
  return result;
};

// 정답일때 클리어 데이터 생성하는용 -> 정답화면에서 만들기로
// export const CreateClearData = async (p_num) => {
//   // 왜 위의 2개는 되는데 이것만 data.p_id 이 안되냐
//   // 일단1렙되게
//   await prisma.tbl_clear.create({
//     data: {
//       c_id: "11",
//       c_level: p_num,
//       // c_id: "11",
//       // c_level: 1,
//       c_clear: 1,
//     },
//   });
//   prisma.$disconnect();
// };

export const compareNemoData = async (data) => {
  // console.log('Received data:', data);

  const nemoData = await NemoCheck(data);
  const playNemoData = await PlayNemoCheck(data);

  // playNemoData가 비어 있으면 정답이 아님
  if (playNemoData.length === 0) {
    return "틀렸습니다";
  }

  const comparisonResults = playNemoData.map((playRow) => {
    const matchingNemoRow = nemoData.find(
      (nemoRow) => nemoRow.n_row_num === playRow.p_row_num
    );

    if (!matchingNemoRow) {
      return false;
    }

    return (
      playRow.p_block1 === matchingNemoRow.n_block1 &&
      playRow.p_block2 === matchingNemoRow.n_block2 &&
      playRow.p_block3 === matchingNemoRow.n_block3 &&
      playRow.p_block4 === matchingNemoRow.n_block4 &&
      playRow.p_block5 === matchingNemoRow.n_block5 &&
      (playRow.p_block6 === undefined ||
        playRow.p_block6 === matchingNemoRow.n_block6) &&
      (playRow.p_block7 === undefined ||
        playRow.p_block7 === matchingNemoRow.n_block7) &&
      (playRow.p_block8 === undefined ||
        playRow.p_block8 === matchingNemoRow.n_block8) &&
      (playRow.p_block9 === undefined ||
        playRow.p_block9 === matchingNemoRow.n_block9) &&
      (playRow.p_block10 === undefined ||
        playRow.p_block10 === matchingNemoRow.n_block10) &&
      (playRow.p_block11 === undefined ||
        playRow.p_block11 === matchingNemoRow.n_block11) &&
      (playRow.p_block12 === undefined ||
        playRow.p_block12 === matchingNemoRow.n_block12) &&
      (playRow.p_block13 === undefined ||
        playRow.p_block13 === matchingNemoRow.n_block13) &&
      (playRow.p_block14 === undefined ||
        playRow.p_block14 === matchingNemoRow.n_block14) &&
      (playRow.p_block15 === undefined ||
        playRow.p_block15 === matchingNemoRow.n_block15)
    );
  });

  // 같으면 true 아님 false
  const isCorrect = comparisonResults.every((result) => result);
  let answer = "";
  if (isCorrect === true) {
    answer = "정답입니다";
    // 클리어정보만들기 -> 클리어화면에서 만들까
    // await CreateClearData(data);
  } else {
    answer = "틀렸습니다";
  }

  prisma.$disconnect();
  return answer;
};
