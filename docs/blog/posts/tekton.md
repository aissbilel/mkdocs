# Tutoriel Tekton : CI/CD Kubernetes-Native

Tekton est le standard CNCF pour les pipelines CI/CD sur Kubernetes.

## Pipeline simple

```yaml
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: build-and-deploy
spec:
  tasks:
    - name: build
      taskRef:
        name: buildah
```

Tekton est idéal si vous êtes déjà dans l'écosystème Kubernetes.