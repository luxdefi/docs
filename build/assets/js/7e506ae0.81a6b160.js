"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[883],{38831:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=n(85893),r=n(11151);const t={tags:["Standards"],description:"Lux network defines the core communication format between Lux nodes.",sidebar_label:"Network Protocol",pagination_label:"Lux Network Protocol"},d="Lux Network Protocol",c={id:"reference/standards/avalanche-network-protocol",title:"Lux Network Protocol",description:"Lux network defines the core communication format between Lux nodes.",source:"@site/docs/reference/standards/avalanche-network-protocol.md",sourceDirName:"reference/standards",slug:"/reference/standards/avalanche-network-protocol",permalink:"/reference/standards/avalanche-network-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/master/docs/reference/standards/avalanche-network-protocol.md",tags:[{label:"Standards",permalink:"/tags/standards"}],version:"current",frontMatter:{tags:["Standards"],description:"Lux network defines the core communication format between Lux nodes.",sidebar_label:"Network Protocol",pagination_label:"Lux Network Protocol"}},l={},o=[{value:"Overview",id:"overview",level:2},{value:"Message",id:"message",level:2},{value:"Compression",id:"compression",level:3},{value:"Network Messages",id:"network-messages",level:2},{value:"Ping",id:"ping",level:3},{value:"Pong",id:"pong",level:3},{value:"Version",id:"version",level:3},{value:"PeerList",id:"peerlist",level:3},{value:"PeerListAck",id:"peerlistack",level:3},{value:"State-Sync Messages",id:"state-sync-messages",level:2},{value:"GetStateSummaryFrontier",id:"getstatesummaryfrontier",level:3},{value:"StateSummaryFrontier",id:"statesummaryfrontier",level:3},{value:"GetAcceptedStateSummary",id:"getacceptedstatesummary",level:3},{value:"AcceptedStateSummary",id:"acceptedstatesummary",level:3},{value:"Bootstrapping Messages",id:"bootstrapping-messages",level:2},{value:"GetAcceptedFrontier",id:"getacceptedfrontier",level:3},{value:"AcceptedFrontier",id:"acceptedfrontier",level:3},{value:"GetAccepted",id:"getaccepted",level:3},{value:"Accepted",id:"accepted",level:3},{value:"GetAncestors",id:"getancestors",level:3},{value:"Ancestors",id:"ancestors",level:3},{value:"Consensus Messages",id:"consensus-messages",level:2},{value:"Get",id:"get",level:3},{value:"Put",id:"put",level:3},{value:"PushQuery",id:"pushquery",level:3},{value:"PullQuery",id:"pullquery",level:3},{value:"Chits",id:"chits",level:3},{value:"Application Messages",id:"application-messages",level:2},{value:"AppRequest",id:"apprequest",level:3},{value:"AppResponse",id:"appresponse",level:3},{value:"AppGossip",id:"appgossip",level:3}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"lux-network-protocol",children:"Lux Network Protocol"}),"\n",(0,i.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(s.p,{children:["Lux network defines the core communication format between Lux nodes.\nIt uses the ",(0,i.jsx)(s.a,{href:"/reference/standards/serialization-primitives",children:"primitive serialization"})," format for\npayload packing."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:'"Containers"'})," are mentioned extensively in the description. A Container is\nsimply a generic term for blocks."]}),"\n",(0,i.jsxs)(s.p,{children:["This document describes the protocol for peer-to-peer communication using Protocol Buffers (proto3). The protocol defines a set of messages exchanged between peers in a peer-to-peer network. Each message is represented by the ",(0,i.jsx)(s.code,{children:"Message"})," proto message, which can encapsulate various types of messages, including network messages, state-sync messages, bootstrapping messages, consensus messages, and application messages."]}),"\n",(0,i.jsx)(s.h2,{id:"message",children:"Message"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Message"})," proto message is the main container for all peer-to-peer communication. It uses the ",(0,i.jsx)(s.code,{children:"oneof"})," construct to represent different message types. The supported compression algorithms include Gzip and Zstd."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message Message {\n  oneof message {\n    bytes compressed_gzip = 1;\n    bytes compressed_zstd = 2;\n    // ... (other compression algorithms can be added)\n    Ping ping = 11;\n    Pong pong = 12;\n    Version version = 13;\n    PeerList peer_list = 14;\n    // ... (other message types)\n  }\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"compression",children:"Compression"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"compressed_gzip"})," and ",(0,i.jsx)(s.code,{children:"compressed_zstd"})," fields are used for Gzip and Zstd compression, respectively, of the encapsulated message. These fields are set only if the message type supports compression."]}),"\n",(0,i.jsx)(s.h2,{id:"network-messages",children:"Network Messages"}),"\n",(0,i.jsx)(s.h3,{id:"ping",children:"Ping"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Ping"})," message reports a peer's perceived uptime percentage."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message Ping {\n  uint32 uptime = 1;\n  repeated SubnetUptime subnet_uptimes = 2;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"uptime"}),": Uptime percentage on the primary network [0, 100]."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"subnet_uptimes"}),": Uptime percentages on Subnets."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"pong",children:"Pong"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Pong"})," message is sent in response to a ",(0,i.jsx)(s.code,{children:"Ping"})," with the perceived uptime of the peer."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message Pong {\n  uint32 uptime = 1; // Deprecated: uptime is now sent in Ping\n  repeated SubnetUptime subnet_uptimes = 2; // Deprecated: uptime is now sent in Ping\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"version",children:"Version"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Version"})," message is the first outbound message sent to a peer during the p2p handshake."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message Version {\n  uint32 network_id = 1;\n  uint64 my_time = 2;\n  bytes ip_addr = 3;\n  uint32 ip_port = 4;\n  string my_version = 5;\n  uint64 my_version_time = 6;\n  bytes sig = 7;\n  repeated bytes tracked_subnets = 8;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"network_id"}),": Network identifier (e.g., local, testnet, Mainnet)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"my_time"}),": Unix timestamp when the ",(0,i.jsx)(s.code,{children:"Version"})," message was created."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ip_addr"}),": IP address of the peer."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ip_port"}),": IP port of the peer."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"my_version"}),": Lux client version."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"my_version_time"}),": Timestamp of the IP."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"sig"}),": Signature of the peer IP port pair at a provided timestamp."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"tracked_subnets"}),": Subnets the peer is tracking."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"peerlist",children:"PeerList"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"PeerList"})," message contains network-level metadata for a set of validators."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message PeerList {\n  repeated ClaimedIpPort claimed_ip_ports = 1;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"claimed_ip_ports"}),": List of claimed IP and port pairs."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"peerlistack",children:"PeerListAck"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"PeerListAck"})," message is sent in response to ",(0,i.jsx)(s.code,{children:"PeerList"})," to acknowledge the subset of peers that the peer will attempt to connect to."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message PeerListAck {\n  reserved 1; // deprecated; used to be tx_ids\n  repeated PeerAck peer_acks = 2;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"peer_acks"}),": List of acknowledged peers."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"state-sync-messages",children:"State-Sync Messages"}),"\n",(0,i.jsx)(s.h3,{id:"getstatesummaryfrontier",children:"GetStateSummaryFrontier"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"GetStateSummaryFrontier"})," message requests a peer's most recently accepted state summary."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message GetStateSummaryFrontier {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  uint64 deadline = 3;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being requested from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Unique identifier for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"deadline"}),": Timeout (ns) for this request."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"statesummaryfrontier",children:"StateSummaryFrontier"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"StateSummaryFrontier"})," message is sent in response to a ",(0,i.jsx)(s.code,{children:"GetStateSummaryFrontier"})," request."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message StateSummaryFrontier {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  bytes summary = 3;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being responded from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Request ID of the original ",(0,i.jsx)(s.code,{children:"GetStateSummaryFrontier"})," request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"summary"}),": The requested state summary."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"getacceptedstatesummary",children:"GetAcceptedStateSummary"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"GetAcceptedStateSummary"})," message requests a set of state summaries at specified block heights."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message GetAcceptedStateSummary {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  uint64 deadline = 3;\n  repeated uint64 heights = 4;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being requested from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Unique identifier for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"deadline"}),": Timeout (ns) for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"heights"}),": Heights being requested."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"acceptedstatesummary",children:"AcceptedStateSummary"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"AcceptedStateSummary"})," message is sent in response to ",(0,i.jsx)(s.code,{children:"GetAcceptedStateSummary"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message AcceptedStateSummary {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  repeated bytes summary_ids = 3;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being responded from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Request ID of the original ",(0,i.jsx)(s.code,{children:"GetAcceptedStateSummary"})," request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"summary_ids"}),": State summary IDs."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"bootstrapping-messages",children:"Bootstrapping Messages"}),"\n",(0,i.jsx)(s.h3,{id:"getacceptedfrontier",children:"GetAcceptedFrontier"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"GetAcceptedFrontier"})," message requests the accepted frontier from a peer."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message GetAcceptedFrontier {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  uint64 deadline = 3;\n  EngineType engine_type = 4;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being requested from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Unique identifier for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"deadline"}),": Timeout (ns) for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"engine_type"}),": Consensus type the remote peer should use to handle this message."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"acceptedfrontier",children:"AcceptedFrontier"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"AcceptedFrontier"})," message contains the remote peer's last accepted frontier."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message AcceptedFrontier {\n  reserved 4; // Until Cortina upgrade is activated\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  bytes container_id = 3;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being responded from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Request ID of the original ",(0,i.jsx)(s.code,{children:"GetAcceptedFrontier"})," request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"container_id"}),": The ID of the last accepted frontier."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"getaccepted",children:"GetAccepted"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"GetAccepted"})," message sends a request with the sender's accepted frontier to a remote peer."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message GetAccepted {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  uint64 deadline = 3;\n  repeated bytes container_ids = 4;\n  EngineType engine_type = 5;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being requested from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Unique identifier for this message."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"deadline"}),": Timeout (ns) for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"container_ids"}),": The"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"sender's accepted frontier."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"engine_type"}),": Consensus type to handle this message."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"accepted",children:"Accepted"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Accepted"})," message is sent in response to ",(0,i.jsx)(s.code,{children:"GetAccepted"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message Accepted {\n  reserved 4; // Until Cortina upgrade is activated\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  repeated bytes container_ids = 3;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being responded from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Request ID of the original ",(0,i.jsx)(s.code,{children:"GetAccepted"})," request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"container_ids"}),": Subset of container IDs from the ",(0,i.jsx)(s.code,{children:"GetAccepted"})," request that the sender has accepted."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"getancestors",children:"GetAncestors"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"GetAncestors"})," message requests the ancestors for a given container."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message GetAncestors {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  uint64 deadline = 3;\n  bytes container_id = 4;\n  EngineType engine_type = 5;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being requested from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Unique identifier for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"deadline"}),": Timeout (ns) for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"container_id"}),": Container for which ancestors are being requested."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"engine_type"}),": Consensus type to handle this message."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"ancestors",children:"Ancestors"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Ancestors"})," message is sent in response to ",(0,i.jsx)(s.code,{children:"GetAncestors"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message Ancestors {\n  reserved 4; // Until Cortina upgrade is activated\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  repeated bytes containers = 3;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being responded from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Request ID of the original ",(0,i.jsx)(s.code,{children:"GetAncestors"})," request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"containers"}),": Ancestry for the requested container."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"consensus-messages",children:"Consensus Messages"}),"\n",(0,i.jsx)(s.h3,{id:"get",children:"Get"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Get"})," message requests a container from a remote peer."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message Get {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  uint64 deadline = 3;\n  bytes container_id = 4;\n  EngineType engine_type = 5;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being requested from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Unique identifier for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"deadline"}),": Timeout (ns) for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"container_id"}),": Container being requested."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"engine_type"}),": Consensus type to handle this message."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"put",children:"Put"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Put"})," message is sent in response to ",(0,i.jsx)(s.code,{children:"Get"})," with the requested block."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message Put {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  bytes container = 3;\n  EngineType engine_type = 4;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being responded from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Request ID of the original ",(0,i.jsx)(s.code,{children:"Get"})," request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"container"}),": Requested container."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"engine_type"}),": Consensus type to handle this message."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"pushquery",children:"PushQuery"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"PushQuery"})," message requests the preferences of a remote peer given a container."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message PushQuery {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  uint64 deadline = 3;\n  bytes container = 4;\n  EngineType engine_type = 5;\n  uint64 requested_height = 6;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being requested from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Unique identifier for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"deadline"}),": Timeout (ns) for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"container"}),": Container being gossiped."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"engine_type"}),": Consensus type to handle this message."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"requested_height"}),": Requesting peer's last accepted height."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"pullquery",children:"PullQuery"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"PullQuery"})," message requests the preferences of a remote peer given a container id."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message PullQuery {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  uint64 deadline = 3;\n  bytes container_id = 4;\n  EngineType engine_type = 5;\n  uint64 requested_height = 6;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being requested from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Unique identifier for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"deadline"}),": Timeout (ns) for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"container_id"}),": Container id being gossiped."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"engine_type"}),": Consensus type to handle this message."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"requested_height"}),": Requesting peer's last accepted height."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"chits",children:"Chits"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Chits"})," message contains the preferences of a peer in response to a ",(0,i.jsx)(s.code,{children:"PushQuery"})," or ",(0,i.jsx)(s.code,{children:"PullQuery"})," message."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message Chits {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  bytes preferred_id = 3;\n  bytes accepted_id = 4;\n  bytes preferred_id_at_height = 5;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being responded from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Request ID of the original ",(0,i.jsx)(s.code,{children:"PushQuery"}),"/",(0,i.jsx)(s.code,{children:"PullQuery"})," request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"preferred_id"}),": Currently preferred block."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"accepted_id"}),": Last accepted block."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"preferred_id_at_height"}),": Currently preferred block at the requested height."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"application-messages",children:"Application Messages"}),"\n",(0,i.jsx)(s.h3,{id:"apprequest",children:"AppRequest"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"AppRequest"})," message is a VM-defined request."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message AppRequest {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  uint64 deadline = 3;\n  bytes app_bytes = 4;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being requested from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Unique identifier for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"deadline"}),": Timeout (ns) for this request."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"app_bytes"}),": Request body."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"appresponse",children:"AppResponse"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"AppResponse"})," message is a VM-defined response sent in response to ",(0,i.jsx)(s.code,{children:"AppRequest"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message AppResponse {\n  bytes chain_id = 1;\n  uint32 request_id = 2;\n  bytes app_bytes = 3;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain being responded from."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"}),": Request ID of the original ",(0,i.jsx)(s.code,{children:"AppRequest"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"app_bytes"}),": Response body."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"appgossip",children:"AppGossip"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"AppGossip"})," message is a VM-defined message."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:"message AppGossip {\n  bytes chain_id = 1;\n  bytes app_bytes = 2;\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chain_id"}),": Chain the message is for."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"app_bytes"}),": Message body."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>d});var i=n(67294);const r={},t=i.createContext(r);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);