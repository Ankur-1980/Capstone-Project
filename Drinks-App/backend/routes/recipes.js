const recipes = require("express").Router();
const database = require("../services/connection");

recipes.get("/", (req, res) => {
  database.query("SELECT * FROM saved_recipes_api").then((result) => {
    res.status(200).json({ message: "Fetched Items", items: result.rows });
  });
});

recipes.post("/", (req, res) => {
  let {
    idDrink,
    strDrink,
    strGlass,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strInstructions,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
  } = req.body;

  database
    .query(
      "INSERT INTO saved_recipes_api (saved_id,id_drink,drink_name,glassware,ingredient1,ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, instructions, measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8, measure9, measure10, measure11, measure12, measure13, measure14, measure15, user_id) VALUES(uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7,$8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, null)",
      [
        idDrink,
        strDrink,
        strGlass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strInstructions,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
      ]
    )
    .then(() => {
      database.query("SELECT * FROM saved_recipes_api").then((response) => {
        // console.log(response.rows);

        res.status(201).json({ message: "Item Added", items: response.rows });
      });
    });
});

recipes.delete("/:id", (req, res) => {
  console.log(req.params.id);

  database
    .query(`DELETE FROM saved_recipes_api WHERE id_drink=$1`, [req.params.id])
    .then(() => {
      database.query("SELECT * FROM saved_recipes_api").then((response) => {
        res.status(200).json({ message: "Item Deleted", items: response.rows });
      });
    });
});

recipes.post("/created", (req, res) => {
  console.log(req.body);

  let {
    name,
    glassware,
    method,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6,
    ingredient7,
    ingredient8,
    amount1,
    amount2,
    amount3,
    amount4,
    amount5,
    amount6,
    amount7,
    amount8,
  } = req.body;

  database
    .query(
      "INSERT INTO saved_recipes_api (saved_id,id_drink,drink_name,glassware,ingredient1,ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, instructions, measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8) VALUES(uuid_generate_v4(), uuid_generate_v4(), $1, $2, $4, $5,$6,$7,$8,$9,$10,$11, $3, $12, $13, $14, $15, $16, $17, $18, $19)",
      [
        name,
        glassware,
        method,
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
        ingredient5,
        ingredient6,
        ingredient7,
        ingredient8,
        amount1,
        amount2,
        amount3,
        amount4,
        amount5,
        amount6,
        amount7,
        amount8,
      ]
    )
    .then(() => {
      database.query("SELECT * FROM saved_recipes_api").then((response) => {
        // console.log(response.rows);

        res.status(201).json({ message: "Item Added", items: response.rows });
      });
    });
});

module.exports = recipes;
