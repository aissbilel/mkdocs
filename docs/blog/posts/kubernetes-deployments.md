# Tutoriel Kubernetes : Deployments et Services

## Deployment basique

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: nginx
        image: nginx:1.25
```

## Service (ClusterIP + LoadBalancer)

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-svc
spec:
  selector:
    app: web
  ports:
  - port: 80
  type: LoadBalancer
```

Deployments + Services = base de tout déploiement Kubernetes.