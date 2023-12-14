"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[583],{92672:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(85893),r=i(11151);const s={tags:["Build","Subnets"],description:"This tutorial demonstrates the process of deploying a cross-chain bridge between two EVM chains. Build at your own risk.",sidebar_label:"Add a Cross-Chain Bridge",pagination_label:"Deploy a Cross-Chain EVM Bridge",sidebar_position:2},o="Deploy a Cross-Chain EVM Bridge",a={id:"build/subnet/utility/cross-chain-evm-bridge",title:"Deploy a Cross-Chain EVM Bridge",description:"This tutorial demonstrates the process of deploying a cross-chain bridge between two EVM chains. Build at your own risk.",source:"@site/docs/build/subnet/utility/cross-chain-evm-bridge.md",sourceDirName:"build/subnet/utility",slug:"/build/subnet/utility/cross-chain-evm-bridge",permalink:"/build/subnet/utility/cross-chain-evm-bridge",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/build/subnet/utility/cross-chain-evm-bridge.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Subnets",permalink:"/tags/subnets"}],version:"current",sidebarPosition:2,frontMatter:{tags:["Build","Subnets"],description:"This tutorial demonstrates the process of deploying a cross-chain bridge between two EVM chains. Build at your own risk.",sidebar_label:"Add a Cross-Chain Bridge",pagination_label:"Deploy a Cross-Chain EVM Bridge",sidebar_position:2},sidebar:"build-subnet",previous:{title:"Lux Subnet Faucet",permalink:"/build/subnet/utility/subnet-faucet"},next:{title:"Key Considerations When Upgrading a Subnet",permalink:"/build/subnet/upgrade/considerations-subnet-upgrade"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Workflow of the Bridge",id:"workflow-of-the-bridge",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setting Up Environment",id:"setting-up-environment",level:2},{value:"Installing ChainBridge Command-Line Tool",id:"installing-chainbridge-command-line-tool",level:3},{value:"Setting Up Environment Variables",id:"setting-up-environment-variables",level:3},{value:"Setting Up Source Chain",id:"setting-up-source-chain",level:2},{value:"Deploy Source Contracts",id:"deploy-source-contracts",level:3},{value:"Configure Resource on Bridge",id:"configure-resource-on-bridge",level:3},{value:"Setting Up Destination Chain",id:"setting-up-destination-chain",level:2},{value:"Deploy Destination Contracts",id:"deploy-destination-contracts",level:3},{value:"Configuring Resource on Bridge",id:"configuring-resource-on-bridge",level:3},{value:"Setting Token as Mintable and Burnable on Bridge",id:"setting-token-as-mintable-and-burnable-on-bridge",level:3},{value:"Authorizing Handler to Mint New Tokens",id:"authorizing-handler-to-mint-new-tokens",level:3},{value:"Deploy Relayer",id:"deploy-relayer",level:2},{value:"Cloning and Building Relayer",id:"cloning-and-building-relayer",level:3},{value:"Configuring Relayer",id:"configuring-relayer",level:3},{value:"Set Up Keys",id:"set-up-keys",level:3},{value:"Let&#39;s Test the Bridge",id:"lets-test-the-bridge",level:2},{value:"Start Relayer",id:"start-relayer",level:3},{value:"Approve Handler to Spend my Tokens",id:"approve-handler-to-spend-my-tokens",level:3},{value:"Deposit Tokens to the Bridge",id:"deposit-tokens-to-the-bridge",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-a-cross-chain-evm-bridge",children:"Deploy a Cross-Chain EVM Bridge"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This tutorial is for demo purpose on how to build a cross-chain bridge. It is not for production use.\nYou must take the full responsibility to ensure your bridge's security."})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, we will be building a bridge between ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/build/subnet/info/wagmi",children:"WAGMI"})})," and\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/learn/lux/testnet",children:"Testnet"})}),". This bridge will help us to transfer native ",(0,t.jsx)(n.strong,{children:"WGM"})," coin\nwrapped into ",(0,t.jsx)(n.strong,{children:"wWGM"})," back and forth from the WAGMI chain to the Testnet chain. Using this guide, you\ncan deploy a bridge between any EVM-based chains for any ERC20 tokens."]}),"\n",(0,t.jsx)(n.p,{children:"The wrapped version of a native coin is its pegged ERC20 representation. Wrapping it with the ERC20\nstandard makes certain processes like delegated transactions much easier. You can easily get wrapped\ntokens by sending the native coin to the wrapped token contract address."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"WAGMI is an independent EVM-based test chain deployed on a custom Subnet on the Lux network."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["We will be using ",(0,t.jsx)(n.strong,{children:"ChainSafe"}),"'s bridge repository, to easily set up a robust and secure bridge."]}),"\n",(0,t.jsx)(n.h2,{id:"workflow-of-the-bridge",children:"Workflow of the Bridge"}),"\n",(0,t.jsx)(n.p,{children:"WAGMI and Testnet chains are not interconnected by default, however, we could make them communicate.\nRelayers watch for events (by polling blocks) on one chain and perform necessary action using those\nevents on the other chain. This way we can also perform bridging of tokens from one chain to the\nother chain through the use of smart contracts."}),"\n",(0,t.jsx)(n.p,{children:"Here is the basic high-level workflow of the bridge -"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Users deposit token on the Bridge contract"}),"\n",(0,t.jsx)(n.li,{children:"Bridge contract asks Handler contract to perform deposit action"}),"\n",(0,t.jsxs)(n.li,{children:["Handler contract ",(0,t.jsx)(n.strong,{children:"locks"})," the deposited token in the token safe"]}),"\n",(0,t.jsxs)(n.li,{children:["Bridge contract emits ",(0,t.jsx)(n.code,{children:"Deposit"})," event"]}),"\n",(0,t.jsxs)(n.li,{children:["Relayer receives the ",(0,t.jsx)(n.code,{children:"Deposit"})," event from the source chain"]}),"\n",(0,t.jsx)(n.li,{children:"Relayer creates a voting proposal on the destination chain to mint a new token"}),"\n",(0,t.jsx)(n.li,{children:"After threshold relayer votes, the proposal is executed"}),"\n",(0,t.jsxs)(n.li,{children:["Tokens are ",(0,t.jsx)(n.strong,{children:"minted"})," to the recipient's address"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Bridging tokens from source to destination chain involves the ",(0,t.jsx)(n.strong,{children:"lock and mint"})," approach. Whereas\nbridging tokens from destination to source chain involves ",(0,t.jsx)(n.strong,{children:"burn and release"})," approach. We cannot\nmint and burn tokens that we do not control. Therefore we lock them in the token safe on the source\nchain. And mint the corresponding token (which we will deploy and hence control) on the destination\nchain."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"architecture",src:i(47743).Z+"",width:"4504",height:"3022"})}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"These are the requirement to follow this tutorial -"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set up ",(0,t.jsx)(n.a,{href:"/build/subnet/info/wagmi#adding-wagmi-to-core",children:"WAGMI"})," and\n",(0,t.jsx)(n.a,{href:"/build/dapp/testnet-workflow#set-up-testnet-network-on-core-optional",children:"Testnet"})," on Core"]}),"\n",(0,t.jsxs)(n.li,{children:["Import ",(0,t.jsx)(n.code,{children:"wWGM"})," token (asset) on the WAGMI network (Core). Here is the address - ",(0,t.jsx)(n.code,{children:"0x3Ee7094DADda15810F191DD6AcF7E4FFa37571e4"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WGM"})," coins on the WAGMI chain. Drip ",(0,t.jsx)(n.code,{children:"1 WGM"})," from the ",(0,t.jsx)(n.a,{href:"https://faucet.trywagmi.xyz/",children:"WAGMI Faucet"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LUX"})," coins on the Testnet chain. Drip ",(0,t.jsx)(n.code,{children:"10 LUX"})," from the ",(0,t.jsx)(n.a,{href:"https://faucet.lux.network/",children:"Testnet Faucet"})]}),"\n",(0,t.jsxs)(n.li,{children:["Wrapped ",(0,t.jsx)(n.code,{children:"WGM"})," tokens on the WAGMI chain. Send a few ",(0,t.jsx)(n.code,{children:"WGM"})," coins to the ",(0,t.jsx)(n.code,{children:"wWGM"})," token address (see\nsecond point), to receive the same amount of ",(0,t.jsx)(n.code,{children:"wWGM"}),". Always keep some ",(0,t.jsx)(n.code,{children:"WGM"})," coins, to cover transaction\nfees."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-environment",children:"Setting Up Environment"}),"\n",(0,t.jsxs)(n.p,{children:["Let's make a new directory ",(0,t.jsx)(n.code,{children:"deploy-bridge"}),", where we will be keeping our bridge codes. We will be\nusing the following repositories -"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/ChainSafe/chainbridge-deploy",children:(0,t.jsx)(n.code,{children:"ChainSafe/chainbridge-deploy"})})," - This will help\nus in setting up of our bridge contracts"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/ChainSafe/ChainBridge",children:(0,t.jsx)(n.code,{children:"ChainSafe/ChainBridge"})})," - This will help us in setting\nup of our off-chain relayer."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"installing-chainbridge-command-line-tool",children:"Installing ChainBridge Command-Line Tool"}),"\n",(0,t.jsx)(n.p,{children:"Using the following command, we can clone and install ChainBridge's command-line tool. This will\nhelp us in setting up bridge contracts and demonstrating bridge transfers. Once the bridge contracts\nare deployed, you can use its ABI and contract address to set up your UI."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone -b v1.0.0 --depth 1 https://github.com/ChainSafe/chainbridge-deploy \\\n&& cd chainbridge-deploy/cb-sol-cli \\\n&& npm install \\\n&& make install\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will build the contracts and installs the ",(0,t.jsx)(n.code,{children:"cb-sol-cli"})," command."]}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-environment-variables",children:"Setting Up Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Let's set up environment variables, so that, we do not need to write their values every time we\nissue a command. Move back to the ",(0,t.jsx)(n.code,{children:"deploy-bridge"})," directory (main project directory) and make a\nnew file ",(0,t.jsx)(n.code,{children:"configVars"}),". Put the following contents inside it -"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:'SRC_GATEWAY=https://subnets.lux.network/wagmi/wagmi-chain-testnet/rpc\nDST_GATEWAY=https://api.lux-test.network/ext/bc/C/rpc\n\nSRC_ADDR="<Your address on WAGMI>"\nSRC_PK="<your private key on WAGMI>"\nDST_ADDR="<Your address on Testnet>"\nDST_PK="<your private key on Testnet>"\n\nSRC_TOKEN="0x3Ee7094DADda15810F191DD6AcF7E4FFa37571e4"\nRESOURCE_ID="0x00"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SRC_ADDR"})," and ",(0,t.jsx)(n.code,{children:"DST_ADDR"})," are the addresses that will deploy bridge contracts and will act as a relayer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SRC_TOKEN"})," is the token that we want to bridge. Here is the address of the wrapped ERC20 version\nof the WGM coin aka wWGM."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RESOURCE_ID"})," could be anything. It identifies our bridged ERC20 tokens on both sides (WAGMI and Testnet)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Every time we make changes to these config variables, we have to update our bash environment. Run\nthe following command according to the relative location of the file. These variables are temporary\nand are only there in the current terminal session, and will be flushed, once the session is over.\nMake sure to load these environment variables anywhere you will using them in the bash commands\n(like ",(0,t.jsx)(n.code,{children:"$SRC_GATEWAY"})," or ",(0,t.jsx)(n.code,{children:"$SRC_ADDR"}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source ./configVars\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-source-chain",children:"Setting Up Source Chain"}),"\n",(0,t.jsx)(n.p,{children:"We need to set up our source chain as follows -"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Deploy Bridge and Handler contract with ",(0,t.jsx)(n.code,{children:"$SRC_ADDR"})," as default and only relayer"]}),"\n",(0,t.jsxs)(n.li,{children:["Register the ",(0,t.jsx)(n.code,{children:"wWGM"})," token as a resource on the bridge"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-source-contracts",children:"Deploy Source Contracts"}),"\n",(0,t.jsxs)(n.p,{children:["The command-line tool ",(0,t.jsx)(n.code,{children:"cb-sol-cli"})," will help us to deploy the contracts. Run the following command\nin the terminal session where the config vars are loaded. It will add ",(0,t.jsx)(n.code,{children:"SRC_ADDR"})," as the default\nrelayer for relaying events from the WAGMI chain (source) to the Testnet chain (destination)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["One of the most important parameter to take care of while deploying bridge contract is the ",(0,t.jsx)(n.code,{children:"expiry"})]}),"\n",(0,t.jsx)(n.strong,{children:"value. It is the number of blocks after which a proposal is considered cancelled. By default it is"}),"\n",(0,t.jsxs)(n.strong,{children:["set to ",(0,t.jsx)(n.code,{children:"100"}),". On Lux Mainnet, with this value, the proposals could be expired within 3-4 minutes."]}),"\n",(0,t.jsx)(n.strong,{children:"You should choose a very large expiry value, according to the chain you are deploying bridge to."}),"\n",(0,t.jsx)(n.strong,{children:"Otherwise your proposal will be cancelled if the threshold number of vote proposals are not received"}),"\n",(0,t.jsx)(n.strong,{children:"on time."})]}),"\n",(0,t.jsx)(n.p,{children:"You should also keep this in mind that sometimes during high network activity, a transaction could\nstuck for a long time. Proposal transactions stuck in this scenario, could result in the cancellation\nof previous proposals. Therefore, expiry values should be large enough, and relayers should issue\ntransactions with a competitive max gas price."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cb-sol-cli --url $SRC_GATEWAY --privateKey $SRC_PK --gasPrice 25000000000 deploy \\\n    --bridge --erc20Handler \\\n    --relayers $SRC_ADDR \\\n    --relayerThreshold 1 \\\n    --expiry 500 \\\n    --chainId 0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The output will return deployed contracts' (Bridge and Handler) address. Update the ",(0,t.jsx)(n.code,{children:"configVars"}),"\nfile with these addresses by adding the following 2 variables and loading them to the environment."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:'SRC_BRIDGE="<resulting bridge contract address>"\nSRC_HANDLER="<resulting erc20 handler contract address>"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to load these using the ",(0,t.jsx)(n.code,{children:"source"})," command."]}),"\n",(0,t.jsx)(n.h3,{id:"configure-resource-on-bridge",children:"Configure Resource on Bridge"}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command to register the ",(0,t.jsx)(n.code,{children:"wWGM"})," token as a resource on the source bridge."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cb-sol-cli --url $SRC_GATEWAY --privateKey $SRC_PK --gasPrice 25000000000 bridge register-resource \\\n    --bridge $SRC_BRIDGE \\\n    --handler $SRC_HANDLER \\\n    --resourceId $RESOURCE_ID \\\n    --targetContract $SRC_TOKEN\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-destination-chain",children:"Setting Up Destination Chain"}),"\n",(0,t.jsx)(n.p,{children:"We need to set up our destination chain as follows -"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Deploy Bridge and Handler contract with ",(0,t.jsx)(n.code,{children:"$DST_ADDR"})," as default and only relayer"]}),"\n",(0,t.jsxs)(n.li,{children:["Deploy mintable and burnable ERC20 contract representing bridged ",(0,t.jsx)(n.code,{children:"wWGM"})," token"]}),"\n",(0,t.jsxs)(n.li,{children:["Register the ",(0,t.jsx)(n.code,{children:"wWGM"})," token as a resource on the bridge"]}),"\n",(0,t.jsxs)(n.li,{children:["Register the",(0,t.jsx)(n.code,{children:" wWGM"})," token as mintable/burnable on the bridge"]}),"\n",(0,t.jsxs)(n.li,{children:["Giving permissions to Handler contract to mint new ",(0,t.jsx)(n.code,{children:"wWGM"})," tokens"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-destination-contracts",children:"Deploy Destination Contracts"}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command to deploy Bridge, ERC20 Handler, and ",(0,t.jsx)(n.code,{children:"wWGM"})," token contracts on the Testnet\nchain. Again it will set ",(0,t.jsx)(n.code,{children:"DST_ADDR"})," as the default relayer for relaying events from Testnet chain\n(destination) to WAGMI chain (source). For this example, both ",(0,t.jsx)(n.code,{children:"SRC_ADDR"})," and ",(0,t.jsx)(n.code,{children:"DST_ADDR"})," represent\nthe same thing."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cb-sol-cli --url $DST_GATEWAY --privateKey $DST_PK --gasPrice 25000000000 deploy\\\n    --bridge --erc20 --erc20Handler \\\n    --relayers $DST_ADDR \\\n    --relayerThreshold 1 \\\n    --chainId 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"Update the environment variables with the details which you will get by running the above command.\nDon't forget to load these variables."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:'DST_BRIDGE="<resulting bridge contract address>"\nDST_HANDLER="<resulting erc20 handler contract address>"\nDST_TOKEN="<resulting erc20 token address>"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-resource-on-bridge",children:"Configuring Resource on Bridge"}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command to register deployed ",(0,t.jsx)(n.code,{children:"wWGM"})," token as a resource on the bridge."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cb-sol-cli --url $DST_GATEWAY --privateKey $DST_PK --gasPrice 25000000000 bridge register-resource \\\n    --bridge $DST_BRIDGE \\\n    --handler $DST_HANDLER \\\n    --resourceId $RESOURCE_ID \\\n    --targetContract $DST_TOKEN\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setting-token-as-mintable-and-burnable-on-bridge",children:"Setting Token as Mintable and Burnable on Bridge"}),"\n",(0,t.jsx)(n.p,{children:"The bridge has two options when it receives a deposit of a token -"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lock the received token on one chain and mint the corresponding token on the other chain"}),"\n",(0,t.jsx)(n.li,{children:"Burn the received token on one chain and release the corresponding token on the other chain"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We cannot mint or burn any token which we do not control. Though we can lock and release such tokens\nby putting them in a token safe. The bridge has to know which token it can burn. With the following\ncommand, we can set the resource as burnable. The bridge will choose the action accordingly, by\nseeing the token as burnable or not."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cb-sol-cli --url $DST_GATEWAY --privateKey $DST_PK --gasPrice 25000000000 bridge set-burn \\\n    --bridge $DST_BRIDGE \\\n    --handler $DST_HANDLER \\\n    --tokenContract $DST_TOKEN\n"})}),"\n",(0,t.jsx)(n.h3,{id:"authorizing-handler-to-mint-new-tokens",children:"Authorizing Handler to Mint New Tokens"}),"\n",(0,t.jsx)(n.p,{children:"Now let's permit the handler to mint the deployed ERC20 (wWGM) token on the destination chain. Run\nthe following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cb-sol-cli --url $DST_GATEWAY --privateKey $DST_PK --gasPrice 25000000000 erc20 add-minter \\\n    --minter $DST_HANDLER \\\n    --erc20Address $DST_TOKEN\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["The deployer of the contracts (here ",(0,t.jsx)(n.code,{children:"SRC_ADDR"})," or ",(0,t.jsx)(n.code,{children:"DST_ADDR"}),") holds the admin rights. An admin"]}),"\n",(0,t.jsx)(n.strong,{children:"can add or remove a new relayer, minter, admin etc. It can also mint new ERC20 tokens on the"}),"\n",(0,t.jsxs)(n.strong,{children:["destination chain. You can issue these commands using ",(0,t.jsx)(n.code,{children:"cb-sol-cli"})," with the options mentioned in"]}),"\n",(0,t.jsxs)(n.strong,{children:["these ",(0,t.jsx)(n.a,{href:"https://github.com/ChainSafe/chainbridge-deploy/tree/main/cb-sol-cli/docs",children:"files"}),". The mint"]}),"\n",(0,t.jsx)(n.strong,{children:"command should not be used manually, unless some intervention is required, when the relayers failed"}),"\n",(0,t.jsx)(n.strong,{children:"to mint the tokens on the destination chain on time."})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-relayer",children:"Deploy Relayer"}),"\n",(0,t.jsx)(n.p,{children:"All the on-chain setups like deploying bridges, handlers, tokens, etc. are complete. But the two\nchains are not interconnected. We need some off-chain relayer to communicate messages between the\nchains. The relayer will poll for deposit events on one chain, and submit vote proposals to mint or\nrelease the corresponding token on another chain."}),"\n",(0,t.jsx)(n.p,{children:"Since we set the relayer threshold to 1, while deploying the bridge and handler, we require a voting\nproposal from only 1 relayer. But in production, we should use a large set of relayers with a high\nthreshold to avoid power concentration."}),"\n",(0,t.jsx)(n.p,{children:"For this purpose, we will be using ChainSafe's relayer. Follow the steps described below to deploy\nthe relayer."}),"\n",(0,t.jsx)(n.h3,{id:"cloning-and-building-relayer",children:"Cloning and Building Relayer"}),"\n",(0,t.jsxs)(n.p,{children:["Open a new terminal session, while keeping the previous session loaded with environment variables.\nWe have to load the environment variables in this session too. Load these variables in this session\ntoo using the ",(0,t.jsx)(n.code,{children:"source"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["Now, move to the ",(0,t.jsx)(n.code,{children:"deploy-bridge"})," directory and run the following command to clone the relayer repository\n(implemented in Go), and build its binary."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone -b v1.1.1 --depth 1 https://github.com/ChainSafe/chainbridge \\\n&& cd chainbridge \\\n&& make build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will create a binary inside the ",(0,t.jsx)(n.code,{children:"chainbridge/build"})," directory as ",(0,t.jsx)(n.code,{children:"chainbridge"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"configuring-relayer",children:"Configuring Relayer"}),"\n",(0,t.jsxs)(n.p,{children:["The relayer requires some configurations like source chain, destination chain, bridge, handler\naddress, etc. Run the following command. It will make a ",(0,t.jsx)(n.code,{children:"config.json"})," file with the required\ndetails in it. You can update these details, as per your need."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "{\n  \\"chains\\": [\n    {\n      \\"name\\": \\"WAGMI\\",\n      \\"type\\": \\"ethereum\\",\n      \\"id\\": \\"0\\",\n      \\"endpoint\\": \\"$SRC_GATEWAY\\",\n      \\"from\\": \\"$SRC_ADDR\\",\n      \\"opts\\": {\n        \\"bridge\\": \\"$SRC_BRIDGE\\",\n        \\"erc20Handler\\": \\"$SRC_HANDLER\\",\n        \\"genericHandler\\": \\"$SRC_HANDLER\\",\n        \\"gasLimit\\": \\"1000000\\",\n        \\"maxGasPrice\\": \\"50000000000\\",\n        \\"http\\": \\"true\\",\n        \\"blockConfirmations\\":\\"0\\"\n      }\n    },\n    {\n      \\"name\\": \\"Testnet\\",\n      \\"type\\": \\"ethereum\\",\n      \\"id\\": \\"1\\",\n      \\"endpoint\\": \\"$DST_GATEWAY\\",\n      \\"from\\": \\"$DST_ADDR\\",\n      \\"opts\\": {\n        \\"bridge\\": \\"$DST_BRIDGE\\",\n        \\"erc20Handler\\": \\"$DST_HANDLER\\",\n        \\"genericHandler\\": \\"$DST_HANDLER\\",\n        \\"gasLimit\\": \\"1000000\\",\n        \\"maxGasPrice\\": \\"50000000000\\",\n        \\"http\\": \\"true\\",\n        \\"blockConfirmations\\":\\"0\\"\n      }\n    }\n  ]\n}" >> config.json\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Check and confirm the details in the ",(0,t.jsx)(n.code,{children:"config.json"})," file."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["In the above command, you can see that ",(0,t.jsx)(n.code,{children:"blockConfirmations"})," is set to ",(0,t.jsx)(n.code,{children:"0"}),". This will work well for\nnetworks like Lux because the block is confirmed once it's committed. Unlike other chains such\nas Ethereum, which requires 20-30 block confirmations. Therefore, use this configuration with\ncaution, depending on the type of chain you are using."]}),"\n",(0,t.jsx)(n.p,{children:"It can cause serious problems if a corresponding token is minted or released based on an\nunconfirmed block."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"set-up-keys",children:"Set Up Keys"}),"\n",(0,t.jsx)(n.p,{children:"Give relayer access to your keys. Using these keys, the relayer will propose deposit events and\nexecute proposals. It will ask to set a password for encrypting these keys. Every time you start\nthe relayer, it will ask for this password."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./build/chainbridge accounts import --privateKey $SRC_PK\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./build/chainbridge accounts import --privateKey $DST_PK\n"})}),"\n",(0,t.jsx)(n.h2,{id:"lets-test-the-bridge",children:"Let's Test the Bridge"}),"\n",(0,t.jsxs)(n.p,{children:["The setup is now complete - both on-chain and off-chain. Now we just have to start the relayer and\ntest the bridge. For testing purposes, we will be using ",(0,t.jsx)(n.code,{children:"cb-sol-cli"})," to make deposit transactions on\nthe bridge. But you can make your frontend and integrate it with the bridge using the ABIs."]}),"\n",(0,t.jsx)(n.h3,{id:"start-relayer",children:"Start Relayer"}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to start the relayer. It will print logs of all the events associated with\nour bridge, happening on both the chains. So keep the relayer running and follow the next commands\nin the other terminal session."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./build/chainbridge --config config.json --verbosity trace --latest\n"})}),"\n",(0,t.jsx)(n.h3,{id:"approve-handler-to-spend-my-tokens",children:"Approve Handler to Spend my Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["Now, let's deposit tokens on the WAGMI bridge. But before that, we need to approve the handler to\nspend (lock or burn) tokens on our (here ",(0,t.jsx)(n.code,{children:"SRC_PK"}),") behalf. The amount here is in Wei (1 ether (WGM)\n= 10^18 Wei). We will be approving 0.1 wWGM."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cb-sol-cli --url $SRC_GATEWAY --privateKey $SRC_PK --gasPrice 25000000000 erc20 approve \\\n    --amount 100000000000000000 \\\n    --erc20Address $SRC_TOKEN \\\n    --recipient $SRC_HANDLER\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deposit-tokens-to-the-bridge",children:"Deposit Tokens to the Bridge"}),"\n",(0,t.jsxs)(n.p,{children:["Once approved, we can send a deposit transaction. Now let's deposit 0.1 wWGM on the bridge. The\nhandler will lock (transfer to token safe) 0.1 wWGM from our address (here ",(0,t.jsx)(n.code,{children:"SRC_PK"}),") and mint the\nnew tokens on the destination chain to the recipient (here ",(0,t.jsx)(n.code,{children:"DST_ADDR"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cb-sol-cli --url $SRC_GATEWAY --privateKey $SRC_PK --gasPrice 25000000000 erc20 deposit \\\n    --amount 100000000000000000 \\\n    --dest 1 \\\n    --bridge $SRC_BRIDGE \\\n    --recipient $DST_ADDR \\\n    --resourceId $RESOURCE_ID\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This transaction will transfer 0.1 wWGM to token safe and emit a ",(0,t.jsx)(n.code,{children:"Deposit"})," event, which will be\ncaptured by the relayer. Following this event, it will send a voting proposal to the destination\nchain. Since the threshold is 1, the bridge will execute the proposal, and new wWGM minted to the\nrecipient's address. Here is the screenshot of the output from the relayer."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"output",src:i(85846).Z+"",width:"3434",height:"1096"})}),"\n",(0,t.jsx)(n.p,{children:"Similarly, we can transfer the tokens back to the WAGMI chain."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Similar to the above process, you can deploy a bridge between any 2 EVM-based chains. We have used\nthe command-line tool to make approvals and deposits. This can be further extended to build a\nfrontend integrated with the bridge. Currently, it depends on a single relayer, which is not secure.\nWe need a large set of relayers and a high threshold to avoid any kind of centralization."}),"\n",(0,t.jsxs)(n.p,{children:["You can learn more about these contracts and implementations by reading ChainSafe's\n",(0,t.jsx)(n.a,{href:"https://chainbridge.chainsafe.io/",children:"ChainBridge"})," documentation."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},47743:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/chainsafe-bridge-1-workflow-d8ad88d35b0e2b4bb21b75136bd7cf99.png"},85846:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/chainsafe-bridge-2-relayer-output-47d1c545466048dcd36585c421e2d9a3.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(67294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);