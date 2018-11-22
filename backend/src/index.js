require('dotenv').config();

const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO use extress middleware to hande coockies (JWT)
// TODO use extress middleware to populate current users


server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
}, deets => {
  console.log(`Server is running on http://localhost/${ deets.port }`);
});
