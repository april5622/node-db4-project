
exports.seed = async function(knex) {
  await knex("instructions").insert([
    {step: "boil it for 7 minutes"},
    {step: "grill it on a frying pan for 3 minutes each on both side"}
  ])
};
