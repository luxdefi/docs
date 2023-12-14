"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[690],{34963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(85893),o=n(11151);const s={},i="NativeMinter",a={id:"deprecated/tutorials-contest/2022/local-subnet-development/precompiles/NativeMinter",title:"NativeMinter",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/NativeMinter.md",sourceDirName:"deprecated/tutorials-contest/2022/local-subnet-development/precompiles",slug:"/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/NativeMinter",permalink:"/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/NativeMinter",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/NativeMinter.md",tags:[],version:"current",frontMatter:{}},d={},c=[];function l(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"nativeminter",children:"NativeMinter"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:"// (c) 2022-2023, Lux Partners, Inc. All rights reserved.\n// See the file LICENSE for licensing terms.\n\n// SPDX-License-Identifier: MIT\n\npragma solidity >=0.8.0;\n\ninterface NativeMinterInterface {\n    // Set [addr] to have the admin role over the minter list\n    function setAdmin(address addr) external;\n\n    // Set [addr] to be enabled on the minter list\n    function setEnabled(address addr) external;\n\n    // Set [addr] to have no role over the minter list\n    function setNone(address addr) external;\n\n    // Read the status of [addr]\n    function readAllowList(address addr) external view returns (uint256);\n\n    // Mint [amount] number of native coins and send to [addr]\n    function mintNativeCoin(address addr, uint256 amount) external;\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);