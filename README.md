# Pipeline Monitoring

```
helm repo add pipem https://charts.pipem.io
helm repo update
```

# Install

```
helm install app pipem/app
helm install api pipem/api -f api.values.yaml
helm install provider-google pipem/provider-google
helm install nats-producer pipem/nats-producer
```
