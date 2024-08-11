const cors = require('cors');

const corsMiddleware = cors({
    origin: 'http://localhost:5173',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type',
    credentials: true,
});

module.exports = corsMiddleware;
