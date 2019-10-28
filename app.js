// Import our environment variables and make sure they are all up to standard
require('dotenv').config({ path: `${__dirname}/.env` })
require('dotenv-safe').config({ path: `${__dirname}/.env.example` })

// Import our packages
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Configure express
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.set('port', process.env.API_PORT)

// Set up our app route
const path = require('path')
global.appRoot = path.resolve(__dirname)

// Initialize firebase
global._firebase = require('./libs/firebase.js')

// Start our server
app.use('/api/v1', require('./v1/router'))
app.listen(app.get('port'), () => console.log(`API server started on http://locahost:${app.get('port')}`))
