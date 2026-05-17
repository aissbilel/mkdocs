# Tutoriel HashiCorp Vault : Gestion des Secrets

## Démarrage rapide

```bash
vault server -dev

export VAULT_ADDR='http://127.0.0.1:8200'
vault kv put secret/myapp password=supersecret
```

Vault est la solution de référence pour la gestion centralisée des secrets en DevOps.