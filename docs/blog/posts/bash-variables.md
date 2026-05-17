# Tutoriel Bash : Variables et Tableaux

## Déclaration de variables

```bash
NOM="Alexandre"
AGE=35

# Utilisation
echo "Bonjour $NOM, vous avez $AGE ans"
```

## Tableaux

```bash
fruits=("pomme" "banane" "orange")
echo ${fruits[0]}          # premier élément
echo ${fruits[@]}          # tous les éléments
echo ${#fruits[@]}         # nombre d'éléments
```

Les variables sont la base du scripting Bash.