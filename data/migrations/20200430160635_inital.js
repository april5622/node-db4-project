
exports.up = async function(knex) {
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.float("quantity").notNull()
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.text("step").notNull()
    })

    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.integer("instructions_id")
            .references("id")
            .inTable("instructions")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })


    await knex.schema.createTable("recipes_ingredients", (table) => {
        table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("ingredient_id")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.primary(["recipe_id", "ingredient_id"])
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("recipes")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")

  
};
