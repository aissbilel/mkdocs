---
date: 2026-05-15
title: Terraform AWS — Best Practices 2026
categories:
  - Terraform
  - IaC
tags:
  - terraform
  - aws
authors:
  - Alexandre Martin
---

# Terraform sur AWS

```terraform
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.8.0"

  name = "prod-main"
  cidr = "10.0.0.0/16"
}
```

Utilisez Terragrunt, OpenTofu, tfsec + tflint dans votre pipeline.