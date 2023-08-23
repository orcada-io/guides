---
sidebar_position: 4
---

# Relay Node

## Docker Image

The Cardano Node Docker Image contains all the files you need to run a Cardano node on an arm64 device.
The node can be configured to run as a relay node or as a core (block producing) node.

### Run the container

Connect to the host machine via SSH using the server's ip address or hostname:

```
ssh ada@192.168.102.13
ssh ada@lx2-1.orcada.io
```

Change the current working directory to the relay directory:

```
cd ~/docker/cardano-node/relay-node-3
```

Launch the container:

```
sudo ./run.sh
```

### gLiveView

Run gLiveView:

```
sudo docker exec -it relay-node-3 /home/ada/pool/scripts/gLiveView.sh -u
```