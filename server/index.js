const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getCongradulated, getEncouragement } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/congradulations", getCongradulated);
app.get("/api/encouragement", getEncouragement);


app.listen(4000, () => console.log("Server running on 4000"));
