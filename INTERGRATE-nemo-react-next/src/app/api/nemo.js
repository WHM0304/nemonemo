"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const NEMO = prisma.tbl_nemo;

export const Nemo_SelectAll = async ({ n_num }) => {
  const result = await NEMO.findMany({
    where: { n_num },
  });
  return result;
};
