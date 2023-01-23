import { QueryResult } from "pg";
import connection from "../db.js";
import { Chore } from "../protocols/Chore.js";

export async function insertChore(chore: Chore):Promise<QueryResult>{
    return connection.query(
        `INSERT INTO chores (name, description, "inCharge", deadline) VALUES ($1, $2, $3, DATE '${chore.deadline}')`,
        [chore.name, chore.description, chore.inCharge]
    );
};
export async function selectChores():Promise<QueryResult>{
    return connection.query(
        `SELECT * FROM chores;`
    );
};
export async function updateChore(roomieName: string, choreId: number):Promise<QueryResult>{
    return connection.query(
        `UPDATE chores SET "isDone" = TRUE, "doneBy" = '${roomieName}', "doneOn" = NOW() WHERE id = ${choreId};`
    );
};
export async function removeChore(choreId: number):Promise<QueryResult>{
    return connection.query(
        `DELETE FROM chores WHERE id = ${choreId};`
    );
};
export async function countChores():Promise<QueryResult>{
    return connection.query(
        `SELECT r.name, COUNT(c.id) AS "chores"
        FROM roomies r
        JOIN chores c ON c."inCharge"=r.name
        GROUP BY r.id;`
    );
};