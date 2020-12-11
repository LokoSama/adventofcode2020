fs = require('fs');

//const list = fs.readFileSync('./input.txt', 'utf-8')
const list = fs.readFileSync('./puzzleinput.txt', 'utf-8')

// PART 1
const groups = list.split("\n\n") // [ abc\nabc,

function computeGroupAnswers(group){
    const letters = group.split("")
    const noDuplicates = Array.from(new Set(letters)).filter(l => l !== '\n')
    return noDuplicates.length
}

let result = 0
groups.forEach(elt => result += computeGroupAnswers(elt))
console.log("PART1 RESULT : " + result)

// PART2

function computeGroupAnswers2(group){
    const persons = group.split("\n").filter(elt => elt)
    let presentLetters = persons[0].split("") //abc
    let i = 1
    while(presentLetters !== [] && i < persons.length){
        for (const letter of presentLetters){
            if (!persons[i].split("").includes(letter)){
                presentLetters = presentLetters.filter(elt => elt !== letter)
            }
        }
        i++
    }
    return presentLetters.length
}
result = 0
groups.forEach(elt => result += computeGroupAnswers2(elt))
console.log("PART2 RESULT : " + result)
