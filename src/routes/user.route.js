//router
import { Router } from "express";
import {
  getAllUsers,
  createUser,
  findUserById,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", findUserById);

router.post("/", createUser);
export default router;
