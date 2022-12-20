let driver_models = require("../models/driver_model");
let pesanan_models = require("../models/pesanan_model");
const { requestResponse } = require("../utils");

const inputDriver = async (data) => {
  console.log(data);
  await driver_models.create(data);

  return { ...requestResponse.success, data: driver_models };
};

const getDriver = async () => {
  return driver_models.find({}, { _id: false }, { lean: true });
};

const getByGuidDriver = async (condition) => {
  return driver_models.findOne(condition, { _id: false }, { lean: true });
};

const updateDriver = async (condition, body) => {
  // console.log(body);
  console.log(body);
  if (body.id_pesanan !== null) {
    await pesanan_models.updateOne(body);
    // console.log("ada");
  }
  return await driver_models.updateOne(condition, body);
  // return model.findOne(condition, { _id: false }, { lean: true });
};

const getCount = async (condition) => {
  return pesanan_models.find(condition).count();
};

module.exports = {
  inputDriver,
  getDriver,
  getByGuidDriver,
  updateDriver,
  getCount,
};
