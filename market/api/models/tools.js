module.exports = {
    getContractNumber () {
        var min = 0;
        var max = 300;
        return getRandom(4) + '-' + getRandom(4);
    },
    getArticle () {
        return getRandom(6);
    }
};

function getRandom (count) {
    var result = "";
    for (var i = 0; i < count; i++) {
        result += Math.floor((Math.random() * 9) + 1);
    }
    return result;
}