const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controller");

const user = require("./user");
const driver = require("./driver");
const pesanan = require("./pesanan");
const { checkRequest, requiredRequest } = require("../utils");

router.post(
  "/users/login",
  // checkRequest(requiredRequest.admin_login),
  authController.login
);

router.post(
  "/users/login-user",
  // checkRequest(requiredRequest.admin_login),
  authController.login2
);

router.use("/users", user);
router.use("/drivers", driver);
router.use("/pesanan", pesanan);

module.exports = router;
