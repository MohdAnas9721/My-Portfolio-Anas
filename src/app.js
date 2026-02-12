const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: false }));
app.use(express.json());

// 👇 YE LINE ADD KI
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Portfolio Backend ✅"));
app.use("/api", routes);

app.use(errorMiddleware);

module.exports = app;