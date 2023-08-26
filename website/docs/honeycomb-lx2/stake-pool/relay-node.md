---
sidebar_position: 4
---

# Relay Node

## Docker Image

The Cardano Node Docker Image contains all the files you need to run a Cardano node on an arm64 device.
The image can be configured to run as a relay node or as a core (block producing) node.

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

**Note:** The `run.sh` shell script contains the configuration information for the container, including its name, 
port number, etc.

### Topology

The Stake Pool topology describes the nodes that comprise the Cardano network. Each stake pool must operate at least 
one relay node and one core (block producing) node.

There are several tools that you can use to obtain information about the Cardano network, for example:

```
https://cexplorer.io/relays
```

and

```
https://explorer.mainnet.cardano.org/relays/topology.json
```

#### Configuring a Relay Node

Connect to the container:

```
sudo docker exec -it relay-node-3 bash
```

Edit the `topology.json` file::

```
cd ~/pool/files
nano topology.json
```

Add a record for the core node and a record for each peer relay node:

```
{
  "Producers": [
    {
      "addr": "CoreNodeIPAddress",
      "port": CoreNodePortNumber,
      "valency": 1
    },
    {
      "addr": "PeerRelayNodeIPAddress",
      "port": PeerRelayNodePortNumber,
      "valency": 1
    },
    {
      ...
    }
  ]
}
```

Then save (Ctrl+O) and exit (Ctrl+X) nano.

Stop and then restart the container:

```
sudo docker container stop relay-node-3
sudo docker container start relay-node-3
```

### gLiveView

Run gLiveView:

```
sudo docker exec -it relay-node-3 /home/ada/pool/scripts/gLiveView.sh -u
```