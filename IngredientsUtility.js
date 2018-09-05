var fs = require('fs');
var data = fs.readFileSync('Recipes.json', 'utf-8');
json = JSON.parse(data);
var recipeList = json;
var State  = require('./CookingState.js');
var combinedIngredients = recipeList.map(function (val) {
    return val.ingredients;

}).reduce(function (pre, cur) {
    return pre.concat(cur);

}).map(function (e) {
    return e
})

var allIngredients = combinedIngredients;
function remove_duplicates(allIngredients) {
    var obj = {};
    var return_array = [];

    for (var i = 0; i < allIngredients.length; i++) {
        obj[allIngredients[i]] = true;
    }
    for (var key in obj) {
        return_array.push(key);
    }
    return return_array;
}

allIngredients = remove_duplicates(allIngredients);

module.exports = State;
