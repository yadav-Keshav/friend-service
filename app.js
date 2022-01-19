const express = require('express');
const cors = require('cors');
const cookieParser=require('cookie-parser');
const { sendFrienRequest } = require('./controller/friendController');
const friendRouter = require('./router/friendRouter');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.get("/ping", (req, res) => {
    res.status(200).send({ message: 'Server is Working' });
})

app.use("/friendservice",friendRouter);

app.get('*', (req, res) => {
    res.status(404).send({ message: 'Page not found' });
})

module.exports = app;