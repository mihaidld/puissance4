export const checkHorizontal = (array, value) => {
    for (let i = 0; i <= 3; i++) {
        if (value.repeat(4) === array.slice(i, i + 4).join('')) {
            return value
        }
    }
}

export const checkVertical = (arrayOfArrays, column, value) => {
    for (let i = 0; i <= 2; i++) {
        if (
            value.repeat(4) ===
            arrayOfArrays[i][column] +
                arrayOfArrays[i + 1][column] +
                arrayOfArrays[i + 2][column] +
                arrayOfArrays[i + 3][column]
        ) {
            return value
        }
    }
}
export const checkDiagonal = (arrayOfArrays, value) => {
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 3; j++) {
            if (
                value.repeat(4) ===
                arrayOfArrays[i][j] +
                    arrayOfArrays[i + 1][j + 1] +
                    arrayOfArrays[i + 2][j + 2] +
                    arrayOfArrays[i + 3][j + 3]
            ) {
                return value
            }
        }
    }
    for (let i = 0; i <= 2; i++) {
        for (let j = 3; j <= 6; j++) {
            if (
                value.repeat(4) ===
                arrayOfArrays[i][j] +
                    arrayOfArrays[i + 1][j - 1] +
                    arrayOfArrays[i + 2][j - 2] +
                    arrayOfArrays[i + 3][j - 3]
            ) {
                return value
            }
        }
    }
}
