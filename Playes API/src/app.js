const express = require('express');

require('./db/connDb');  // This is the connection to the database


const router = require('./routers/routes');  // This is the router
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);



app.listen(port, () => console.log(`Server running on port ${port}`));