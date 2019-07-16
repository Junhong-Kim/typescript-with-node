import { Router } from "express";
import * as testController from "../controllers/test";

const router = Router();

router.get("/", testController.list);

export default router;
