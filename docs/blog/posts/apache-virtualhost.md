# Tutoriel Apache (httpd) : Virtual Hosts

## Configuration d'un VirtualHost

```apache
<VirtualHost *:80>
    ServerName exemple.com
    DocumentRoot /var/www/exemple

    <Directory /var/www/exemple>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

## Commandes

```bash
apache2ctl configtest
a2ensite exemple.conf
systemctl reload apache2
```

Apache reste très utilisé pour les applications PHP et les configurations complexes.