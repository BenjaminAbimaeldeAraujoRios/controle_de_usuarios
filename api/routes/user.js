import express from 'express';
import { getusers, adduser,updateuser, deleteuser } from "../controllers/user.js";
const router = express.Router();

router.get("/", getusers);


router.post("/", adduser);

router.put("/:id", updateuser);

router.delete("/:id", deleteuser);


export default router;
