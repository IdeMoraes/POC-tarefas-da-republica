import Joi from "joi";
import { Roomie } from "../protocols/Roomie";
import { NextFunction, Request, Response } from "express";

const roomieSchema = Joi.object({
    name: Joi.string().required(),
});

export async function validateRoomie(req: Request, res: Response, next: NextFunction){
    const roomie = req.body as Roomie;
    const validation = roomieSchema.validate(roomie);
    if (validation.error){
        return res.status(400).send(validation.error.message);
    }
    next();
};