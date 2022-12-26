/*
function double(arr) {
    let results = []
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            results.push(arr[i] * 2)
        }
    }
    return results
}
*/

function double(arr) {
    return arr.filter(param => typeof param === 'number')
                .map(number => number * 2)
}
/*
function filterCats(cats) {
    let results = []

    for(let i = 0; i < cats.length; i++) {
        const cat = cats[i]
        if (cat &&
            cat.colors.includes('gray') &&
            cat.ear === 'unfolded') {
                results.push(cat.name)
            }
    }
}
*/

function filterCats(cats) {
    return cats.fillter(cat => cat &&
        cat.colors.includes('black') &&
        cat.ear === 'unfolded'
        ).map(cat => cat.name)
}

document.querySelector('body').innerHTML = double([3, 4, 'a', 5, 'undefined', null, 11])