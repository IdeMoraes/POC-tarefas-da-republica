import Joi from "joi";
import { Roomie } from "../protocols/Roomie";
import { NextFunction, Request, Response } from "express";

const choreSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    inCharge: Joi.string().required(),
    deadline: Joi.date().required(),
});

export async function validateChore(req: Request, res: Response, next: NextFunction){
    const chore = req.body as Roomie;
    const validation = choreSchema.validate(chore);
    if (validation.error){
        return res.status(400).send(validation.error.message);
    }
    next();
};