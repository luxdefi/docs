"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5333],{37174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var o=t(85893),l=t(11151);const s={tags:["Build","Subnets"],description:"This how-to guide focuses on taking an already created Subnet configuration and deploying it to a local Lux network.",sidebar_label:"On a Local Network",pagination_label:"Customize your EVM-Powered Subnet",sidebar_position:0},u="How to Deploy a Subnet on a Local Network",i={id:"build/subnet/deploy/local-subnet",title:"How to Deploy a Subnet on a Local Network",description:"This how-to guide focuses on taking an already created Subnet configuration and deploying it to a local Lux network.",source:"@site/docs/build/subnet/deploy/local-subnet.md",sourceDirName:"build/subnet/deploy",slug:"/build/subnet/deploy/local-subnet",permalink:"/build/subnet/deploy/local-subnet",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/build/subnet/deploy/local-subnet.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Subnets",permalink:"/tags/subnets"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Build","Subnets"],description:"This how-to guide focuses on taking an already created Subnet configuration and deploying it to a local Lux network.",sidebar_label:"On a Local Network",pagination_label:"Customize your EVM-Powered Subnet",sidebar_position:0},sidebar:"build-subnet",previous:{title:"Build Your First Subnet",permalink:"/build/subnet/hello-subnet"},next:{title:"Deploy a Permissioned Subnet on Testnet",permalink:"/build/subnet/deploy/testnet-subnet"}},a={},r=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying Subnets Locally",id:"deploying-subnets-locally",level:2},{value:"Results",id:"results",level:3},{value:"Deploying Multiple Subnets",id:"deploying-multiple-subnets",level:3},{value:"Redeploying the Subnet",id:"redeploying-the-subnet",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-deploy-a-subnet-on-a-local-network",children:"How to Deploy a Subnet on a Local Network"}),"\n",(0,o.jsx)(n.p,{children:"This how-to guide focuses on taking an already created Subnet configuration and deploying it to a\nlocal Lux network."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/tooling/cli-guides/install-cli",children:"Lux-CLI installed"})}),"\n",(0,o.jsxs)(n.li,{children:["You have ",(0,o.jsx)(n.a,{href:"/build/subnet/hello-subnet#create-your-subnet-configuration",children:"created a Subnet configuration"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deploying-subnets-locally",children:"Deploying Subnets Locally"}),"\n",(0,o.jsxs)(n.p,{children:["In the following commands, make sure to substitute the name of your Subnet configuration for\n",(0,o.jsx)(n.code,{children:"<subnetName>"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To deploy your Subnet, run"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"lux subnet deploy <subnetName>"})}),"\n",(0,o.jsxs)(n.p,{children:["and select ",(0,o.jsx)(n.code,{children:"Local Network"})," to deploy on. Alternatively, you can bypass this prompt by providing\nthe ",(0,o.jsx)(n.code,{children:"--local"})," flag. For example:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"lux subnet deploy <subnetName> --local"})}),"\n",(0,o.jsx)(n.p,{children:"The command may take a couple minutes to run."}),"\n",(0,o.jsxs)(n.p,{children:["Note: If you run ",(0,o.jsx)(n.code,{children:"bash"})," on your shell and are running Lux-CLI on ARM64 on Mac, you will\nrequire Rosetta 2 to be able to deploy Subnets locally. You can download Rosetta 2 using\n",(0,o.jsx)(n.code,{children:"softwareupdate --install-rosetta"})," ."]}),"\n",(0,o.jsx)(n.h3,{id:"results",children:"Results"}),"\n",(0,o.jsx)(n.p,{children:"If all works as expected, the command output should look something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"> lux subnet deploy mySubnet\n\u2714 Local Network\nDeploying [mySubnet] to Local Network\nInstalling subnet-evm-v0.4.3...\nsubnet-evm-v0.4.3 installation successful\nBackend controller started, pid: 93928, output at: /Users/subnet-developer/.cli/runs/server_20221122_173138/cli-backend\nInstalling luxd-v1.9.3...\nluxd-v1.9.3 installation successful\nVMs ready.\nStarting network...\n..................\nBlockchain has been deployed. Wait until network acknowledges...\n......\nNetwork ready to use. Local network node endpoints:\n+-------+----------+------------------------------------------------------------------------------------+\n| NODE  |    VM    |                                        URL                                         |\n+-------+----------+------------------------------------------------------------------------------------+\n| node2 | mySubnet | http://127.0.0.1:9652/ext/bc/SPqou41AALqxDquEycNYuTJmRvZYbfoV9DYApDJVXKXuwVFPz/rpc |\n+-------+----------+------------------------------------------------------------------------------------+\n| node3 | mySubnet | http://127.0.0.1:9654/ext/bc/SPqou41AALqxDquEycNYuTJmRvZYbfoV9DYApDJVXKXuwVFPz/rpc |\n+-------+----------+------------------------------------------------------------------------------------+\n| node4 | mySubnet | http://127.0.0.1:9656/ext/bc/SPqou41AALqxDquEycNYuTJmRvZYbfoV9DYApDJVXKXuwVFPz/rpc |\n+-------+----------+------------------------------------------------------------------------------------+\n| node5 | mySubnet | http://127.0.0.1:9658/ext/bc/SPqou41AALqxDquEycNYuTJmRvZYbfoV9DYApDJVXKXuwVFPz/rpc |\n+-------+----------+------------------------------------------------------------------------------------+\n| node1 | mySubnet | http://127.0.0.1:9650/ext/bc/SPqou41AALqxDquEycNYuTJmRvZYbfoV9DYApDJVXKXuwVFPz/rpc |\n+-------+----------+------------------------------------------------------------------------------------+\n\nBrowser Extension connection details (any node URL from above works):\nRPC URL:          http://127.0.0.1:9650/ext/bc/SPqou41AALqxDquEycNYuTJmRvZYbfoV9DYApDJVXKXuwVFPz/rpc\nFunded address:   0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC with 1000000 (10^18) - private key: 56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027\nNetwork name:     mySubnet\nChain ID:         54325\nCurrency Symbol:  TUTORIAL\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can use the deployment details to connect to and interact with your Subnet."}),"\n",(0,o.jsxs)(n.p,{children:["To manage the newly deployed local Lux network, see\n",(0,o.jsxs)(n.a,{href:"/tooling/cli#network",children:["the ",(0,o.jsx)(n.code,{children:"lux network"})," command tree"]}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"deploying-multiple-subnets",children:"Deploying Multiple Subnets"}),"\n",(0,o.jsx)(n.p,{children:"You may deploy multiple Subnets concurrently, but you can't deploy the same Subnet multiple times\nwithout resetting all deployed Subnet state."}),"\n",(0,o.jsx)(n.h2,{id:"redeploying-the-subnet",children:"Redeploying the Subnet"}),"\n",(0,o.jsx)(n.p,{children:"To redeploy the Subnet, you first need to wipe the Subnet state. This permanently deletes all data\nfrom all locally deployed Subnets. To do so, run"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"lux network clean\n"})}),"\n",(0,o.jsx)(n.p,{children:"You are now free to redeploy your Subnet with"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"lux subnet deploy <subnetName> --local\n"})})]})}function c(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>u});var o=t(67294);const l={},s=o.createContext(l);function u(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:u(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);