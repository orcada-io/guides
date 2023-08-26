"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8657],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>k});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),d=function(e){var o=n.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},p=function(e){var o=d(e.components);return n.createElement(i.Provider,{value:o},e.children)},s={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),k=r,y=u["".concat(i,".").concat(k)]||u[k]||s[k]||l;return t?n.createElement(y,a(a({ref:o},p),{},{components:t})):n.createElement(y,a({ref:o},p))}));function k(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=u;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<l;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5411:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const l={sidebar_position:3},a="Docker",c={unversionedId:"honeycomb-lx2/stake-pool/docker",id:"honeycomb-lx2/stake-pool/docker",title:"Docker",description:"Install Docker",source:"@site/docs/honeycomb-lx2/stake-pool/docker.md",sourceDirName:"honeycomb-lx2/stake-pool",slug:"/honeycomb-lx2/stake-pool/docker",permalink:"/guides/honeycomb-lx2/stake-pool/docker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/guides/honeycomb-lx2/stake-pool/bare-metal-server/troubleshooting"},next:{title:"Relay Node",permalink:"/guides/honeycomb-lx2/stake-pool/relay-node"}},i={},d=[{value:"Install Docker",id:"install-docker",level:2},{value:"Docker Image",id:"docker-image",level:2},{value:"Clone the project",id:"clone-the-project",level:3},{value:"Relay node host - topology",id:"relay-node-host---topology",level:3},{value:"Core node host - topology",id:"core-node-host---topology",level:3},{value:"Build the project",id:"build-the-project",level:3}],p={toc:d};function s(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker"},"Docker"),(0,r.kt)("h2",{id:"install-docker"},"Install Docker"),(0,r.kt)("p",null,"Before you install Docker Engine for the first time on a new host machine, you need to set up the Docker repository.\nAfterward, you can install and update Docker from the repository."),(0,r.kt)("p",null,"Follow the step-by-step guide in the Docker docs to install Docker Engine using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/debian/#install-using-the-repository"},"apt repository"),"."),(0,r.kt)("h2",{id:"docker-image"},"Docker Image"),(0,r.kt)("p",null,"The Cardano Node Docker Image contains all the files you need to run a Cardano node on an arm64 device.\nThe image can be configured to run as a relay node or as a core (block producing) node."),(0,r.kt)("h3",{id:"clone-the-project"},"Clone the project"),(0,r.kt)("p",null,"Change the current working directory to the location where you want the cloned directory to be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir docker\ncd docker\n")),(0,r.kt)("p",null,"Clone the project by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone ssh://git@gitlab:3001/docker/cardano-node.git\n")),(0,r.kt)("p",null,"We can visualise the project structure using the ",(0,r.kt)("strong",{parentName:"p"},"tree")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install tree\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tree -da\n")),(0,r.kt)("p",null,"You should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 docker\n\u2502\xa0\xa0 \u251c\u2500\u2500 cardano-node\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 build\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502   \u251c\u2500\u2500 cardano-node.dockerfile\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502   \u2514\u2500\u2500 entrypoint.sh\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502   \u2514\u2500\u2500 submit-api.sh\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 files\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \xa0\xa0 \xa0\u2514\u2500\u2500 topology.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 run\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 core-node-1\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 .keys\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 usb-transfer\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 relay-node-1\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 .keys\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 relay-node-2\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 .keys\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 relay-node-3\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 .keys\n\u2514\u2500\u2500 tmp\n")),(0,r.kt)("h3",{id:"relay-node-host---topology"},"Relay node host - topology"),(0,r.kt)("p",null,"On the LX2 that is the host for your public Relay nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd cardano-node/build/files\ncp relay-node-topology.json topology.json\n")),(0,r.kt)("h3",{id:"core-node-host---topology"},"Core node host - topology"),(0,r.kt)("p",null,"On the LX2 that is the host for your Core node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd cardano-node/build/files\ncp core-node-topology.json topology.json\n")),(0,r.kt)("h3",{id:"build-the-project"},"Build the project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd cardano-node/build\nsudo docker build -t cardano-node:8.1.2 -f cardano-node.dockerfile .\n")))}s.isMDXComponent=!0}}]);