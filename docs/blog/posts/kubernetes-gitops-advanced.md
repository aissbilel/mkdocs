# Tutoriel Kubernetes : GitOps Avancé avec ArgoCD

## ApplicationSet (multi-cluster)

```yaml
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: multi-cluster-apps
spec:
  generators:
  - list:
      elements:
      - cluster: prod-eu
      - cluster: prod-us
  template:
    metadata:
      name: '{{cluster}}-app'
    spec:
      source:
        repoURL: https://github.com/org/gitops
```

ArgoCD + ApplicationSet = gestion de centaines d'applications sur plusieurs clusters.