import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("<h1>Hello, Planet</h1>")
});

app.get("/about", (req, res) => {
	res.send("<h3>About Me</h3>")
});

app.get("/contact", (req, res) => {
	res.send("<h3>Contact:</h3> <p>+4492962372</p>")
});

app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});