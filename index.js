const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000

const app = express();

// Middleware to enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`App listening on port ${port}`))