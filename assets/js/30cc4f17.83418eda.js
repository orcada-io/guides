"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[324],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),y=o,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2772:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3},s="Add chrony",i={unversionedId:"raspberry-pi/stake-pool/bare-metal-server/server-setup/add-chrony",id:"raspberry-pi/stake-pool/bare-metal-server/server-setup/add-chrony",title:"Add chrony",description:"Prerequisites",source:"@site/docs/raspberry-pi/stake-pool/bare-metal-server/server-setup/add-chrony.md",sourceDirName:"raspberry-pi/stake-pool/bare-metal-server/server-setup",slug:"/raspberry-pi/stake-pool/bare-metal-server/server-setup/add-chrony",permalink:"/guides/raspberry-pi/stake-pool/bare-metal-server/server-setup/add-chrony",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add zram",permalink:"/guides/raspberry-pi/stake-pool/bare-metal-server/server-setup/add-zram"},next:{title:"Hardening",permalink:"/guides/raspberry-pi/stake-pool/bare-metal-server/server-setup/hardening"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install chrony",id:"install-chrony",level:2},{value:"Resources",id:"resources",level:3}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-chrony"},"Add chrony"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Check the NTP Pool project's ",(0,o.kt)("a",{href:"https://www.ntppool.org/en/",target:"_blank"},"website")," to find pools near you."),(0,o.kt)("h2",{id:"install-chrony"},"Install chrony"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{href:"https://chrony.tuxfamily.org/",target:"_blank"},"chrony"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install -y chrony\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/chrony/chrony.conf"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nano /etc/chrony/chrony.conf\n")),(0,o.kt)("p",null,"And update it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Australia - https://www.ntppool.org/zone/au\nserver 0.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\nserver 1.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\nserver 2.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\nserver 3.au.pool.ntp.org iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\n\n# This directive specify the location of the file containing ID/key pairs for NTP authentication.\nkeyfile /etc/chrony/chrony.keys\n\n# This directive specify the file into which chronyd will store the rate information.\ndriftfile /var/lib/chrony/chrony.drift\n\n# Uncomment the following line to turn logging on.\n# log tracking measurements statistics\n\n# Log files location.\nlogdir /var/log/chrony\n\n# Stop bad estimates upsetting machine clock.\nmaxupdateskew 5.0\n\n# This directive enables kernel synchronisation (every 11 minutes) of the\n# real-time clock. Note that it can\u2019t be used along with the 'rtcfile' directive.\nrtcsync\n\n# Step the system clock instead of slewing it if the adjustment is larger than\n# one second, but only in the first three clock updates.\nmakestep 0.1 -1\n\n# Get TAI-UTC offset and leap seconds from the system tz database.\nleapsectz right/UTC\n\n# Serve time even if not synchronized to a time source.\nlocal stratum 10\n")),(0,o.kt)("p",null,"Then save (Ctrl+O) and exit (Ctrl+X) nano."),(0,o.kt)("p",null,"Restart chrony:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo service chrony restart\n")),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TUX Family: ",(0,o.kt)("a",{parentName:"li",href:"https://chrony.tuxfamily.org/"},"chrony"))))}u.isMDXComponent=!0}}]);