# Install

```
kubectl create namespace pipem
helm install pipem --namespace pipem .
```

# Remove

```
helm uninstall pipem -n pipem
```

# Update

```
helm repo update && helm upgrade pipem pipem -n pipem
```
