"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function findClearData(c_id, c_level) {
  try {
    const result = await prisma.tbl_clear.findUnique({
      where: {
        c_id_c_level: {
          c_id,
          c_level,
        },
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

// 클리어 데이터 만들기
export const CreateClearData = async (p_num) => {
  await prisma.tbl_clear.create({
    data: {
      c_id: "11",
      c_level: p_num,
      // c_id: "11",
      // c_level: 1,
      c_clear: 1,
    },
  });
  prisma.$disconnect();
};
