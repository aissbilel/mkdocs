# Tutoriel Python : Administration Système

Python est excellent pour l'automatisation Linux.

## Exemple : Lister les processus

```python
import psutil

for proc in psutil.process_iter(['pid', 'name']):
    print(proc.info)
```

## Gérer les fichiers

```python
import os

# Créer un dossier
os.makedirs('/tmp/mon_dossier', exist_ok=True)

# Écrire un fichier
with open('/tmp/test.txt', 'w') as f:
    f.write('Hello from Python!')
```

Python + Linux = puissance infinie pour les scripts d'administration.