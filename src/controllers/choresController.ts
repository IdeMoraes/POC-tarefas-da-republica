import { Request, Response } from "express";
import { Chore } from "../protocols/Chore";
import { countChores, insertChore, removeChore, selectChores, updateChore } from "../repositories/choresRepositorie.js";
import { getRoomieNameByToken } from "../repositories/roomiesRepositories.js";

export async function postChore(req: Request, res: Response){
    const chore = req.body as Chore;
    try {
        await insertChore(chore);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
};
export async function getChores(req: Request, res: Response){
    try {
        const result = await selectChores();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
};
export async function patchChore(req: Request, res: Response){
    const choreId: number = parseInt(req.params.id);
    const { authorization } = req.headers;
    const token: string = authorization?.replace("Bearer ", "");
    try {
        const roomieName = await getRoomieNameByToken(token);
        await updateChore(roomieName, choreId);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
};
export async function deleteChore(req: Request, res: Response){
    const choreId: number = parseInt(req.params.id);
    try {
        await removeChore(choreId);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
};
export async function showChoresDivision(req: Request, res: Response){
    try {
        const result = await countChores();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
}



