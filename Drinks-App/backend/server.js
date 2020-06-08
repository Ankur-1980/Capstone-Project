const express = require("express");
const app = express();
const port = 3000;

const recipes = require("./routes/recipes");

app.use("/recipes", recipes);

app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.listen(port, () => console.log(`Listening on port: ${port}`));
