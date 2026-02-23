const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const routes = require("./routes/index.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();
const frontendDist = path.resolve(__dirname, "../../frontend/dist");
const frontendIndex = path.join(frontendDist, "index.html");
const hasFrontendBuild = fs.existsSync(frontendIndex);
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: clientOrigin, credentials: false }));
app.use(express.json());

if (hasFrontendBuild) {
  app.use(express.static(frontendDist));
}

app.get("/", (req, res) => {
  if (hasFrontendBuild) {
    return res.sendFile(frontendIndex);
  }
  return res.send("Portfolio Backend API running");
});

app.use("/api", routes);

app.use(errorMiddleware);

module.exports = app;
