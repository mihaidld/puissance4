import readlineSync from 'readline-sync'
import chalk from 'chalk'
import rules from './rules.js'
import help from './help.js'
import { arrayValues, showArray } from './grid.js'
import { checkHorizontal, checkVertical, checkDiagonal } from './checkWinner.js'

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
    let input = readlineSync.prompt({
        prompt: ` ${playerNow}> `,
    })
    switch (true) {
        //jouer
        case input.startsWith('put(') &&
            input.endsWith(')') &&
            input.length == 6:
            let columnNumber = input.slice(4, 5)
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
                columnNumber > 7 ||
                columnNumber < 1 ||
                columnNumber != Math.floor(columnNumber) ||
                !isFinite(columnNumber)
            ) {
                counter--
                console.log(
                    'veuillez rentrer un nombre de colonne valide entier entre 1 et 7'
                )
            }

            //mise à jour et affichage de la grille
            for (let i = 5; i >= 0; i--) {
                if (arrayValues[i][columnNumber - 1] === ' ') {
                    arrayValues[i].splice(columnNumber - 1, 1, tokenNow)
                    rowToken = i
                    break
                }
            }
            showArray(arrayValues)

            //vérification si le joueur en cours gagne
            if (checkHorizontal(arrayValues[rowToken], tokenNow) === tokenNow) {
                console.log(`${playerNow} gagne avec jeton ${tokenNow}`)
                isFinished = true
            }
            if (
                checkVertical(arrayValues, columnNumber - 1, tokenNow) ===
                tokenNow
            ) {
                console.log(`${playerNow} gagne avec jeton ${tokenNow}`)
                isFinished = true
            }
            if (checkDiagonal(arrayValues, tokenNow) === tokenNow) {
                console.log(`${playerNow} gagne avec jeton ${tokenNow}`)
                isFinished = true
            }

            //vérification si égalité
            if (counter === 42) {
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
