# Tutoriel Kubernetes : Stockage (PV, PVC, StorageClass)

## PersistentVolumeClaim

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: standard
```

Utilisez toujours des StorageClass dynamiques en production (AWS EBS, GCP PD, Azure Disk).