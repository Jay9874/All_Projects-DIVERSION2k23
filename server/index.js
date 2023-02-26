// Requiring all the packages
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const { connect } = require('http2');
const { readdirSync } = require("fs");

// Initializing the express application
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());


// On Backend Call at "/"
app.get("/", (req, res) => {
    res.send("DIVERSION 2K23 Project's API");
});

// For reading the routes in server/routes directory
// readdirSync("./routes").map((r) => app.use("/", require('./routes/' + r)));

// Routes 
const  user = require('./routes/user');
const project = require('./routes/all_pro');
const auth = require('./routes/auth');

// Use routes
app.use("/api", user);
app.use("/api", project);
app.use("/api", auth);

// Rest call response
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });



//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})