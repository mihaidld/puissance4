const help = () => {
    console.log(`les commandes suivantes sont disponibles :

put(nombre) => Mettre un jeton du joueur en cours dans la colonne nombre (le nombre est entier entre 1 et 7, ex. 1)
rules => Affiche la régle du jeu.
help => Affiche la liste de toutes les commandes disponibles.
whoami => Affiche le jeton correspondant à ce joueur.
abandon => le joueur en cours abandonne et l'autre joueur est déclaré vainqueur.
`)
}
export default help
