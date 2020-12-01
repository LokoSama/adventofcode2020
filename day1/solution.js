// That list is an example, test puzzle is way longer
// PART 1
// Store string as list of int
const stringList="1721\n" +
    "979\n" +
    "366\n" +
    "299\n" +
    "675\n" +
    "1456"

const list = stringList.split("\n").map((elt) => parseInt(elt, 10))

// Iterate over the list
let i = 0
let found = false

for (const l of list){
    if (found) break
    for (const l2 of list.slice(i)){
        if (l + l2 === 2020){
            console.log("RESULT PART 1: " + l*l2)
            found = true
            break;
        }
    }
    i++
}
// PART 2
i = 0
found = false

for (const l of list){
    if (found) break
    for (const l2 of list.filter(elt => elt !== l)){
        if (found) break
        for (const l3 of list.filter(elt => elt !== l && elt !==l2))
        if (l + l2 + l3 === 2020){
            console.log("RESULT PART 2: " + l*l2*l3)
            found = true
            break;
        }
    }
    i++
}
