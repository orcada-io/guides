"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[797],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(o),h=r,k=c["".concat(p,".").concat(h)]||c[h]||u[h]||a;return o?n.createElement(k,l(l({ref:t},d),{},{components:o})):n.createElement(k,l({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7091:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:2},l="PXE Boot",i={unversionedId:"stake-pool/pxe-boot",id:"stake-pool/pxe-boot",title:"PXE Boot",description:"What is PXE Boot?",source:"@site/docs/stake-pool/pxe-boot.md",sourceDirName:"stake-pool",slug:"/stake-pool/pxe-boot",permalink:"/guides/stake-pool/pxe-boot",draft:!1,editUrl:"https://github.com/orcada-io/guides/edit/master/docs/stake-pool/pxe-boot.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/guides/stake-pool/introduction"},next:{title:"Relay Node",permalink:"/guides/stake-pool/relay-node"}},p={},s=[{value:"What is PXE Boot?",id:"what-is-pxe-boot",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Synology NAS",id:"synology-nas",level:2},{value:"Configure a Static IP",id:"configure-a-static-ip",level:3},{value:"Enable NFS",id:"enable-nfs",level:3},{value:"Create Shared Folders",id:"create-shared-folders",level:3},{value:"Enable TFTP",id:"enable-tftp",level:3},{value:"Install and configure a DHCP Server",id:"install-and-configure-a-dhcp-server",level:3},{value:"Raspberry Pi",id:"raspberry-pi",level:2},{value:"Configure a Static IP",id:"configure-a-static-ip-1",level:3},{value:"Configure the hostname",id:"configure-the-hostname",level:3},{value:"Copy the OS files to the rpi-pxe Shared Folder",id:"copy-the-os-files-to-the-rpi-pxe-shared-folder",level:3},{value:"Create the remote mount point",id:"create-the-remote-mount-point",level:4},{value:"Create the local mount point",id:"create-the-local-mount-point",level:4},{value:"Copy the Boot files to the rpi-tftpboot Shared Folder",id:"copy-the-boot-files-to-the-rpi-tftpboot-shared-folder",level:3},{value:"Create the local mount point",id:"create-the-local-mount-point-1",level:4},{value:"Boot options",id:"boot-options",level:4},{value:"eeprom",id:"eeprom",level:4},{value:"Synology NAS",id:"synology-nas-1",level:2},{value:"Enable PXE Boot",id:"enable-pxe-boot",level:3},{value:"PXE Boot",id:"pxe-boot-1",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Resources",id:"resources",level:3},{value:"References",id:"references",level:3}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pxe-boot"},"PXE Boot"),(0,r.kt)("h2",{id:"what-is-pxe-boot"},"What is PXE Boot?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Preboot eXecution Environment (PXE) specification describes a standardised client\u2013server environment that boots\na software assembly, retrieved from a network, on PXE-enabled clients. - Wikipedia")),(0,r.kt)("p",null,"Clients require a network interface controller (NIC) and utilise DHCP and TFTP."),(0,r.kt)("p",null,"In data centres, PXE is the most popular choice for operating system booting, installation and deployment."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 @ Synology Diskstation DS720+"),(0,r.kt)("li",{parentName:"ul"},"1 @ Micro SD Card (minimum 8GB)"),(0,r.kt)("li",{parentName:"ul"},"1 @ Raspberry Pi 4 Model B 8GB")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The Synology Disk Station Manager (DSM) screenshots included in this guide were produced using DSM version\n7.0.1 (DSM 7.0.1-42218 Update 3)."),(0,r.kt)("h2",{id:"synology-nas"},"Synology NAS"),(0,r.kt)("p",null,"What we need to do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure a Static IP"),(0,r.kt)("li",{parentName:"ul"},"Enable NFS"),(0,r.kt)("li",{parentName:"ul"},"Create some Shared Folders"),(0,r.kt)("li",{parentName:"ul"},"Edit the Shared Folders NFS permissions"),(0,r.kt)("li",{parentName:"ul"},"Enable TFTP"),(0,r.kt)("li",{parentName:"ul"},"Install and configure a DHCP Server"),(0,r.kt)("li",{parentName:"ul"},"Enable PXE Boot")),(0,r.kt)("h3",{id:"configure-a-static-ip"},"Configure a Static IP"),(0,r.kt)("p",null,"In the Synology Disk Station Manager's Control Panel, click on Network and then select the Network Interface tab:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Network Interface",src:o(323).Z,width:"607",height:"448"})),(0,r.kt)("p",null,"Manual configuration:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Network Interface Manual Configuration",src:o(3229).Z,width:"806",height:"592"})),(0,r.kt)("h3",{id:"enable-nfs"},"Enable NFS"),(0,r.kt)("p",null,"In the Control Panel, click on File Services and then select the NFS tab:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enable NFS",src:o(6601).Z,width:"659",height:"240"})),(0,r.kt)("h3",{id:"create-shared-folders"},"Create Shared Folders"),(0,r.kt)("p",null,"We need to create some shared folders for the RPi's Boot and OS files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rpi-pxe (used for the RPi's OS files)"),(0,r.kt)("li",{parentName:"ul"},"rpi-tftpboot (used for the RPi's Boot files)")),(0,r.kt)("p",null,"In the Control Panel, click on Shared Folder:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shared Folder",src:o(6111).Z,width:"663",height:"597"})),(0,r.kt)("p",null,"General configuration, rpi-pxe:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shared Folder General Configuration rpi-pxe",src:o(7225).Z,width:"873",height:"608"})),(0,r.kt)("p",null,"General configuration, rpi-tftpboot:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shared Folder General Configuration rpi-pxe rpi-tftpboot",src:o(521).Z,width:"873",height:"606"})),(0,r.kt)("p",null,"And then for each folder (rpi-pxe and rpi-tftpboot) edit the NFS permissions:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NFS Permissions",src:o(3755).Z,width:"877",height:"647"})),(0,r.kt)("h3",{id:"enable-tftp"},"Enable TFTP"),(0,r.kt)("p",null,"In the Control Panel, click on File Services and then select the Advanced tab:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enable TFTP",src:o(650).Z,width:"666",height:"410"})),(0,r.kt)("h3",{id:"install-and-configure-a-dhcp-server"},"Install and configure a DHCP Server"),(0,r.kt)("p",null,"Use the DSM's Package Center to install a DHCP Server. In the DSM's Main Menu click on DHCP Server."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DHCP Network Interface",src:o(6793).Z,width:"1011",height:"592"})),(0,r.kt)("p",null,"And then for each Network Interface (LAN 1 and LAN 2) enable the DHCP server:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enable DHCP Server",src:o(1836).Z,width:"1010",height:"593"})),(0,r.kt)("p",null,"We also need to configure the Subnet list:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Subnet 1",src:o(9919).Z,width:"1014",height:"596"})),(0,r.kt)("p",null,"And the Vendor Settings:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dhcp-vendor-settings",src:o(1478).Z,width:"1013",height:"594"})),(0,r.kt)("p",null,"There is one more configuration step we need to complete on the DHCP Server, however, we can't do that until we have\nsetup our RPi."),(0,r.kt)("h2",{id:"raspberry-pi"},"Raspberry Pi"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Raspberry Pi 4 Model B 8GB",src:o(9712).Z,width:"459",height:"274"})),(0,r.kt)("p",null,"I used the Raspberry Pi Imagr (v1.7.1) to create a fresh install of Raspberry Pi OS Lite 64 bit (a port of Debian\nBullseye with no Desktop environment) for my Raspberry Pi 4 Model B 8GB."),(0,r.kt)("p",null,"You can use the Imagr's Advanced options to: set a hostname (",(0,r.kt)("inlineCode",{parentName:"p"},"relay-node-1"),"); enable SSH (public key only), set a\nusername and password; set the locale settings and to skip the first-run wizard."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," You can use a fully qualified domain name (FQDN), for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"relay-node-1.stake-pool.orcada.io")),(0,r.kt)("p",null,"I used the DHCP Server's DCHP Clients tab to find the RPi's (dynamic) IP address."),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("a",{parentName:"p",href:"https://nmap.org/"},"nmap"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nmap -sn 192.168.101.0/24\n")),(0,r.kt)("p",null,"I used SSH to connect to the device and updated the operating system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt full-upgrade -y\nsudo apt-get autoremove\nsudo apt-get autoclean\n")),(0,r.kt)("h3",{id:"configure-a-static-ip-1"},"Configure a Static IP"),(0,r.kt)("p",null,"The Raspberry Pi uses ",(0,r.kt)("inlineCode",{parentName:"p"},"dhcpcd")," to configure TCP/IP across all of its network interfaces. We want to assign a static IP\nto our RPi."),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/dhcpcd.conf"),"file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /etc/dhcpcd.conf\n")),(0,r.kt)("p",null,"And add the following lines to the bottom of the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...\n\n# relay-node-1\ninterface eth0\nstatic ip_address=192.168.101.3/24\nstatic routers=192.168.101.1\nstatic domain_name_servers=192.168.101.1\n")),(0,r.kt)("p",null,"To restart ",(0,r.kt)("inlineCode",{parentName:"p"},"dhcpcd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload && sudo systemctl restart dhcpcd\n")),(0,r.kt)("p",null,"Let's check the Domain Name System (DNS) resolver:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat /etc/resolv.conf\n")),(0,r.kt)("p",null,"You should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Generated by resolvconf\nnameserver 192.168.101.1\n")),(0,r.kt)("h3",{id:"configure-the-hostname"},"Configure the hostname"),(0,r.kt)("p",null,"To configure a fully qualified domain name (FQDN) we need to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hostname")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /etc/hostname\n")),(0,r.kt)("p",null,"And update it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"relay-node-1.stake-pool.orcada.io\n")),(0,r.kt)("p",null,"We also need to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /etc/hosts\n")),(0,r.kt)("p",null,"And update it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"127.0.0.1       localhost\n192.168.101.3   relay-node-1.stake-pool.orcada.io relay-node-1\n\n# IPv6\n::1             localhost ip6-localhost ip6-loopback\nff02::1         ip6-allnodes\nff02::2         ip6-allrouters\n")),(0,r.kt)("p",null,"Reboot the RPi:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo reboot\n")),(0,r.kt)("p",null,"Reconnect to the device using SSH."),(0,r.kt)("h3",{id:"copy-the-os-files-to-the-rpi-pxe-shared-folder"},"Copy the OS files to the rpi-pxe Shared Folder"),(0,r.kt)("h4",{id:"create-the-remote-mount-point"},"Create the remote mount point"),(0,r.kt)("p",null,"Connect (SSH) to the Synology NAS, you should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"admin@nas-1:~$\n")),(0,r.kt)("p",null,"Create a directory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpi-pxe")," shared folder, that matches the RPi's hostname:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /volume1/rpi-pxe\nsudo mkdir relay-node-1\n")),(0,r.kt)("p",null,"And update the permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo chmod 777 relay-node-1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," You can check your RPi's hostname using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hostname\n")),(0,r.kt)("h4",{id:"create-the-local-mount-point"},"Create the local mount point"),(0,r.kt)("p",null,"Create a local mount point (directory) that matches the RPi's hostname:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo mkdir -p /nfs/relay-node-1\n")),(0,r.kt)("p",null,"Mount the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpi-pxe")," shared folder (the remote mount point) with NFS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo mount -t nfs -O proto=tcp,port=2049,rw,all_squash,anonuid=1001,anongid=1001 192.168.101.2:/volume1/rpi-pxe/relay-node-1 /nfs/relay-node-1 -vvv\n")),(0,r.kt)("p",null,"Copy the OS files (it will take a few minutes):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo rsync -xa --progress --exclude /nfs / /nfs/relay-node-1/\n")),(0,r.kt)("h3",{id:"copy-the-boot-files-to-the-rpi-tftpboot-shared-folder"},"Copy the Boot files to the rpi-tftpboot Shared Folder"),(0,r.kt)("h4",{id:"create-the-local-mount-point-1"},"Create the local mount point"),(0,r.kt)("p",null,"Create a local mount point (directory):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo mkdir -p /nfs/rpi-tftpboot\n")),(0,r.kt)("p",null,"Mount the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpi-tftpboot")," shared folder (the remote mount point) with NFS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo mount -t nfs -O proto=tcp,port=2049,rw,all_squash,anonuid=1001,anongid=1001 192.168.101.2:/volume1/rpi-tftpboot /nfs/rpi-tftpboot -vvv\n")),(0,r.kt)("p",null,"After mounting the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpi-tftpboot")," shared folder, the next step is to copy the universal RPi ",(0,r.kt)("inlineCode",{parentName:"p"},"bootcode.bin")," to the root\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpi-tftpboot")," shared folder. ",(0,r.kt)("inlineCode",{parentName:"p"},"bootcode.bin")," is used by all RPi models and must be in the root of this shared\nfolder for PXE Boot to succeed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo cp /boot/bootcode.bin /nfs/rpi-tftpboot/\n")),(0,r.kt)("p",null,"Get the RPi's serial number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vcgencmd otp_dump | grep 28: | sed s/.*://g\n")),(0,r.kt)("p",null,"You should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"d7cde1e3\n")),(0,r.kt)("p",null,"Create a directory for the boot files, that matches the RPi's serial number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo mkdir -p /nfs/rpi-tftpboot/d7cde1e3\n")),(0,r.kt)("p",null,"Copy the boot files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo cp -r /boot/* /nfs/rpi-tftpboot/d7cde1e3/\n")),(0,r.kt)("h4",{id:"boot-options"},"Boot options"),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," (the filesystem table) so that it mounts the RPi's tftpboot directory when it starts up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /nfs/relay-node-1/etc/fstab\n")),(0,r.kt)("p",null,"Update it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"proc            /proc           proc    defaults          0       0\n192.168.101.2:/volume1/rpi-tftpboot/d7cde1e3 /boot nfs defaults,vers=3,proto=tcp 0 0\n")),(0,r.kt)("p",null,"Edit the kernel options in ",(0,r.kt)("inlineCode",{parentName:"p"},"cmdline.txt"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /nfs/rpi-tftpboot/d7cde1e3/cmdline.txt\n")),(0,r.kt)("p",null,"Update it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"console=serial0,115200 console=tty1 root=/dev/nfs nfsroot=192.168.101.2:/volume1/rpi-pxe/relay-node-1,vers=3 rw ip=dhcp elevator=deadline rootwait\n")),(0,r.kt)("h4",{id:"eeprom"},"eeprom"),(0,r.kt)("p",null,"We need to configure the eeprom to include the PXE boot options. Use the following command to identify the latest\nversion of the firmware:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls -al /lib/firmware/raspberrypi/bootloader/stable/\n")),(0,r.kt)("p",null,"Copy the latest version of the firmware to a temporary directory in your home directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo cp /lib/firmware/raspberrypi/bootloader/stable/pieeprom-2022-03-10.bin pieeprom.bin\n")),(0,r.kt)("p",null,"Create a boot configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano bootconf.txt\n")),(0,r.kt)("p",null,"Update it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[all]\nBOOT_UART=0\nWAKE_ON_GPIO=1\nPOWER_OFF_ON_HALT=0\nDHCP_TIMEOUT=45000\nDHCP_REQ_TIMEOUT=4000\nTFTP_FILE_TIMEOUT=30000\nTFTP_IP=192.168.101.2\nTFTP_PREFIX=0\nENABLE_SELF_UPDATE=1\nDISABLE_HDMI=0\nBOOT_ORDER=0x241\nSD_CARD_MAX_RETRIES=3\nNET_BOOT_MAX_RETRIES=5\n")),(0,r.kt)("p",null,"The RPi will try to boot from a microSD card, then the network, then from any attached USB storage."),(0,r.kt)("p",null,"Now we can create a new eeprom binary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo rpi-eeprom-config --out pieeprom-new.bin --config bootconf.txt pieeprom.bin\n")),(0,r.kt)("p",null,"And write it to the eeprom:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo rpi-eeprom-update -d -f ./pieeprom-new.bin\n")),(0,r.kt)("p",null,"Reboot (leave the microSD card inserted):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo reboot\n")),(0,r.kt)("p",null,"Check the new boot configuration values using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vcgencmd bootloader_config\n")),(0,r.kt)("h2",{id:"synology-nas-1"},"Synology NAS"),(0,r.kt)("h3",{id:"enable-pxe-boot"},"Enable PXE Boot"),(0,r.kt)("p",null,"There is one more configuration step we need to complete on the DHCP Server, and that is to enable PXE Boot:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Raspberry Pi 4 Model B 8GB",src:o(4631).Z,width:"1011",height:"594"})),(0,r.kt)("h4",{id:"pxe-boot-1"},"PXE Boot"),(0,r.kt)("p",null,"Shutdown the RPi:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo shutdown -h now\n")),(0,r.kt)("p",null,"Turn off the power, remove the microSD card, turn the power back on. The RPi should now PXE boot."),(0,r.kt)("p",null,"Connect (SSH) to the RPi and check the mounted filesytems:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"findmnt\n")),(0,r.kt)("p",null,"You should see something like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mount Points",src:o(2951).Z,width:"638",height:"497"})),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you run into any issues try plugging in a monitor:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Output 1",src:o(6063).Z,width:"2000",height:"1500"})),(0,r.kt)("p",null,'A coloured splash screen (actually it\'s just four pixels "blown up" by the GPU to full screen) is displayed after the GPU firmware (start.elf) is loaded:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Output 2",src:o(4581).Z,width:"2000",height:"1500"})),(0,r.kt)("p",null,"This should be replaced by the linux console a few seconds later:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Output 3",src:o(8389).Z,width:"2000",height:"1500"})),(0,r.kt)("h3",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Raspberry Pi forum: ",(0,r.kt)("a",{parentName:"li",href:"https://forums.raspberrypi.com/viewforum.php?f=28&sid=27026f8cbf6eeac4634dc456f70c7fab"},"Troubleshooting")),(0,r.kt)("li",{parentName:"ul"},"eLinux wiki: ",(0,r.kt)("a",{parentName:"li",href:"https://elinux.org/R-Pi_Troubleshooting"},"Troubleshooting"))),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mike McFarlane's blog: ",(0,r.kt)("a",{parentName:"li",href:"https://mikejmcfarlane.github.io/blog/2020/09/12/PXE-boot-raspberry-pi-4-from-synology-diskstation#setup-manual-ip-for-the-synology"},"PXE boot a Raspberry Pi 4 from a Synology Diskstation")),(0,r.kt)("li",{parentName:"ul"},"John Nicpon's (Warmest Robot) blog: ",(0,r.kt)("a",{parentName:"li",href:"https://warmestrobot.com/blog/2021/6/21/raspberry-pi-network-boot-guide"},"Raspberry Pi Network Boot Guide")),(0,r.kt)("li",{parentName:"ul"},"Raspberry Pi docs: ",(0,r.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#configuration-properties"},"Configuration properties"))))}u.isMDXComponent=!0},9919:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-subnet-1-eda3bbc288c71efb837525e8d006e010.png"},6793:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/dhcp-network-interface-e00e0c9d5b6a4e9a24474273da15d226.png"},1478:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/dhcp-vendor-settings-9a3993367ec80001792c375b1e30cdd0.png"},1836:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/enable-dhcp-server-09a42f8fa1c754770057554c6b67f397.png"},6601:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/enable-nfs-65ad18bfad8949ddc7a21aafc7fce5df.png"},4631:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/enable-pxe-30418f73f60f00ec1e699eda79578aaa.png"},650:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/enable-tftp-647f5e6ca17e33db95bebb7bcf3cac84.png"},2951:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mount-points-53b493091b77b446b5f95270a67b7735.jpg"},3229:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/network-interface-manual-config-d2ee1ee6c1354a507789a14c8f99a3d8.png"},323:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/network-interface-8e6dec54496c73badb84dc8270c6d5cf.png"},3755:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/nfs-permissions-d38e0e3204f28ad7444d359803318dc2.png"},6063:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/output-1-9357edcee4e1ca6d4113197df839a68b.jpg"},4581:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/output-2-68101754c1bce373e24347732fe91d18.jpg"},8389:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/output-3-0a6f6eaae3f9843cfa9fbd379546c41a.jpg"},9712:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/rpi-4-model-b-a94ef1f9086ef51c42bff73f488e50f6.jpg"},521:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/shared-folder-general-config-2-26ae08817296564b420e557b87c4093a.png"},7225:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/shared-folder-general-config-dd3dad8777894bc4ae9effb78f46ebaa.png"},6111:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/shared-folder-e23bb6ceecc21753a9b80e1cbc989a64.png"}}]);