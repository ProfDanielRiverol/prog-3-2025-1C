//router
import { Router } from "express";
import { getAll, getById, upload } from "../controllers/images.controller.js";
import multer from "../middlewares/upload.middleware.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);

router.post("/", multer.single("image"), upload);

export default router;
