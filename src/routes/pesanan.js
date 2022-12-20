const express = require("express");
const router = express.Router();
const pesanan_controllers = require("../controllers/pesanan_controller");
const { checkRequest, requiredRequest } = require("../utils");

router.post(
  "/input",
  checkRequest(requiredRequest.authorization),
  pesanan_controllers.inputPesanan
);

router.get(
  "/get-pesanan",
  checkRequest(requiredRequest.authorization),
  pesanan_controllers.getPesanan
);

router.get(
  "/:guid",
  checkRequest(requiredRequest.authorization),
  pesanan_controllers.getByGuidPesanan
);

router.get(
  "/get-by-status/:status",
  checkRequest(requiredRequest.authorization),
  pesanan_controllers.getStatusPesanan
);

router.put(
  "/update-pesanan/:guid",
  checkRequest(requiredRequest.authorization),
  pesanan_controllers.updatePesanan
);

module.exports = router;
