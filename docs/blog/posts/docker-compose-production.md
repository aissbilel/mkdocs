# Tutoriel : Docker Compose en Production

**Objectif** : Déployer une application complète avec Docker Compose de manière professionnelle.

## Fichier docker-compose.yml exemple

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Commandes essentielles

```bash
# Build et démarrage
 docker compose up -d --build

# Voir les logs
 docker compose logs -f web

# Arrêter tout
 docker compose down
```

Utilisez toujours des variables d’environnement pour les secrets et activez le restart policy.