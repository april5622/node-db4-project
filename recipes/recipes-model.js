const db = require("../data/config")

function getRecipes(){
    return db('recipes')
}

//ingredients & quantities
function getShoppingList(recipe_id){
    return db('ingredients as i', 'quantities as q')
    .join('recipes as r', 'r.id', 'i.id', 'q.id')
    .select()
}

function getInstructions(recipe_id){

}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}