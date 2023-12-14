"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4241],{94738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var o=n(85893),s=n(11151);const c={},r="LuxToken.sol",a={id:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/contracts/Token/LuxToken.sol",title:"LuxToken.sol",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/contracts/Token/LuxToken.sol.md",sourceDirName:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/contracts/Token",slug:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/contracts/Token/LuxToken.sol",permalink:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/contracts/Token/LuxToken.sol",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/contracts/Token/LuxToken.sol.md",tags:[],version:"current",frontMatter:{}},i={},u=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"luxtokensol",children:"LuxToken.sol"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.7;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\n// A standard ERC20 token with maxSupply of 1 million\ncontract LuxToken is ERC20 {\n    uint public MAX_SUPPLY = 1000000 ether;\n\n    // maxSupply is sent to the creator of the token\n    constructor(string memory name, string memory symbol) ERC20(name, symbol) {\n        _mint(msg.sender, MAX_SUPPLY);\n    }\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(67294);const s={},c=o.createContext(s);function r(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);