---
sidebar_position: 5
---

# Relay Node

### Prerequisites

You must first complete the steps in the Server Setup and the Install Docker guides.

## HoneyComb LX2

### Set up your Development Environment

You need to set up your development environment before you can do anything.

What you need:

* git
* Docker

### Sign in to the device

```
ssh ada@192.168.101.13
```

### Clone the project

Change the current working directory to the location where you want the cloned directory to be:

```
cd ~/docker
```

Clone the project by running the following command:

```
git clone ssh://git@gitlab:3001/docker/cardano-node.git
# git fetch --all
# git reset --hard origin/main
git pull
```

### Docker build

```
cd cardano-node/build
sudo docker system prune
sudo docker build -t cardano-node:8.1.2-1 -f cardano-node.dockerfile .
```

