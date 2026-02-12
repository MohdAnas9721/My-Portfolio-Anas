function ok(res, message = "Success", data = null, code = 200) {
  return res.status(code).json({ success: true, message, data });
}

function fail(res, message = "Error", errors = null, code = 400) {
  return res.status(code).json({ success: false, message, errors });
}

module.exports = { ok, fail };