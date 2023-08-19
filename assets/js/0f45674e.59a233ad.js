"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[927],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(h,l(l({ref:a},d),{},{components:t})):r.createElement(h,l({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4749:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const o={sidebar_position:8},l="Monitoring",i={unversionedId:"raspberry-pi/stake-pool/monitoring",id:"raspberry-pi/stake-pool/monitoring",title:"Monitoring",description:"Docker",source:"@site/docs/raspberry-pi/stake-pool/monitoring.md",sourceDirName:"raspberry-pi/stake-pool",slug:"/raspberry-pi/stake-pool/monitoring",permalink:"/guides/raspberry-pi/stake-pool/monitoring",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Slot Leader Node",permalink:"/guides/raspberry-pi/stake-pool/slot-leader-node"}},s={},p=[{value:"Docker",id:"docker",level:2},{value:"Prometheus",id:"prometheus",level:2},{value:"Create a directory for the image",id:"create-a-directory-for-the-image",level:3},{value:"Configure Prometheus",id:"configure-prometheus",level:3},{value:"Run the image",id:"run-the-image",level:3},{value:"Grafana",id:"grafana",level:2},{value:"Create a directory for the image",id:"create-a-directory-for-the-image-1",level:3},{value:"Run the image",id:"run-the-image-1",level:3},{value:"Configure Grafana",id:"configure-grafana",level:3},{value:"Add a data source",id:"add-a-data-source",level:4},{value:"Sample dashboards",id:"sample-dashboards",level:4},{value:"Import a dashboard",id:"import-a-dashboard",level:4},{value:"Install a Grafana plugin",id:"install-a-grafana-plugin",level:3},{value:"Resources",id:"resources",level:3}],d={toc:p};function u(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"monitoring"},"Monitoring"),(0,n.kt)("h2",{id:"docker"},"Docker"),(0,n.kt)("p",null,"Use the Synology DSM's Package Center to download and install Docker:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docker",src:t(9140).Z,width:"997",height:"573"})),(0,n.kt)("p",null,"The installation will create a Shared Folder called docker: ",(0,n.kt)("inlineCode",{parentName:"p"},"/volume1/docker")),(0,n.kt)("h2",{id:"prometheus"},"Prometheus"),(0,n.kt)("h3",{id:"create-a-directory-for-the-image"},"Create a directory for the image"),(0,n.kt)("p",null,"Connect (SSH) to the Synology NAS, you should see something like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"admin@nas-1:~$\n")),(0,n.kt)("p",null,"Create the directory for the Prometheus image:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd /volume1/docker\nmkdir prometheus\n")),(0,n.kt)("h3",{id:"configure-prometheus"},"Configure Prometheus"),(0,n.kt)("p",null,"Create a configuration file for ",(0,n.kt)("strong",{parentName:"p"},"Prometheus"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"nano prometheus.yml\n")),(0,n.kt)("p",null,"And update it as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'global:\n  scrape_interval: 15s\n\n  external_labels:\n    monitor: "stake-pool-monitor"\n\nscrape_configs:\n  - job_name: "Prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["192.168.101.3:12798"]\n        labels:\n          alias: "Relay 1"\n          type: "cardano-node"\n      - targets: ["192.168.101.3:9100"]\n        labels:\n          alias: "Relay 1"\n          type: "node"\n      - targets: ["192.168.101.4:12798"]\n        labels:\n          alias: "Relay 2" \n          type: "cardano-node"\n      - targets: ["192.168.101.4:9100"]\n        labels:\n          alias: "Relay 2"\n          type: "node"\n      - targets: ["192.168.101.5:12798"]\n        labels:\n          alias: "Relay 3"\n          type: "cardano-node"\n      - targets: ["192.168.101.5:9100"]\n        labels:\n          alias: "Relay 3"\n          type: "node"\n      - targets: ["192.168.102.3:12798"]\n        labels:\n          alias: "Core Node 1"\n          type: "cardano-node"\n      - targets: ["192.168.102.3:9100"]\n        labels:\n          alias: "Core Node 1"\n          type: "node"\n')),(0,n.kt)("h3",{id:"run-the-image"},"Run the image"),(0,n.kt)("p",null,"Run Prometheus:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d --name=prometheus \\\n  -p 9090:9090 \\\n  -v /volume1/docker/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml \\\n  prom/prometheus  \n")),(0,n.kt)("h2",{id:"grafana"},"Grafana"),(0,n.kt)("h3",{id:"create-a-directory-for-the-image-1"},"Create a directory for the image"),(0,n.kt)("p",null,"Connect (SSH) to the Synology NAS, you should see something like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"admin@nas-1:~$\n")),(0,n.kt)("p",null,"Create the directory for the Grafana image:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd /volume1/docker\nmkdir grafana\n")),(0,n.kt)("h3",{id:"run-the-image-1"},"Run the image"),(0,n.kt)("p",null,"Run Grafana:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d --name=grafana \\\n  -p 7001:3000 \\\n  -v /volume1/docker/grafana:/var/lib/grafana \\\n  grafana/grafana && \\\n  chown -R 472:472 /volume1/docker/grafana\n")),(0,n.kt)("p",null,"Navigate to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"http://192.168.101.2:7001/login\n")),(0,n.kt)("p",null,"The default username is ",(0,n.kt)("strong",{parentName:"p"},"admin"),". The default password is ",(0,n.kt)("strong",{parentName:"p"},"admin"),"."),(0,n.kt)("p",null,"You should see something like:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docker",src:t(4196).Z,width:"1397",height:"525"})),(0,n.kt)("h3",{id:"configure-grafana"},"Configure Grafana"),(0,n.kt)("h4",{id:"add-a-data-source"},"Add a data source"),(0,n.kt)("p",null,"In the Grafana side menu select Configuration -> Data sources then click the ",(0,n.kt)("strong",{parentName:"p"},"Add data source")," button. "),(0,n.kt)("p",null,"Choose Prometheus:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docker",src:t(944).Z,width:"1396",height:"461"})),(0,n.kt)("p",null,"Enter the data source URL: ",(0,n.kt)("inlineCode",{parentName:"p"},"http://192.168.101.2:9090")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," The IP address for the Synology NAS is ",(0,n.kt)("inlineCode",{parentName:"p"},"192.168.101.2")," and the Prometheus port number is ",(0,n.kt)("inlineCode",{parentName:"p"},"9090"),"."),(0,n.kt)("p",null,"Then click the ",(0,n.kt)("strong",{parentName:"p"},"Save & test")," button."),(0,n.kt)("h4",{id:"sample-dashboards"},"Sample dashboards"),(0,n.kt)("p",null,"Pi Pool:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docker",src:t(7841).Z,width:"1907",height:"980"})),(0,n.kt)("p",null,"SNSKY Pool:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docker",src:t(8554).Z,width:"1016",height:"411"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Armada Alliance: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/armada-alliance/dashboards"},"Sample dashboards")),(0,n.kt)("li",{parentName:"ul"},"Pi Pool: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/alessandrokonrad/Pi-Pool/tree/master/monitoring"},"Sample dashboards")),(0,n.kt)("li",{parentName:"ul"},"SNSKY: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sanskys/SNSKY"},"Sample dashboards"))),(0,n.kt)("h4",{id:"import-a-dashboard"},"Import a dashboard"),(0,n.kt)("p",null,"In the Grafana side menu select Dashboards then click the ",(0,n.kt)("strong",{parentName:"p"},"Import")," button."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docker",src:t(2415).Z,width:"3028",height:"1304"})),(0,n.kt)("h3",{id:"install-a-grafana-plugin"},"Install a Grafana plugin"),(0,n.kt)("p",null,"Use the following command to run a Shell in the Grafana container:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo docker exec -it grafana bash\n")),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",{href:"https://grafana.com/docs/grafana/latest/cli/",target:"_blank"},"Grafana CLI")," to install\nplugins."),(0,n.kt)("p",null,"For example, to install the ",(0,n.kt)("a",{href:"https://grafana.com/grafana/plugins/grafana-clock-panel/",target:"_blank"},"Grafana Clock")," panel use the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"grafana-cli plugins install grafana-clock-panel\n")),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prometheus docs: ",(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Grafana docs: ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Grafana docs: ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/dashboards/"},"About Grafana dashboards")),(0,n.kt)("li",{parentName:"ul"},"Grafana docs: ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/best-practices/"},"Best Practices")),(0,n.kt)("li",{parentName:"ul"},"Pool Data docs: ",(0,n.kt)("a",{parentName:"li",href:"https://api.pooldata.live/"},"Pool Data API for Grafana"))))}u.isMDXComponent=!0},9140:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dsm-docker-4bbadf5c1ab13f09139e0a0537be676b.png"},944:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/grafana-data-source-aff9e832a345c92e80c89b29b8dfb8ff.png"},2415:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/grafana-import-dashboard-fb1874c875baa7098a6dd486a88141f5.png"},7841:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/grafana-pi-pool-dashboard-55cbdd28508cd62938e7317a2e234d78.png"},8554:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/grafana-snsky-dashboard-837d3745eb1246897b19dd1b5558073f.png"},4196:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/grafana-welcome-5b8ebdd4391aedca8b97f84dc0875c24.png"}}]);