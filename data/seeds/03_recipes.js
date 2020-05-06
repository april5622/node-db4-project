
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {name: "boiled eggs", instructions_id: 1 },
    {name: "grilled cheese", instructions_id: 2}
  ])
};
