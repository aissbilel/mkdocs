# Tutoriel Kubernetes : Débogage et Troubleshooting

## Commandes essentielles

```bash
kubectl get pods -o wide
kubectl describe pod <pod-name>
kubectl logs <pod-name> -f
kubectl exec -it <pod-name> -- /bin/sh

# Vérifier les events
kubectl get events --sort-by=.lastTimestamp
```

## Problèmes courants

- ImagePullBackOff → Vérifier l'image et les credentials
- CrashLoopBackOff → Regarder les logs
- Pending → Manque de ressources ou taints

Maîtrisez ces commandes pour résoudre 90% des problèmes.