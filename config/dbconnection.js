const mongoose = require('mongoose')


mongoose.connect("", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log("Mongodb connection has been made")
}).on("error", err => {
    console.log("Mongo connection error:", err)
})