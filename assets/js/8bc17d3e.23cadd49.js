"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[956],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?o.createElement(g,a(a({ref:t},p),{},{components:r})):o.createElement(g,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2},a="Troubleshooting",i={unversionedId:"stake-pool/bare-metal-server/troubleshooting",id:"stake-pool/bare-metal-server/troubleshooting",title:"Troubleshooting",description:"How to use journalctl",source:"@site/docs/stake-pool/bare-metal-server/troubleshooting.md",sourceDirName:"stake-pool/bare-metal-server",slug:"/stake-pool/bare-metal-server/troubleshooting",permalink:"/guides/stake-pool/bare-metal-server/troubleshooting",draft:!1,editUrl:"https://github.com/orcada-io/guides/edit/master/docs/stake-pool/bare-metal-server/troubleshooting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hardening",permalink:"/guides/stake-pool/bare-metal-server/server-setup/hardening"},next:{title:"Relay Node",permalink:"/guides/stake-pool/relay-node"}},s={},u=[{value:"How to use journalctl",id:"how-to-use-journalctl",level:2},{value:"Current boot",id:"current-boot",level:3},{value:"Past boots",id:"past-boots",level:3},{value:"Time windows",id:"time-windows",level:3},{value:"String search",id:"string-search",level:3},{value:"Filtering",id:"filtering",level:3},{value:"By priority",id:"by-priority",level:4},{value:"Following the logs",id:"following-the-logs",level:3},{value:"Finding current disk usage",id:"finding-current-disk-usage",level:3},{value:"Deleting old logs",id:"deleting-old-logs",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h2",{id:"how-to-use-journalctl"},"How to use journalctl"),(0,n.kt)("h3",{id:"current-boot"},"Current boot"),(0,n.kt)("p",null,"To see the logs for the current boot, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-b")," flag:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo journalctl -b\n")),(0,n.kt)("h3",{id:"past-boots"},"Past boots"),(0,n.kt)("p",null,"To see the boots that ",(0,n.kt)("a",{href:"https://wiki.debian.org/systemd",target:"_blank"},"journald")," knows about, use the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-boots")," option:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo journalctl --list-boots\n")),(0,n.kt)("p",null,"You should see something like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-2 1427135385c9474e9b60d24b8ef7e41a Sat 2022-08-27 08:05:10 AEST\u2014Mon 2022-08-29 19:04:58 AEST\n-1 051641f5068e4bfaaddeb23e83b99410 Mon 2022-08-29 19:06:30 AEST\u2014Sun 2022-09-18 08:10:12 AEST\n0 2a8f01e0609b452c8b94956f496885d5 Sun 2022-09-18 08:12:01 AEST\u2014Sun 2022-09-18 08:37:55 AEST\n")),(0,n.kt)("h3",{id:"time-windows"},"Time windows"),(0,n.kt)("p",null,"You can filter by arbitrary time limits using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--since")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--until")," options, which restrict the entries\ndisplayed to those after or before the given time, respectively."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'sudo journalctl --since "2022-09-18 08:10:00"\n')),(0,n.kt)("h3",{id:"string-search"},"String search"),(0,n.kt)("p",null,"You can search for occurrences of a string."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'sudo journalctl -b -o cat --no-pager | grep "74841449"\n')),(0,n.kt)("h3",{id:"filtering"},"Filtering"),(0,n.kt)("h4",{id:"by-priority"},"By priority"),(0,n.kt)("p",null,"You can use journalctl to display only messages of a specified priority or above by using the -p option. This allows\nyou to filter out lower priority messages."),(0,n.kt)("p",null,"For instance, to show only entries logged at the error level or above, you can type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo journalctl -p err -b\n")),(0,n.kt)("p",null,"This will show you all messages marked as error, critical, alert, or emergency. The journal implements the standard\n",(0,n.kt)("strong",{parentName:"p"},"syslog")," message levels. You can use either the priority name or its corresponding numeric value. In order of highest to\nlowest priority, these are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"0: emerg"),(0,n.kt)("li",{parentName:"ul"},"1: alert"),(0,n.kt)("li",{parentName:"ul"},"2: crit"),(0,n.kt)("li",{parentName:"ul"},"3: err"),(0,n.kt)("li",{parentName:"ul"},"4: warning"),(0,n.kt)("li",{parentName:"ul"},"5: notice"),(0,n.kt)("li",{parentName:"ul"},"6: info"),(0,n.kt)("li",{parentName:"ul"},"7: debug")),(0,n.kt)("p",null,"The above numbers or names can be used interchangeably with the ",(0,n.kt)("inlineCode",{parentName:"p"},"-p")," option. Selecting a priority will display messages\nmarked at the specified level and those above it."),(0,n.kt)("h3",{id:"following-the-logs"},"Following the logs"),(0,n.kt)("p",null,"To actively follow the logs as they are being written, you can use the -f flag:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo journalctl -f\n")),(0,n.kt)("h3",{id:"finding-current-disk-usage"},"Finding current disk usage"),(0,n.kt)("p",null,"Use the following command to find out the amount of space that is being used by archived and active journal\nfiles:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo journalctl --disk-usage\n")),(0,n.kt)("p",null,"You should see something like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Archived and active journals take up 4.0G in the file system.\n")),(0,n.kt)("h3",{id:"deleting-old-logs"},"Deleting old logs"),(0,n.kt)("p",null,"Use the following command to remove all journal entries older than 1 second:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo journalctl --rotate\nsudo journalctl --vacuum-time=1s\n")))}c.isMDXComponent=!0}}]);