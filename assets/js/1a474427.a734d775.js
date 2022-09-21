"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:8},l="Monitoring",i={unversionedId:"stake-pool/monitoring",id:"stake-pool/monitoring",title:"Monitoring",description:"Docker",source:"@site/docs/stake-pool/monitoring.md",sourceDirName:"stake-pool",slug:"/stake-pool/monitoring",permalink:"/guides/stake-pool/monitoring",draft:!1,editUrl:"https://github.com/orcada-io/guides/edit/master/docs/stake-pool/monitoring.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Slot Leader Node",permalink:"/guides/stake-pool/slot-leader-node"}},s={},p=[{value:"Docker",id:"docker",level:2},{value:"Prometheus",id:"prometheus",level:2},{value:"Create a directory for the image",id:"create-a-directory-for-the-image",level:3},{value:"Configure Prometheus",id:"configure-prometheus",level:3},{value:"Run the image",id:"run-the-image",level:3},{value:"Resources",id:"resources",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring"},"Monitoring"),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Use the Synology DSM's Package Center to download and install Docker:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker",src:r(2407).Z,width:"997",height:"573"})),(0,o.kt)("p",null,"The installation will create a Shared Folder called docker: ",(0,o.kt)("inlineCode",{parentName:"p"},"/volume1/docker")),(0,o.kt)("h2",{id:"prometheus"},"Prometheus"),(0,o.kt)("h3",{id:"create-a-directory-for-the-image"},"Create a directory for the image"),(0,o.kt)("p",null,"Connect (SSH) to the Synology NAS, you should see something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"admin@nas-1:~$\n")),(0,o.kt)("p",null,"Create the directory for the Prometheus image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /volume1/docker\nmkdir prometheus\n")),(0,o.kt)("h3",{id:"configure-prometheus"},"Configure Prometheus"),(0,o.kt)("p",null,"Create a configuration file for ",(0,o.kt)("strong",{parentName:"p"},"Prometheus"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nano prometheus.yml\n")),(0,o.kt)("p",null,"And update it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'global:\n  scrape_interval: 15s\n\n  external_labels:\n    monitor: "stake-pool-monitor"\n\nscrape_configs:\n  - job_name: "Prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["192.168.101.3:12798"]\n        labels:\n          alias: "Relay 1"\n          type: "cardano-node"\n      - targets: ["192.168.101.3:9100"]\n        labels:\n          alias: "Relay 1"\n          type: "node"\n      - targets: ["192.168.101.4:12798"]\n        labels:\n          alias: "Relay 2" \n          type: "cardano-node"\n      - targets: ["192.168.101.4:9100"]\n        labels:\n          alias: "Relay 2"\n          type: "node"\n      - targets: ["192.168.101.5:12798"]\n        labels:\n          alias: "Relay 3"\n          type: "cardano-node"\n      - targets: ["192.168.101.5:9100"]\n        labels:\n          alias: "Relay 3"\n          type: "node"\n      - targets: ["192.168.102.3:12798"]\n        labels:\n          alias: "Core Node 1"\n          type: "cardano-node"\n      - targets: ["192.168.102.3:9100"]\n        labels:\n          alias: "Core Node 1"\n          type: "node"\n')),(0,o.kt)("h3",{id:"run-the-image"},"Run the image"),(0,o.kt)("p",null,"Run Prometheus:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --name=prometheus \\\n  -p 9090:9090 \\\n  -v /volume1/docker/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml \\\n  prom/prometheus  \n")),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prometheus docs: ",(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/"},"Configuration"))))}u.isMDXComponent=!0},2407:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dsm-docker-4bbadf5c1ab13f09139e0a0537be676b.png"}}]);