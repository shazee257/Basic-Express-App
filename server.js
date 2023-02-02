const express = require('express');
const app = express();

const dbConnect = require('./config/dbConnect');
require('dotenv').config();
const userApi = require('./api/user');

const PORT = 5000;

dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("req.body", req.body);
    next();
});

app.use("/users", userApi);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


