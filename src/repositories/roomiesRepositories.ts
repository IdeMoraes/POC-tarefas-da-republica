import { QueryResult } from "pg";
import connection from "../db.js";
import { Roomie } from "../protocols/Roomie.js";

export async function insertRoomie(roomie: Roomie, token: string):Promise<QueryResult>{
    return connection.query(
        `INSERT INTO roomies (name, token) VALUES ($1, $2)`,
        [roomie.name, token]
    );
};
export async function getRoomieNameByToken(token: string):Promise<QueryResult>{
    return connection.query(`SELECT name FROM roomies WHERE token='${token}'`);
}
