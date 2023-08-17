## Lancement de Vim
Pour lancer Vim, ouvrez votre terminal et tapez vim suivi du nom du fichier que vous souhaitez éditer. Par exemple : vim mon_fichier.txt.

## Modes de Vim
Vim possède plusieurs modes, dont les plus importants sont :

Mode Normal : C'est le mode par défaut lorsque vous lancez Vim. Vous pouvez naviguer, copier, coller, supprimer, etc.
Mode Insertion : Vous pouvez saisir du texte dans ce mode, comme dans n'importe quel éditeur de texte classique.
Mode Visuel : Vous pouvez sélectionner du texte pour le copier, le couper ou l'éditer.

## Naviguer dans le texte
Utilisez les touches h (gauche), j (bas), k (haut) et l (droite) pour naviguer en mode Normal.
Utilisez gg pour aller au début du fichier et G pour aller à la fin du fichier.
Pour déplacer le curseur par mots, utilisez w (mot suivant) et b (mot précédent).

## Changer de mode
Appuyez sur i pour passer en mode Insertion, où vous pouvez commencer à écrire du texte.
Revenez en mode Normal en appuyant sur Esc.

## Enregistrement et quitter
En mode Normal, utilisez :w pour enregistrer les modifications et :q pour quitter.
Utilisez :wq ou :x pour enregistrer et quitter en une seule commande.

## Annuler et rétablir
En mode Normal, utilisez u pour annuler l'action précédente.
Utilisez Ctrl + r pour rétablir ce que vous avez annulé.

## Sélection de texte
Passez en mode Visuel en appuyant sur v.
Sélectionnez le texte à l'aide des touches de déplacement (h, j, k, l).
Une fois le texte sélectionné, vous pouvez le copier avec y (yank), le couper avec d (delete), ou le coller avec p (paste).

##  Rechercher et remplacer
En mode Normal, utilisez / suivi du terme à rechercher, puis appuyez sur Entrée.
Utilisez n pour passer au résultat suivant et N pour passer au résultat précédent.
Pour remplacer, utilisez :%s/ancien/nouveau/g pour remplacer "ancien" par "nouveau" dans tout le fichier.

## Configuration de Vim
Créez un fichier ~/.vimrc pour personnaliser les paramètres de Vim.

Activer la numérotation des lignes
set number

Activer la coloration syntaxique
syntax enable

Utiliser des espaces pour l'indentation (4 espaces par exemple)
set expandtab
set tabstop=4
set shiftwidth=4

Activer la recherche incrémentielle pendant la saisie de la recherche
set incsearch

Activer la recherche sensible à la casse
set ignorecase
set smartcase

Activer la ligne de commande au bas de l'écran
vim
set ruler

Activer la numérotation des lignes dans le côté gauche de la fenêtre
vim
set relativenumber

Activer la sauvegarde automatique des fichiers de secours
set backup
