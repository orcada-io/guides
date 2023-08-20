"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="Hardening",l={unversionedId:"honeycomb-lx2/stake-pool/bare-metal-server/hardening",id:"honeycomb-lx2/stake-pool/bare-metal-server/hardening",title:"Hardening",description:"Configure the operating system",source:"@site/docs/honeycomb-lx2/stake-pool/bare-metal-server/hardening.md",sourceDirName:"honeycomb-lx2/stake-pool/bare-metal-server",slug:"/honeycomb-lx2/stake-pool/bare-metal-server/hardening",permalink:"/guides/honeycomb-lx2/stake-pool/bare-metal-server/hardening",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add chrony",permalink:"/guides/honeycomb-lx2/stake-pool/bare-metal-server/add-chrony"},next:{title:"Install Docker",permalink:"/guides/honeycomb-lx2/stake-pool/bare-metal-server/install-docker"}},s={},u=[{value:"Configure the operating system",id:"configure-the-operating-system",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Disable the root account",id:"disable-the-root-account",level:2},{value:"System updates",id:"system-updates",level:2},{value:"Enable automatic security updates",id:"enable-automatic-security-updates",level:3},{value:"Resources",id:"resources",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hardening"},"Hardening"),(0,a.kt)("h2",{id:"configure-the-operating-system"},"Configure the operating system"),(0,a.kt)("p",null,"To reduce the attack surface of the server we need to harden the default Operating System (OS) installation."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Debian 11.5")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This guide assumes you are using ",(0,a.kt)("a",{href:"https://www.nano-editor.org/",target:"_blank"},"nano")," (the Linux Command Line Text Editor)."),(0,a.kt)("h2",{id:"disable-the-root-account"},"Disable the root account"),(0,a.kt)("p",null,"Use SSH to connect to the device."),(0,a.kt)("p",null,"Disable the root account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo passwd -l root\n")),(0,a.kt)("p",null,"You should see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"passwd: password expiry information changed.\n")),(0,a.kt)("h2",{id:"system-updates"},"System updates"),(0,a.kt)("p",null,"Keep your system up to date:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt full-upgrade -y\nsudo apt-get autoremove\nsudo apt-get autoclean\n")),(0,a.kt)("h3",{id:"enable-automatic-security-updates"},"Enable automatic security updates"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt update && sudo apt install -y unattended-upgrades\nsudo dpkg-reconfigure -plow unattended-upgrades\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Debian wiki: ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.debian.org/SecurityManagement"},"Security Management")),(0,a.kt)("li",{parentName:"ul"},"Debian docs: ",(0,a.kt)("a",{parentName:"li",href:"https://www.debian.org/doc/manuals/securing-debian-manual/index.en.html"},"Securing Debian Manual"))))}c.isMDXComponent=!0}}]);