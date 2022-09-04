---
sidebar_position: 3
---

# Relay Node

## Configuration

Create the directories for the project:

```
mkdir -p ${HOME}/.local/bin && \
mkdir -p ${HOME}/pi-pool/files  && \
mkdir -p ${HOME}/pi-pool/logs && \
mkdir -p ${HOME}/pi-pool/scripts && \
mkdir ${HOME}/git && \
mkdir ${HOME}/tmp
```

We can visualise the project structure using the **tree** command:

```
sudo apt install tree
```

For example:

```
tree -da
```

You should see something like:

```
.
├── git
├── .local
│   ├── bin
├── pi-pool
│   ├── files
│   ├── logs
│   └── scripts
└── tmp
```

## Environment

Create a configuration file that will contain all the **Cardano Node** variables and settings:

```
sudo nano .adaenv
```

And update it as follows:

```
NODE_CONFIG=mainnet
```

Then save (Ctrl+O) and exit (Ctrl+X) nano.

Source the file:

```
source ${HOME}/.adaenv
```

We want the `.bashrc` file to source the Cardano Node variables and settings:

```
echo . ~/.adaenv >> ${HOME}/.bashrc
```

Update `.adaenv` file, add `~/.local/bin` to the $PATH and create some bash variables:

```
cd .local/bin; echo "export PATH=\"$PWD:\$PATH\"" >> $HOME/.adaenv && \
echo export NODE_HOME=${HOME}/pi-pool >> ${HOME}/.adaenv && \
echo export NODE_PORT=5011 >> ${HOME}/.adaenv && \
echo export NODE_FILES=${HOME}/pi-pool/files >> ${HOME}/.adaenv && \
echo export TOPOLOGY='${NODE_FILES}'/'${NODE_CONFIG}'-topology.json >> ${HOME}/.adaenv && \
echo export DB_PATH='${NODE_HOME}'/db >> ${HOME}/.adaenv && \
echo export CONFIG='${NODE_FILES}'/'${NODE_CONFIG}'-config.json >> ${HOME}/.adaenv && \
echo export NODE_BUILD_NUM=$(curl https://hydra.iohk.io/job/Cardano/iohk-nix/cardano-deployment/latest-finished/download/1/index.html | grep -e "build" | sed 's/.*build\/\([0-9]*\)\/download.*/\1/g') >> ${HOME}/.adaenv && \
echo export CARDANO_NODE_SOCKET_PATH="${HOME}/pi-pool/db/socket" >> ${HOME}/.adaenv
```

Check the updated `.adaenv` file:

```
cat ${HOME}/.adaenv
```

You should see something like:

```
NODE_CONFIG=mainnet
export PATH="/home/ada/.local/bin:$PATH"
export NODE_HOME=/home/ada/pi-pool
export NODE_PORT=5011
export NODE_FILES=/home/ada/pi-pool/files
export TOPOLOGY=${NODE_FILES}/${NODE_CONFIG}-topology.json
export DB_PATH=${NODE_HOME}/db
export CONFIG=${NODE_FILES}/${NODE_CONFIG}-config.json
export NODE_BUILD_NUM=14528927
export CARDANO_NODE_SOCKET_PATH=/home/ada/pi-pool/db/socket
```

Source the updated files:

```
source ${HOME}/.bashrc; source ${HOME}/.adaenv
```

:::caution
It is important to remember that if you change a variable or a setting in the `.adaenv` configuration file then you must 
reinitialise the values by sourcing the file.
:::
