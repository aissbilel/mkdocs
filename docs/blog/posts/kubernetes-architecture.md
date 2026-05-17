# Tutoriel Kubernetes : Architecture Complète

## Composants principaux

- **Control Plane** : API Server, etcd, Scheduler, Controller Manager
- **Nodes** : kubelet, kube-proxy, Container Runtime

## Flux de création d'un Pod

1. kubectl apply
2. API Server stocke dans etcd
3. Scheduler assigne le Pod
4. kubelet crée le conteneur

Comprendre cette architecture est essentiel pour débugger.