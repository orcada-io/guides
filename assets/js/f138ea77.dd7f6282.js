"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[998],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=i,f=u["".concat(p,".").concat(b)]||u[b]||y[b]||a;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7826:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const a={sidebar_position:1},o="Raspberry Pi OS",s={unversionedId:"software/raspberry-pi-os",id:"software/raspberry-pi-os",title:"Raspberry Pi OS",description:"A Raspberry Pi needs an operating system to work. The official Raspberry Pi operating system is the Raspberry Pi OS",source:"@site/docs/software/raspberry-pi-os.md",sourceDirName:"software",slug:"/software/raspberry-pi-os",permalink:"/guides/software/raspberry-pi-os",draft:!1,editUrl:"https://github.com/orcada-io/guides/edit/master/docs/software/raspberry-pi-os.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Software",permalink:"/guides/category/software"},next:{title:"Stake Pool",permalink:"/guides/category/stake-pool"}},p={},l=[{value:"Raspberry Pi OS Lite 64 bit",id:"raspberry-pi-os-lite-64-bit",level:2},{value:"Raspberry Pi Desktop",id:"raspberry-pi-desktop",level:2}],c={toc:l};function y(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"raspberry-pi-os"},"Raspberry Pi OS"),(0,i.kt)("p",null,"A Raspberry Pi needs an operating system to work. The official Raspberry Pi operating system is the Raspberry Pi OS\n(previously called Raspbian)."),(0,i.kt)("h2",{id:"raspberry-pi-os-lite-64-bit"},"Raspberry Pi OS Lite 64 bit"),(0,i.kt)("p",null,"The Raspberry Pi OS Lite 64 bit image is a port of Debian Bullseye with no Desktop environment."),(0,i.kt)("p",null,"This is the operating system image that the Cardano ",(0,i.kt)("strong",{parentName:"p"},"Relay")," and ",(0,i.kt)("strong",{parentName:"p"},"Core")," nodes (Raspberry Pi 4 Model B 8GB) will use."),(0,i.kt)("h2",{id:"raspberry-pi-desktop"},"Raspberry Pi Desktop"),(0,i.kt)("p",null,"The Raspberry Pi Desktop image includes the Raspberry Pi Desktop."),(0,i.kt)("p",null,"This is the operating system image that the Cardano ",(0,i.kt)("strong",{parentName:"p"},"Cold")," node (Raspberry Pi 400) will use."))}y.isMDXComponent=!0}}]);