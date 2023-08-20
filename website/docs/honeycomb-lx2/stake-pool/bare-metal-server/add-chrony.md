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
# Welcome to the chrony configuration file. See chrony.conf(5) for more
# information about usable directives.

# Include configuration files found in /etc/chrony/conf.d.
confdir /etc/chrony/conf.d

# Use Debian vendor zone.
# pool 2.debian.pool.ntp.org iburst

# Australia - https://www.ntppool.org/zone/au
server 0.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3
server 1.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3
server 2.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3
server 3.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3

# Use time sources from DHCP.
sourcedir /run/chrony-dhcp

# Use NTP sources found in /etc/chrony/sources.d.
sourcedir /etc/chrony/sources.d

# This directive specify the location of the file containing ID/key pairs for
# NTP authentication.
keyfile /etc/chrony/chrony.keys

# This directive specify the file into which chronyd will store the rate
# information.
driftfile /var/lib/chrony/chrony.drift

# Save NTS keys and cookies.
ntsdumpdir /var/lib/chrony

# Uncomment the following line to turn logging on.
#log tracking measurements statistics

# Log files location.
logdir /var/log/chrony

# Stop bad estimates upsetting machine clock.
maxupdateskew 100.0

# This directive enables kernel synchronisation (every 11 minutes) of the
# real-time clock. Note that it can’t be used along with the 'rtcfile' directive.
rtcsync

# Step the system clock instead of slewing it if the adjustment is larger than
# one second, but only in the first three clock updates.
makestep 1 3

# Get TAI-UTC offset and leap seconds from the system tz database.
# This directive must be commented out when using time sources serving
# leap-smeared time.
leapsectz right/UTC
```

Then save (Ctrl+O) and exit (Ctrl+X) nano.

Restart chrony:

```
sudo service chrony restart
```

## Resources

* TUX Family: [chrony](https://chrony.tuxfamily.org/)

