# Tutoriel Bash : Boucles et Conditions

## If / Else

```bash
if [ $AGE -gt 18 ]; then
  echo "Adulte"
else
  echo "Mineur"
fi
```

## Boucle for

```bash
for i in {1..5}; do
  echo "Itération $i"
done

for fruit in "${fruits[@]}"; do
  echo "J'aime les $fruit"
done
```

## Boucle while

```bash
count=1
while [ $count -le 5 ]; do
  echo $count
  ((count++))
done
```

Maîtrisez ces structures pour automatiser n'importe quelle tâche.