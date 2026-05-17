# Tutoriel : Votre Premier Playbook Ansible

**Objectif** : Automatiser la configuration d’un serveur avec Ansible.

## Installation

```bash
pip install ansible
```

## Inventaire (inventory.ini)

```ini
[webservers]
server1 ansible_host=192.168.1.10 ansible_user=ubuntu
server2 ansible_host=192.168.1.11 ansible_user=ubuntu
```

## Premier playbook (site.yml)

```yaml
---
- name: Configure web servers
  hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present

    - name: Start and enable nginx
      service:
        name: nginx
        state: started
        enabled: yes
```

## Lancement

```bash
ansible-playbook -i inventory.ini site.yml
```

Ansible est l’outil idéal pour l’automatisation sans agent.