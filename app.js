// const express = require("express");
// const app = express();
// const port = process.env.PORT || 5000;
// const dotenv = require("dotenv");
// const cors = require("cors"); // Import the cors package

// dotenv.config();
// dotenv.config({ path: "./config.env" });
// require("./dbConnection");

// app.use(express.json());
// app.use(cors()); // Use the cors middleware

// app.use(require("./router/fetchInfo"));

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// development changes
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors package

dotenv.config();
dotenv.config({ path: "./config.env" });
require("./dbConnection");

app.use(express.json());
app.use(cors()); // Use the cors middleware

app.use(require("./router/fetchInfo"));

// Serve static files
app.use(express.static(path.join(__dirname, "./dashboard/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./dashboard/build", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
