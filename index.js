const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

const port = process.env.PORT || 8080;
const mongo = process.env.MONGO;


mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology:  true
});

app.use(express.json());
app.use(routes);
app.get("/banana", function(req, res) {
    res.send("hello world");
});
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;