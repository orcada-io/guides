"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Server Setup",l={unversionedId:"honeycomb-lx2/stake-pool/server-setup",id:"honeycomb-lx2/stake-pool/server-setup",title:"Server Setup",description:"HoneyComb LX2",source:"@site/docs/honeycomb-lx2/stake-pool/server-setup.md",sourceDirName:"honeycomb-lx2/stake-pool",slug:"/honeycomb-lx2/stake-pool/server-setup",permalink:"/guides/honeycomb-lx2/stake-pool/server-setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/guides/honeycomb-lx2/stake-pool/introduction"},next:{title:"Raspberry Pi Guide",permalink:"/guides/category/raspberry-pi-guide"}},s={},p=[{value:"HoneyComb LX2",id:"honeycomb-lx2",level:2},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Rackmount",id:"rackmount",level:3},{value:"Firmware",id:"firmware",level:3},{value:"Linux distribution",id:"linux-distribution",level:3},{value:"First boot",id:"first-boot",level:3},{value:"Serial connection",id:"serial-connection",level:4},{value:"How to upgrade the Linux kernel",id:"how-to-upgrade-the-linux-kernel",level:2},{value:"Afterword",id:"afterword",level:2},{value:"Resources:",id:"resources",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-setup"},"Server Setup"),(0,a.kt)("h2",{id:"honeycomb-lx2"},"HoneyComb LX2"),(0,a.kt)("p",null,"The HoneyComb LX2 is an ARM (Advanced RISC Machine) SBC (Single Board Computer) with 16 cores and support for up to 64GB of memory."),(0,a.kt)("p",null,"The HoneyComb LX2 is ARM ",(0,a.kt)("a",{href:"https://developer.arm.com/Architectures/Arm%20SystemReady%20ES",target:"_blank"},"SystemReady ES"),' certified, which means any off the shelf Linux distribution should boot and basic hardware functionality will "just work".'),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HoneyComb LX2",src:r(3043).Z,width:"1094",height:"838"}))),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 @ HoneyComb LX2"),(0,a.kt)("li",{parentName:"ul"},"1 @ Silicon Power 64GB (2 x 32GB) SO-DIMM DDR4 3200MHz (must be a matched pair)"),(0,a.kt)("li",{parentName:"ul"},"1 @ Samsung 2TB 970 EVO Plus NVMe SSD"),(0,a.kt)("li",{parentName:"ul"},"1 @ ",(0,a.kt)("a",{href:"https://www.linksys.com/support-product?sku=USB3GIG",target:"_blank"},"Linksys USB 3 Gigabit Ethernet Adapter")),(0,a.kt)("li",{parentName:"ul"},"1 @ Cable Matters Micro USB to USB-C cable"),(0,a.kt)("li",{parentName:"ul"},"1 @ SanDisk 32GB Micro SD card"),(0,a.kt)("li",{parentName:"ul"},"1 @ SanDisk 32GB Flash Drive")),(0,a.kt)("h3",{id:"rackmount"},"Rackmount"),(0,a.kt)("p",null,"I wanted to rack mount the LX2, so I purchased a ",(0,a.kt)("a",{href:"https://www.mini-itx.com/store/category?type=case&rack=1&volume=over-0&drive-bays=over-0&sortby=price&page=1",target:"_blank"},"1U Mini-ITX form factor rackmount case")," from the Mini ITX Store:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1U rackmount chassis",src:r(9926).Z,width:"1191",height:"302"})),(0,a.kt)("p",null,"I mounted the board and then installed the RAM and the NVMe SSD. I attached the dual 24/20 (sometimes called 20+4) power supply connector to the ATX 24-pin motherboard socket. The fan to the fan PWM socket and the front panel connector ribbon to the board's front panel connectors."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LX2 rack mounted",src:r(1764).Z,width:"600",height:"495"})),(0,a.kt)("h3",{id:"firmware"},"Firmware"),(0,a.kt)("p",null,"I used the ",(0,a.kt)("a",{href:"https://www.balena.io/etcher/",target:"_blank"},"balenaEtcher")," to flash a ",(0,a.kt)("a",{href:"https://images.solid-run.com/LX2k/lx2160a_uefi",target:"_blank"},"firmware image")," (i.e., lx2160acex7_2000_700_3200_8_5_2_sd_ee5c233.img.xz) to the Micro SD card."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You must use the firmware image that matches the clock speed (e.g., 3200 MHz) of your DDR4 RAM."),(0,a.kt)("h3",{id:"linux-distribution"},"Linux distribution"),(0,a.kt)("p",null,"I used the ",(0,a.kt)("a",{href:"https://www.balena.io/etcher/",target:"_blank"},"balenaEtcher")," to flash a Debian 11.5 ",(0,a.kt)("a",{href:"https://cdimage.debian.org/debian-cd/current/arm64/iso-cd/",target:"_blank"},"ISO image")," (i.e., debian-11.5.0-arm64-netinst.iso) to the USB 3 flash drive."),(0,a.kt)("h3",{id:"first-boot"},"First boot"),(0,a.kt)("p",null,"Connect the USB 3 ethernet adapter to your switch (or router). Insert the Micro SD card and the USB 3 flash drive."),(0,a.kt)("h4",{id:"serial-connection"},"Serial connection"),(0,a.kt)("p",null,"Connect the micro USB to the LX2 and the USB-C cable to your workstation."),(0,a.kt)("p",null,"Look for the device:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ls -l /dev/*usbserial*\n")),(0,a.kt)("p",null,"You should see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"crw-rw-rw-  1 root  wheel  0x9000005 15 Oct 18:06 /dev/cu.usbserial-DK0D18XC\ncrw-rw-rw-  1 root  wheel  0x9000004 15 Oct 18:06 /dev/tty.usbserial-DK0D18XC\n")),(0,a.kt)("p",null,"Use screen to open a connection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"screen /dev/tty.usbserial-DK0D18XC 115200\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screen - New Connection",src:r(2691).Z,width:"682",height:"497"})),(0,a.kt)("p",null,"Power on the server."),(0,a.kt)("p",null,"Press the ",(0,a.kt)("inlineCode",{parentName:"p"},"esc")," key when prompted by the UEFI firmware:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UEFI Firmware",src:r(9213).Z,width:"1364",height:"994"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Press escape",src:r(2394).Z,width:"682",height:"497"})),(0,a.kt)("p",null,"Navigate to the Device Manager -> Console Preference Selection and set the ",(0,a.kt)("strong",{parentName:"p"},"Preferred console")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Preferred console",src:r(8342).Z,width:"682",height:"497"})),(0,a.kt)("p",null,"Navigate to the Boot Manager and choose ",(0,a.kt)("inlineCode",{parentName:"p"},"USB SanDisk"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"USB Boot Device",src:r(6867).Z,width:"682",height:"497"})),(0,a.kt)("p",null,"Hit ",(0,a.kt)("inlineCode",{parentName:"p"},"esc")," to launch GRUB:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GRUB",src:r(5380).Z,width:"731",height:"497"})),(0,a.kt)("p",null,"Press ",(0,a.kt)("inlineCode",{parentName:"p"},"e")," to edit the ",(0,a.kt)("strong",{parentName:"p"},"Install")," command:"),(0,a.kt)("p",null,"And update it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"arm-smmu.disable_bypass=0 \\\niommu.passthrough=1 \\\nconsole=ttyAMA0,115200n8 ---\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Edit install command",src:r(3057).Z,width:"731",height:"497"})),(0,a.kt)("p",null,"Press ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-x")," to launch the Debian installer."),(0,a.kt)("p",null,"After the installation is complete power off the server, remove the USB Flash Drive and then power on the server."),(0,a.kt)("p",null,"Login:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Login",src:r(1310).Z,width:"682",height:"497"})),(0,a.kt)("h2",{id:"how-to-upgrade-the-linux-kernel"},"How to upgrade the Linux kernel"),(0,a.kt)("p",null,"The easiest way to upgrade the kernel is to use the backports repository."),(0,a.kt)("p",null,"Create a sources list for DebianBackports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/apt/sources.list.d/backports.list\n")),(0,a.kt)("p",null,"And update it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deb http://deb.debian.org/debian bullseye-backports main\n")),(0,a.kt)("p",null,"Then save (Ctrl+O) and exit (Ctrl+X) nano."),(0,a.kt)("p",null,"Download the package index from the backports repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt update\n")),(0,a.kt)("p",null,"Install the kernel package from the backports repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install linux-image-arm64/bullseye-backports\n")),(0,a.kt)("p",null,"Check the version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"uname -s -v\n")),(0,a.kt)("p",null,"You should see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Linux #1 SMP Debian 5.18.16-1~bpo11+1 (2022-08-12)\n")),(0,a.kt)("p",null,"The updated kernel has driver support for the LX2's gigabit ethernet adapter."),(0,a.kt)("h2",{id:"afterword"},"Afterword"),(0,a.kt)("p",null,"Unfortunately, there are some known issues with the ASIX chip drivers (generally used by USB 3 gigabit ethernet adapters) included in off the shelf (mainline) Linux distributions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kernel.org Bugzilla \u2013 Bug 212731: ",(0,a.kt)("a",{parentName:"li",href:"https://bugzilla.kernel.org/show_bug.cgi?id=212731"},"USB 3 gigabit ethernet adapter ASIX AX88179"))),(0,a.kt)("h3",{id:"resources"},"Resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SolidRun wiki: ",(0,a.kt)("a",{parentName:"li",href:"https://solidrun.atlassian.net/wiki/spaces/developer/pages/287801409/Serial+Connection"},"Serial Connection Guide")),(0,a.kt)("li",{parentName:"ul"},"Discord: ",(0,a.kt)("a",{parentName:"li",href:"https://discord.com/channels/620838168794497044/665456384971767818"},"SolidRun channel")),(0,a.kt)("li",{parentName:"ul"},"Debian GNU/Linux Installation Guide: ",(0,a.kt)("a",{parentName:"li",href:"https://www.debian.org/releases/stable/arm64/ch05s01.en.html#arm64-console-setup"},"Console configuration"))))}u.isMDXComponent=!0},9926:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1u-rackmount-chassis-082fa304578e42d745fcf9432c028b5e.png"},3057:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-install-command-4c52428215408357637d0386ca5f7925.png"},5380:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grud-c090b82bcf43a52e2c1f86ea895bf5c5.png"},3043:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/honeycomb-lx2-166daa0e42e38ee2b554e04404c95b3d.png"},1310:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/login-ae2f09c36945241fea00a98b9e55e439.png"},1764:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lx2-fixed-1-6311a0da42b0d9060ad906321ddfee5c.png"},8342:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/preferred-console-4e43f750164aa19ee237b4c059fdb417.png"},2394:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/press-escape-7681212f5d155f99a70195bcf51e8542.png"},2691:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screen-8533a1e1b42b0f2d93f734bb0e709135.png"},9213:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/uefi-firmware-1-8646194c33e3a495beab0172cd7e1184.png"},6867:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/usb-boot-device-23c37d908165c7f1de894306d4c071d3.png"}}]);