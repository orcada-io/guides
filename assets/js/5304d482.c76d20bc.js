"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7214],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>y});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=t.createContext({}),p=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},d=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(o),y=r,k=u["".concat(c,".").concat(y)]||u[y]||s[y]||a;return o?t.createElement(k,l(l({ref:n},d),{},{components:o})):t.createElement(k,l({ref:n},d))}));function y(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2604:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=o(7462),r=(o(7294),o(3905));const a={sidebar_position:4},l="Relay Node",i={unversionedId:"honeycomb-lx2/stake-pool/relay-node",id:"honeycomb-lx2/stake-pool/relay-node",title:"Relay Node",description:"Docker Image",source:"@site/docs/honeycomb-lx2/stake-pool/relay-node.md",sourceDirName:"honeycomb-lx2/stake-pool",slug:"/honeycomb-lx2/stake-pool/relay-node",permalink:"/guides/honeycomb-lx2/stake-pool/relay-node",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/guides/honeycomb-lx2/stake-pool/docker"},next:{title:"Core Node",permalink:"/guides/honeycomb-lx2/stake-pool/core-node"}},c={},p=[{value:"Docker Image",id:"docker-image",level:2},{value:"Run the container",id:"run-the-container",level:3},{value:"Topology",id:"topology",level:3},{value:"Configuring a Relay Node",id:"configuring-a-relay-node",level:4},{value:"gLiveView",id:"gliveview",level:3}],d={toc:p};function s(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"relay-node"},"Relay Node"),(0,r.kt)("h2",{id:"docker-image"},"Docker Image"),(0,r.kt)("p",null,"The Cardano Node Docker Image contains all the files you need to run a Cardano node on an arm64 device.\nThe image can be configured to run as a relay node or as a core (block producing) node."),(0,r.kt)("h3",{id:"run-the-container"},"Run the container"),(0,r.kt)("p",null,"Connect to the host machine via SSH using the server's ip address or hostname:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh ada@192.168.102.13\nssh ada@lx2-1.orcada.io\n")),(0,r.kt)("p",null,"Change the current working directory to the relay directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/docker/cardano-node/relay-node-3\n")),(0,r.kt)("p",null,"Launch the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ./run.sh\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"run.sh")," shell script contains the configuration information for the container, including its name,\nport number, etc."),(0,r.kt)("h3",{id:"topology"},"Topology"),(0,r.kt)("p",null,"The Stake Pool topology describes the nodes that comprise the Cardano network. Each stake pool must operate at least\none relay node and one core (block producing) node."),(0,r.kt)("p",null,"There are several tools that you can use to obtain information about the Cardano network, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://cexplorer.io/relays\n")),(0,r.kt)("p",null,"and"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://explorer.mainnet.cardano.org/relays/topology.json\n")),(0,r.kt)("h4",{id:"configuring-a-relay-node"},"Configuring a Relay Node"),(0,r.kt)("p",null,"Connect to the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo docker exec -it relay-node-3 bash\n")),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"topology.json")," file::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/pool/files\nnano topology.json\n")),(0,r.kt)("p",null,"Add a record for the core node and a record for each peer relay node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "Producers": [\n    {\n      "addr": "CoreNodeIPAddress",\n      "port": CoreNodePortNumber,\n      "valency": 1\n    },\n    {\n      "addr": "PeerRelayNodeIPAddress",\n      "port": PeerRelayNodePortNumber,\n      "valency": 1\n    },\n    {\n      ...\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Then save (Ctrl+O) and exit (Ctrl+X) nano."),(0,r.kt)("p",null,"Stop and then restart the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo docker container stop relay-node-3\nsudo docker container start relay-node-3\n")),(0,r.kt)("h3",{id:"gliveview"},"gLiveView"),(0,r.kt)("p",null,"Run gLiveView:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo docker exec -it relay-node-3 /home/ada/pool/scripts/gLiveView.sh -u\n")))}s.isMDXComponent=!0}}]);