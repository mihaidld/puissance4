import readlineSync from 'readline-sync'
import chalk from 'chalk'
import {
    NUMBER_ROWS,
    NUMBER_COLUMNS,
    NUMBER_WINS,
    arrayValues,
    showArray,
} from './grid.js'
import rules from './rules.js'
import help from './help.js'
import checkImpossible from './checkImpossible.js'
import { checkHorizontal, checkVertical, checkDiagonal } from './checkWinner.js'

//vérifier si partie impossible
checkImpossible()

//input des noms des joueurs avec readlineSync et attribution des jetons
let player1 = readlineSync.question('Joueur 1: Quel est votre nom ? ')
let tokenPlayer1 = chalk.red('O')
console.log(`${player1}: Votre jeton sera ${tokenPlayer1}`)
let player2 = readlineSync.question('Joueur 2: Quel est votre nom ? ')
let tokenPlayer2 = chalk.yellow('X')
console.log(`${player2}: Votre jeton sera ${tokenPlayer2}`)

//déclaration des variables globales
let counter = 0
let playerNow = ''
let tokenNow = ''
let rowToken = 0
let isFinished = false

//afficher la grille de départ
showArray(arrayValues)

while (!isFinished) {
    playerNow = counter % 2 === 0 ? player1 : player2
    tokenNow = counter % 2 === 0 ? tokenPlayer1 : tokenPlayer2
    //afficher le joueur en cours dans le prompt
    let input = readlineSync.prompt({
        prompt: ` ${playerNow}> `,
    })
    switch (true) {
        //jouer
        case input.startsWith('put(') &&
            input.endsWith(')') &&
            input.length <= 'put()'.length + 2:
            let columnNumber =
                input[5] === ')' ? input.slice(4, 5) : input.slice(4, 6)
            counter++

            //avertissement si la colonne est déjà remplie et n'est pas une colonne extérieure
            if (
                arrayValues[0][columnNumber - 1] !== ' ' &&
                arrayValues[0][columnNumber - 1] !== undefined
            ) {
                counter--
                console.log(
                    'la colonne est déjà remplie, choissisez une autre colonne svp'
                )
            }

            //avertissement si le nombre de colonne rentré n'est pas valide
            if (
                columnNumber > NUMBER_COLUMNS ||
                columnNumber < 1 ||
                columnNumber != Math.floor(columnNumber) ||
                !isFinite(columnNumber)
            ) {
                counter--
                console.log(
                    `veuillez rentrer un nombre de colonne valide entier entre 1 et ${NUMBER_COLUMNS}`
                )
            }

            //mise à jour et affichage de la grille
            for (let i = NUMBER_ROWS - 1; i >= 0; i--) {
                if (arrayValues[i][columnNumber - 1] === ' ') {
                    arrayValues[i].splice(columnNumber - 1, 1, tokenNow)
                    rowToken = i
                    break
                }
            }
            showArray(arrayValues)

            //vérification si le joueur en cours gagne
            if (checkHorizontal(arrayValues[rowToken], tokenNow) === tokenNow) {
                console.log(
                    `${playerNow} gagne sur l'horizontale avec jeton ${tokenNow}`
                )
                isFinished = true
            }
            if (
                checkVertical(arrayValues, columnNumber - 1, tokenNow) ===
                tokenNow
            ) {
                console.log(
                    `${playerNow} gagne sur la verticale avec jeton ${tokenNow}`
                )
                isFinished = true
            }
            if (checkDiagonal(arrayValues, tokenNow) === tokenNow) {
                console.log(
                    `${playerNow} gagne en diagonale avec jeton ${tokenNow}`
                )
                isFinished = true
            }

            //vérification si égalité
            if (counter === NUMBER_ROWS * NUMBER_COLUMNS) {
                console.log("Il n'y a plus d'emplacements, la partie est nulle")
                isFinished = true
            }
            break

        //consulter les règles de jeu
        case input === 'rules':
            rules()
            break

        //consulter les commandes disponibles
        case input === 'help':
            help()
            break

        //consulter le jeton du joueur en cours
        case input === 'whoami':
            console.log(`${playerNow} qui joue avec ${tokenNow}`)
            break

        //abandon
        case input === 'abandon':
            playerNow === player1
                ? console.log(`${player2} a gagne puisque ${player1} abandonne`)
                : console.log(`${player1} a gagne puisque ${player2} abandonne`)
            isFinished = true
            break

        //autres commandes non prises en charge
        default:
            console.log(
                `commande non reconnue, veuillez taper ${chalk.italic('help')}`
            )
    }
}
