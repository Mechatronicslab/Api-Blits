const express = require("express");
const { driver } = require("neo4j-driver-core");
const router = express.Router();
const driver_controllers = require("../controllers/driver_controller");
const { checkRequest, requiredRequest } = require("../utils");

router.post(
  "/input",
  checkRequest(requiredRequest.authorization),
  driver_controllers.inputDriver
);

router.get(
  "/get-driver",
  checkRequest(requiredRequest.authorization),
  driver_controllers.getDriver
);

router.get(
  "/getbyguiddriver/:guid",
  checkRequest(requiredRequest.authorization),
  driver_controllers.getByGuidDriver
);

router.put(
  "/:guid",
  checkRequest(requiredRequest.authorization),
  driver_controllers.updateDriver
);

router.get(
  "/getcount",
  checkRequest(requiredRequest.authorization),
  driver_controllers.getCount
);

module.exports = router;
