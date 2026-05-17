# Tutoriel Kubernetes : Operators

Les Operators automatisent la gestion d'applications complexes (bases de données, monitoring, etc.).

## Exemple : Operator pour PostgreSQL

```yaml
apiVersion: postgres.example.com/v1
kind: PostgresCluster
metadata:
  name: my-db
spec:
  instances: 3
  version: "15"
```

Les Operators (comme Zalando Postgres Operator ou Strimzi pour Kafka) sont le futur de Kubernetes.