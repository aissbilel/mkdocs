---
date: 2026-05-10
title: Kubernetes Basics — Les concepts à maîtriser en 2026
categories:
  - Kubernetes
tags:
  - kubernetes
  - beginner
authors:
  - Alexandre Martin
---

# Kubernetes Basics

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-v1
spec:
  replicas: 4
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
      - name: api
        image: ghcr.io/votreorg/api:v1.2.3
        resources:
          requests:
            cpu: "250m"
            memory: "512Mi"
```

Bonnes pratiques 2026 : PodDisruptionBudget, Resource Quotas, KEDA, Cilium, etc.