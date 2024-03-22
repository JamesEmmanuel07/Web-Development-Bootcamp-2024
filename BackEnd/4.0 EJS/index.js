import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server started at https://localhost:${port}`);
})

app.get("/", (req, res) => {
    var currentDate = new Date();
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        const data = {
            day: 'the weekend',
            activity: 'have fun'
        };
        res.render(__dirname + "/views/index.ejs", data);
    } 
    else {
        const data = {
            day: 'a weekday',
            activity: 'work hard'
        };
        res.render(__dirname + "/views/index.ejs", data);
    }   
});