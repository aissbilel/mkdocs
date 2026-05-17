# Tutoriel Kubernetes : Autoscaling Avancé (HPA + VPA + Cluster Autoscaler)

## Vertical Pod Autoscaler (VPA)

```yaml
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: my-app-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  updatePolicy:
    updateMode: "Auto"
```

Combinez **HPA** (horizontal) + **VPA** (vertical) + **Cluster Autoscaler** pour une scalabilité optimale.