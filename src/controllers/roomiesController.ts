import { Request, Response } from "express";
import { Roomie } from "../protocols/Roomie";
import connection from "../db.js";
import { v4 as uuidv4 } from 'uuid';
import { insertRoomie } from "../repositories/roomiesRepositories.js";

export async function postRoomie(req: Request, res: Response){
    const roomie = req.body as Roomie;
    const token: string = uuidv4();
    try {
        await insertRoomie(roomie, token);
        res.status(201).send(`Bem vindo(a), ${roomie.name}.\nSeu token é ${token}`);
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
};
