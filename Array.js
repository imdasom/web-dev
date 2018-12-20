function concat() {
    var items = [];
    function addItem(item) {
        if(Array.isArray(item)) {
            item.forEach(function(item) {
                addItem(item);
            });
        } else {
            items.push(item);
        }
    }   
    Array.from(arguments).forEach(function(argument) {
        addItem(argument);   
    });
    return items;
}

var actual1 = concat(1, 2, 3, 4, 5);
console.log(actual1);
var actual2 = concat([1, 2, 3], [4, 5]);
console.log(actual2);
var actual3 = concat([1, 2, 3], [4, [5]]);
console.log(actual3);
var expected = [1, 2, 3, 4, 5];
console.log(expected);