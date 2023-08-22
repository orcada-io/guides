---
sidebar_position: 5
---

# Troubleshooting

## Connecting to a server

### SSH

You can connect via SSH using the server's ip address or hostname:

```
ssh ada@192.168.102.13
ssh ada@lx2-1.orcada.io
```

**Note:** The ordinary user account name used by this guide is: ada

### Serial connection

Use a Micro USB to USB-C cable, connect the micro USB adapter to the LX2 and the USB-C adapter to your workstation (e.g., MacBook Pro).

Look for the device:

```
ls -l /dev/*usbserial*
```

You should see something like:

```
crw-rw-rw-  1 root  wheel  0x9000005 15 Oct 18:06 /dev/cu.usbserial-DK0D18XC
crw-rw-rw-  1 root  wheel  0x9000004 15 Oct 18:06 /dev/tty.usbserial-DK0D18XC
```

Use screen to open a connection:

```
screen /dev/tty.usbserial-DK0D18XC 115200
```