const express = require('express')
const app = express()


// const http = require('http')
// require('./config/dbconnection.js')


// const router = express.Router()
// const port = 8488

app.get('/', (req, res) => {
// res.render("reactmainpage")
res.send('Invoicing App')
})

// app.set('port', 8488)

app.listen(8488, () => {
    console.log(`listening on port 8488!`)
})

module.exports = app

// app.use('/invoiceapp', require('controllers/myapp'))