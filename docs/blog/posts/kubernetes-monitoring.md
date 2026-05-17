# Tutoriel Kubernetes : Monitoring Spécifique (Prometheus + Grafana + OpenTelemetry)

## Stack recommandée

- Prometheus + kube-state-metrics
- Grafana dashboards Kubernetes
- OpenTelemetry Collector
- Loki pour les logs

## Exporter clé

```yaml
- job_name: 'kubernetes-pods'
  kubernetes_sd_configs:
    - role: pod
  relabel_configs:
  - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
    action: keep
    regex: true
```

Observabilité = visibilité totale sur votre cluster.