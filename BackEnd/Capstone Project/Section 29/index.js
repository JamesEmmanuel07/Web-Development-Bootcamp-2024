import ejs from "ejs"
import bodyParser from "body-parser"
import axios from "axios"
import express from "express"

const app = express();
const port = 3000;
const API_URL = "https://api.blockchain.com/v3/exchange";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { data: "Waiting for data..." });
})

app.post("/get-price", async (req, res) => {
    const crypto = req.body.crypto;
    const currency = req.body.currency;
    try {
        const result = await axios.get(API_URL + `/tickers/${crypto}-${currency}`)
        const data = result.data;
        res.render("index.ejs", { data })
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});