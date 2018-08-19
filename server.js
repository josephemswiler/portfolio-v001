const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const router = require("express").Router();

app.use(express.static('./build'))

app.listen(PORT, () => console.log(`🚀 Listening on port ${PORT}`))
