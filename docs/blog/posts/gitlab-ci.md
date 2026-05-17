# Tutoriel GitLab CI/CD

## .gitlab-ci.yml basique

```yaml
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .

 deploy:
  stage: deploy
  script:
    - kubectl apply -f k8s/
  only:
    - main
```

GitLab CI est très puissant et intégré nativement.