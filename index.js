require('dotenv').config()
const express = require('express')
const app = express()

const { initServer } = require("./core/server")

const port = process.env.PORT

initServer(app)
    .then(app => app.listen(port, () => console.log(`Example app started listening`)))