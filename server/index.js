// Requiring all the packages
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// Initializing the express application
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json({limit: '25mb'}));
// app.use(express.urlencoded({limit: '25mb'}));
// app.use(express.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(cors());

app.use(express.static(path.join(__dirname, "../client", "build")));




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
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });



//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})