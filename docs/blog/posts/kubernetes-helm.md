# Tutoriel Helm : Gestion des Charts Kubernetes

## Installation

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

## Commandes de base

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-nginx bitnami/nginx
helm upgrade my-nginx bitnami/nginx
helm list
```

Helm est le "package manager" de Kubernetes. Indispensable en production.