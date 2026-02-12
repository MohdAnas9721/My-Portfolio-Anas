function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContact(payload = {}) {
  const errors = {};
  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();

  if (!name) errors.name = "Name is required";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters";

  if (!email) errors.email = "Email is required";
  else if (!isValidEmail(email)) errors.email = "Email is invalid";

  if (!message) errors.message = "Message is required";
  else if (message.length < 5) errors.message = "Message must be at least 5 characters";

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    cleaned: { name, email, message }
  };
}

module.exports = { validateContact };