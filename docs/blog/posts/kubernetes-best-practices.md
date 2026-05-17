# Tutoriel Kubernetes : Bonnes Pratiques 2026

## Règles d'or

1. Toujours définir des **Resource Requests & Limits**
2. Utiliser des **Liveness & Readiness Probes**
3. Activer le **PodDisruptionBudget**
4. Utiliser des **NetworkPolicies**
5. Scanner les images (Trivy)
6. Activer l'audit logging

```yaml
resources:
  requests:
    cpu: "250m"
    memory: "512Mi"
  limits:
    cpu: "500m"
    memory: "1Gi"
```

Suivre ces pratiques rend vos clusters stables et sécurisés.