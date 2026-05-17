# Tutoriel : Installer et configurer Nexus Repository

## Installation

```bash
wget https://download.sonatype.com/nexus/3/latest-unix.tar.gz
tar -xvf latest-unix.tar.gz
cd nexus-3.*/bin
./nexus start
```

## Accès

- URL : http://votre-serveur:8081
- Login initial : admin / mot de passe dans le fichier admin.password

Nexus est idéal pour stocker artefacts Maven, npm, Docker, etc.