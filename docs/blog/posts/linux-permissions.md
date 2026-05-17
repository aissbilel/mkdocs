# Tutoriel Linux : Gestion des permissions et utilisateurs

## Commandes clés

```bash
chmod 755 fichier     # Permissions rwxr-xr-x
chown user:group fichier
useradd -m nomuser
passwd nomuser
usermod -aG sudo nomuser
```

## Comprendre les permissions

- r = lecture (4)
- w = écriture (2)
- x = exécution (1)

Exemple : `chmod 644` = rw-r--r--

Toujours utiliser le principe du moindre privilège.