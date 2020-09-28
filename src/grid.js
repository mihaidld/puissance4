//choisir le nombre de lignes, colonnes et jetons alignés (par défaut 6, 7 et 4) : des nombres entiers, maximum 40 colonnes et 99 lignes.
export const NUMBER_ROWS = 6
export const NUMBER_COLUMNS = 7
export const NUMBER_WINS = 4

//création de l'array 2D
export let arrayValues = []
let emptyCell = ' '

for (let i = 0; i < NUMBER_ROWS; i++) {
    arrayValues[i] = []
    for (let j = 0; j < NUMBER_COLUMNS; j++) {
        arrayValues[i][j] = emptyCell
    }
}

//création du string qui affiche les numéros de colonne avec un contenu différent si numéros de 2 chiffres pour gérer l'alignement
let columnNumberRow = ' '.repeat(2)
if (NUMBER_COLUMNS < 10) {
    for (let i = 0; i < NUMBER_COLUMNS; i++) {
        columnNumberRow = columnNumberRow + ' '.repeat(3) + (i + 1)
    }
} else {
    for (let i = 0; i < 9; i++) {
        columnNumberRow = columnNumberRow + ' '.repeat(3) + (i + 1)
    }
    for (let i = 9; i < NUMBER_COLUMNS; i++) {
        columnNumberRow = columnNumberRow + ' '.repeat(2) + (i + 1)
    }
}
columnNumberRow += ' '.repeat(2)

//création du string qui sépare les lignes
let delimeterRow =
    ' '.repeat(3) + '+' + ('-'.repeat(3) + '+').repeat(NUMBER_COLUMNS)

//fonction qui affiche l'array avec un contenu différent des numéros des lignes d'une ou de 2 chiffres pour gérer l'alignement
export const showArray = (array) => {
    console.log(columnNumberRow)
    console.log(delimeterRow)
    array.forEach((element, index) => {
        let stringRow = ''
        if (NUMBER_ROWS > 9) {
            index < NUMBER_ROWS - 9
                ? (stringRow += `${NUMBER_ROWS - index} |`)
                : (stringRow += ` ${NUMBER_ROWS - index} |`)
        } else {
            stringRow = ` ${NUMBER_ROWS - index} |`
        }
        for (let el of element) {
            stringRow += ` ${el} |`
        }
        console.log(stringRow)
        console.log(delimeterRow)
    })
    console.log(columnNumberRow)
}
