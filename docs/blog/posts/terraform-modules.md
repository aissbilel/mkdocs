# Tutoriel Terraform : Modules et Bonnes Pratiques

## Structure d'un module

```
modules/
  vpc/
    main.tf
    variables.tf
    outputs.tf
```

## Exemple de module VPC

```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.8.0"

  name = "prod-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["eu-west-1a", "eu-west-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
}
```

Utilisez toujours des modules pour éviter la duplication.