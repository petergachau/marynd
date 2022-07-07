import express from "express";
import {getMiles,createMile,getMilesByUser} from '../controllers/milestone.js'
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createMile);
router.get("/miles/:id", getMilesByUser);
router.get("/", getMiles);
// router.get("/miles/:id", auth, getMilesByUser);

export default router;
