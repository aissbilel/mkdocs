# Tutoriel Kubernetes : Service Mesh (Istio / Linkerd)

## Pourquoi un Service Mesh ?

- Trafic management
- Observabilité (métriques, traces)
- Sécurité (mTLS)
- Résilience (retries, circuit breaking)

## Installation Istio (simplifiée)

```bash
istioctl install --set profile=demo -y
kubectl label namespace default istio-injection=enabled
```

Service Mesh est recommandé dès que vous avez plus de 10-15 microservices.