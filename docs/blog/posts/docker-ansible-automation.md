# Tutoriel : Automatiser Docker avec Ansible

**Objectif** : Utiliser Ansible pour déployer et gérer des conteneurs Docker sur vos serveurs.

## Playbook exemple

```yaml
---
- name: Deploy Docker containers
  hosts: webservers
  become: yes
  tasks:
    - name: Install Docker
      apt:
        name: docker.io
        state: present

    - name: Start Docker
      service:
        name: docker
        state: started
        enabled: yes

    - name: Run nginx container
      community.docker.docker_container:
        name: nginx
        image: nginx:latest
        state: started
        ports:
          - "80:80"
```

## Avantages

- Ansible gère l’installation et la configuration
- Docker gère les conteneurs
- Solution complète d’automatisation DevOps

C’est l’approche la plus puissante pour les environnements de production.