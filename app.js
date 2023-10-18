const express = require("express")
const app = express();
const cors = require("cors")
const transactions = require("./controllers/transactionsController")

app.use(cors())
app.use(express.json())


app.use("/transactions", transactions)

app.get("/", (req, res) => (
    res.send(`Welcome to the home page`)
))

app.get("/404", (req, res) => {
    res.send(`Sorry, the page you are trying to access does not exist.`)
})


module.exports = app;