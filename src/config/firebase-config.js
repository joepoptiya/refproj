const admin = require("firebase-admin");
const serviceAccount = require(process.env.SERVICE_ACCOUNT_KEY_FILE);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

modules.exports = admin;
