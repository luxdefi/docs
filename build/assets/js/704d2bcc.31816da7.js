"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[794],{10717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(85893),i=t(11151),o=t(74866),l=t(85162);const a={tags:["Build","Virtual Machines"],description:"Generating Your Precompile",sidebar_label:"Generating Your Precompile",pagination_label:"Generating Your Precompile",sidebar_position:2},s="Generating Your Precompile",c={id:"build/vm/evm/generate-precompile",title:"Generating Your Precompile",description:"Generating Your Precompile",source:"@site/docs/build/vm/evm/generate-precompile.md",sourceDirName:"build/vm/evm",slug:"/build/vm/evm/generate-precompile",permalink:"/build/vm/evm/generate-precompile",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/build/vm/evm/generate-precompile.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Virtual Machines",permalink:"/tags/virtual-machines"}],version:"current",sidebarPosition:2,frontMatter:{tags:["Build","Virtual Machines"],description:"Generating Your Precompile",sidebar_label:"Generating Your Precompile",pagination_label:"Generating Your Precompile",sidebar_position:2},sidebar:"build-vm",previous:{title:"Background and Requirements",permalink:"/build/vm/evm/background-and-reqs"},next:{title:"Defining Your Precompile",permalink:"/build/vm/evm/defining-precompile"}},d={},u=[];function p(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"generating-your-precompile",children:"Generating Your Precompile"}),"\n","\n","\n",(0,r.jsx)(n.p,{children:"In this section, we will go over the process for automatically generating the template code which\nyou can configure accordingly for your stateful precompile."}),"\n",(0,r.jsxs)(n.p,{children:["First, we must create the Solidity interface that we want our precompile to implement. This will be\nthe HelloWorld Interface. It will have two simple functions, ",(0,r.jsx)(n.code,{children:"sayHello()"})," and ",(0,r.jsx)(n.code,{children:"setGreeting()"}),". These\ntwo functions will demonstrate the getting and setting respectively of a value stored in the\nprecompile's state space."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"sayHello()"})," function is a ",(0,r.jsx)(n.code,{children:"view"})," function, meaning it does not modify the state of the precompile\nand returns a string result. The ",(0,r.jsx)(n.code,{children:"setGreeting()"})," function is a state changer function, meaning it\nmodifies the state of the precompile. The ",(0,r.jsx)(n.code,{children:"HelloWorld"})," interface inherits ",(0,r.jsx)(n.code,{children:"IAllowList"})," interface\nto use the allow list functionality."]}),"\n",(0,r.jsx)(n.p,{children:"For this tutorial, we will be working in a new branch in Subnet-EVM/Precompile-EVM repo."}),"\n",(0,r.jsxs)(o.Z,{groupId:"evm-tabs",children:[(0,r.jsxs)(l.Z,{value:"subnet-evm-tab",label:"Subnet-EVM",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/subnet-evm\n"})}),(0,r.jsx)(n.p,{children:"Then checkout to a new branch:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git checkout -b hello-world-stateful-precompile\n"})}),(0,r.jsxs)(n.p,{children:["We will start off in this directory ",(0,r.jsx)(n.code,{children:"./contracts/"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd contracts/\n"})}),(0,r.jsxs)(n.p,{children:["Create a new file called ",(0,r.jsx)(n.code,{children:"IHelloWorld.sol"})," and copy and paste the below code:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:'// (c) 2022-2023, Lux Partners, Inc. All rights reserved.\n// See the file LICENSE for licensing terms.\n// SPDX-License-Identifier: MIT\npragma solidity >=0.8.0;\nimport "./IAllowList.sol";\ninterface IHelloWorld is IAllowList {\n  // sayHello returns the stored greeting string\n  function sayHello() external view returns (string calldata result);\n  // setGreeting  stores the greeting string\n  function setGreeting(string calldata response) external;\n}\n'})}),(0,r.jsxs)(n.p,{children:["Now we have an interface that our precompile can implement!\nLet's create an ",(0,r.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.13/abi-spec.html#contract-abi-specification",children:"ABI"}),"\nof our Solidity interface."]}),(0,r.jsx)(n.p,{children:"In the same directory, let's run:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"solc --abi ./contracts/interfaces/IHelloWorld.sol -o ./abis\n"})})]}),(0,r.jsxs)(l.Z,{value:"precompile-evm-tab",label:"Precompile-EVM",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/precompile-evm\n"})}),(0,r.jsx)(n.p,{children:"Then checkout to a new branch:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git checkout -b hello-world-stateful-precompile\n"})}),(0,r.jsxs)(n.p,{children:["We will start off in this directory ",(0,r.jsx)(n.code,{children:"./contracts/"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd contracts/\n"})}),(0,r.jsxs)(n.p,{children:["For Precompile-EVM interfaces and other contracts in Subnet-EVM\ncan be accessible through ",(0,r.jsx)(n.code,{children:"@luxdefi/subnet-evm-contracts"})," package.\nThis is already added to the ",(0,r.jsx)(n.code,{children:"package.json"})," file.\nYou can install it by running ",(0,r.jsx)(n.code,{children:"npm install"}),".\nIn order to import ",(0,r.jsx)(n.code,{children:"IAllowList"})," interface, you can use the following import statement:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:'import "@luxdefi/subnet-evm-contracts/contracts/interfaces/IAllowList.sol";\n'})}),(0,r.jsx)(n.p,{children:"The full file looks like this:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sol",children:'// SPDX-License-Identifier: MIT\npragma solidity >=0.8.0;\nimport "@luxdefi/subnet-evm-contracts/contracts/interfaces/IAllowList.sol";\ninterface IHelloWorld is IAllowList {\n  // sayHello returns the stored greeting string\n  function sayHello() external view returns (string calldata result);\n  // setGreeting stores the greeting string\n  function setGreeting(string calldata response) external;\n}\n'})}),(0,r.jsxs)(n.p,{children:["Now we have an interface that our precompile can implement!\nLet's create an ",(0,r.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.13/abi-spec.html#contract-abi-specification",children:"ABI"}),"\nof our Solidity interface."]}),(0,r.jsxs)(n.p,{children:["In Precompile-EVM we import contracts from ",(0,r.jsx)(n.code,{children:"@luxdefi/subnet-evm-contracts"})," package.\nIn order to generate the ABI in Precompile-EVM we need to include the ",(0,r.jsx)(n.code,{children:"node_modules"})," folder to find\nimported contracts with following flags:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--abi"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ABI specification of the contracts."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--base-path path"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use the given path as the root of the source tree instead of the root of the filesystem."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--include-path path"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make an additional source directory available to the default import callback. Use this option if\nyou want to import contracts whose location is not fixed in relation to your main source tree;\nfor example\nthird-party libraries installed using a package manager. Can be used multiple times.\nCan only be used if base path has a non-empty value."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--output-dir path"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If given, creates one file per output component and contract/file at the specified directory."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--overwrite"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Overwrite existing files (used together with ",(0,r.jsx)(n.code,{children:"--output-dir"}),")."]}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"solc --abi ./contracts/interfaces/IHelloWorld.sol -o ./abis --base-path . --include-path ./node_modules\n"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["This generates the ABI code under ",(0,r.jsx)(n.code,{children:"./abis/IHelloWorld.abi"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "inputs": [\n      { "internalType": "address", "name": "addr", "type": "address" }\n    ],\n    "name": "readAllowList",\n    "outputs": [\n      { "internalType": "uint256", "name": "role", "type": "uint256" }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "sayHello",\n    "outputs": [\n      { "internalType": "string", "name": "result", "type": "string" }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      { "internalType": "address", "name": "addr", "type": "address" }\n    ],\n    "name": "setAdmin",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      { "internalType": "address", "name": "addr", "type": "address" }\n    ],\n    "name": "setEnabled",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      { "internalType": "string", "name": "response", "type": "string" }\n    ],\n    "name": "setGreeting",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      { "internalType": "address", "name": "addr", "type": "address" }\n    ],\n    "name": "setNone",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  }\n]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["As you can see the ABI also contains the ",(0,r.jsx)(n.code,{children:"IAllowList"})," interface functions. This is because the\n",(0,r.jsx)(n.code,{children:"IHelloWorld"})," interface inherits from the ",(0,r.jsx)(n.code,{children:"IAllowList"})," interface."]}),"\n",(0,r.jsx)(n.p,{children:"Note: The ABI must have named outputs in order to generate the precompile template."}),"\n",(0,r.jsx)(n.p,{children:"Now that we have an ABI for the precompile gen tool to interact with, we can run the following\ncommand to generate our HelloWorld precompile files!"}),"\n",(0,r.jsx)(n.p,{children:"Let's go back to the root of the repository and run the PrecompileGen script helper:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd ..\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Both of these Subnet-EVM and Precompile-EVM have the same ",(0,r.jsx)(n.code,{children:"generate_precompile.sh"})," script. The one in Precompile-EVM\ninstalls the script from Subnet-EVM and runs it."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ ./scripts/generate_precompile.sh --help\n\nUsing branch: precompile-tutorial\nNAME:\nprecompilegen - subnet-evm precompile generator tool\n\nUSAGE:\nmain [global options] command [command options] [arguments...]\n\nVERSION:\n1.10.26-stable\n\nCOMMANDS:\nhelp, h Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n\n    --abi value\n          Path to the contract ABI json to generate, - for STDIN\n\n    --out value\n          Output folder for the generated precompile files, - for STDOUT (default =\n          ./precompile/contracts/{pkg}). Test files won't be generated if STDOUT is used\n    --pkg value\n          Go package name to generate the precompile into (default = {type})\n    --type value\n          Struct name for the precompile (default = {abi file name})\nMISC\n    --help, -h                     (default: false)\n          show help\n    --version, -v                  (default: false)\n          print the version\nCOPYRIGHT:\nCopyright 2013-2022 The go-ethereum Authors\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now let's generate the precompile template files!"}),"\n",(0,r.jsxs)(o.Z,{groupId:"evm-tabs",children:[(0,r.jsxs)(l.Z,{value:"subnet-evm-tab",label:"Subnet-EVM",default:!0,children:[(0,r.jsxs)(n.p,{children:["In Subnet-EVM precompile implementations reside under the ",(0,r.jsx)(n.a,{href:"https://github.com/luxdefi/subnet-evm/blob/helloworld-official-tutorial-v2/precompile/contracts",children:(0,r.jsx)(n.code,{children:"./precompile/contracts"})})," directory. Let's generate our precompile\ntemplate in the ",(0,r.jsx)(n.code,{children:"./precompile/contracts/helloworld"})," directory, where ",(0,r.jsx)(n.code,{children:"helloworld"})," is the name of the\nGo package we want to generate the precompile into."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./scripts/generate_precompile.sh --abi ./contracts/abis/IHelloWorld.abi --type HelloWorld --pkg helloworld\n"})})]}),(0,r.jsxs)(l.Z,{value:"precompile-evm-tab",label:"Precompile-EVM",children:[(0,r.jsxs)(n.p,{children:["For Precompile-EVM we don't need to put files under a deep directory structure. We can just generate the\nprecompile template under its own directory via ",(0,r.jsx)(n.code,{children:"--out ./helloworld"})," flag."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./scripts/generate_precompile.sh --abi ./contracts/abis/IHelloWorld.abi --type HelloWorld --pkg helloworld --out ./helloworld\n"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["This generates a precompile template files ",(0,r.jsx)(n.code,{children:"contract.go"}),", ",(0,r.jsx)(n.code,{children:"contract.abi"}),", ",(0,r.jsx)(n.code,{children:"config.go"}),", ",(0,r.jsx)(n.code,{children:"module.go"}),"\nand ",(0,r.jsx)(n.code,{children:"README.md"})," files. ",(0,r.jsx)(n.code,{children:"README.md"})," explains general guidelines for precompile development.\nYou should carefully read this file before modifying the precompile template."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:'There are some must-be-done changes waiting in the generated file. Each area requiring you to add your code is marked with CUSTOM CODE to make them easy to find and modify.\nAdditionally there are other files you need to edit to activate your precompile.\nThese areas are highlighted with comments "ADD YOUR PRECOMPILE HERE".\nFor testing take a look at other precompile tests in contract_test.go and config_test.go in other precompile folders.\nSee the tutorial in <https://docs.lux.network/subnets/hello-world-precompile-tutorial> for more information about precompile development.\nGeneral guidelines for precompile development:\n1- Set a suitable config key in generated module.go. E.g: "yourPrecompileConfig"\n2- Read the comment and set a suitable contract address in generated module.go. E.g:\nContractAddress = common.HexToAddress("ASUITABLEHEXADDRESS")\n3- It is recommended to only modify code in the highlighted areas marked with "CUSTOM CODE STARTS HERE". Typically, custom codes are required in only those areas.\nModifying code outside of these areas should be done with caution and with a deep understanding of how these changes may impact the EVM.\n4- Set gas costs in generated contract.go\n5- Force import your precompile package in precompile/registry/registry.go\n6- Add your config unit tests under generated package config_test.go\n7- Add your contract unit tests under generated package contract_test.go\n8- Additionally you can add a full-fledged VM test for your precompile under plugin/vm/vm_test.go. See existing precompile tests for examples.\n9- Add your solidity interface and test contract to contracts/contracts\n10- Write solidity contract tests for your precompile in contracts/contracts/test/\n11- Write TypeScript DS-Test counterparts for your solidity tests in contracts/test/\n12- Create your genesis with your precompile enabled in tests/precompile/genesis/\n13- Create e2e test for your solidity test in tests/precompile/solidity/suites.go\n14- Run your e2e precompile Solidity tests with \'./scripts/run_ginkgo.sh`\n'})}),"\n",(0,r.jsx)(n.p,{children:"Let's follow these steps and create our HelloWorld precompile!"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(36905);const i={tabItem:"tabItem_Ymn6"};var o=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),i=t(36905),o=t(12466),l=t(16550),a=t(20469),s=t(91980),c=t(67392),d=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,d.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),b=(()=>{const e=c??g;return h({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function y(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),i=a[t].value;i!==r&&(c(n),l(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...o,className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var r=t(67294);const i={},o=r.createContext(i);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);