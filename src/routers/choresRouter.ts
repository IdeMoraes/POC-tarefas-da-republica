import { Router } from "express";
import { deleteChore, getChores, patchChore, postChore } from "../controllers/choresController.js";
import { validateChore } from "../middlewares/validateChore.js";

const choresRouter = Router();
choresRouter.post('/chore', validateChore, postChore);
choresRouter.get('/chores', getChores);
choresRouter.patch('/chore/:id', patchChore);
choresRouter.delete('/chore/:id', deleteChore);
// choresRouter.get('/chores-division', showChoresDivision);


export default choresRouter;