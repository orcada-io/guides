---
sidebar_position: 2
---

# Add zram

### Prerequisites

Disable the Raspberry Pi OS swapfile

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

Reboot the RPi:

```
sudo reboot
```

### Resources
* Hayden James blog: [zram](https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/)
