import prisma from "../db.js";
import { Chore } from "../protocols/Chore.js";

export async function insertChore(chore: Chore){
    const date = new Date(chore.deadline);
    const result = await prisma.chores.create({
        data: {
           name: chore.name,
           description: chore.description,
           inCharge: chore.inCharge,
           deadline: date
        }
    });
    return result;
};
export async function selectChores(){
    const result = await prisma.chores.findMany();
    return result;
};
export async function updateChore(roomieName: string, choreId: number){
    const result = await prisma.chores.update({
        where:{id: choreId},
        data:{
            isDone: true,
            doneBy: roomieName,
            doneOn: new Date().toJSON()
        }
    });
    return result;
};
export async function removeChore(choreId: number){
    const result = await prisma.chores.delete({where:{id: choreId}});
    return result;
};
/* export async function countChores(){
    return connection.query(
        `SELECT r.name, COUNT(c.id) AS "chores"
        FROM roomies r
        JOIN chores c ON c."inCharge"=r.name
        GROUP BY r.id;`
    );
}; */