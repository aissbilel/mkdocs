# Tutoriel : Ansible Roles - Structure Professionnelle

**Objectif** : Organiser vos playbooks avec des roles réutilisables.

## Structure d’un role

```
roles/
  nginx/
    tasks/
      main.yml
    handlers/
      main.yml
    templates/
      nginx.conf.j2
    vars/
      main.yml
    defaults/
      main.yml
```

## Exemple de tâche (tasks/main.yml)

```yaml
---
- name: Install nginx
  apt:
    name: nginx
    state: present
  notify: restart nginx

- name: Deploy config
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf
  notify: restart nginx
```

Les roles permettent de réutiliser votre code et de le partager facilement.