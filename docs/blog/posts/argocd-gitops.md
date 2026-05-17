---
date: 2026-05-21
title: GitOps avec ArgoCD — Le standard 2026
categories:
  - GitOps
  - Kubernetes
tags:
  - argocd
  - gitops
authors:
  - Alexandre Martin
---

# GitOps avec ArgoCD

ArgoCD est devenu le standard de facto pour le GitOps sur Kubernetes.

## Points clés

- **ApplicationSet** pour gérer des centaines d’applications
- **App of Apps** pattern
- Intégration native avec **Kustomize** et **Helm**
- **Resource Health** et **Sync Waves**

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
spec:
  source:
    repoURL: https://github.com/org/repo
    path: k8s/overlays/prod
  destination:
    server: https://kubernetes.default.svc
    namespace: default
```

Le GitOps rend vos déploiements prévisibles, auditables et reproductibles.