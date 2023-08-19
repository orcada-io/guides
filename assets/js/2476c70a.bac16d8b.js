"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},i="NAS",l={unversionedId:"network/hardware/nas",id:"network/hardware/nas",title:"NAS",description:"A Network Attached Storage (NAS) device provides centralised, high performance file storage to client devices.",source:"@site/docs/network/hardware/nas.md",sourceDirName:"network/hardware",slug:"/network/hardware/nas",permalink:"/guides/network/hardware/nas",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Switch",permalink:"/guides/network/hardware/switch"},next:{title:"Network Setup",permalink:"/guides/network/network-setup"}},s={},c=[{value:"Synology DS720+",id:"synology-ds720",level:2},{value:"Manuals",id:"manuals",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nas"},"NAS"),(0,a.kt)("p",null,"A Network Attached Storage (NAS) device provides centralised, high performance file storage to client devices."),(0,a.kt)("h2",{id:"synology-ds720"},"Synology DS720+"),(0,a.kt)("p",null,"The Synology DS720+ is a compact network-attached storage solution."),(0,a.kt)("p",null,"The DS720+ has two RJ-45 1GbE LAN ports and two built-in drive bays. "),(0,a.kt)("p",null,"It can support ",(0,a.kt)("a",{href:"https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_1",target:"_blank"},"RAID level 1")," (an exact copy or mirror)\nand the array will continue to operate so long as at least one member drive is operational."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Synology DS720+",src:r(1086).Z,width:"800",height:"800"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Synology DS720+",src:r(1647).Z,width:"800",height:"800"})),(0,a.kt)("h3",{id:"manuals"},"Manuals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:r(7092).Z},"Synology DS720+ - Hardware Installation Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:r(9051).Z},"Synology DiskStation Manager (DSM) v7.1 - User Guide"))))}d.isMDXComponent=!0},7092:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/Synology-720+HIG-83ad2cce81a0a420848d6d29f907f15d.pdf"},9051:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/Synology-DSM-v7.1-UG-47a5ef4790ca5126f1cf5aed9628c92c.pdf"},1647:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/synology-ds720-back-c358ab3557bc0bf8f8bd14640763a5e4.png"},1086:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/synology-ds720-front-b4eb89f8c613e21b045c031140478f62.png"}}]);