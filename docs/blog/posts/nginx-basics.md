# Tutoriel Nginx : Configuration de base

## Fichier de configuration principal

```nginx
server {
    listen 80;
    server_name exemple.com;

    location / {
        root /var/www/html;
        index index.html;
    }
}
```

## Commandes utiles

```bash
nginx -t                    # Tester la config
systemctl reload nginx      # Recharger sans downtime
```

Nginx est plus léger et performant qu'Apache pour la plupart des cas.