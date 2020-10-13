const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config();


//DB
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to DB")
);

//Routes
const authRoute = require('./routes/auth');

//Middleware
app.use(express.json());


//Route Middleware
app.use('/api/user', authRoute);

//qN7X1xsktvPLf5IR

app.listen(3000, () => console.log("Server listening on port 3000"))
