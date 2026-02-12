const router = require("express").Router();
const { healthCheck } = require("../controllers/health.controller");
const { createContact } = require("../controllers/contact.controller");

router.get("/health", healthCheck);
router.post("/contact", createContact);

module.exports = router;