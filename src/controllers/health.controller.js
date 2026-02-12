const { ok } = require("../utils/apiResponse");

function healthCheck(req, res) {
  return ok(res, "API is running ✅", { time: new Date().toISOString() });
}

module.exports = { healthCheck };