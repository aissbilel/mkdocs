# Tutoriel : Docker Multi-Stage Builds

**Objectif** : Réduire la taille de vos images Docker et améliorer la sécurité.

## Pourquoi utiliser les multi-stage builds ?

Les builds multi-étapes permettent de séparer la phase de build de la phase d’exécution.

## Exemple complet

```dockerfile
# Stage 1 : Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Stage 2 : Production
FROM node:20-alpine
USER node
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]
```

## Avantages

- Image finale beaucoup plus légère
- Moins de vulnérabilités
- Meilleure sécurité (pas de outils de build en production)

C’est la méthode recommandée en 2026 pour tous vos projets Node.js, Python, Go, etc.