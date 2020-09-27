import { NUMBER_ROWS, NUMBER_COLUMNS, NUMBER_WINS } from './grid.js'

//fonction qui vérifie si on gagne sur l'horizontale
export const checkHorizontal = (array, value) => {
    for (let i = 0; i <= NUMBER_COLUMNS - NUMBER_WINS; i++) {
        if (
            value.repeat(NUMBER_WINS) ===
            array.slice(i, i + NUMBER_WINS).join('')
        ) {
            return value
        }
    }
}

//fonction qui vérifie si on gagne sur la verticale
export const checkVertical = (arrayOfArrays, column, value) => {
    for (let i = 0; i <= NUMBER_ROWS - NUMBER_WINS; i++) {
        for (let j = 0, stringWinVert = ''; j < NUMBER_WINS; j++) {
            stringWinVert += arrayOfArrays[i + j][column]
            if (value.repeat(NUMBER_WINS) === stringWinVert) return value
        }
    }
}

//fonction qui vérifie si on gagne en diagonale directions NO-SE et NE-SO
export const checkDiagonal = (arrayOfArrays, value) => {
    for (let i = 0; i <= NUMBER_ROWS - NUMBER_WINS; i++) {
        for (let j = 0; j <= NUMBER_COLUMNS - NUMBER_WINS; j++) {
            for (let k = 0, stringWinDiag = ''; k < NUMBER_WINS; k++) {
                stringWinDiag += arrayOfArrays[i + k][j + k]
                if (value.repeat(NUMBER_WINS) === stringWinDiag) return value
            }
        }
    }

    for (let i = 0; i <= NUMBER_ROWS - NUMBER_WINS; i++) {
        for (let j = NUMBER_WINS - 1; j < NUMBER_COLUMNS; j++) {
            for (let k = 0, stringWinDiag = ''; k < NUMBER_WINS; k++) {
                stringWinDiag += arrayOfArrays[i + k][j - k]
                if (value.repeat(NUMBER_WINS) === stringWinDiag) return value
            }
        }
    }
}
