import prisma from "../db.js";
import { Roomie } from "../protocols/Roomie.js";

export async function insertRoomie(roomie: Roomie, token: string){
  const result = await prisma.roomies.create({
    data: {
      name: roomie.name,
      token: token
    }
  });
  // console.log(result);
  return result;
};
export async function getRoomieNameByToken(token: string){
  const result = await prisma.roomies.findFirst({
    where:{
      token: token
    }
  })
  return result.name;
};