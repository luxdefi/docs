"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4250],{97987:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=s(85893),t=s(11151);const i={tags:["Nodes"],description:"This page demonstrates how to set up a `luxd.service` file to enable a manually deployed validator node to run in the background of a server instead of in the terminal directly.",sidebar_label:"Run as a Background Service",pagination_label:"Run an Lux Node as a Background Service",sidebar_position:6},o="Run an Lux Node as a Background Service",d={id:"nodes/maintain/background-service-config",title:"Run an Lux Node as a Background Service",description:"This page demonstrates how to set up a `luxd.service` file to enable a manually deployed validator node to run in the background of a server instead of in the terminal directly.",source:"@site/docs/nodes/maintain/background-service-config.md",sourceDirName:"nodes/maintain",slug:"/nodes/maintain/background-service-config",permalink:"/nodes/maintain/background-service-config",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/nodes/maintain/background-service-config.md",tags:[{label:"Nodes",permalink:"/tags/nodes"}],version:"current",sidebarPosition:6,frontMatter:{tags:["Nodes"],description:"This page demonstrates how to set up a `luxd.service` file to enable a manually deployed validator node to run in the background of a server instead of in the terminal directly.",sidebar_label:"Run as a Background Service",pagination_label:"Run an Lux Node as a Background Service",sidebar_position:6},sidebar:"nodes",previous:{title:"Enroll in Lux Notify",permalink:"/nodes/maintain/notify"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Testnet Config",id:"testnet-config",level:3},{value:"Mainnet Config",id:"mainnet-config",level:3},{value:"Start the Node",id:"start-the-node",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"run-an-lux-node-as-a-background-service",children:"Run an Lux Node as a Background Service"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["This page demonstrates how to set up a ",(0,r.jsx)(n.code,{children:"luxd.service"})," file to\nenable a manually deployed validator node to run in the background of\na server instead of in the terminal directly."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Luxd installed"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.h3,{id:"testnet-config",children:"Testnet Config"}),"\n",(0,r.jsxs)(n.p,{children:["Run this command in your terminal to create the ",(0,r.jsx)(n.code,{children:"luxd.service"})," file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo nano /etc/systemd/system/luxd.service\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Paste the following configuration into the ",(0,r.jsx)(n.code,{children:"luxd.service"})," file"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Remember to modify the values of:"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"user="})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"group="})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"WorkingDirectory="})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"ExecStart="})})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"For those that you have configured on your Server"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[Unit]\nDescription=Lux Node service\nAfter=network.target\n\n[Service]\nUser='YourUserHere'\nGroup='YourUserHere'\nRestart=always\nPrivateTmp=true\nTimeoutStopSec=60s\nTimeoutStartSec=10s\nStartLimitInterval=120s\nStartLimitBurst=5\nWorkingDirectory=/Your/Path/To/luxd\nExecStart=/Your/Path/To/luxd/./luxd \\  \n   --network-id=testnet \\\n   --api-metrics-enabled=true \n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Press ",(0,r.jsx)(n.strong,{children:"Ctrl + X"})," then ",(0,r.jsx)(n.strong,{children:"Y"})," then ",(0,r.jsx)(n.strong,{children:"Enter"})," to save and exit."]}),"\n",(0,r.jsx)(n.p,{children:"Now, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mainnet-config",children:"Mainnet Config"}),"\n",(0,r.jsxs)(n.p,{children:["Run this command in your terminal to create the ",(0,r.jsx)(n.code,{children:"luxd.service"})," file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo nano /etc/systemd/system/luxd.service\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Paste the following configuration into the ",(0,r.jsx)(n.code,{children:"luxd.service"})," file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[Unit]\nDescription=Lux Node service\nAfter=network.target\n\n[Service]\nUser='YourUserHere'\nGroup='YourUserHere'\nRestart=always\nPrivateTmp=true\nTimeoutStopSec=60s\nTimeoutStartSec=10s\nStartLimitInterval=120s\nStartLimitBurst=5\nWorkingDirectory=/Your/Path/To/luxd\nExecStart=/Your/Path/To/luxd/./luxd \\\n   --api-metrics-enabled=true\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Press ",(0,r.jsx)(n.strong,{children:"Ctrl + X"})," then ",(0,r.jsx)(n.strong,{children:"Y"})," then ",(0,r.jsx)(n.strong,{children:"Enter"})," to save and exit."]}),"\n",(0,r.jsx)(n.p,{children:"Now, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(n.h2,{id:"start-the-node",children:"Start the Node"}),"\n",(0,r.jsx)(n.p,{children:"This command makes your node start automatically in case of a reboot, run it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo systemctl enable luxd\n"})}),"\n",(0,r.jsx)(n.p,{children:"To start the node, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo systemctl start luxd\nsudo systemctl status luxd\n"})}),"\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Lua",children:"socopower@node-01:~$ sudo systemctl status luxd\n\u25cf luxd.service - Lux Node service\n     Loaded: loaded (/etc/systemd/system/luxd.service; enabled; vendor p>\n     Active: active (running) since Tue 2023-08-29 23:14:45 UTC; 5h 46min ago\n   Main PID: 2226 (luxd)\n      Tasks: 27 (limit: 38489)\n     Memory: 8.7G\n        CPU: 5h 50min 31.165s\n     CGroup: /system.slice/luxd.service\n             \u2514\u25002226 /usr/local/bin/luxd/./luxd --network-id=testnet\n\nAug 30 03:02:50 node-01 luxd[2226]: INFO [08-30|03:02:50.685] >\nAug 30 03:02:51 node-01 luxd[2226]: INFO [08-30|03:02:51.185] >\nAug 30 03:03:09 node-01 luxd[2226]: [08-30|03:03:09.380] INFO >\nAug 30 03:03:23 node-01 luxd[2226]: [08-30|03:03:23.983] INFO >\nAug 30 03:05:15 node-01 luxd[2226]: [08-30|03:05:15.192] INFO >\nAug 30 03:05:15 node-01 luxd[2226]: [08-30|03:05:15.237] INFO >\nAug 30 03:05:15 node-01 luxd[2226]: [08-30|03:05:15.238] INFO >\nAug 30 03:05:19 node-01 luxd[2226]: [08-30|03:05:19.809] INFO >\nAug 30 03:05:19 node-01 luxd[2226]: [08-30|03:05:19.809] INFO >\nAug 30 05:00:47 node-01 luxd[2226]: [08-30|05:00:47.001] INFO\n"})}),"\n",(0,r.jsx)(n.p,{children:"To see the synchronization process, you can run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo journalctl -fu luxd\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var r=s(67294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);