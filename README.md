# Setup

```
helm repo add pipem https://charts.pipem.io
helm repo update

helm install pipem/pipem pipem --namespace pipem

helm install pipem/pipem pipem -f values.yaml

```

# Remove

```
helm uninstall pipem
```

# Update

```
helm repo update && helm upgrade pipem pipem -n pipem
```
