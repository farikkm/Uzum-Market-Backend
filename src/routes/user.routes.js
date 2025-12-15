import { Router } from "express";
import {
  addToCart,
  addToFavorites,
  userInfo,
} from "../controllers/user.controllers.js";
import verifyJWT from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/favorites/:productId").post(verifyJWT, addToFavorites);
router.route("/cart/:productId").post(verifyJWT, addToCart);
router.route("/user-info").get(verifyJWT, userInfo);

export default router;
