const stringList = "1-3 a: abcde\n" +
    "1-3 b: cdefg\n" +
    "2-9 c: ccccccccc"

const list = stringList.split("\n")

// PART 1
function validateEntry(input) {
    const rule = input.split(":")[0]
    const letter = rule.split(" ")[1]
    const min = parseInt(rule.split("-")[0])
    const max = parseInt(rule.split(" ")[0].split("-")[1])
    const filterLetters = input.split(': ')[1].split('').filter( elt => elt === letter)
    return (filterLetters.length <= max && filterLetters.length >= min)
}
const validPasswords = list.filter(elt => validateEntry(elt))
console.log("PART1 : VALID PASSWORDS = " + validPasswords.length)

// PART2
function validateEntry2(input) {
    const rule = input.split(":")[0]
    const letter = rule.split(" ")[1]
    const pos1 = parseInt(rule.split("-")[0]) - 1
    const pos2 = parseInt(rule.split(" ")[0].split("-")[1]) - 1
    const letters = input.split(': ')[1].split('')
    return (letters[pos1] === letter && letters[pos2]!== letter)
        || (letters[pos1] !== letter && letters[pos2]=== letter)
}

const validPasswords2 = list.filter(elt => validateEntry2(elt))
console.log("PART2 : VALID PASSWORDS = " + validPasswords2.length)
