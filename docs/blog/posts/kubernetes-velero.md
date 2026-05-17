# Tutoriel Kubernetes : Sauvegarde et Disaster Recovery avec Velero

## Installation

```bash
velero install \
  --provider aws \
  --bucket my-backup-bucket \
  --secret-file ./credentials-velero
```

## Sauvegarde d'un namespace

```bash
velero backup create my-backup --include-namespaces production
velero restore create --from-backup my-backup
```

Velero est l'outil standard pour la résilience et la migration de clusters.