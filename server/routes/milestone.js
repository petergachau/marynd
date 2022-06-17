import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {getMiles,createMile,getMilesByUser} from '../controllers/milestone.js'
router.post("/", createMile);
router.get("/miles/:id", getMilesByUser);
router.get("/", getMiles);
// router.get("/miles/:id", auth, getMilesByUser);

export default router;
