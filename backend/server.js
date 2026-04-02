const express = require("express");
const cors = require("cors");
const systemRoutes = require("./routes/systemRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/systems", systemRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});