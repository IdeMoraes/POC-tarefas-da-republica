import { Router } from "express";
import choresRouter from "./choresRouter.js";
import roomiesRouter from "./roomiesRouters.js";

const router = Router();

router.use(choresRouter);
router.use(roomiesRouter);

export default router;