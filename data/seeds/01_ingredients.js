
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name: "egg", quantity: 2},
    {name: "bread", quantity: 2},
    {name: "cheddar cheese", quantity: 1}
  ])
};
