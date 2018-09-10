class MUtility {
    matchList(matchesExport) {
        this.matchesExport = matchesExport;
        var fs = require('fs');
        var data = fs.readFileSync('Recipes.json', 'utf-8');
        var json = JSON.parse(data);
        var recipeList = json;

        var matchNames = recipeList.map(function(val){
            return val.name;
        })
        return matchNames;

    }
}
module.exports = MUtility;