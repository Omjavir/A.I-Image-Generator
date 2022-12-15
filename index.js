const express = require('express')
const path = require('path')
require('dotenv').config();
const port = process.env.PORT || 5000

const app = express();

// Middleware to enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Setting static folder for serving fronend files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`App listening on port ${port}`))