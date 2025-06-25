//router
import { Router } from "express";
import {
  getAllUsers,
  createUser,
  findUserById,
  getAllUsersWithQuery,
  updateUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getAllUsers);
// http://dominio.com/api/users/search?lastName="Luzuri"&firstName="Ag"
router.get("/search", getAllUsersWithQuery);
// http://dominio.com/api/users/3
router.get("/:id", findUserById);
router.post("/", createUser);
router.put("/:id", updateUser);


export default router;
