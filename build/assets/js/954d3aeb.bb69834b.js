"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2686],{87235:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=o(85893),r=o(11151);const s={},a="HardhatConfigAfterDeploy.js",c={id:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/hardhatConfigAfterDeploy.js",title:"HardhatConfigAfterDeploy.js",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/hardhatConfigAfterDeploy.js.md",sourceDirName:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes",slug:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/hardhatConfigAfterDeploy.js",permalink:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/hardhatConfigAfterDeploy.js",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/hardhatConfigAfterDeploy.js.md",tags:[],version:"current",frontMatter:{}},d={},i=[];function p(e){const t={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"hardhatconfigafterdeployjs",children:"HardhatConfigAfterDeploy.js"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'require("@nomicfoundation/hardhat-toolbox")\n/* Import task from hardhat config */\nconst { task } = require("hardhat/config")\n\n/* Import deploy function */\nrequire("./scripts/deploy")\n\n/* Create deploy task */\ntask(\n  "deploy",\n  "Deploy bridges on both networks and deploy LuxToken, also update the admins"\n).setAction(async (taskArgs, hre) => {\n  await deploy().catch((error) => {\n    console.error(error)\n    process.exitCode = 1\n  })\n})\n\n/** @type import(\'hardhat/config\').HardhatUserConfig */\nmodule.exports = {\n  solidity: "0.8.9",\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>a});var n=o(67294);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);