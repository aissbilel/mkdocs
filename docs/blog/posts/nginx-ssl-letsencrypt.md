# Tutoriel : SSL avec Nginx et Let's Encrypt

## Installation Certbot

```bash
sudo apt install certbot python3-certbot-nginx
```

## Obtenir un certificat

```bash
sudo certbot --nginx -d exemple.com -d www.exemple.com
```

## Renouvellement automatique

```bash
sudo certbot renew --dry-run
```

Let's Encrypt fournit des certificats gratuits et renouvelables automatiquement.