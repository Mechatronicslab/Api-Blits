const mongoose = require("mongoose");
const collectionName = "users";

const userSchema = new mongoose.Schema(
  {
    guid: {
      type: String,
    },
    fullname: {
      type: String,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    no_telpon: {
      type: String,
    },
    alamat: {
      type: String,
    },
    role: {
      type: String,
    },
    created_at: {
      type: Date,
      default: new Date(),
    },
    updated_at: {
      type: Date,
      default: new Date(),
    },
  },
  {
    versionKey: false,
    collection: collectionName,
  }
);

module.exports = mongoose.model(collectionName, userSchema);
