const lowerCaseWords = (arr) => { return new Promise(function (resolve, reject) {
        var check = arr.filter(e => typeof e === 'string' && e !== '')
        var lastcheck = [];
        for (var x = 0; x < check.length; x++) {
            lastcheck.push(check[i].toLowerCase());
        }
        resolve(lastcheck);
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
lowerCaseWords(mixedArray)
console.log(lastcheck)
