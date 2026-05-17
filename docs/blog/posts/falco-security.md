# Tutoriel Falco : Détection de Menaces Runtime

Falco surveille les appels système en temps réel.

## Règle exemple

```yaml
- rule: Terminal shell in container
  desc: A shell was spawned in a container
  condition: >
    spawned_process and container.id != host
  output: >
    Shell spawned in container (user=%user.name container=%container.name)
  priority: WARNING
```

Falco est essentiel pour la sécurité runtime en production.