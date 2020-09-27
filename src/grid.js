export let arrayValues = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
]

let columnNumberRow =
    ' '.repeat(4) +
    ' ' +
    '1' +
    ' '.repeat(3) +
    '2' +
    ' '.repeat(3) +
    '3' +
    ' '.repeat(3) +
    '4' +
    ' '.repeat(3) +
    '5' +
    ' '.repeat(3) +
    '6' +
    ' '.repeat(3) +
    '7' +
    ' '.repeat(2)

let delimeterRow = ' '.repeat(3) + '+' + ('-'.repeat(3) + '+').repeat(7)

export const showArray = (array) => {
    console.log(columnNumberRow)
    console.log(delimeterRow)
    array.forEach((element, index) => {
        let stringRow = ` ${6 - index} |`
        for (let el of element) {
            stringRow += ` ${el} |`
        }
        console.log(stringRow)
        console.log(delimeterRow)
    })
    console.log(columnNumberRow)
}
