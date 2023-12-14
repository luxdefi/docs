"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7201],{41920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(85893),r=n(11151);const s={},o="Reddev Infrastructure Automation Repository",l={id:"deprecated/tutorials-contest/2021/red-dev-chainlink-tutorial/ansible-chainlink-lux-setup/README",title:"Reddev Infrastructure Automation Repository",description:"Setup requirements:",source:"@site/docs/deprecated/tutorials-contest/2021/red-dev-chainlink-tutorial/ansible-chainlink-lux-setup/README.md",sourceDirName:"deprecated/tutorials-contest/2021/red-dev-chainlink-tutorial/ansible-chainlink-lux-setup",slug:"/deprecated/tutorials-contest/2021/red-dev-chainlink-tutorial/ansible-chainlink-lux-setup/",permalink:"/deprecated/tutorials-contest/2021/red-dev-chainlink-tutorial/ansible-chainlink-lux-setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/deprecated/tutorials-contest/2021/red-dev-chainlink-tutorial/ansible-chainlink-lux-setup/README.md",tags:[],version:"current",frontMatter:{}},a={},c=[{value:"Developement Server Creation with VPS",id:"developement-server-creation-with-vps",level:2},{value:"Development Server Creation Within Same Host",id:"development-server-creation-within-same-host",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"reddev-infrastructure-automation-repository",children:"Reddev Infrastructure Automation Repository"}),"\n",(0,i.jsx)(t.p,{children:"Setup requirements:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Ansible v2.9.9 or later"}),"\n",(0,i.jsxs)(t.li,{children:["Get Vultr.com API key from [",(0,i.jsx)(t.a,{href:"https://my.vultr.com/settings/#settingsapi",children:"https://my.vultr.com/settings/#settingsapi"}),"]"]}),"\n",(0,i.jsx)(t.li,{children:"Create file at ~/.vultr.ini and fill in your API key like so:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"[reddev]\nkey = quertyuiop123456789\ntimeout = 60\n"})}),"\n",(0,i.jsx)(t.h2,{id:"developement-server-creation-with-vps",children:"Developement Server Creation with VPS"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Run ",(0,i.jsx)(t.code,{children:"ansible-playbook -i inventory tasks/createvultrvps.yml"})]}),"\n",(0,i.jsx)(t.li,{children:"Follow directions to create new developement server in Vulr"}),"\n",(0,i.jsxs)(t.li,{children:["Run ",(0,i.jsx)(t.code,{children:"ansible-playbook -i inventory tasks/provision.yml"})]}),"\n",(0,i.jsx)(t.li,{children:"Follow directions to provision the newly created developement server"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"development-server-creation-within-same-host",children:"Development Server Creation Within Same Host"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Run ",(0,i.jsx)(t.code,{children:"ansible-playbook tasks/provision_localhost.yml"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);