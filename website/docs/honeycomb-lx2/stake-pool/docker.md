---
sidebar_position: 3
---

# Docker

## Install Docker

Before you install Docker Engine for the first time on a new host machine, you need to set up the Docker repository. 
Afterward, you can install and update Docker from the repository.

Follow the step-by-step guide in the Docker docs to install Docker Engine using the [apt repository](https://docs.docker.com/engine/install/debian/#install-using-the-repository).

## Docker Image

The Cardano Node Docker Image contains all the files you need to run a Cardano node on an arm64 device.
The node can be configured to run as a relay node or as a core (block producing) node.

### Clone the project

Change the current working directory to the location where you want the cloned directory to be:

```
mkdir docker
cd docker
```

Clone the project by running the following command:

```
git clone ssh://git@gitlab:3001/docker/cardano-node.git
```

We can visualise the project structure using the **tree** command:

```
sudo apt install tree
```

For example:

```
tree -da
```

You should see something like:

```
.
├── docker
│   ├── cardano-node
│   │   ├── build
│   │   │   ├── cardano-node.dockerfile
│   │   │   └── entrypoint.sh
│   │   │   └── submit-api.sh
│   │   │   └── files
│   │   │       └── topology.json
│   │   └── run
│   │       ├── core-node-1
│   │           └── .keys
│   │           └── usb-transfer
│   │       └── relay-node-1
│   │           └── .keys
│   │       └── relay-node-2
│   │           └── .keys
│   │       └── relay-node-3
│   │           └── .keys
└── tmp
```

### Build the project

```
cd cardano-node/build
sudo docker build -t cardano-node:8.1.2 -f cardano-node.dockerfile .
```
