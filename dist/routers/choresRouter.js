import { Router } from "express";
import { postChore } from "../controllers/choresController.js";
import { validateChore } from "../middlewares/validateChore.js";
var choresRouter = Router();
choresRouter.post('/chore', validateChore, postChore);
/* choresRouter.get('/chores', getChores);
choresRouter.patch('/chore/:id', patchChore);
choresRouter.delete('/chore/:id', deleteChore);
choresRouter.get('/chores-division', showChoresDivision); */
export default choresRouter;
