const express = require("express")

const transactions = express.Router()

const transactionsData = require("../models/transactionsModel");

transactions.get("/", (req, res) => {
    res.json(transactionsData)
});


transactions.get("/:index", (req, res) => {
    const { index } = req.params;
    if(index >= 0 && index < transactionsData.length) {
        res.status(200).json(transactionsData[index])
    } else {
        res.redirect(404)
    }
});

transactions.post("/", (req, res) => {
    const newTransaction = req.body
    transactionsData.push(newTransaction)
    res.status(200).json(newTransaction)
})

transactions.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params 

    if(transactionsData[arrayIndex]) {
        const deletedTransaction = transactionsData.splice(arrayIndex, 1)
        console.log(deletedTransaction)
        res.status(200).json(deletedTransaction[0])
    } else {
        res.status(404).json({error: "Could not locate the transaction trying to be deleted."})
    }
});

transactions.put("/:updateIndex", (req, res) => {
    const { updateIndex } = req.params
    if(transactionsData[updateIndex]) {
        transactions[updateIndex] = req.body
        res.status(200).json((transactionsData[updateIndex]))
    } else {
        res.redirect(404)
    }
})

module.exports = transactions