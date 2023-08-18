---
sidebar_position: 2
---

# Add zram

## What is zram?

> zram, formerly called compcache, is a Linux kernel module for creating a compressed block device in RAM, i.e., a RAM 
> disk, but with on-the-fly "disk" compression. The block device created with zram can then be used for swap or as 
> general-purpose RAM disk. - Wikipedia

### Prerequisites

Disable the Raspberry Pi OS swapfile:

```
sudo systemctl disable dphys-swapfile.service
```

## Install zram

Install the zram tools:

```
sudo apt install -y zram-tools
```

Open `/etc/default/zramswap`:

```
sudo nano /etc/default/zramswap
```

And update it as follows:

```
# Compression algorithm selection
# speed: lz4 > zstd > lzo
# compression: zstd > lzo > lz4
# This is not inclusive of all that is available in latest kernels
# See /sys/block/zram0/comp_algorithm (when zram module is loaded) to see
# what is currently set and available for your kernel[1]
# [1]  https://github.com/torvalds/linux/blob/master/Documentation/blockdev/zram.txt#L86
# ALGO=lz4

# Specifies the amount of RAM that should be used for zram
# based on a percentage the total amount of available memory
# This takes precedence and overrides SIZE below
PERCENT=150

# Specifies a static amount of RAM that should be used for
# the ZRAM devices, this is in MiB
# SIZE=256

# Specifies the priority for the swap devices, see swapon(2)
# for more details. Higher number = higher priority
# This should probably be higher than hdd/ssd swaps.
# PRIORITY=100
```

Then save (Ctrl+O) and exit (Ctrl+X) nano.

Reload zram:

```
sudo systemctl reload zramswap.service
```


### Useful commands

You can use the <a href="https://manpages.debian.org/bullseye/util-linux/zramctl.8.en.html" target="_blank">zramctl</a> 
command to list the zram devices present and their status:

```
sudo zramctl
```

You should see something like:

```
NAME       ALGORITHM DISKSIZE  DATA COMPR TOTAL STREAMS MOUNTPOINT
/dev/zram0 lz4          11.4G  6.8G  4.1G  4.4G       4 [SWAP]
```

Run the following command to check your memory usage:

```
free -h
```

You should see something like:

```
               total        used        free      shared  buff/cache   available
Mem:           7.6Gi       7.4Gi        94Mi          0B       159Mi       132Mi
Swap:           11Gi       8.1Gi       3.4Gi
```

### Resources
* Debian wiki: [zram](https://wiki.debian.org/ZRam)
* Hayden James blog: [Linux Performance: Why You Should Almost Always Add Swap Space](https://haydenjames.io/linux-performance-almost-always-add-swap-space/)
* Hayden James blog: [Linux Performance: Almost Always Add Swap. Part 2: ZRAM](https://haydenjames.io/linux-performance-almost-always-add-swap-part2-zram/)
  