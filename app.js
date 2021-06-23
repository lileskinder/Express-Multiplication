const express = require("express");
const router = require("./routes");
const path = require("path");

const app = express();

app.set("port", 5050);

// app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);

const server = app.listen(app.get("port"), function () {
    const port = server.address().port;
    console.log("Listening to port ", port);
});
