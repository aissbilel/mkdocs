# Tutoriel Bash : Script de Sauvegarde Automatique

```bash
#!/bin/bash

BACKUP_DIR="/backup/$(date +%Y%m%d)"
SOURCE="/var/www"

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/www.tar.gz $SOURCE

echo "Sauvegarde terminée : $BACKUP_DIR"
```

## Ajouter à cron

```bash
0 2 * * * /usr/local/bin/backup.sh
```

Automatisez vos sauvegardes avec Bash en quelques lignes.