"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const CLEAR = prisma.tbl_clear;

export const Clear_SelectAll = async () => {
  const result = await CLEAR.findMany();
  return result;
};
