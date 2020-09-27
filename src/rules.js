import chalk from 'chalk'

const rules = () => {
    console.log(chalk.bold.underline('Présentation générale :'))
    console.log(
        `Le jeu puissance 4 est un jeu de société à la fois simple mais demandant un minimum de stratégie.
Via la ligne de commande 2 joueurs s'affrontent tour à tour en plaçant leurs jetons sur la grille dans une des colonnes de leur choix qui n'est pas encore remplie.
Le jeton tombe alors en bas de la colonne.
Il y a autant de tours qu'il y a d'emplacements sur la grille.
Par défaut nous utiliserons une grille de 6 lignes sur 7 colonnes.`
    )
    console.log(chalk.bold.underline('Commencer une partie :'))
    console.log(
        'Au lancement du jeu, le programme demandera au joueur 1 de renseigner son nom. Ses jetons seront des ' +
            chalk.red('O') +
            ' de couleur ' +
            chalk.red('rouge') +
            '.'
    )
    console.log(
        'Ensuite le joueur 2 devra renseigner son nom. Ses jetons seronts des ' +
            chalk.yellow('X') +
            ' de couleur ' +
            chalk.yellow('jaune')
    )
    console.log(`Ensuite la partie peut débuter.`)
    console.log(chalk.bold.underline('Déroulement de la partie :'))
    console.log(`Sous la grille un prompt invitera le joueur en cours à rentrer une des commandes suivantes:
 ${chalk.italic(
     'put(1)'
 )} => Mettre un jeton du joueur en cours dans la colonne 1.
 ${chalk.italic('rules')}  => Afficher les règles du jeu.
 ${chalk.italic(
     'help'
 )} => Afficher la liste de toutes les commandes disponibles.
 ${chalk.italic(
     'whoami'
 )} => Afficher le jeton correspondant au joueur en cours.
 ${chalk.italic(
     'abandon'
 )} => Le joueur en cours abandonne et l'autre joueur est déclaré vainqueur.`)
    console.log(chalk.bold.underline('Comment gagner la partie :'))
    console.log(`La partie se terminera lorsqu'un joueur alignera 4 jetons (horizontalement, verticalement, ou en diagonale). 
Si tous les jetons ont été joués sans alignements, à ce moment la partie sera déclarée comme nulle.
`)
}
export default rules
