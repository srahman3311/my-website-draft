const express = require("express");
const ejs = require("ejs");

const app = express();


// Static Files
app.use(express.static(__dirname + "/public/"));



// View Engine
app.set("view engine", "ejs");






app.get("/", (req, res) => {
    res.render("home");
});








const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
















