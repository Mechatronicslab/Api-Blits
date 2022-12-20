require("dotenv").config();
const pesanan_service = require("../services/pesanan_service");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");
const { v4 } = require("uuid");
let response;

const inputPesanan = async (req, res) => {
  try {
    req.body.guid = v4();
    console.log(req.body);
    const data = await pesanan_service.inputPesanan(req.body);
    response = { ...data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const getPesanan = async (req, res) => {
  try {
    const data = await pesanan_service.getPesanan();
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const getByGuidPesanan = async (req, res) => {
  try {
    console.log(req.params);
    const data = await pesanan_service.getByGuidPesanan({
      guid: req.params.guid,
    });
    console.log(data);
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const getStatusPesanan = async (req, res) => {
  try {
    const data = await pesanan_service.getStatusPesanan({
      status: req.params.status,
    });
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

const updatePesanan = async (req, res) => {
  try {
    req.body.updated_at = new Date();
    const data = await pesanan_service.updatePesanan(
      { guid: req.params.guid },
      req.body
    );
    response = { ...requestResponse.success, data };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }
  res.json(response);
};

module.exports = {
  inputPesanan,
  getPesanan,
  getByGuidPesanan,
  getStatusPesanan,
  updatePesanan,
};
