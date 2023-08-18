---
sidebar_position: 3
---

# Add chrony

### Prerequisites

Check the NTP Pool project's <a href="https://www.ntppool.org/en/" target="_blank">website</a> to find pools near you.

## Install chrony

Install <a href="https://chrony.tuxfamily.org/" target="_blank">chrony</a>:

```
sudo apt install -y chrony
```

Open `/etc/chrony/chrony.conf`:

```
sudo nano /etc/chrony/chrony.conf
```

And update it as follows:

``` 
# Australia - https://www.ntppool.org/zone/au
server 0.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3
server 1.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3
server 2.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3
server 3.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3

# This directive specify the location of the file containing ID/key pairs for NTP authentication.
keyfile /etc/chrony/chrony.keys

# This directive specify the file into which chronyd will store the rate information.
driftfile /var/lib/chrony/chrony.drift

# Uncomment the following line to turn logging on.
# log tracking measurements statistics

# Log files location.
logdir /var/log/chrony

# Stop bad estimates upsetting machine clock.
maxupdateskew 5.0

# This directive enables kernel synchronisation (every 11 minutes) of the
# real-time clock. Note that it can’t be used along with the 'rtcfile' directive.
rtcsync

# Step the system clock instead of slewing it if the adjustment is larger than
# one second, but only in the first three clock updates.
makestep 0.1 -1

# Get TAI-UTC offset and leap seconds from the system tz database.
leapsectz right/UTC

# Serve time even if not synchronized to a time source.
local stratum 10
```

Then save (Ctrl+O) and exit (Ctrl+X) nano.

Restart chrony:

```
sudo service chrony restart
```

### Resources
* TUX Family: [chrony](https://chrony.tuxfamily.org/)

