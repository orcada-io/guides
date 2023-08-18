---
sidebar_position: 4
---

# Hardening

## Configure the operating system

To reduce the attack surface of the server we need to harden the default Operating System (OS) installation.

### Prerequisites

- Raspberry Pi OS Lite 64 bit (a port of Debian Bullseye with no Desktop environment)

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

## Disable wireless services

Open `/boot/config.txt`:

```
sudo nano /boot/config.txt
```

Scroll down to the end of the file and add the following lines below the `[all]` placeholder:

```
...

[all]
# Disable wireless services
dtoverlay=disable-wifi
dtoverlay=disable-bt
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

## Secure shared memory

Shared memory can be used in an attack against a running service. To make it more secure, we mount shared memory as 
read only. 

Open `/etc/fstab`:

```
sudo nano /etc/fstab
```

Add the following line to the bottom of the file:

```
tmpfs    /run/shm    tmpfs    ro,noexec,nosuid    0 0
```

Then save (Ctrl+O) and exit (Ctrl+X) nano.

## Increase the open file limit for $USER (ada)

Add a couple of lines to the bottom of the `/etc/security/limits.conf` file:

```
sudo bash -c "echo -e '${USER} soft nofile 800000\n${USER} hard nofile 1048576\n' >> /etc/security/limits.conf"
```

Check that the lines were added to the bottom of the file:

```
cat /etc/security/limits.conf
```

You should see something like:

```
...

# End of file
ada soft nofile 800000
ada hard nofile 1048576
```

## Optimise performance and security

The `/etc/sysctl.conf` file is used to configure kernel parameters (tunables) at runtime. Linux reads and applies the 
settings from this file.

Open `/etc/sysctl.conf`:

```
sudo nano /etc/sysctl.conf
```

Add the following lines to the bottom of the file:

```
## Pi Node ##

# Disable IPv6
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1

# Increase the maximum number of open files
fs.file-max = 10000000
fs.nr_open = 10000000

# IP forwarding
net.ipv4.ip_forward = 0

# Ignore send redirects
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0

# Ignore ICMP redirects
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0

# Log Martians
net.ipv4.icmp_ignore_bogus_error_responses = 1

# Block SYN attacks
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 2048
net.ipv4.tcp_synack_retries = 3
# net.ipv4.tcp_syn_retries = 5
net.ipv4.netfilter.ip_conntrack_tcp_timeout_syn_recv = 45

# In-progress tasks
net.ipv4.tcp_keepalive_time = 240
net.ipv4.tcp_keepalive_intvl = 4
net.ipv4.tcp_keepalive_probes = 5

# In rare occasions, it may be beneficial to reboot your server reboot if it runs out of memory.
# This simple solution can avoid you hours of down time. The vm.panic_on_oom=1 line enables panic
# on OOM; the kernel.panic=10 line tells the kernel to reboot ten seconds after panicking.
vm.panic_on_oom = 1
kernel.panic = 10

# Use Google's congestion control algorithm
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr

# ZRAM
# Delay the inevitable, running out of memory. This is done by increasing the kernel’s cache pressure.
# Start preparing for being out of memory sooner by increasing the tendency of your Raspberry Pi to swap. 
# However, swap will now be stored via much faster ZRAM.
# vm.vfs_cache_pressure=500
# vm.swappiness=100
# vm.dirty_background_ratio=1
# vm.dirty_ratio=50
# vm.min_free_kbytes=512000
# vm.overcommit_memory=2
```

Then save (Ctrl+O) and exit (Ctrl+X) nano.

Apply the new settings:

```
sudo sysctl -p
```

### Resources
* Book of Zeus: [Harden Ubuntu](https://bookofzeus.com/harden-ubuntu/hardening/sysctl-conf/)
* Debian wiki: [zram](https://wiki.debian.org/ZRam)
* Hayden James blog: [Linux Performance: Why You Should Almost Always Add Swap Space](https://haydenjames.io/linux-performance-almost-always-add-swap-space/)
* Hayden James blog: [Linux Performance: Almost Always Add Swap. Part 2: ZRAM](https://haydenjames.io/linux-performance-almost-always-add-swap-part2-zram/)
