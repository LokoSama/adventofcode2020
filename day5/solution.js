const stringList = "BFFFBBFRRR\n" +
    "FFFBBBFRRR\n" +
    "BBFFBBFRLL"

const list = stringList.split("\n")

// PART 1
function computePower(str, upperChar){
    let result = 0
    let index = 0
    for (const char of str){
        result += (char === upperChar) * Math.pow(2,(str.length - index - 1))
        index ++
    }
    return result
}


function computeId(boarding) {
    const column = computePower(boarding.slice(-3),'R')
    const row = computePower(boarding.slice(0, -3),'B')
    return row * 8 + column
}

const sorted = list.sort(function (a, b) {
    return computeId(b) - computeId(a);
})

console.log("PART1 RESULT : " + computeId(sorted[0]))

// PART2
let seats = [];
for (let i = sorted[sorted.length-1]; i <= sorted[0]; i++) {
    seats.push(i);
}
const computedSort = sorted.map((elt) => computeId(elt))
let found = false
let i = 0
while (!found){
    if (computedSort[i]-computedSort[i+1] !== 1){
        found = true
    }
    i++
}

console.log("PART2 :" + (computedSort[i] + 1))
