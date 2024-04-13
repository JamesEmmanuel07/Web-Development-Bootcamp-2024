import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const fHeader = req.body['header'];
    const fTitle = req.body['title'];
    const fContent = req.body['content'];

    const data = {
        header: fHeader,
        title: fTitle,
        content: fContent
    }

    res.render("blog.ejs", data);
})

app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});