/* Student: Albena Indzheva
 *
 * Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects
 *
 */


function findSmallest(object) {
    var smallest = 'zzz';
    for (var property in object) {
        if (property<smallest) {
            smallest = property;
        }
    }
    console.log("The smallest lexicographically property in "+ object + " is "+smallest);
}
function findBiggest(object) {
    var biggest = 'aaa';
    for (var property in object) {
        if (property > biggest) {
            biggest = property;
        }
    }
    console.log("The biggest lexicographically property in " + object + " is " + biggest);
}

findSmallest(window);
findBiggest(window);
findSmallest(navigator);
findBiggest(navigator);
findSmallest(document);
findBiggest(document);