const { fail } = require("../utils/apiResponse");

function errorMiddleware(err, req, res, next) {
  console.error("❌ Error:", err);
  const code = err.statusCode || 500;
  return fail(res, err.message || "Server error", null, code);
}

module.exports = errorMiddleware;