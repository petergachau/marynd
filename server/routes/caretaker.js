import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createTour,
  deleteTour,
  getRelatedTours,
  getTour,
  getTours,
  getToursBySearch,
  getToursByTag,
  getToursByUser,
  likeTour,
  updateTour,
} from "../controllers/caretaker.js";

router.get("/search", getToursBySearch);
router.get("/tag/:tag", getToursByTag);
router.post("/relatedTours", getRelatedTours);
router.get("/", getTours);
router.get("/:id", getTour);

router.post("/",  createTour);
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.get("/:id", auth, getToursByUser);
router.patch("/like/:id", auth, likeTour);

export default router;
