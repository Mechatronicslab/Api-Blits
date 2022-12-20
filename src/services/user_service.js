const bcrypt = require("bcrypt");
const { model } = require("mongoose");
const user_model = require("../models/user_model");
const { requestResponse, getRndInteger } = require("../utils");

let response;
const registrasi = async (data) => {
  const cekData = await user_model.findOne(
    { email: data.email },
    { _id: false },
    { lean: true }
  );

  if (cekData !== undefined && cekData !== null) {
    response = { ...requestResponse.unprocessable_entity };
    response.message = "Email ini sudah terdaftar.";
    return response;
  }

  const saltRounds = 12;
  const hashPassword = await bcrypt.hash(data.password, saltRounds);
  data.password = hashPassword;

  await user_model.create(data);

  return { ...requestResponse.success, data: user_model };
};

const getAllUser = async () => {
  return user_model.find({}, { _id: false }, { lean: true });
};

const getRoleAdmin = async (condition) => {
  return user_model.find(condition, { _id: false }, { lean: true });
};

const getRoleUser = async (condition) => {
  return user_model.find(condition, { _id: false }, { lean: true });
};

const getRoleDriver = async (condition) => {
  return user_model.find(condition, { _id: false }, { lean: true });
};

const userUpdate = async (condition, body) => {
  return user_model.updateOne(condition, body);
  // return model.findOne(condition, { _id: false }, { lean: true });
};

module.exports = {
  registrasi,
  getAllUser,
  getRoleAdmin,
  getRoleUser,
  getRoleDriver,
  userUpdate,
};
