const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const recipes = require("./routes/recipes");
const users = require("./routes/users");

// things coming from front end will be secure
app.use(express.urlencoded({ extended: false }));
// be able to read json
app.use(express.json());
//
app.use(express.static(__dirname + "/public"));

// where to send information from the front end to the back end
app.use("/users", users);
app.use("/recipes", recipes);

// starting the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
