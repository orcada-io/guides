---
sidebar_position: 4
---

# Hardening

## Configure the operating system

To reduce the attack surface of the server we need to harden the default Operating System (OS) installation.

### Prerequisites

- Debian 11.5

**Note:** This guide assumes you are using <a href="https://www.nano-editor.org/" target="_blank">nano</a> (the Linux Command Line Text Editor).

## Disable the root account

Use SSH to connect to the device.

Disable the root account:

```
sudo passwd -l root
```

You should see something like:

```
passwd: password expiry information changed.
```

## System updates

Keep your system up to date:

```
sudo apt update
sudo apt full-upgrade -y
sudo apt-get autoremove
sudo apt-get autoclean
```

### Enable automatic security updates

```
sudo apt update && sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

##  Resources
* Debian wiki: [Security Management](https://wiki.debian.org/SecurityManagement)
* Debian docs: [Securing Debian Manual](https://www.debian.org/doc/manuals/securing-debian-manual/index.en.html)