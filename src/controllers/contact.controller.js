const Contact = require("../models/Contact.model");
const { ok, fail } = require("../utils/apiResponse");
const { validateContact } = require("../validations/contact.validation");

async function createContact(req, res, next) {
  try {
    const { isValid, errors, cleaned } = validateContact(req.body);
    if (!isValid) return fail(res, "Validation failed", errors, 400);

    const doc = await Contact.create(cleaned);
    return ok(res, "Message received ✅", { id: doc._id }, 201);
  } catch (err) {
    next(err);
  }
}

module.exports = { createContact };