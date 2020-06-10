const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const recipes = require("./routes/recipes");
const users = require("./routes/users");

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use("/users", users);
app.use("/recipes", recipes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
