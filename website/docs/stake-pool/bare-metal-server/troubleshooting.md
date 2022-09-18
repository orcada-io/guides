---
sidebar_position: 2
---

# Troubleshooting

## How To Use Journalctl

### Current Boot

To see the logs for the current boot that <a href="https://wiki.debian.org/systemd" target="_blank">journald</a> knows 
about, use the `-b` flag:

```
sudo journalctl -b
```

### Past Boots

To see the boots that <a href="https://wiki.debian.org/systemd" target="_blank">journald</a> knows about, use the 
`--list-boots` option:

```
sudo journalctl --list-boots
``` 

You should see something like:

```
-2 1427135385c9474e9b60d24b8ef7e41a Sat 2022-08-27 08:05:10 AEST—Mon 2022-08-29 19:04:58 AEST
-1 051641f5068e4bfaaddeb23e83b99410 Mon 2022-08-29 19:06:30 AEST—Sun 2022-09-18 08:10:12 AEST
0 2a8f01e0609b452c8b94956f496885d5 Sun 2022-09-18 08:12:01 AEST—Sun 2022-09-18 08:37:55 AEST
```

### Time Windows

You can filter by arbitrary time limits using the `--since` and `--until` options, which restrict the entries 
displayed to those after or before the given time, respectively.

For example:

```
sudo journalctl --since "2022-09-18 08:10:00"
```

### Filtering

#### By Priority

You can use journalctl to display only messages of a specified priority or above by using the -p option. This allows 
you to filter out lower priority messages.

For instance, to show only entries logged at the error level or above, you can type:

```
journalctl -p err -b
```

This will show you all messages marked as error, critical, alert, or emergency. The journal implements the standard 
**syslog** message levels. You can use either the priority name or its corresponding numeric value. In order of highest to 
lowest priority, these are:

- 0: emerg
- 1: alert
- 2: crit
- 3: err
- 4: warning
- 5: notice
- 6: info
- 7: debug

The above numbers or names can be used interchangeably with the `-p` option. Selecting a priority will display messages 
marked at the specified level and those above it.
