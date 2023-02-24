import express from "express";
const router = express.Router();

import {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobControllers.js";

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").patch(updateJob).delete(deleteJob);
router.route("/stats").get(showStats);

export default router;
