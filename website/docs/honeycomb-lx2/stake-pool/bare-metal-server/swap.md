---
sidebar_position: 3
---

# Swap

The Debian installer will create a swap partition on your SSD.

We can see if the system has any configured swap using the following command:

```
sudo swapon --show
```

You should see something like:

```
NAME           TYPE      SIZE  USED PRIO
/dev/nvme0n1p3 partition 977M 10.8M   -2
```

We can disable swap using the following command:

```
sudo swapoff /dev/nvme0n1p3
```

## Resources

* Debian wiki: [Swap](https://wiki.debian.org/Swap)