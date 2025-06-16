const express = require("express");
const app = express();
const api__routes = require("./api_routes/api_routes");

const cors = require("cors")

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // This is where your React frontend is running
  methods: ["POST", "GET"],
  credentials: true,
}));

app.use("/api/user" , api__routes);

const port = 4000;
app.listen(port , () =>{
   console.log(`Connection Successful ${port}`);
});

module.exports = app