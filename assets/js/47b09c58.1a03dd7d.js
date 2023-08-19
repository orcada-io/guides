"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,k=u["".concat(d,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:7},l="Slot Leader Node",i={unversionedId:"raspberry-pi/stake-pool/slot-leader-node",id:"raspberry-pi/stake-pool/slot-leader-node",title:"Slot Leader Node",description:"Raspberry Pi 4 Model B",source:"@site/docs/raspberry-pi/stake-pool/slot-leader-node.md",sourceDirName:"raspberry-pi/stake-pool",slug:"/raspberry-pi/stake-pool/slot-leader-node",permalink:"/guides/raspberry-pi/stake-pool/slot-leader-node",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Relay Node",permalink:"/guides/raspberry-pi/stake-pool/relay-node"},next:{title:"Monitoring",permalink:"/guides/raspberry-pi/stake-pool/monitoring"}},d={},s=[{value:"<del>Raspberry Pi 4 Model B</del>",id:"raspberry-pi-4-model-b",level:2},{value:"Synology DS720+",id:"synology-ds720",level:2},{value:"Docker",id:"docker",level:3},{value:"Create the directories for the image",id:"create-the-directories-for-the-image",level:3},{value:"Run the image",id:"run-the-image",level:3},{value:"Run a Shell in the container",id:"run-a-shell-in-the-container",level:3},{value:"Query the leadership schedule",id:"query-the-leadership-schedule",level:3},{value:"Resources",id:"resources",level:3}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slot-leader-node"},"Slot Leader Node"),(0,o.kt)("h2",{id:"raspberry-pi-4-model-b"},(0,o.kt)("del",{parentName:"h2"},"Raspberry Pi 4 Model B")),(0,o.kt)("p",null,"The Raspberry Pi 4 Model B was released with support for up to ",(0,o.kt)("strong",{parentName:"p"},"8GB")," of physical memory. "),(0,o.kt)("p",null,"However, even with zram enabled and an optimally configured GHC (Glasgow Haskell Compiler) runtime system, it does not\nhave enough resources to run a Cardano Node and query the leadership schedule."),(0,o.kt)("h2",{id:"synology-ds720"},"Synology DS720+"),(0,o.kt)("p",null,"The Synology DS720+ provides centralised, high performance file storage to our bare-metal devices."),(0,o.kt)("p",null,"The DS720+ has ",(0,o.kt)("strong",{parentName:"p"},"18GB")," of physical memory, so it can run a containerised version of the Cardano\nNode software and query the leadership schedule."),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Use the Synology DSM's Package Center to download and install Docker:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker",src:n(9140).Z,width:"997",height:"573"})),(0,o.kt)("p",null,"The installation will create a Shared Folder called docker: ",(0,o.kt)("inlineCode",{parentName:"p"},"/volume1/docker")),(0,o.kt)("h3",{id:"create-the-directories-for-the-image"},"Create the directories for the image"),(0,o.kt)("p",null,"Connect (SSH) to the Synology NAS, you should see something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"admin@nas-1:~$\n")),(0,o.kt)("p",null,"Create the directories for the Cardano Node image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /volume1/docker\nmkdir cardano-node-data\nmkdir cardano-node-ipc\n")),(0,o.kt)("h3",{id:"run-the-image"},"Run the image"),(0,o.kt)("p",null,"Run the Cardano Node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --name=cardano-node \\\n  -e NETWORK=mainnet \\\n  -v /volume1/docker/cardano-node-ipc:/ipc \\\n  -v /volume1/docker/cardano-node-data:/data \\\n  inputoutput/cardano-node:1.35.3\n")),(0,o.kt)("p",null,"After a few minutes you should see something like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker - Run the image",src:n(2464).Z,width:"996",height:"575"})),(0,o.kt)("p",null,"Stop the container:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker - Stop the conatiner",src:n(462).Z,width:"997",height:"575"})),(0,o.kt)("p",null,"Use the Synology DSM's File Station to copy the database directory from another (stopped) node to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/volume1/docker/cardano-node-data")," directory:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker - Copy the database directory",src:n(9558).Z,width:"771",height:"145"})),(0,o.kt)("p",null,"Use the File Station to copy the following files from the Core Node's ",(0,o.kt)("inlineCode",{parentName:"p"},"${NODE_HOME}")," (/home/ada/pi-pool)\ndirectory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/volume1/docker/cardano-node-data")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"stakepoolid.txt\nvrf.skey\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker - Copy files",src:n(5276).Z,width:"771",height:"215"})),(0,o.kt)("p",null,"Use the File Station to copy the following file from the Core Node's ",(0,o.kt)("inlineCode",{parentName:"p"},"${NODE_HOME}")," (/home/ada/pi-pool/files)\ndirectory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/volume1/docker/cardano-node-data")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mainnet-shelley-genesis.json\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker - Copy file",src:n(9270).Z,width:"770",height:"246"})),(0,o.kt)("p",null,"Restart the container."),(0,o.kt)("h3",{id:"run-a-shell-in-the-container"},"Run a Shell in the container"),(0,o.kt)("p",null,"Use the following command to run a Shell in the Cardano Node container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo docker exec -it cardano-node bash\n")),(0,o.kt)("h3",{id:"query-the-leadership-schedule"},"Query the leadership schedule"),(0,o.kt)("p",null,"Now you can use the Cardano CLI to query the leadership schedule for the ",(0,o.kt)("strong",{parentName:"p"},"current")," epoch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export CARDANO_NODE_SOCKET_PATH=/ipc/node.socket\ncd data\n\ncardano-cli query leadership-schedule \\\n  --mainnet \\\n  --genesis ./mainnet-shelley-genesis.json \\\n  --stake-pool-id $(cat ./stakepoolid.txt) \\\n  --vrf-signing-key-file ./vrf.skey \\\n  --current\n")),(0,o.kt)("p",null,"You should see something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," SlotNo\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  UTC Time \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\n--------------------------------------------------\n71025961 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2022-09-07 23:10:52 UTC\n71281156 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2022-09-10 22:04:07 UTC\n71416618 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2022-09-12 11:41:49 UTC\n")),(0,o.kt)("p",null,"1.5 days before an epoch boundary you can query the leadership schedule for the ",(0,o.kt)("strong",{parentName:"p"},"next")," epoch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export CARDANO_NODE_SOCKET_PATH=/ipc/node.socket\ncd data\n\ncardano-cli query leadership-schedule \\\n  --mainnet \\\n  --genesis ./mainnet-shelley-genesis.json \\\n  --stake-pool-id $(cat ./stakepoolid.txt) \\\n  --vrf-signing-key-file ./vrf.skey \\\n  --next\n")),(0,o.kt)("p",null,"You should see something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," SlotNo\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  UTC Time \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\n--------------------------------------------------\n71493318 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2022-09-13 09:00:09 UTC\n71507684 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2022-09-13 12:59:35 UTC\n71535556 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2022-09-12 11:41:49 UTC\n71648565 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2022-09-15 04:07:36 UTC\n71707218 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2022-09-15 20:25:09 UTC\n71721002 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2022-09-16 00:14:53 UTC\n")),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cardano docs: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.cardano.org/development-guidelines/installing-the-cardano-node"},"Installing the Cardano node")),(0,o.kt)("li",{parentName:"ul"},"The Cardano Operations Book: ",(0,o.kt)("a",{parentName:"li",href:"https://book.world.dev.cardano.org/environments.html"},"Environments"))))}c.isMDXComponent=!0},2464:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dsm-docker-cardano-node-c344e48287a1ca16a9d4e2828576eca9.png"},462:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dsm-docker-stop-the-container-2883322656d2c7fbd74c1ee50e07c52e.png"},9140:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dsm-docker-4bbadf5c1ab13f09139e0a0537be676b.png"},9558:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sln-db-directory-ebacf2d5b149425acc1697a5c2d0de6b.png"},9270:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sln-shelley-genesis-8bfeaaebb5ac4ea262fc5d562aadcb5e.png"},5276:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sln-vrf-skey-ae31e7a89659d46c2a5c8d2121eac029.png"}}]);