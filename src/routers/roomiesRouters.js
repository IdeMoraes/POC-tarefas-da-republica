import { Router } from "express";
import { validateRoomie } from "../middlewares/validateRoomie.js";
import { postRoomie } from "../controllers/roomiesController.js";

const roomiesRouter = Router();
roomiesRouter.post('/roomie', validateRoomie, postRoomie);

export default roomiesRouter;