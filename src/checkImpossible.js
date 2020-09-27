import { NUMBER_ROWS, NUMBER_COLUMNS, NUMBER_WINS } from './grid.js'

const checkImpossible = () => {
    //partie impossible si le nombre de jetons à aligner supérieur au nombre de colonnes et de lignes
    if (NUMBER_WINS > Math.max(NUMBER_ROWS, NUMBER_COLUMNS)) {
        console.log(
            'veuillez réduire la valeur de NUMBER_WINS dans le fichier grid.js qui doit etre inférieure au nombre de colonnes ou de lignes'
        )
        process.exit(1)
    }

    //partie impossible si le nombre de jetons à aligner, de colonnes ou de lignes n'est pas valide
    if (
        !isFinite(NUMBER_ROWS) ||
        !isFinite(NUMBER_COLUMNS) ||
        !isFinite(NUMBER_WINS) ||
        Math.floor(NUMBER_ROWS) != NUMBER_ROWS ||
        Math.floor(NUMBER_COLUMNS) != NUMBER_COLUMNS ||
        Math.floor(NUMBER_WINS) != NUMBER_WINS
    ) {
        console.log(
            'veuillez choisir des nombres entiers pour les lignes, les colonnes ou les jetons à aligner dans le fichier grid.js.'
        )
        process.exit(1)
    }
}
export default checkImpossible
