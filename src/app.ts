import express, {json} from "express";
import router from "./routers/index.js"

const app = express();
app.use(json());
app.use(router);

const port = 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));