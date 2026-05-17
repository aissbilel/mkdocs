# Tutoriel : Configurer JFrog Artifactory

## Installation Docker (recommandé)

```bash
docker run --name artifactory -d \
  -p 8082:8082 \
  -v artifactory_data:/var/opt/jfrog/artifactory \
  releases-docker.jfrog.io/jfrog/artifactory-oss:latest
```

## Accès

- URL : http://localhost:8082
- Login : admin / password (généré au premier démarrage)

Artifactory est excellent pour les artefacts Maven, npm, Docker, PyPI, etc.