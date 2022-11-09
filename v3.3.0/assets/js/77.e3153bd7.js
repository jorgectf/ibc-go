(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{637:function(e,t,o){"use strict";o.r(t);var a=o(0),c=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"integration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[e._v("#")]),e._v(" Integration")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("Learn how to integrate IBC to your application and send data packets to other chains.")]),e._v(" "),o("p",[e._v("This document outlines the required steps to integrate and configure the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/core",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC\nmodule"),o("OutboundLink")],1),e._v(" to your Cosmos SDK application and\nsend fungible token transfers to other chains.")]),e._v(" "),o("h2",{attrs:{id:"integrating-the-ibc-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integrating-the-ibc-module"}},[e._v("#")]),e._v(" Integrating the IBC module")]),e._v(" "),o("p",[e._v("Integrating the IBC module to your SDK-based application is straighforward. The general changes can be summarized in the following steps:")]),e._v(" "),o("ul",[o("li",[e._v("Add required modules to the "),o("code",[e._v("module.BasicManager")])]),e._v(" "),o("li",[e._v("Define additional "),o("code",[e._v("Keeper")]),e._v(" fields for the new modules on the "),o("code",[e._v("App")]),e._v(" type")]),e._v(" "),o("li",[e._v("Add the module's "),o("code",[e._v("StoreKeys")]),e._v(" and initialize their "),o("code",[e._v("Keepers")])]),e._v(" "),o("li",[e._v("Set up corresponding routers and routes for the "),o("code",[e._v("ibc")]),e._v(" module")]),e._v(" "),o("li",[e._v("Add the modules to the module "),o("code",[e._v("Manager")])]),e._v(" "),o("li",[e._v("Add modules to "),o("code",[e._v("Begin/EndBlockers")]),e._v(" and "),o("code",[e._v("InitGenesis")])]),e._v(" "),o("li",[e._v("Update the module "),o("code",[e._v("SimulationManager")]),e._v(" to enable simulations")])]),e._v(" "),o("h3",{attrs:{id:"module-basicmanager-and-moduleaccount-permissions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-basicmanager-and-moduleaccount-permissions"}},[e._v("#")]),e._v(" Module "),o("code",[e._v("BasicManager")]),e._v(" and "),o("code",[e._v("ModuleAccount")]),e._v(" permissions")]),e._v(" "),o("p",[e._v("The first step is to add the following modules to the "),o("code",[e._v("BasicManager")]),e._v(": "),o("code",[e._v("x/capability")]),e._v(", "),o("code",[e._v("x/ibc")]),e._v(",\nand "),o("code",[e._v("x/ibc-transfer")]),e._v(". After that, we need to grant "),o("code",[e._v("Minter")]),e._v(" and "),o("code",[e._v("Burner")]),e._v(" permissions to\nthe "),o("code",[e._v("ibc-transfer")]),e._v(" "),o("code",[e._v("ModuleAccount")]),e._v(" to mint and burn relayed tokens.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCnZhciAoCgogIE1vZHVsZUJhc2ljcyA9IG1vZHVsZS5OZXdCYXNpY01hbmFnZXIoCiAgICAvLyAuLi4KICAgIGNhcGFiaWxpdHkuQXBwTW9kdWxlQmFzaWN7fSwKICAgIGliYy5BcHBNb2R1bGVCYXNpY3t9LAogICAgdHJhbnNmZXIuQXBwTW9kdWxlQmFzaWN7fSwgLy8gaS5lIGliYy10cmFuc2ZlciBtb2R1bGUKICApCgogIC8vIG1vZHVsZSBhY2NvdW50IHBlcm1pc3Npb25zCiAgbWFjY1Blcm1zID0gbWFwW3N0cmluZ11bXXN0cmluZ3sKICAgIC8vIG90aGVyIG1vZHVsZSBhY2NvdW50cyBwZXJtaXNzaW9ucwogICAgLy8gLi4uCiAgICBpYmN0cmFuc2ZlcnR5cGVzLk1vZHVsZU5hbWU6ICAgIHthdXRodHlwZXMuTWludGVyLCBhdXRodHlwZXMuQnVybmVyfSwKKQo="}}),e._v(" "),o("h3",{attrs:{id:"application-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-fields"}},[e._v("#")]),e._v(" Application fields")]),e._v(" "),o("p",[e._v("Then, we need to register the "),o("code",[e._v("Keepers")]),e._v(" as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCnR5cGUgQXBwIHN0cnVjdCB7CiAgLy8gYmFzZWFwcCwga2V5cyBhbmQgc3Vic3BhY2VzIGRlZmluaXRpb25zCgogIC8vIG90aGVyIGtlZXBlcnMKICAvLyAuLi4KICBJQkNLZWVwZXIgICAgICAgICppYmNrZWVwZXIuS2VlcGVyIC8vIElCQyBLZWVwZXIgbXVzdCBiZSBhIHBvaW50ZXIgaW4gdGhlIGFwcCwgc28gd2UgY2FuIFNldFJvdXRlciBvbiBpdCBjb3JyZWN0bHkKICBUcmFuc2ZlcktlZXBlciAgIGliY3RyYW5zZmVya2VlcGVyLktlZXBlciAvLyBmb3IgY3Jvc3MtY2hhaW4gZnVuZ2libGUgdG9rZW4gdHJhbnNmZXJzCgogIC8vIG1ha2Ugc2NvcGVkIGtlZXBlcnMgcHVibGljIGZvciB0ZXN0IHB1cnBvc2VzCiAgU2NvcGVkSUJDS2VlcGVyICAgICAgY2FwYWJpbGl0eWtlZXBlci5TY29wZWRLZWVwZXIKICBTY29wZWRUcmFuc2ZlcktlZXBlciBjYXBhYmlsaXR5a2VlcGVyLlNjb3BlZEtlZXBlcgoKICAvLy8gLi4uCiAgLy8vIG1vZHVsZSBhbmQgc2ltdWxhdGlvbiBtYW5hZ2VyIGRlZmluaXRpb25zCn0K"}}),e._v(" "),o("h3",{attrs:{id:"configure-the-keepers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-keepers"}},[e._v("#")]),e._v(" Configure the "),o("code",[e._v("Keepers")])]),e._v(" "),o("p",[e._v("During initialization, besides initializing the IBC "),o("code",[e._v("Keepers")]),e._v(" (for the  "),o("code",[e._v("x/ibc")]),e._v(", and\n"),o("code",[e._v("x/ibc-transfer")]),e._v(" modules), we need to grant specific capabilities through the capability module\n"),o("code",[e._v("ScopedKeepers")]),e._v(" so that we can authenticate the object-capability permissions for each of the IBC\nchannels.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdBcHAoLi4uYXJncykgKkFwcCB7CiAgLy8gZGVmaW5lIGNvZGVjcyBhbmQgYmFzZWFwcAoKICAvLyBhZGQgY2FwYWJpbGl0eSBrZWVwZXIgYW5kIFNjb3BlVG9Nb2R1bGUgZm9yIGliYyBtb2R1bGUKICBhcHAuQ2FwYWJpbGl0eUtlZXBlciA9IGNhcGFiaWxpdHlrZWVwZXIuTmV3S2VlcGVyKGFwcENvZGVjLCBrZXlzW2NhcGFiaWxpdHl0eXBlcy5TdG9yZUtleV0sIG1lbUtleXNbY2FwYWJpbGl0eXR5cGVzLk1lbVN0b3JlS2V5XSkKCiAgLy8gZ3JhbnQgY2FwYWJpbGl0aWVzIGZvciB0aGUgaWJjIGFuZCBpYmMtdHJhbnNmZXIgbW9kdWxlcwogIHNjb3BlZElCQ0tlZXBlciA6PSBhcHAuQ2FwYWJpbGl0eUtlZXBlci5TY29wZVRvTW9kdWxlKGliY2hvc3QuTW9kdWxlTmFtZSkKICBzY29wZWRUcmFuc2ZlcktlZXBlciA6PSBhcHAuQ2FwYWJpbGl0eUtlZXBlci5TY29wZVRvTW9kdWxlKGliY3RyYW5zZmVydHlwZXMuTW9kdWxlTmFtZSkKCiAgLy8gLi4uIG90aGVyIG1vZHVsZXMga2VlcGVycwoKICAvLyBDcmVhdGUgSUJDIEtlZXBlcgogIGFwcC5JQkNLZWVwZXIgPSBpYmNrZWVwZXIuTmV3S2VlcGVyKAogICAgYXBwQ29kZWMsIGtleXNbaWJjaG9zdC5TdG9yZUtleV0sIGFwcC5HZXRTdWJzcGFjZShpYmNob3N0Lk1vZHVsZU5hbWUpLCBhcHAuU3Rha2luZ0tlZXBlciwgYXBwLlVwZ3JhZGVLZWVwZXIsIHNjb3BlZElCQ0tlZXBlciwKICApCgogIC8vIENyZWF0ZSBUcmFuc2ZlciBLZWVwZXJzCiAgYXBwLlRyYW5zZmVyS2VlcGVyID0gaWJjdHJhbnNmZXJrZWVwZXIuTmV3S2VlcGVyKAogICAgYXBwQ29kZWMsIGtleXNbaWJjdHJhbnNmZXJ0eXBlcy5TdG9yZUtleV0sIGFwcC5HZXRTdWJzcGFjZShpYmN0cmFuc2ZlcnR5cGVzLk1vZHVsZU5hbWUpLAogICAgYXBwLklCQ0tlZXBlci5DaGFubmVsS2VlcGVyLCBhcHAuSUJDS2VlcGVyLkNoYW5uZWxLZWVwZXIsICZhbXA7YXBwLklCQ0tlZXBlci5Qb3J0S2VlcGVyLAogICAgYXBwLkFjY291bnRLZWVwZXIsIGFwcC5CYW5rS2VlcGVyLCBzY29wZWRUcmFuc2ZlcktlZXBlciwKICApCiAgdHJhbnNmZXJNb2R1bGUgOj0gdHJhbnNmZXIuTmV3QXBwTW9kdWxlKGFwcC5UcmFuc2ZlcktlZXBlcikKCiAgLy8gLi4gY29udGludWVzCn0K"}}),e._v(" "),o("h3",{attrs:{id:"register-routers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#register-routers"}},[e._v("#")]),e._v(" Register "),o("code",[e._v("Routers")])]),e._v(" "),o("p",[e._v("IBC needs to know which module is bound to which port so that it can route packets to the\nappropriate module and call the appropriate callbacks. The port to module name mapping is handled by\nIBC's port "),o("code",[e._v("Keeper")]),e._v(". However, the mapping from module name to the relevant callbacks is accomplished\nby the port\n"),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/router.go",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("Router")]),o("OutboundLink")],1),e._v(" on the\nIBC module.")]),e._v(" "),o("p",[e._v("Adding the module routes allows the IBC handler to call the appropriate callback when processing a\nchannel handshake or a packet.")]),e._v(" "),o("p",[e._v("Currently, a "),o("code",[e._v("Router")]),e._v(" is static so it must be initialized and set correctly on app initialization.\nOnce the "),o("code",[e._v("Router")]),e._v(" has been set, no new routes can be added.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCmZ1bmMgTmV3QXBwKC4uLmFyZ3MpICpBcHAgewogIC8vIC4uIGNvbnRpbnVhdGlvbiBmcm9tIGFib3ZlCgogIC8vIENyZWF0ZSBzdGF0aWMgSUJDIHJvdXRlciwgYWRkIGliYy10cmFuZmVyIG1vZHVsZSByb3V0ZSwgdGhlbiBzZXQgYW5kIHNlYWwgaXQKICBpYmNSb3V0ZXIgOj0gcG9ydC5OZXdSb3V0ZXIoKQogIGliY1JvdXRlci5BZGRSb3V0ZShpYmN0cmFuc2ZlcnR5cGVzLk1vZHVsZU5hbWUsIHRyYW5zZmVyTW9kdWxlKQogIC8vIFNldHRpbmcgUm91dGVyIHdpbGwgZmluYWxpemUgYWxsIHJvdXRlcyBieSBzZWFsaW5nIHJvdXRlcgogIC8vIE5vIG1vcmUgcm91dGVzIGNhbiBiZSBhZGRlZAogIGFwcC5JQkNLZWVwZXIuU2V0Um91dGVyKGliY1JvdXRlcikKCiAgLy8gLi4gY29udGludWVzCg=="}}),e._v(" "),o("h3",{attrs:{id:"module-managers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-managers"}},[e._v("#")]),e._v(" Module Managers")]),e._v(" "),o("p",[e._v("In order to use IBC, we need to add the new modules to the module "),o("code",[e._v("Manager")]),e._v(" and to the "),o("code",[e._v("SimulationManager")]),e._v(" in case your application supports "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/docs/building-modules/13-simulator.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("simulations"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCmZ1bmMgTmV3QXBwKC4uLmFyZ3MpICpBcHAgewogIC8vIC4uIGNvbnRpbnVhdGlvbiBmcm9tIGFib3ZlCgogIGFwcC5tbSA9IG1vZHVsZS5OZXdNYW5hZ2VyKAogICAgLy8gb3RoZXIgbW9kdWxlcwogICAgLy8gLi4uCiAgICBjYXBhYmlsaXR5Lk5ld0FwcE1vZHVsZShhcHBDb2RlYywgKmFwcC5DYXBhYmlsaXR5S2VlcGVyKSwKICAgIGliYy5OZXdBcHBNb2R1bGUoYXBwLklCQ0tlZXBlciksCiAgICB0cmFuc2Zlck1vZHVsZSwKICApCgogIC8vIC4uLgoKICBhcHAuc20gPSBtb2R1bGUuTmV3U2ltdWxhdGlvbk1hbmFnZXIoCiAgICAvLyBvdGhlciBtb2R1bGVzCiAgICAvLyAuLi4KICAgIGNhcGFiaWxpdHkuTmV3QXBwTW9kdWxlKGFwcENvZGVjLCAqYXBwLkNhcGFiaWxpdHlLZWVwZXIpLAogICAgaWJjLk5ld0FwcE1vZHVsZShhcHAuSUJDS2VlcGVyKSwKICAgIHRyYW5zZmVyTW9kdWxlLAogICkKCiAgLy8gLi4gY29udGludWVzCg=="}}),e._v(" "),o("h3",{attrs:{id:"application-abci-ordering"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-abci-ordering"}},[e._v("#")]),e._v(" Application ABCI Ordering")]),e._v(" "),o("p",[e._v("One addition from IBC is the concept of "),o("code",[e._v("HistoricalEntries")]),e._v(" which are stored on the staking module.\nEach entry contains the historical information for the "),o("code",[e._v("Header")]),e._v(" and "),o("code",[e._v("ValidatorSet")]),e._v(" of this chain which is stored\nat each height during the "),o("code",[e._v("BeginBlock")]),e._v(" call. The historical info is required to introspect the\npast historical info at any given height in order to verify the light client "),o("code",[e._v("ConsensusState")]),e._v(" during the\nconnection handhake.")]),e._v(" "),o("p",[e._v("The IBC module also has\n"),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client/abci.go",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("BeginBlock")]),o("OutboundLink")],1),e._v(" logic as\nwell. This is optional as it is only required if your application uses the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/client/ics-009-loopback-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost\nclient"),o("OutboundLink")],1),e._v(" to connect two\ndifferent modules from the same chain.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[e._v("Only register the ibc module to the "),o("code",[e._v("SetOrderBeginBlockers")]),e._v(" if your application will use the\nlocalhost ("),o("em",[e._v("aka")]),e._v(" loopback) client.")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCmZ1bmMgTmV3QXBwKC4uLmFyZ3MpICpBcHAgewogIC8vIC4uIGNvbnRpbnVhdGlvbiBmcm9tIGFib3ZlCgogIC8vIGFkZCBzdGFraW5nIGFuZCBpYmMgbW9kdWxlcyB0byBCZWdpbkJsb2NrZXJzCiAgYXBwLm1tLlNldE9yZGVyQmVnaW5CbG9ja2VycygKICAgIC8vIG90aGVyIG1vZHVsZXMgLi4uCiAgICBzdGFraW5ndHlwZXMuTW9kdWxlTmFtZSwgaWJjaG9zdC5Nb2R1bGVOYW1lLAogICkKCiAgLy8gLi4uCgogIC8vIE5PVEU6IENhcGFiaWxpdHkgbW9kdWxlIG11c3Qgb2NjdXIgZmlyc3Qgc28gdGhhdCBpdCBjYW4gaW5pdGlhbGl6ZSBhbnkgY2FwYWJpbGl0aWVzCiAgLy8gc28gdGhhdCBvdGhlciBtb2R1bGVzIHRoYXQgd2FudCB0byBjcmVhdGUgb3IgY2xhaW0gY2FwYWJpbGl0aWVzIGFmdGVyd2FyZHMgaW4gSW5pdENoYWluCiAgLy8gY2FuIGRvIHNvIHNhZmVseS4KICBhcHAubW0uU2V0T3JkZXJJbml0R2VuZXNpcygKICAgIGNhcGFiaWxpdHl0eXBlcy5Nb2R1bGVOYW1lLAogICAgLy8gb3RoZXIgbW9kdWxlcyAuLi4KICAgIGliY2hvc3QuTW9kdWxlTmFtZSwgaWJjdHJhbnNmZXJ0eXBlcy5Nb2R1bGVOYW1lLAogICkKCiAgLy8gLi4gY29udGludWVzCg=="}}),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[o("strong",[e._v("IMPORTANT")]),e._v(": The capability module "),o("strong",[e._v("must")]),e._v(" be declared first in "),o("code",[e._v("SetOrderInitGenesis")])])]),e._v(" "),o("p",[e._v("That's it! You have now wired up the IBC module and are now able to send fungible tokens across\ndifferent chains. If you want to have a broader view of the changes take a look into the SDK's\n"),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/testing/simapp/app.go",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("SimApp")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn about how to create "),o("RouterLink",{attrs:{to:"/ibc/apps.html"}},[e._v("custom IBC modules")]),e._v(" for your application")],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);