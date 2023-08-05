function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 100;
var singaras = bringSingara(200);
console.log(singaras);