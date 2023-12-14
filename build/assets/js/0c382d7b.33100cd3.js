"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7392],{51578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(85893),i=t(11151),l=t(74866),a=t(85162);const r={tags:["Build","Virtual Machines"],description:"Executing Your Test Cases",sidebar_label:"Executing Your Test Cases",pagination_label:"Executing Your Test Cases",sidebar_position:5},o="Executing Your Test Cases",c={id:"build/vm/evm/executing-tests",title:"Executing Your Test Cases",description:"Executing Your Test Cases",source:"@site/docs/build/vm/evm/executing-tests.md",sourceDirName:"build/vm/evm",slug:"/build/vm/evm/executing-tests",permalink:"/build/vm/evm/executing-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/build/vm/evm/executing-tests.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Virtual Machines",permalink:"/tags/virtual-machines"}],version:"current",sidebarPosition:5,frontMatter:{tags:["Build","Virtual Machines"],description:"Executing Your Test Cases",sidebar_label:"Executing Your Test Cases",pagination_label:"Executing Your Test Cases",sidebar_position:5},sidebar:"build-vm",previous:{title:"Writing Test Cases",permalink:"/build/vm/evm/defining-tests"},next:{title:"Deploying Your Precompile",permalink:"/build/vm/evm/deploying-precompile"}},u={},d=[{value:"Adding the Test Genesis File",id:"adding-the-test-genesis-file",level:2},{value:"Declaring the HardHat E2E Test",id:"declaring-the-hardhat-e2e-test",level:2},{value:"Running E2E Tests",id:"running-e2e-tests",level:2},{value:"Running Ginkgo Tests",id:"running-ginkgo-tests",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"executing-your-test-cases",children:"Executing Your Test Cases"}),"\n","\n","\n",(0,s.jsx)(n.p,{children:"In this section, we will go over how to be able to execute the test cases you wrote last section."}),"\n",(0,s.jsx)(n.h2,{id:"adding-the-test-genesis-file",children:"Adding the Test Genesis File"}),"\n",(0,s.jsxs)(n.p,{children:["To run our e2e contract tests, we will need to create a Subnet that has the ",(0,s.jsx)(n.code,{children:"Hello World"}),"\nprecompile activated,\nso we will copy and paste the below genesis file into: ",(0,s.jsx)(n.code,{children:"/tests/precompile/genesis/hello_world.json"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Note: it's important that this has the same name as the HardHat test file we created previously."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    "chainId": 99999,\n    "homesteadBlock": 0,\n    "eip150Block": 0,\n    "eip150Hash": "0x2086799aeebeae135c246c65021c82b4e15a2c451340993aacfd2751886514f0",\n    "eip155Block": 0,\n    "eip158Block": 0,\n    "byzantiumBlock": 0,\n    "constantinopleBlock": 0,\n    "petersburgBlock": 0,\n    "istanbulBlock": 0,\n    "muirGlacierBlock": 0,\n    "subnetEVMTimestamp": 0,\n    "feeConfig": {\n      "gasLimit": 20000000,\n      "minBaseFee": 1000000000,\n      "targetGas": 100000000,\n      "baseFeeChangeDenominator": 48,\n      "minBlockGasCost": 0,\n      "maxBlockGasCost": 10000000,\n      "targetBlockRate": 2,\n      "blockGasCostStep": 500000\n    },\n    "helloWorldConfig": {\n      "blockTimestamp": 0,\n      "adminAddresses": ["0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC"]\n    }\n  },\n  "alloc": {\n    "8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC": {\n      "balance": "0x52B7D2DCC80CD2E4000000"\n    },\n    "0x0Fa8EA536Be85F32724D57A37758761B86416123": {\n      "balance": "0x52B7D2DCC80CD2E4000000"\n    }\n  },\n  "nonce": "0x0",\n  "timestamp": "0x0",\n  "extraData": "0x00",\n  "gasLimit": "0x1312D00",\n  "difficulty": "0x0",\n  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "number": "0x0",\n  "gasUsed": "0x0",\n  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Adding this to our genesis enables our HelloWorld precompile at the very first block (timestamp 0), with\n",(0,s.jsx)(n.code,{children:"0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC"})," as the admin address."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "helloWorldConfig": {\n    "blockTimestamp": 0,\n    "adminAddresses": ["0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC"]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"declaring-the-hardhat-e2e-test",children:"Declaring the HardHat E2E Test"}),"\n",(0,s.jsxs)(n.p,{children:["Now that we have declared the HardHat test and corresponding ",(0,s.jsx)(n.code,{children:"genesis.json"})," file. The last step to running\nthe e2e test is to declare the new test in ",(0,s.jsx)(n.code,{children:"/tests/precompile/solidity/suites.go"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"At the bottom of the file you will see the following code commented out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'\t// TODO: can we refactor this so that it automagically checks to ensure each hardhat test file matches the name of a hardhat genesis file\n\t// and then runs the hardhat tests for each one without forcing precompile developers to modify this file.\n\t// ADD YOUR PRECOMPILE HERE\n\t/*\n\t\tginkgo.It("your precompile", ginkgo.Label("Precompile"), ginkgo.Label("YourPrecompile"), func() {\n\t\t\tctx, cancel := context.WithTimeout(context.Background(), time.Minute)\n\t\t\tdefer cancel()\n\t\t\t// Specify the name shared by the genesis file in ./tests/precompile/genesis/{your_precompile}.json\n\t\t\t// and the test file in ./contracts/tests/{your_precompile}.ts\n\t\t\t// If you want to use a different test command and genesis path than the defaults, you can\n\t\t\t// use the utils.RunTestCMD. See utils.RunDefaultHardhatTests for an example.\n\t\t\tutils.RunDefaultHardhatTests(ctx, "your_precompile")\n\t\t})\n\t*/\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"utils.RunDefaultHardhatTests"})," will run the default Hardhat test command and use the default genesis\npath.\nIf you want to use a different test command and genesis path than the defaults, you can use the\n",(0,s.jsx)(n.code,{children:"utils.CreateSubnet"})," and ",(0,s.jsx)(n.code,{children:"utils.RunTestCMD"}),".\nSee how they were used with default params ",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/subnet-evm/blob/helloworld-official-tutorial-v2/tests/utils/subnet.go#L113",children:"here"})]}),"\n",(0,s.jsxs)(n.p,{children:["You should copy and paste the ginkgo ",(0,s.jsx)(n.code,{children:"It"})," node and update from ",(0,s.jsx)(n.code,{children:"{your_precompile}"})," to ",(0,s.jsx)(n.code,{children:"hello_world"}),".\nThe string passed in to ",(0,s.jsx)(n.code,{children:'utils.RunDefaultHardhatTests(ctx, "your_precompile")'})," will be used\nto find both the HardHat test file to execute and the genesis file, which is why you need to use the\nsame name for both."]}),"\n",(0,s.jsxs)(n.p,{children:["After modifying the ",(0,s.jsx)(n.code,{children:"It"})," node, it should look like the following (you can copy and paste this\ndirectly if you prefer):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'\tginkgo.It("hello world", ginkgo.Label("Precompile"), ginkgo.Label("HelloWorld"), func() {\n\t\tctx, cancel := context.WithTimeout(context.Background(), time.Minute)\n\t\tdefer cancel()\n\n\t\tutils.RunDefaultHardhatTests(ctx, "hello_world")\n\t})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now that we've set up the new ginkgo test, we can run the ginkgo test that we want by using the\n",(0,s.jsx)(n.code,{children:"GINKGO_LABEL_FILTER"}),". This environment variable is passed as a flag to Ginkgo in\n",(0,s.jsx)(n.code,{children:"./scripts/run_ginkgo.sh"})," and restricts what tests will run to only the tests with a matching label."]}),"\n",(0,s.jsx)(n.h2,{id:"running-e2e-tests",children:"Running E2E Tests"}),"\n",(0,s.jsx)(n.p,{children:"Before we start testing, we will need to build the Luxd binary and the custom Subnet-EVM binary."}),"\n",(0,s.jsxs)(n.p,{children:["Precompile-EVM bundles Subnet-EVM and runs it under the hood in the ",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/precompile-evm/blob/hello-world-example/plugin/main.go#L24",children:(0,s.jsx)(n.code,{children:"plugins/main.go"})}),".\nMeaning that Precompile-EVM binary works the same way as Subnet-EVM binary.\nPrecompile-EVM repo has also same scripts and the build process as Subnet-EVM.\nFollowing steps also apply to Precompile-EVM."]}),"\n",(0,s.jsxs)(n.p,{children:["You should have cloned ",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/luxd",children:"Luxd"})," within your ",(0,s.jsx)(n.code,{children:"$GOPATH"})," in\nthe ",(0,s.jsx)(n.a,{href:"/build/vm/evm/background-and-reqs",children:"Background and Requirements"})," section, so you can build Luxd with the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/luxd\n./scripts/build.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once you've built Luxd, you can confirm that it was successful by printing the version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./build/luxd --version\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should print something like the following (if you are running Luxd v1.9.7):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lux/1.9.7 [database=v1.4.5, rpcchainvm=22, commit=3e3e40f2f4658183d999807b724245023a13f5dc]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This path will be used later as the environment variable ",(0,s.jsx)(n.code,{children:"LUXD_EXEC_PATH"})," in the network runner."]}),"\n",(0,s.jsx)(n.p,{children:"Please note that the RPCChainVM version of Luxd and Subnet-EVM must match."}),"\n",(0,s.jsx)(n.p,{children:"Once we've built Luxd, we can navigate back to the repo and build the binary:"}),"\n",(0,s.jsxs)(l.Z,{groupId:"evm-tabs",children:[(0,s.jsxs)(a.Z,{value:"subnet-evm-tab",label:"Subnet-EVM",default:!0,children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/subnet-evm\n./scripts/build.sh\n"})}),(0,s.jsxs)(n.p,{children:["This will build the Subnet-EVM binary and place it in Luxd's ",(0,s.jsx)(n.code,{children:"build/plugins"})," directory by default\nat the file path:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"$GOPATH/src/github.com/luxdefi/luxd/build/plugins/srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"})}),(0,s.jsx)(n.p,{children:"To confirm that the Subnet-EVM binary is compatible with Luxd, you can run the same version command\nand confirm the RPCChainVM version matches:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$GOPATH/src/github.com/luxdefi/luxd/build/plugins/srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy --version\n"})}),(0,s.jsx)(n.p,{children:"This should give similar output:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Subnet-EVM/v0.5.2@9a1c5482c83c32b29630ff171cb20ccc889d760e [Luxd=v1.10.2, rpcchainvm=26]\n"})})]}),(0,s.jsxs)(a.Z,{value:"precompile-evm-tab",label:"Precompile-EVM",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/precompile-evm\n./scripts/build.sh\n"})}),(0,s.jsxs)(n.p,{children:["This will build the Precompile-EVM binary and place it in Luxd's ",(0,s.jsx)(n.code,{children:"build/plugins"})," directory by\ndefault at the file path:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"$GOPATH/src/github.com/luxdefi/luxd/build/plugins/srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"})}),(0,s.jsx)(n.p,{children:"To confirm that the Precomp\u0131le-EVM binary is compatible with Luxd,\nyou can run the same version command\nand confirm the RPCChainVM version matches:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$GOPATH/src/github.com/luxdefi/luxd/build/plugins/srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy --version\n"})}),(0,s.jsx)(n.p,{children:"This should give similar output:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Precompile-EVM/v0.0.0 Subnet-EVM/v0.5.2 [Luxd=v1.10.2, rpcchainvm=26]\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If the RPCChainVM Protocol version printed out does not match the one used in Luxd then Subnet-EVM\nwill not be able to talk to Luxd and the blockchain will not start.\nYou can find the compatibility table\nfor Luxd and Subnet-EVM ",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/subnet-evm#luxd-compatibility",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"build/plugins"})," directory will later be used as the ",(0,s.jsx)(n.code,{children:"LUXD_PLUGIN_PATH"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"running-ginkgo-tests",children:"Running Ginkgo Tests"}),"\n",(0,s.jsx)(n.p,{children:"To run ONLY the HelloWorld precompile test, run the command:"}),"\n",(0,s.jsxs)(l.Z,{groupId:"evm-tabs",children:[(0,s.jsx)(a.Z,{value:"subnet-evm-tab",label:"Subnet-EVM",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/subnet-evm\n"})})}),(0,s.jsx)(a.Z,{value:"precompile-evm-tab",label:"Precompile-EVM",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/precompile-evm\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["use ",(0,s.jsx)(n.code,{children:"GINKGO_LABEL_FILTER"})," env var to filter the test:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"GINKGO_LABEL_FILTER=HelloWorld ./scripts/run_ginkgo.sh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You will first see the node starting up in the ",(0,s.jsx)(n.code,{children:"BeforeSuite"})," section of the precompile test:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ GINKGO_LABEL_FILTER=HelloWorld ./scripts/run_ginkgo.sh\nUsing branch: hello-world-tutorial-walkthrough\nbuilding precompile.test\n# github.com/luxdefi/subnet-evm/tests/precompile.test\nld: warning: could not create compact unwind for _blst_sha256_block_data_order: does not use RBP or RSP based frame\n\nCompiled precompile.test\n# github.com/luxdefi/subnet-evm/tests/load.test\nld: warning: could not create compact unwind for _blst_sha256_block_data_order: does not use RBP or RSP based frame\n\nCompiled load.test\nRunning Suite: subnet-evm precompile ginkgo test suite - /Users/avalabs/go/src/github.com/luxdefi/subnet-evm\n===================================================================================================================\nRandom Seed: 1674833631\n\nWill run 1 of 7 specs\n------------------------------\n[BeforeSuite]\n/Users/avalabs/go/src/github.com/luxdefi/subnet-evm/tests/precompile/precompile_test.go:31\n  > Enter [BeforeSuite] TOP-LEVEL - /Users/avalabs/go/src/github.com/luxdefi/subnet-evm/tests/precompile/precompile_test.go:31 @ 01/27/23 10:33:51.001\nINFO [01-27|10:33:51.002] Starting Luxd node                wd=/Users/avalabs/go/src/github.com/luxdefi/subnet-evm\nINFO [01-27|10:33:51.002] Executing                                cmd="./scripts/run.sh "\n[streaming output] Using branch: hello-world-tutorial-walkthrough\n...\n[BeforeSuite] PASSED [15.002 seconds]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After the ",(0,s.jsx)(n.code,{children:"BeforeSuite"})," completes successfully, it will skip all but the ",(0,s.jsx)(n.code,{children:"HelloWorld"})," labeled\nprecompile test:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"S [SKIPPED]\n[Precompiles]\n/Users/avalabs/go/src/github.com/luxdefi/subnet-evm/tests/precompile/solidity/suites.go:26\n  contract native minter [Precompile, ContractNativeMinter]\n  /Users/avalabs/go/src/github.com/luxdefi/subnet-evm/tests/precompile/solidity/suites.go:29\n------------------------------\nS [SKIPPED]\n[Precompiles]\n/Users/avalabs/go/src/github.com/luxdefi/subnet-evm/tests/precompile/solidity/suites.go:26\n  tx allow list [Precompile, TxAllowList]\n  /Users/avalabs/go/src/github.com/luxdefi/subnet-evm/tests/precompile/solidity/suites.go:36\n------------------------------\n...\nCombined output:\n\nCompiling 2 files with 0.8.0\nCompilation finished successfully\n\n\n  ExampleHelloWorldTest\n    \u2713 should gets default hello world (4057ms)\n    \u2713 should not set greeting before enabled (4067ms)\n    \u2713 should set and get greeting with enabled account (4074ms)\n\n\n\n  3 passing (33s)\n\n\n  < Exit [It] hello world - /Users/avalabs/go/src/github.com/luxdefi/subnet-evm/tests/precompile/solidity/suites.go:64 @ 01/27/23 10:34:17.484 (11.48s)\n\u2022 [11.480 seconds]\n------------------------------\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, you will see the load test being skipped as well:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Running Suite: subnet-evm small load simulator test suite - /Users/avalabs/go/src/github.com/luxdefi/subnet-evm\n======================================================================================================================\nRandom Seed: 1674833658\n\nWill run 0 of 1 specs\nS [SKIPPED]\n[Load Simulator]\n/Users/avalabs/go/src/github.com/luxdefi/subnet-evm/tests/load/load_test.go:49\n  basic subnet load test [load]\n  /Users/avalabs/go/src/github.com/luxdefi/subnet-evm/tests/load/load_test.go:50\n------------------------------\n\nRan 0 of 1 Specs in 0.000 seconds\nSUCCESS! -- 0 Passed | 0 Failed | 0 Pending | 1 Skipped\nPASS\n"})}),"\n",(0,s.jsx)(n.p,{children:"Looks like the tests are passing!"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["If your tests failed, please retrace your steps. Most likely the error is that the precompile was\nnot enabled and some code is missing.\nTry running ",(0,s.jsx)(n.code,{children:"npm install"})," in the contracts directory to ensure that hardhat and other packages are installed."]}),(0,s.jsxs)(n.p,{children:["You may also use the\n",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/subnet-evm/tree/helloworld-official-tutorial-v2",children:"official tutorial implementation"}),"\nto double-check your work as well."]})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var s=t(36905);const i={tabItem:"tabItem_Ymn6"};var l=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(67294),i=t(36905),l=t(12466),a=t(16550),r=t(20469),o=t(91980),c=t(67392),u=t(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,l=h(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[c,d]=p({queryString:t,groupId:i}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,u.Nk)(t);return[i,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:i}),x=(()=>{const e=c??b;return m({value:e,tabValues:l})?e:null})();(0,r.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function v(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),i=r[t].value;i!==s&&(c(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,i.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const i={},l=s.createContext(i);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);