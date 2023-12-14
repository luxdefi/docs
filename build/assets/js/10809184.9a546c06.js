"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8793],{17099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(85893),r=t(11151);const i={},o="InitSigners.js",c={id:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initSigners.js",title:"InitSigners.js",description:"As you see, we have used process.env.. Reason behind that is",source:"@site/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initSigners.js.md",sourceDirName:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils",slug:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initSigners.js",permalink:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initSigners.js",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initSigners.js.md",tags:[],version:"current",frontMatter:{}},a={},d=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"initsignersjs",children:"InitSigners.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const { ethers } = require("ethers")\nconst dotenv = require("dotenv")\ndotenv.config()\n\nmodule.exports = (providers) => {\n  /* \n\t\tSince we will have a bridge admin account to deploy and interact with bridges\n   \t\tand a user account that is using the bridge.\n   \t\tWe have 2 different accounts to interact with bridges on 2 different chains\n   \t\tTherefore, we have to create 4 wallets\n   */\n  const luxBridgeAdmin = new ethers.Wallet(\n    process.env.BRIDGE_ADMIN_PRIVATE_KEY,\n    providers.lux\n  )\n  const luxBridgeUser = new ethers.Wallet(\n    process.env.BRIDGE_USER_PRIVATE_KEY,\n    providers.lux\n  )\n  const subnetBridgeAdmin = new ethers.Wallet(\n    process.env.BRIDGE_ADMIN_PRIVATE_KEY,\n    providers.subnet\n  )\n  const subnetBridgeUser = new ethers.Wallet(\n    process.env.BRIDGE_USER_PRIVATE_KEY,\n    providers.subnet\n  )\n  return {\n    lux: { admin: luxBridgeAdmin, user: luxBridgeUser },\n    subnet: { admin: subnetBridgeAdmin, user: subnetBridgeUser },\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["As you see, we have used ",(0,s.jsx)(n.code,{children:"process.env.<..._PRIVATE_KEY>"}),". Reason behind that is\nwe do not want to expose our private keys inside our code. To install the\nrelated package run:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i dotenv\n"})}),(0,s.jsxs)(n.p,{children:["Then, at the root of the project create a file named ",(0,s.jsx)(n.code,{children:".env"}),". Afterwards put in\nthe private keys of your accounts as follows:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"BRIDGE_ADMIN_PRIVATE_KEY=<private-key-for-admin>\nBRIDGE_USER_PRIVATE_KEY=<private-key-for-user>\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure that both accounts are funded on both chains so that they can send transactions."}),"\n",(0,s.jsxs)(n.li,{children:["Make sure that ",(0,s.jsx)(n.code,{children:".env"})," file is included in your ",(0,s.jsx)(n.code,{children:".gitignore"})," file so that you\ndo not upload this file to git."]}),"\n"]})]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);