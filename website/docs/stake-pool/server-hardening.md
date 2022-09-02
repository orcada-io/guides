---
sidebar_position: 3
---

# Server Hardening

## Configure the OS

To reduce the attack surface of the server we need to harden the default OS installation.

### Prerequisites

This guide assumes you are using <a href="https://www.nano-editor.org/" target="_blank">nano</a> (the Linux Command Line Text Editor).

### Disable the root user

Use SSH to connect to the device.

```
sudo passwd -l root
```

You should see something like:

```
passwd: password expiry information changed.
```

### Secure shared memory

Mount shared memory as read only. Open `/etc/fstab`:

```
sudo nano /etc/fstab
```

Add the following line to the bottom of the file:

```
tmpfs    /run/shm    tmpfs    ro,noexec,nosuid    0 0
```

Then save (Ctrl+O) and exit (Ctrl+X).

