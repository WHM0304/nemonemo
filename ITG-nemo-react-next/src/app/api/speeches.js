"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const SPEECH = prisma.tbl_speech;

export const Speech_SelectAll = async () => {
  console.log("??");

  const result = await prisma.tbl_speech.findMany();
  console.log("스피치", result);
};
