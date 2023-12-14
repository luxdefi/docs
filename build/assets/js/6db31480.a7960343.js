"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1188],{89482:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>m});var t=i(85893),l=i(11151);const n={tags:["Tooling","LuxJS"],description:"LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.",pagination_label:"LuxJS API Reference",sidebar_label:"API Reference",sidebar_position:1},d="LuxJS API",r={id:"tooling/luxjs-api",title:"LuxJS API",description:"LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.",source:"@site/docs/tooling/luxjs-api.md",sourceDirName:"tooling",slug:"/tooling/luxjs-api",permalink:"/tooling/luxjs-api",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/tooling/luxjs-api.md",tags:[{label:"Tooling",permalink:"/tags/tooling"},{label:"LuxJS",permalink:"/tags/lux-js"}],version:"current",sidebarPosition:1,frontMatter:{tags:["Tooling","LuxJS"],description:"LuxJS is a JavaScript Library for interfacing with the Lux platform. It is built using TypeScript and intended to support both browser and Node.js. The LuxJS library allows one to issue commands to the Lux node APIs.",pagination_label:"LuxJS API Reference",sidebar_label:"API Reference",sidebar_position:1},sidebar:"tooling",previous:{title:"LuxJS",permalink:"/tooling/luxjs-overview"},next:{title:"Manual Creation of Public-Private Key Pairs using LuxJS",permalink:"/tooling/luxjs-guides/generate-key-pair"}},o={},m=[{value:"Modules",id:"modules",level:2}];function h(e){const s={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"luxjs-api",children:"LuxJS API"}),"\n",(0,t.jsx)(s.h2,{id:"modules",children:"Modules"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm.md",children:"AVM"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_basetx.md",children:"BaseTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_constants.md",children:"Constants"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_createassettx.md",children:"CreateAssetTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_credentials.md",children:"Credentials"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_exporttx.md",children:"ExportTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_genesisasset.md",children:"GenesisAsset"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_genesisdata.md",children:"GenesisData"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_importtx.md",children:"ImportTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_initialstates.md",children:"InitialStates"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_inputs.md",children:"Inputs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_keychain.md",children:"KeyChain"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_minterset.md",children:"MinterSet"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_operationtx.md",children:"OperationTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_operations.md",children:"Operations"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_outputs.md",children:"Outputs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_transactions.md",children:"Transactions"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_utxos.md",children:"UTXOs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_avm_vertex.md",children:"Vertex"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_admin.md",children:"Admin"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_auth.md",children:"Auth"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm.md",children:"EVM"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_basetx.md",children:"BaseTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_constants.md",children:"Constants"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_credentials.md",children:"Credentials"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_exporttx.md",children:"ExportTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_importtx.md",children:"ImportTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_inputs.md",children:"Inputs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_keychain.md",children:"KeyChain"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_outputs.md",children:"Outputs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_transactions.md",children:"Transactions"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_evm_utxos.md",children:"UTXOs"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_health.md",children:"Health"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_index.md",children:"Index"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_info.md",children:"Info"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_keystore.md",children:"Keystore"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_metrics.md",children:"Metrics"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm.md",children:"PlatformVM"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_addsubnetvalidatortx.md",children:"AddSubnetValidatorTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_basetx.md",children:"BaseTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_constants.md",children:"Constants"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_createchaintx.md",children:"CreateChainTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_createsubnettx.md",children:"CreateSubnetTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_credentials.md",children:"Credentials"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_exporttx.md",children:"ExportTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_importtx.md",children:"ImportTx"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_inputs.md",children:"Inputs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_keychain.md",children:"KeyChain"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_outputs.md",children:"Outputs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_subnetauth.md",children:"SubnetAuth"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_transactions.md",children:"Transactions"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_utxos.md",children:"UTXOs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_platformvm_validationtx.md",children:"ValidationTx"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/api_socket.md",children:"Socket"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/avm_interfaces.md",children:"AVM Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/admin_interfaces.md",children:"Admin Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/auth_interfaces.md",children:"Auth Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/lux.md",children:"Lux"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/luxcore.md",children:"LuxCore"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_apibase.md",children:"Common API Base"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_assetamount.md",children:"Common AssetAmount"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_inputs.md",children:"Common Inputs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_interfaces.md",children:"Common Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_jrpcapi.md",children:"Common JRPCAPI"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_keychain.md",children:"Common KeyChain"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_nbytes.md",children:"Common NBytes"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_output.md",children:"Common Output"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_restapi.md",children:"Common RESTAPI"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_secp256k1keychain.md",children:"Common SECP256k1KeyChain"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_signature.md",children:"Common Signature"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_transactions.md",children:"Common Transactions"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/common_utxos.md",children:"Common UTXOs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/evm_interfaces.md",children:"EVM Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/health_interfaces.md",children:"Health Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/index_interfaces.md",children:"Index Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/info_interfaces.md",children:"Info Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/keystore_interfaces.md",children:"Keystore Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/platformvm_interfaces.md",children:"PlatformVM Interfaces"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_base58.md",children:"Utils Base58"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_bintools.md",children:"Utils BinTools"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_constants.md",children:"Utils Constants"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_db.md",children:"Utils DB"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_hdnode.md",children:"Utils HDNode"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_helperfunctions.md",children:"Utils HelperFunctions"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_mnemonic.md",children:"Utils Mnemonic"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_payload.md",children:"Utils Payload"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_persistanceoptions.md",children:"Utils PersistanceOptions"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/utils_serialization.md",children:"Utils Serialization"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_admin.md",children:"src/apis/admin"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_auth.md",children:"src/apis/auth"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_avm.md",children:"src/apis/avm"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_evm.md",children:"src/apis/evm"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_health.md",children:"src/apis/health"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_index.md",children:"src/apis/index"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_info.md",children:"src/apis/info"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_keystore.md",children:"src/apis/keystore"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_metrics.md",children:"src/apis/metrics"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_platformvm.md",children:"src/apis/platformvm"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_apis_socket.md",children:"src/apis/socket"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_common.md",children:"src/common"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/luxdefi/luxjs-docs/tree/main/modules/src_utils.md",children:"src/utils"})}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>r,a:()=>d});var t=i(67294);const l={},n=t.createContext(l);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);