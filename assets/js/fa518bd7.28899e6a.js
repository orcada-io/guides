"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[795],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>c});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),c=n,h=m["".concat(i,".").concat(c)]||m[c]||d[c]||s;return t?a.createElement(h,l(l({ref:r},u),{},{components:t})):a.createElement(h,l({ref:r},u))}));function c(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=m;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5726:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const s={sidebar_position:2},l="Add zram",o={unversionedId:"raspberry-pi/stake-pool/bare-metal-server/server-setup/add-zram",id:"raspberry-pi/stake-pool/bare-metal-server/server-setup/add-zram",title:"Add zram",description:"What is zram?",source:"@site/docs/raspberry-pi/stake-pool/bare-metal-server/server-setup/add-zram.md",sourceDirName:"raspberry-pi/stake-pool/bare-metal-server/server-setup",slug:"/raspberry-pi/stake-pool/bare-metal-server/server-setup/add-zram",permalink:"/guides/raspberry-pi/stake-pool/bare-metal-server/server-setup/add-zram",draft:!1,editUrl:"https://github.com/orcada-io/guides/edit/master/docs/raspberry-pi/stake-pool/bare-metal-server/server-setup/add-zram.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Server Setup",permalink:"/guides/category/server-setup"},next:{title:"Add chrony",permalink:"/guides/raspberry-pi/stake-pool/bare-metal-server/server-setup/add-chrony"}},i={},p=[{value:"What is zram?",id:"what-is-zram",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install zram",id:"install-zram",level:2},{value:"Useful commands",id:"useful-commands",level:3},{value:"Resources",id:"resources",level:3}],u={toc:p};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"add-zram"},"Add zram"),(0,n.kt)("h2",{id:"what-is-zram"},"What is zram?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'zram, formerly called compcache, is a Linux kernel module for creating a compressed block device in RAM, i.e., a RAM\ndisk, but with on-the-fly "disk" compression. The block device created with zram can then be used for swap or as\ngeneral-purpose RAM disk. - Wikipedia')),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Disable the Raspberry Pi OS swapfile:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo systemctl disable dphys-swapfile.service\n")),(0,n.kt)("h2",{id:"install-zram"},"Install zram"),(0,n.kt)("p",null,"Install the zram tools:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo apt install -y zram-tools\n")),(0,n.kt)("p",null,"Open ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/default/zramswap"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo nano /etc/default/zramswap\n")),(0,n.kt)("p",null,"And update it as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# Compression algorithm selection\n# speed: lz4 > zstd > lzo\n# compression: zstd > lzo > lz4\n# This is not inclusive of all that is available in latest kernels\n# See /sys/block/zram0/comp_algorithm (when zram module is loaded) to see\n# what is currently set and available for your kernel[1]\n# [1]  https://github.com/torvalds/linux/blob/master/Documentation/blockdev/zram.txt#L86\n# ALGO=lz4\n\n# Specifies the amount of RAM that should be used for zram\n# based on a percentage the total amount of available memory\n# This takes precedence and overrides SIZE below\nPERCENT=150\n\n# Specifies a static amount of RAM that should be used for\n# the ZRAM devices, this is in MiB\n# SIZE=256\n\n# Specifies the priority for the swap devices, see swapon(2)\n# for more details. Higher number = higher priority\n# This should probably be higher than hdd/ssd swaps.\n# PRIORITY=100\n")),(0,n.kt)("p",null,"Then save (Ctrl+O) and exit (Ctrl+X) nano."),(0,n.kt)("p",null,"Reload zram:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo systemctl reload zramswap.service\n")),(0,n.kt)("h3",{id:"useful-commands"},"Useful commands"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",{href:"https://manpages.debian.org/bullseye/util-linux/zramctl.8.en.html",target:"_blank"},"zramctl"),"\ncommand to list the zram devices present and their status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo zramctl\n")),(0,n.kt)("p",null,"You should see something like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NAME       ALGORITHM DISKSIZE  DATA COMPR TOTAL STREAMS MOUNTPOINT\n/dev/zram0 lz4          11.4G  6.8G  4.1G  4.4G       4 [SWAP]\n")),(0,n.kt)("p",null,"Run the following command to check your memory usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"free -h\n")),(0,n.kt)("p",null,"You should see something like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"               total        used        free      shared  buff/cache   available\nMem:           7.6Gi       7.4Gi        94Mi          0B       159Mi       132Mi\nSwap:           11Gi       8.1Gi       3.4Gi\n")),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Debian wiki: ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.debian.org/ZRam"},"zram")),(0,n.kt)("li",{parentName:"ul"},"Hayden James blog: ",(0,n.kt)("a",{parentName:"li",href:"https://haydenjames.io/linux-performance-almost-always-add-swap-space/"},"Linux Performance: Why You Should Almost Always Add Swap Space")),(0,n.kt)("li",{parentName:"ul"},"Hayden James blog: ",(0,n.kt)("a",{parentName:"li",href:"https://haydenjames.io/linux-performance-almost-always-add-swap-part2-zram/"},"Linux Performance: Almost Always Add Swap. Part 2: ZRAM"))))}d.isMDXComponent=!0}}]);