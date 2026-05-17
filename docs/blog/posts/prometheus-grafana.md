# Tutoriel : Prometheus + Grafana pour l'Observabilité

## Installation Prometheus

```yaml
# prometheus.yml
scrape_configs:
  - job_name: 'kubernetes'
    kubernetes_sd_configs:
      - role: pod
```

## Dashboard Grafana

Importez le dashboard ID 315 ou 1860 pour Kubernetes.

Prometheus stocke les métriques, Grafana les visualise magnifiquement.