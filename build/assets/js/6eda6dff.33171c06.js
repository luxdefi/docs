"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9265],{92441:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var i=s(85893),r=s(11151);const o={tags:["Luxd APIs"],description:"This page is an overview of the Info API associated with Luxd.",sidebar_label:"Info API",pagination_label:"Info API"},d="Info API",t={id:"reference/luxd/info-api",title:"Info API",description:"This page is an overview of the Info API associated with Luxd.",source:"@site/docs/reference/luxd/info-api.md",sourceDirName:"reference/luxd",slug:"/reference/luxd/info-api",permalink:"/reference/luxd/info-api",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/reference/luxd/info-api.md",tags:[{label:"Luxd APIs",permalink:"/tags/luxd-ap-is"}],version:"current",frontMatter:{tags:["Luxd APIs"],description:"This page is an overview of the Info API associated with Luxd.",sidebar_label:"Info API",pagination_label:"Info API"},sidebar:"reference",previous:{title:"Index API",permalink:"/reference/luxd/index-api"},next:{title:"IPC API",permalink:"/reference/luxd/ipc-api"}},c={},l=[{value:"Format",id:"format",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>info.isBootstrapped</code>",id:"infoisbootstrapped",level:3},{value:"<code>info.getBlockchainID</code>",id:"infogetblockchainid",level:3},{value:"<code>info.getNetworkID</code>",id:"infogetnetworkid",level:3},{value:"<code>info.getNetworkName</code>",id:"infogetnetworkname",level:3},{value:"<code>info.getNodeID</code>",id:"infogetnodeid",level:3},{value:"<code>info.getNodeIP</code>",id:"infogetnodeip",level:3},{value:"<code>info.getNodeVersion</code>",id:"infogetnodeversion",level:3},{value:"<code>info.getTxFee</code>",id:"infogettxfee",level:3},{value:"<code>info.getVMs</code>",id:"infogetvms",level:3},{value:"<code>info.peers</code>",id:"infopeers",level:3},{value:"<code>info.uptime</code>",id:"infouptime",level:3},{value:"<strong>Example Subnet Call</strong>",id:"example-subnet-call",level:4},{value:"<strong>Example Subnet Response</strong>",id:"example-subnet-response",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"info-api",children:"Info API"}),"\n",(0,i.jsx)(n.p,{children:"This API can be used to access basic information about the node."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This API set is for a specific node, it is unavailable on the ",(0,i.jsx)(n.a,{href:"/tooling/rpc-providers",children:"public server"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,i.jsxs)(n.p,{children:["This API uses the ",(0,i.jsx)(n.code,{children:"json 2.0"})," RPC format. For more information on making JSON RPC calls, see\n",(0,i.jsx)(n.a,{href:"/reference/standards/guides/issuing-api-calls",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"/ext/info\n"})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"infoisbootstrapped",children:(0,i.jsx)(n.code,{children:"info.isBootstrapped"})}),"\n",(0,i.jsx)(n.p,{children:"Check whether a given chain is done bootstrapping"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.isBootstrapped({chain: string}) -> {isBootstrapped: bool}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"chain"})," is the ID or alias of a chain."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.isBootstrapped",\n    "params": {\n        "chain":"X"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "isBootstrapped": true\n  },\n  "id": 1\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infogetblockchainid",children:(0,i.jsx)(n.code,{children:"info.getBlockchainID"})}),"\n",(0,i.jsxs)(n.p,{children:["Given a blockchain\u2019s alias, get its ID. (See ",(0,i.jsx)(n.a,{href:"/reference/luxd/admin-api#adminaliaschain",children:(0,i.jsx)(n.code,{children:"admin.aliasChain"})}),".)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.getBlockchainID({alias:string}) -> {blockchainID:string}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getBlockchainID",\n    "params": {\n        "alias":"X"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "blockchainID": "sV6o671RtkGBcno1FiaDbVcFv2sG5aVXMZYzKdP4VQAWmJQnM"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infogetnetworkid",children:(0,i.jsx)(n.code,{children:"info.getNetworkID"})}),"\n",(0,i.jsx)(n.p,{children:"Get the ID of the network this node is participating in."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.getNetworkID() -> {networkID:int}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNetworkID"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "networkID": "2"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infogetnetworkname",children:(0,i.jsx)(n.code,{children:"info.getNetworkName"})}),"\n",(0,i.jsx)(n.p,{children:"Get the name of the network this node is participating in."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.getNetworkName() -> {networkName:string}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNetworkName"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "networkName": "local"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infogetnodeid",children:(0,i.jsx)(n.code,{children:"info.getNodeID"})}),"\n",(0,i.jsx)(n.p,{children:"Get the ID of this node."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.getNodeID() -> {\n    nodeID: string,\n    nodePOP: {\n        publicKey: string,\n        proofOfPossession: string\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nodeID"})," is this node's ID"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nodePOP"})," is this node's BLS key and proof of possession"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeID"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "nodeID": "NodeID-5mb46qkSBj81k9g9e4VFjGGSbaaSLFRzD",\n    "nodePOP": {\n      "publicKey": "0x8f95423f7142d00a48e1014a3de8d28907d420dc33b3052a6dee03a3f2941a393c2351e354704ca66a3fc29870282e15",\n      "proofOfPossession": "0x86a3ab4c45cfe31cae34c1d06f212434ac71b1be6cfe046c80c162e057614a94a5bc9f1ded1a7029deb0ba4ca7c9b71411e293438691be79c2dbf19d1ca7c3eadb9c756246fc5de5b7b89511c7d7302ae051d9e03d7991138299b5ed6a570a98"\n    }\n  },\n  "id": 1\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infogetnodeip",children:(0,i.jsx)(n.code,{children:"info.getNodeIP"})}),"\n",(0,i.jsx)(n.p,{children:"Get the IP of this node."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"info.getNodeIP() -> {ip: string}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeIP"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "ip": "192.168.1.1:9651"\n  },\n  "id": 1\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infogetnodeversion",children:(0,i.jsx)(n.code,{children:"info.getNodeVersion"})}),"\n",(0,i.jsx)(n.p,{children:"Get the version of this node."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.getNodeVersion() -> {\n    version: string,\n    databaseVersion: string,\n    gitCommit: string,\n    vmVersions: map[string]string,\n    rpcProtocolVersion: string,\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"version"})," is this node's version"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"databaseVersion"})," is the version of the database this node is using"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gitCommit"})," is the Git commit that this node was built from"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"vmVersions"})," is map where each key/value pair is the name of a VM, and the version of that VM this\nnode runs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rpcProtocolVersion"})," is the RPCChainVM protocol version"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeVersion"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "version": "lux/1.9.1",\n    "databaseVersion": "v1.4.5",\n    "rpcProtocolVersion": "18",\n    "gitCommit": "79cd09ba728e1cecef40acd60702f0a2d41ea404",\n    "vmVersions": {\n      "avm": "v1.9.1",\n      "evm": "v0.11.1",\n      "platform": "v1.9.1"\n    }\n  },\n  "id": 1\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infogettxfee",children:(0,i.jsx)(n.code,{children:"info.getTxFee"})}),"\n",(0,i.jsx)(n.p,{children:"Get the fees of the network."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.getTxFee() ->\n{\n    txFee: uint64,\n    createAssetTxFee: uint64,\n    createSubnetTxFee: uint64,\n    transformSubnetTxFee: uint64,\n    createBlockchainTxFee: uint64,\n    addPrimaryNetworkValidatorFee: uint64,\n    addPrimaryNetworkDelegatorFee: uint64,\n    addSubnetValidatorFee: uint64,\n    addSubnetDelegatorFee: uint64\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"txFee"})," is the default fee for making transactions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"createAssetTxFee"})," is the fee for creating a new asset."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"createSubnetTxFee"})," is the fee for creating a new Subnet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"transformSubnetTxFee"})," is the fee for converting a PoA Subnet into a PoS Subnet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"createBlockchainTxFee"})," is the fee for creating a new blockchain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"addPrimaryNetworkValidatorFee"})," is the fee for adding a new primary network validator."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"addPrimaryNetworkDelegatorFee"})," is the fee for adding a new primary network delegator."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"addSubnetValidatorFee"})," is the fee for adding a new Subnet validator."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"addSubnetDelegatorFee"})," is the fee for adding a new Subnet delegator."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All fees are denominated in nLUX."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getTxFee"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "txFee": "1000000",\n    "createAssetTxFee": "10000000",\n    "createSubnetTxFee": "1000000000",\n    "transformSubnetTxFee": "10000000000",\n    "createBlockchainTxFee": "1000000000",\n    "addPrimaryNetworkValidatorFee": "0",\n    "addPrimaryNetworkDelegatorFee": "0",\n    "addSubnetValidatorFee": "1000000",\n    "addSubnetDelegatorFee": "1000000"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infogetvms",children:(0,i.jsx)(n.code,{children:"info.getVMs"})}),"\n",(0,i.jsx)(n.p,{children:"Get the virtual machines installed on this node."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.getVMs() -> {\n    vms: map[string][]string\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getVMs",\n    "params" :{}\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "vms": {\n      "jvYyfQTxGMJLuGWa55kdP2p2zSUYsQ5Raupu4TW34ZAUBAbtq": ["avm"],\n      "mgj786NP7uDwBCcq6YwThhaN8FLyybkCa4zBWTQbNgmK6k9A6": ["evm"],\n      "qd2U4HDWUvMrVUeTcCHp6xH3Qpnn1XbU5MDdnBoiifFqvgXwT": ["nftfx"],\n      "rWhpuQPF1kb72esV2momhMuTYGkEb1oL29pt2EBXWmSy4kxnT": ["platform"],\n      "rXJsCSEYXg2TehWxCEEGj6JU2PWKTkd6cBdNLjoe2SpsKD9cy": ["propertyfx"],\n      "spdxUxVJQbX85MGxMHbKw1sHxMnSqJ3QBzDyDYEP3h6TLuxqQ": ["secp256k1fx"]\n    }\n  },\n  "id": 1\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infopeers",children:(0,i.jsx)(n.code,{children:"info.peers"})}),"\n",(0,i.jsx)(n.p,{children:"Get a description of peer connections."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.peers({\n    nodeIDs: string[] // optional\n}) ->\n{\n    numPeers: int,\n    peers:[]{\n        ip: string,\n        publicIP: string,\n        nodeID: string,\n        version: string,\n        lastSent: string,\n        lastReceived: string,\n        benched: string[],\n        observedUptime: int,\n        observedSubnetUptime: map[string]int,\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nodeIDs"})," is an optional parameter to specify what NodeID's descriptions should be returned. If\nthis parameter is left empty, descriptions for all active connections will be returned. If the\nnode is not connected to a specified NodeID, it will be omitted from the response."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ip"})," is the remote IP of the peer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"publicIP"})," is the public IP of the peer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nodeID"})," is the prefixed Node ID of the peer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"version"})," shows which version the peer runs on."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lastSent"})," is the timestamp of last message sent to the peer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lastReceived"})," is the timestamp of last message received from the peer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"benched"})," shows chain IDs that the peer is being benched."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"observedUptime"})," is this node's primary network uptime, observed by the peer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"observedSubnetUptime"})," is a map of Subnet IDs to this node's Subnet uptimes, observed by the peer."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.peers",\n    "params": {\n        "nodeIDs": []\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "numPeers": 3,\n    "peers": [\n      {\n        "ip": "206.189.137.87:9651",\n        "publicIP": "206.189.137.87:9651",\n        "nodeID": "NodeID-8PYXX47kqLDe2wD4oPbvRRchcnSzMA4J4",\n        "version": "lux/1.9.4",\n        "lastSent": "2020-06-01T15:23:02Z",\n        "lastReceived": "2020-06-01T15:22:57Z",\n        "benched": [],\n        "observedUptime": "99",\n        "observedSubnetUptimes": {},\n        "trackedSubnets": [],\n        "benched": []\n      },\n      {\n        "ip": "158.255.67.151:9651",\n        "publicIP": "158.255.67.151:9651",\n        "nodeID": "NodeID-C14fr1n8EYNKyDfYixJ3rxSAVqTY3a8BP",\n        "version": "lux/1.9.4",\n        "lastSent": "2020-06-01T15:23:02Z",\n        "lastReceived": "2020-06-01T15:22:34Z",\n        "benched": [],\n        "observedUptime": "75",\n        "observedSubnetUptimes": {\n          "29uVeLPJB1eQJkzRemU8g8wZDw5uJRqpab5U2mX9euieVwiEbL": "100"\n        },\n        "trackedSubnets": [\n          "29uVeLPJB1eQJkzRemU8g8wZDw5uJRqpab5U2mX9euieVwiEbL"\n        ],\n        "benched": []\n      },\n      {\n        "ip": "83.42.13.44:9651",\n        "publicIP": "83.42.13.44:9651",\n        "nodeID": "NodeID-LPbcSMGJ4yocxYxvS2kBJ6umWeeFbctYZ",\n        "version": "lux/1.9.3",\n        "lastSent": "2020-06-01T15:23:02Z",\n        "lastReceived": "2020-06-01T15:22:55Z",\n        "benched": [],\n        "observedUptime": "95",\n        "observedSubnetUptimes": {},\n        "trackedSubnets": [],\n        "benched": []\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"infouptime",children:(0,i.jsx)(n.code,{children:"info.uptime"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the network's observed uptime of this node.\nThis is the only reliable source of data for your node's uptime.\nOther sources may be using data gathered with incomplete (limited) information."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"info.uptime({\n    subnetID: string // optional\n}) ->\n{\n    rewardingStakePercentage: float64,\n    weightedAveragePercentage: float64\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"subnetID"})," is the Subnet to get the uptime of. If not provided, returns the uptime of the node on\nthe primary network."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"rewardingStakePercentage"})," is the percent of stake which thinks this node is above the uptime\nrequirement."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"weightedAveragePercentage"})," is the stake-weighted average of all observed uptimes for this node."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Call:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.uptime"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Response:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "rewardingStakePercentage": "100.0000",\n    "weightedAveragePercentage": "99.0000"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-subnet-call",children:(0,i.jsx)(n.strong,{children:"Example Subnet Call"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.uptime",\n    "params" :{\n        "subnetID":"29uVeLPJB1eQJkzRemU8g8wZDw5uJRqpab5U2mX9euieVwiEbL"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-subnet-response",children:(0,i.jsx)(n.strong,{children:"Example Subnet Response"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "rewardingStakePercentage": "74.0741",\n    "weightedAveragePercentage": "72.4074"\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>d});var i=s(67294);const r={},o=i.createContext(r);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);