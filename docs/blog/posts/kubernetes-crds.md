# Tutoriel Kubernetes : Custom Resource Definitions (CRDs)

Les CRDs permettent d'étendre Kubernetes avec vos propres objets.

## Exemple simple

```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: myapps.example.com
spec:
  group: example.com
  versions:
    - name: v1
      served: true
      storage: true
  scope: Namespaced
  names:
    plural: myapps
    singular: myapp
    kind: MyApp
```

Les Operators s'appuient massivement sur les CRDs.