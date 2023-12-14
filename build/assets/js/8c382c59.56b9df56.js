"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4803],{78665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(85893),s=t(11151);const a={tags:["Tooling","Lux-CLI"],description:"This page demonstrates how to deploy Lux validators using just one Lux-CLI command.",pagination_label:"Run Lux Validators with One Lux-CLI Command",sidebar_label:"Run Validators on AWS",sidebar_position:3},i="Run an Lux Validator on AWS with One Lux-CLI Command",l={id:"tooling/cli-guides/create-a-validator-aws",title:"Run an Lux Validator on AWS with One Lux-CLI Command",description:"This page demonstrates how to deploy Lux validators using just one Lux-CLI command.",source:"@site/docs/tooling/cli-guides/create-a-validator-aws.md",sourceDirName:"tooling/cli-guides",slug:"/tooling/cli-guides/create-a-validator-aws",permalink:"/tooling/cli-guides/create-a-validator-aws",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/tooling/cli-guides/create-a-validator-aws.md",tags:[{label:"Tooling",permalink:"/tags/tooling"},{label:"Lux-CLI",permalink:"/tags/lux-cli"}],version:"current",sidebarPosition:3,frontMatter:{tags:["Tooling","Lux-CLI"],description:"This page demonstrates how to deploy Lux validators using just one Lux-CLI command.",pagination_label:"Run Lux Validators with One Lux-CLI Command",sidebar_label:"Run Validators on AWS",sidebar_position:3},sidebar:"tooling",previous:{title:"How to Import a Subnet into Lux-CLI",permalink:"/tooling/cli-guides/import-subnet"},next:{title:"Run Lux Validators with One Lux-CLI Command",permalink:"/tooling/cli-guides/create-a-validator-gcp"}},r={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start the Validator",id:"start-the-validator",level:2},{value:"Check Bootstrap Status",id:"check-bootstrap-status",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"run-an-lux-validator-on-aws-with-one-lux-cli-command",children:"Run an Lux Validator on AWS with One Lux-CLI Command"}),"\n",(0,o.jsx)(n.p,{children:"This page demonstrates how to deploy Lux validators on AWS using just one Lux-CLI\ncommand."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Currently, only Testnet network and Devnets are supported."})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"ALPHA WARNING: This command is currently in experimental mode. Proceed at your own risk."})}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"Before we begin, you will need to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create an AWS account and have an AWS ",(0,o.jsx)(n.code,{children:"credentials"})," file in home directory with [default] profile\nset. More info can be found ",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdkref/latest/guide/file-format.html#file-format-creds",children:"here"})]}),"\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.a,{href:"https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli",children:"Terraform"})]}),"\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.a,{href:"https://adamtheautomator.com/install-ansible/",children:"Ansible"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"start-the-validator",children:"Start the Validator"}),"\n",(0,o.jsx)(n.p,{children:"To start Lux validators, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"lux node create <clusterName>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The created nodes will be part of cluster ",(0,o.jsx)(n.code,{children:"clusterName"})," and all lux node commands applied to\ncluster ",(0,o.jsx)(n.code,{children:"clusterName"})," will apply to all nodes in the cluster."]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"Please note that running a validator on AWS will incur costs."}),(0,o.jsx)(n.p,{children:"Lux Partners is not responsible for the cost incurred from running an Lux validator on cloud\nservices via Lux-CLI."})]}),"\n",(0,o.jsx)(n.p,{children:"Currently, we have set the following specs of the AWS cloud server to a fixed value, but we plan to\nenable customization in the near future:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["OS Image: ",(0,o.jsx)(n.code,{children:"Ubuntu 20.04 LTS (HVM), SSD Volume Type"})]}),"\n",(0,o.jsxs)(n.li,{children:["Instance Type: ",(0,o.jsx)(n.code,{children:"c5.2xlarge"})]}),"\n",(0,o.jsxs)(n.li,{children:["Storage: ",(0,o.jsx)(n.code,{children:"1 TB"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The command will ask which region you want to set up your cloud server in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:" Which AWS region do you want to set up your node in?: \n  \u25b8 us-east-1\n    us-east-2\n    us-west-1\n    us-west-2\n    Choose custom region (list of regions available at https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The command will then ask which Lux Go version you would like to install in the cloud server.\nYou can choose ",(0,o.jsx)(n.code,{children:"default"})," (which will install the latest version) or you can enter the name of a\nSubnet created with CLI that you plan to be validated by this node (we will get the latest version\nthat is compatible with the deployed Subnet's RPC version)."]}),"\n",(0,o.jsx)(n.p,{children:"Once the command has successfully completed, Lux-CLI outputs all the created cloud server\nnode IDs as well as the public IP that each node can be reached at."}),"\n",(0,o.jsx)(n.p,{children:"Lux-CLI also outputs the command that you can use to ssh into each cloud server node."}),"\n",(0,o.jsxs)(n.p,{children:["By the end of successful run of ",(0,o.jsx)(n.code,{children:"create"})," command, Lux-CLI would have:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Installed Lux Go in cloud server"}),"\n",(0,o.jsx)(n.li,{children:"Installed Lux CLI in cloud server"}),"\n",(0,o.jsxs)(n.li,{children:["Downloaded the ",(0,o.jsx)(n.code,{children:".pem"})," private key file to access the cloud server into your local ",(0,o.jsx)(n.code,{children:".ssh"})," directory.\nBack up this private key file as you will not be able to ssh into the cloud server node without it"]}),"\n",(0,o.jsxs)(n.li,{children:["Downloaded ",(0,o.jsx)(n.code,{children:"staker.crt"})," and ",(0,o.jsx)(n.code,{children:"staker.key"})," files to your local ",(0,o.jsx)(n.code,{children:".cli"})," directory so that\nyou can back up your node. More info about node backup can be found ",(0,o.jsx)(n.a,{href:"/nodes/maintain/node-backup-and-restore",children:"here"})]}),"\n",(0,o.jsx)(n.li,{children:"Started the process of bootstrapping your new Lux node to the Primary Network"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"check-bootstrap-status",children:"Check Bootstrap Status"}),"\n",(0,o.jsxs)(n.p,{children:["Please note that you will have to wait until the nodes have finished bootstrapping before the\nnodes can be Primary Network or Subnet Validators. To check whether all the nodes in a cluster\nhave finished bootstrapping, run ",(0,o.jsx)(n.code,{children:"lux node status <clusterName>"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var o=t(67294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);