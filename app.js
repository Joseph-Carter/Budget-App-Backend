const express = require("express")
const app = express();
const transactions = require("./controllers/transactionsController")

app.use(express.json())
app.use(cors())



app.use("/transactions", transactions)

app.get("/", (req, res) => (
    res.send(`Welcome to the home page`)
))


module.exports = app;