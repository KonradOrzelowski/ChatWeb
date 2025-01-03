const express = require("express");
const http = require("http");
const cors = require("cors");

const getListsRouting = require("./routes/get_lists_routing");
const conversationsRouting = require("./routes/conversations_routing");
const refresh = require("./routes/refresh")
const app = express();

app.use(express.json());
app.use(cors());

app.use(getListsRouting);
app.use(conversationsRouting);
app.use(refresh);

app.get("/", (req, res) => {
    res.status(200).send("Server is running");
});

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
