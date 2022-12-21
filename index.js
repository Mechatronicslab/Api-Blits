require("dotenv").config();
const http = require("https");
const HttpsServer = require("./src/config")
const app = require("./src/app");
const logger = require("./src/utils/logger");

const server = http.createServer(HttpsServer.credentials,app);

server.listen(process.env.PORT, () => {
  logger.info(`Server started on port ${process.env.PORT}`);
});
