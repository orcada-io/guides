---
sidebar_position: 8
---

# Monitoring

## Docker

Use the Synology DSM's Package Center to download and install Docker:

![Docker](./img/dsm-docker.png)

The installation will create a Shared Folder called docker: `/volume1/docker`

## Prometheus

### Create a directory for the image

Connect (SSH) to the Synology NAS, you should see something like:

```
admin@nas-1:~$
```

Create the directory for the Prometheus image:

```
cd /volume1/docker
mkdir prometheus
```

### Configure Prometheus

Create a configuration file for **Prometheus**:

```
nano prometheus.yml
```

And update it as follows:

```
global:
  scrape_interval: 15s

  external_labels:
    monitor: "stake-pool-monitor"

scrape_configs:
  - job_name: "Prometheus"
    scrape_interval: 5s
    static_configs:
      - targets: ["192.168.101.3:12798"]
        labels:
          alias: "Relay 1"
          type: "cardano-node"
      - targets: ["192.168.101.3:9100"]
        labels:
          alias: "Relay 1"
          type: "node"
      - targets: ["192.168.101.4:12798"]
        labels:
          alias: "Relay 2" 
          type: "cardano-node"
      - targets: ["192.168.101.4:9100"]
        labels:
          alias: "Relay 2"
          type: "node"
      - targets: ["192.168.101.5:12798"]
        labels:
          alias: "Relay 3"
          type: "cardano-node"
      - targets: ["192.168.101.5:9100"]
        labels:
          alias: "Relay 3"
          type: "node"
      - targets: ["192.168.102.3:12798"]
        labels:
          alias: "Core Node 1"
          type: "cardano-node"
      - targets: ["192.168.102.3:9100"]
        labels:
          alias: "Core Node 1"
          type: "node"
```

### Run the image

Run Prometheus:

```
docker run -d --name=prometheus \
  -p 9090:9090 \
  -v /volume1/docker/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml \
  prom/prometheus  
```

### Resources
* Prometheus docs: [Configuration](https://prometheus.io/docs/prometheus/latest/configuration/configuration/)
