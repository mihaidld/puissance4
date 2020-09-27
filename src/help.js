import chalk from 'chalk'
import { NUMBER_COLUMNS } from './grid.js'

//fonction qui affiche les commandes disponibles
const help = () => {
    console.log(`les commandes suivantes sont disponibles :

    ${chalk.italic(
        'put(nombre)'
    )} => Mettre un jeton du joueur en cours dans la colonne nombre (le nombre est entier entre 1 et ${NUMBER_COLUMNS}, ex. 1)
    ${chalk.italic('rules')} => Affiche la régle du jeu.
    ${chalk.italic(
        'help'
    )} => Affiche la liste de toutes les commandes disponibles.
    ${chalk.italic('whoami')} => Affiche le jeton correspondant à ce joueur.
    ${chalk.italic(
        'abandon'
    )} => le joueur en cours abandonne et l'autre joueur est déclaré vainqueur.
`)
}
export default help
