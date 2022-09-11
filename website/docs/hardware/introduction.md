---
sidebar_position: 1
---

# Introduction

What hardware do you need to host a Cardano Stake Pool?

The answer is, it depends. 

If you want to build and operate a decentralised <a href="https://en.wikipedia.org/wiki/Bare-metal_server" target="_blank">bare-metal server</a> network, that is:

> **scalable, highly available and secure**

Then you will need:

- 1 @ Internet Gateway (Primary) - A modem / router combo typically supplied by your **primary** ISP
- 1 @ Internet Gateway (Secondary) - A modem / router combo typically supplied by your **secondary** ISP
- 1 @ Interior Router
- 2 @ Switches
- 1 @ NAS device
- 2 @ Cardano **Public Relay** nodes
- 1 @ Cardano **Private Relay** node
- 1 @ Cardano **Core** node
- 1 @ Cardano **Cold** node 

For example:
- 1 @ Netcomm NF18 CloudMesh
- 1 @ Netgear M2
- 1 @ tp-link ER605 Router
- 2 @ Netgear 308 Switch
- 1 @ Synology DS720+
- 4 @ Raspberry Pi 4 Model B 8GB
- 1 @ Raspberry Pi 400

![Ocrada Infrastructure](./img/orcada-infrastructure.png)

## Minimum System Requirements

The hardware that you choose to host your stake pool must meet the Cardano Node <a href="https://github.com/input-output-hk/cardano-node/releases" target="_blank">releases</a> minimum system requirements.

### Cardano Node 1.35.3

- An Intel or AMD x86 processor with two or more cores, at 1.6GHz or faster (2GHz or faster for a stake pool or relay)
- 16GB of RAM
- 100GB of free storage (150GB recommended for future growth)

**Note:** A Raspberry Pi 4 Model B 8GB can be configured to use <a href="https://en.wikipedia.org/wiki/Zram" target="_blank">zram</a> in order to meet the 16GB of RAM requirement. 
