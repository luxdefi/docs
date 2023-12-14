"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8620],{97903:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(85893),r=n(11151);const o={},i="Deploy.js",a={id:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/deploy.js",title:"Deploy.js",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/deploy.js.md",sourceDirName:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts",slug:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/deploy.js",permalink:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/deploy.js",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/deploy.js.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function u(t){const e={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"deployjs",children:"Deploy.js"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'const fs = require("fs");\nconst { ethers } = require("ethers");\nconst dotenv = require("dotenv");\n\n/* Get NativeMinter address from constants */\nconst {\n\tSUBNET_NATIVE_MINTER_ADDRESS,\n} = require("../constants/nativeMinterAddress");\n\n/* Get ABIs of the contracts directly from the artifact folder created by hardhat after each compilation */\n/* Get bytecodes of the contracts directly from the artifact folder created by hardhat after each compilation */\nconst LUX_TOKEN_BYTECODE =\n\trequire("../artifacts/contracts/Token/LuxToken.sol/LuxToken").bytecode;\nconst LUX_TOKEN_ABI =\n\trequire("../artifacts/contracts/Token/LuxToken.sol/LuxToken").abi;\nconst LUX_BRIDGE_BYTECODE =\n\trequire("../artifacts/contracts/Bridge/LuxBridge.sol/LuxBridge").bytecode;\nconst LUX_BRIDGE_ABI =\n\trequire("../artifacts/contracts/Bridge/LuxBridge.sol/LuxBridge").abi;\nconst SUBNET_BRIDGE_BYTECODE =\n\trequire("../artifacts/contracts/Bridge/SubnetBridge.sol/SubnetBridge").bytecode;\nconst SUBNET_BRIDGE_ABI =\n\trequire("../artifacts/contracts/Bridge/SubnetBridge.sol/SubnetBridge").abi;\nconst SUBNET_NATIVE_MINTER_ABI =\n\trequire("../artifacts/contracts/Token/INativeMinter.sol/NativeMinterInterface").abi;\n\n/* Get needed util functions */\nconst initProviders = require("../utils/initProviders");\nconst initSigners = require("../utils/initSigners");\ndotenv.config();\n\n/* \n\tDeploy script that allows us to deploy:\n\t\tLuxToken, LuxBridge, SubnetBridge contracts\n\tAnd set SubnetBridge contract as a `Minter` for the NativeMinter precompile\n */\nmodule.exports = deploy = async () => {\n\tconst providers = initProviders();\n\tconst signers = initSigners(providers);\n\n\t/* \n\t\tDeploy LuxToken it gives the total supply of the token to the msg.sender\n\t\t(which is the user that will use the bridge in our case) \n\t */\n\tconst LuxTokenFactory = new ethers.ContractFactory(\n\t\tLUX_TOKEN_ABI,\n\t\tLUX_TOKEN_BYTECODE,\n\t\tsigners.lux.user\n\t);\n\tconst luxToken = await LuxTokenFactory.deploy("MyErc20", "MERC20");\n\tawait luxToken.deployTransaction.wait();\n\tconsole.log("lux token deployed to: ", luxToken.address);\n\n\t/* Deploy LuxBridge it makes msg.sender the admin of the bridge */\n\tconst LuxBridgeFactory = new ethers.ContractFactory(\n\t\tLUX_BRIDGE_ABI,\n\t\tLUX_BRIDGE_BYTECODE,\n\t\tsigners.lux.admin\n\t);\n\tconst luxBridge = await LuxBridgeFactory.deploy(luxToken.address);\n\tawait luxBridge.deployTransaction.wait();\n\tconsole.log("lux bridge deployed to: ", luxBridge.address);\n\n\t/* Deploy SubnetBridge it makes msg.sender the admin of the bridge */\n\tconst SubnetBridgeFactory = new ethers.ContractFactory(\n\t\tSUBNET_BRIDGE_ABI,\n\t\tSUBNET_BRIDGE_BYTECODE,\n\t\tsigners.subnet.admin\n\t);\n\tconst subnetBridge = await SubnetBridgeFactory.deploy();\n\tawait subnetBridge.deployTransaction.wait();\n\tconsole.log("subnet bridge deployed to: ", subnetBridge.address);\n\n\t/* Give `Minter` role to SubnetBridge contract so that it can mint native token */\n\tconst nativeMinter = new ethers.Contract(\n\t\tSUBNET_NATIVE_MINTER_ADDRESS,\n\t\tSUBNET_NATIVE_MINTER_ABI,\n\t\tsigners.subnet.admin\n\t);\n\tconst setNativeMinterTx = await nativeMinter.setEnabled(subnetBridge.address);\n\tawait setNativeMinterTx.wait();\n\tconsole.log("allowed subnet bridge to mint native coins");\n\n\t/* \n\t\tWhenever we run this deploy script, deployed contract addresses will be changed.\n\t\tRather than manually updating them we write the updated address to the `variables/contractAddress.js`\n\t\tInside our code, whenever we try to access the address of a contract we use this file as the source of truth.\n\t */\n\tfs.writeFileSync(\n\t\t"variables/contractAddresses.js",\n\t\t`module.exports = {\n\t\t\tLUX_TOKEN_ADDRESS: "${luxToken.address}",\n           \tLUX_BRIDGE_ADDRESS: "${luxBridge.address}",\n          \tSUBNET_BRIDGE_ADDRESS: "${subnetBridge.address}",\n\t\t}`\n\t);\n\tconsole.log(\n\t\t"updated contract addresses inside variables/contractAddresses.js"\n\t);\n};\n'})})]})}function l(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);