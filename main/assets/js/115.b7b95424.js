(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{674:function(e,a,t){"use strict";t.r(a);var o=t(0),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"migrating-to-ibc-go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-ibc-go"}},[e._v("#")]),e._v(" Migrating to ibc-go")]),e._v(" "),t("p",[e._v("This file contains information on how to migrate from the IBC module contained in the SDK 0.41.x and 0.42.x lines to the IBC module in the ibc-go repository based on the 0.44 SDK version.")]),e._v(" "),t("h2",{attrs:{id:"import-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-changes"}},[e._v("#")]),e._v(" Import Changes")]),e._v(" "),t("p",[e._v("The most obvious changes is import name changes. We need to change:")]),e._v(" "),t("ul",[t("li",[e._v("applications -> apps")]),e._v(" "),t("li",[e._v("cosmos-sdk/x/ibc -> ibc-go")])]),e._v(" "),t("p",[e._v("On my GNU/Linux based machine I used the following commands, executed in order:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z3JlcCAtUmlJbCAnY29zbW9zLXNka1wveFwvaWJjXC9hcHBsaWNhdGlvbnMnIHwgeGFyZ3Mgc2VkIC1pICdzL2Nvc21vcy1zZGtcL3hcL2liY1wvYXBwbGljYXRpb25zL2liYy1nb1wvbW9kdWxlc1wvYXBwcy9nJwo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z3JlcCAtUmlJbCAnY29zbW9zLXNka1wveFwvaWJjJyB8IHhhcmdzIHNlZCAtaSAncy9jb3Ntb3Mtc2RrXC94XC9pYmMvaWJjLWdvXC9tb2R1bGVzL2cnCg=="}}),e._v(" "),t("p",[e._v("ref: "),t("a",{attrs:{href:"https://www.internalpointers.com/post/linux-find-and-replace-text-multiple-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("explanation of the above commands"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Executing these commands out of order will cause issues.")]),e._v(" "),t("p",[e._v("Feel free to use your own method for modifying import names.")]),e._v(" "),t("p",[e._v("NOTE: Updating to the "),t("code",[e._v("v0.44.0")]),e._v(" SDK release and then running "),t("code",[e._v("go mod tidy")]),e._v(" will cause a downgrade to "),t("code",[e._v("v0.42.0")]),e._v(" in order to support the old IBC import paths.\nUpdate the import paths before running "),t("code",[e._v("go mod tidy")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"chain-upgrades"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chain-upgrades"}},[e._v("#")]),e._v(" Chain Upgrades")]),e._v(" "),t("p",[e._v("Chains may choose to upgrade via an upgrade proposal or genesis upgrades. Both in-place store migrations and genesis migrations are supported.")]),e._v(" "),t("p",[t("strong",[e._v("WARNING")]),e._v(": Please read at least the quick guide for "),t("RouterLink",{attrs:{to:"/ibc/upgrades/"}},[e._v("IBC client upgrades")]),e._v(" before upgrading your chain. It is highly recommended you do not change the chain-ID during an upgrade, otherwise you must follow the IBC client upgrade instructions.")],1),e._v(" "),t("p",[e._v("Both in-place store migrations and genesis migrations will:")]),e._v(" "),t("ul",[t("li",[e._v("migrate the solo machine client state from v1 to v2 protobuf definitions")]),e._v(" "),t("li",[e._v("prune all solo machine consensus states")]),e._v(" "),t("li",[e._v("prune all expired tendermint consensus states")])]),e._v(" "),t("p",[e._v("Chains must set a new connection parameter during either in place store migrations or genesis migration. The new parameter, max expected block time, is used to enforce packet processing delays on the receiving end of an IBC packet flow. Checkout the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/release/v1.0.x/docs/ibc/proto-docs.md#params-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs"),t("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),t("h3",{attrs:{id:"in-place-store-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-place-store-migrations"}},[e._v("#")]),e._v(" In-Place Store Migrations")]),e._v(" "),t("p",[e._v("The new chain binary will need to run migrations in the upgrade handler. The fromVM (previous module version) for the IBC module should be 1. This will allow migrations to be run for IBC updating the version from 1 to 2.")]),e._v(" "),t("p",[e._v("Ex:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoJnF1b3Q7bXktdXBncmFkZS1wcm9wb3NhbCZxdW90OywKICAgICAgICBmdW5jKGN0eCBzZGsuQ29udGV4dCwgXyB1cGdyYWRldHlwZXMuUGxhbiwgXyBtb2R1bGUuVmVyc2lvbk1hcCkgKG1vZHVsZS5WZXJzaW9uTWFwLCBlcnJvcikgewogICAgICAgICAgICAvLyBzZXQgbWF4IGV4cGVjdGVkIGJsb2NrIHRpbWUgcGFyYW1ldGVyLiBSZXBsYWNlIHRoZSBkZWZhdWx0IHdpdGggeW91ciBleHBlY3RlZCB2YWx1ZQogICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY29zbW9zL2liYy1nby9ibG9iL3JlbGVhc2UvdjEuMC54L2RvY3MvaWJjL3Byb3RvLWRvY3MubWQjcGFyYW1zLTIKICAgICAgICAgICAgYXBwLklCQ0tlZXBlci5Db25uZWN0aW9uS2VlcGVyLlNldFBhcmFtcyhjdHgsIGliY2Nvbm5lY3Rpb250eXBlcy5EZWZhdWx0UGFyYW1zKCkpCgogICAgICAgICAgICBmcm9tVk0gOj0gbWFwW3N0cmluZ111aW50NjR7CiAgICAgICAgICAgICAgICAuLi4gLy8gb3RoZXIgbW9kdWxlcwogICAgICAgICAgICAgICAgJnF1b3Q7aWJjJnF1b3Q7OiAgICAgICAgICAxLAogICAgICAgICAgICAgICAgLi4uIAogICAgICAgICAgICB9ICAgCiAgICAgICAgICAgIHJldHVybiBhcHAubW0uUnVuTWlncmF0aW9ucyhjdHgsIGFwcC5jb25maWd1cmF0b3IsIGZyb21WTSkKICAgICAgICB9KSAgICAgIAoK"}}),e._v(" "),t("h3",{attrs:{id:"genesis-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-migrations"}},[e._v("#")]),e._v(" Genesis Migrations")]),e._v(" "),t("p",[e._v("To perform genesis migrations, the following code must be added to your existing migration code.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYWRkIGltcG9ydHMgYXMgbmVjZXNzYXJ5CmltcG9ydCAoCiAgICBpYmN2MTAwICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2liYy1nby9tb2R1bGVzL2NvcmUvbGVnYWN5L3YxMDAmcXVvdDsKICAgIGliY2hvc3QgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL21vZHVsZXMvY29yZS8yNC1ob3N0JnF1b3Q7CikKCi4uLgoKLy8gYWRkIGluIG1pZ3JhdGUgY21kIGZ1bmN0aW9uCi8vIGV4cGVjdGVkVGltZVBlckJsb2NrIGlzIGEgbmV3IGNvbm5lY3Rpb24gcGFyYW1ldGVyCi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL2Jsb2IvcmVsZWFzZS92MS4wLngvZG9jcy9pYmMvcHJvdG8tZG9jcy5tZCNwYXJhbXMtMgpuZXdHZW5TdGF0ZSwgZXJyID0gaWJjdjEwMC5NaWdyYXRlR2VuZXNpcyhuZXdHZW5TdGF0ZSwgY2xpZW50Q3R4LCAqZ2VuRG9jLCBleHBlY3RlZFRpbWVQZXJCbG9jaykKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyIAp9Cg=="}}),e._v(" "),t("p",[t("strong",[e._v("NOTE:")]),e._v(" The genesis chain-id, time and height MUST be updated before migrating IBC, otherwise the tendermint consensus state will not be pruned.")]),e._v(" "),t("h2",{attrs:{id:"ibc-keeper-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-keeper-changes"}},[e._v("#")]),e._v(" IBC Keeper Changes")]),e._v(" "),t("p",[e._v("The IBC Keeper now takes in the Upgrade Keeper. Please add the chains' Upgrade Keeper after the Staking Keeper:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ICAgICAgICAvLyBDcmVhdGUgSUJDIEtlZXBlcgogICAgICAgIGFwcC5JQkNLZWVwZXIgPSBpYmNrZWVwZXIuTmV3S2VlcGVyKAotICAgICAgICAgICAgICAgYXBwQ29kZWMsIGtleXNbaWJjaG9zdC5TdG9yZUtleV0sIGFwcC5HZXRTdWJzcGFjZShpYmNob3N0Lk1vZHVsZU5hbWUpLCBhcHAuU3Rha2luZ0tlZXBlciwgc2NvcGVkSUJDS2VlcGVyLAorICAgICAgICAgICAgICAgYXBwQ29kZWMsIGtleXNbaWJjaG9zdC5TdG9yZUtleV0sIGFwcC5HZXRTdWJzcGFjZShpYmNob3N0Lk1vZHVsZU5hbWUpLCBhcHAuU3Rha2luZ0tlZXBlciwgYXBwLlVwZ3JhZGVLZWVwZXIsIHNjb3BlZElCQ0tlZXBlciwKICAgICAgICApCgo="}}),e._v(" "),t("h2",{attrs:{id:"proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[e._v("#")]),e._v(" Proposals")]),e._v(" "),t("h3",{attrs:{id:"updateclientproposal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updateclientproposal"}},[e._v("#")]),e._v(" UpdateClientProposal")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("UpdateClient")]),e._v(" has been modified to take in two client-identifiers and one initial height. Please see the "),t("RouterLink",{attrs:{to:"/ibc/proposals.html"}},[e._v("documentation")]),e._v(" for more information.")],1),e._v(" "),t("h3",{attrs:{id:"upgradeproposal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgradeproposal"}},[e._v("#")]),e._v(" UpgradeProposal")]),e._v(" "),t("p",[e._v("A new IBC proposal type has been added, "),t("code",[e._v("UpgradeProposal")]),e._v(". This handles an IBC (breaking) Upgrade.\nThe previous "),t("code",[e._v("UpgradedClientState")]),e._v(" field in an Upgrade "),t("code",[e._v("Plan")]),e._v(" has been deprecated in favor of this new proposal type.")]),e._v(" "),t("h3",{attrs:{id:"proposal-handler-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposal-handler-registration"}},[e._v("#")]),e._v(" Proposal Handler Registration")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("ClientUpdateProposalHandler")]),e._v(" has been renamed to "),t("code",[e._v("ClientProposalHandler")]),e._v(".\nIt handles both "),t("code",[e._v("UpdateClientProposal")]),e._v("s and "),t("code",[e._v("UpgradeProposal")]),e._v("s.")]),e._v(" "),t("p",[e._v("Add this import:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"KyAgICAgICBpYmNjbGllbnR0eXBlcyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9pYmMtZ28vbW9kdWxlcy9jb3JlLzAyLWNsaWVudC90eXBlcyZxdW90Owo="}}),e._v(" "),t("p",[e._v("Please ensure the governance module adds the correct route:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"LSAgICAgICAgICAgICAgIEFkZFJvdXRlKGliY2hvc3QuUm91dGVyS2V5LCBpYmNjbGllbnQuTmV3Q2xpZW50VXBkYXRlUHJvcG9zYWxIYW5kbGVyKGFwcC5JQkNLZWVwZXIuQ2xpZW50S2VlcGVyKSkKKyAgICAgICAgICAgICAgIEFkZFJvdXRlKGliY2NsaWVudHR5cGVzLlJvdXRlcktleSwgaWJjY2xpZW50Lk5ld0NsaWVudFByb3Bvc2FsSGFuZGxlcihhcHAuSUJDS2VlcGVyLkNsaWVudEtlZXBlcikpCg=="}}),e._v(" "),t("p",[e._v("NOTE: Simapp registration was incorrect in the 0.41.x releases. The "),t("code",[e._v("UpdateClient")]),e._v(" proposal handler should be registered with the router key belonging to "),t("code",[e._v("ibc-go/core/02-client/types")]),e._v("\nas shown in the diffs above.")]),e._v(" "),t("h3",{attrs:{id:"proposal-cli-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposal-cli-registration"}},[e._v("#")]),e._v(" Proposal CLI Registration")]),e._v(" "),t("p",[e._v("Please ensure both proposal type CLI commands are registered on the governance module by adding the following arguments to "),t("code",[e._v("gov.NewAppModuleBasic()")]),e._v(":")]),e._v(" "),t("p",[e._v("Add the following import:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"KyAgICAgICBpYmNjbGllbnRjbGllbnQgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL21vZHVsZXMvY29yZS8wMi1jbGllbnQvY2xpZW50JnF1b3Q7Cg=="}}),e._v(" "),t("p",[e._v("Register the cli commands:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff ",base64:"ICAgICAgIGdvdi5OZXdBcHBNb2R1bGVCYXNpYygKICAgICAgICAgICAgIHBhcmFtc2NsaWVudC5Qcm9wb3NhbEhhbmRsZXIsIGRpc3RyY2xpZW50LlByb3Bvc2FsSGFuZGxlciwgdXBncmFkZWNsaWVudC5Qcm9wb3NhbEhhbmRsZXIsIHVwZ3JhZGVjbGllbnQuQ2FuY2VsUHJvcG9zYWxIYW5kbGVyLAorICAgICAgICAgICAgaWJjY2xpZW50Y2xpZW50LlVwZGF0ZUNsaWVudFByb3Bvc2FsSGFuZGxlciwgaWJjY2xpZW50Y2xpZW50LlVwZ3JhZGVQcm9wb3NhbEhhbmRsZXIsCiAgICAgICApLAo="}}),e._v(" "),t("p",[e._v("REST routes are not supported for these proposals.")]),e._v(" "),t("h2",{attrs:{id:"proto-file-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proto-file-changes"}},[e._v("#")]),e._v(" Proto file changes")]),e._v(" "),t("p",[e._v("The gRPC querier service endpoints have changed slightly. The previous files used "),t("code",[e._v("v1beta1")]),e._v(" gRPC route, this has been updated to "),t("code",[e._v("v1")]),e._v(".")]),e._v(" "),t("p",[e._v("The solo machine has replaced the FrozenSequence uint64 field with a IsFrozen boolean field. The package has been bumped from "),t("code",[e._v("v1")]),e._v(" to "),t("code",[e._v("v2")])]),e._v(" "),t("h2",{attrs:{id:"ibc-callback-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-callback-changes"}},[e._v("#")]),e._v(" IBC callback changes")]),e._v(" "),t("h3",{attrs:{id:"onrecvpacket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onrecvpacket"}},[e._v("#")]),e._v(" OnRecvPacket")]),e._v(" "),t("p",[e._v("Application developers need to update their "),t("code",[e._v("OnRecvPacket")]),e._v(" callback logic.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("OnRecvPacket")]),e._v(" callback has been modified to only return the acknowledgement. The acknowledgement returned must implement the "),t("code",[e._v("Acknowledgement")]),e._v(" interface. The acknowledgement should indicate if it represents a successful processing of a packet by returning true on "),t("code",[e._v("Success()")]),e._v(" and false in all other cases. A return value of false on "),t("code",[e._v("Success()")]),e._v(" will result in all state changes which occurred in the callback being discarded. More information can be found in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/ibc/apps.md#receiving-packets",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("OnRecvPacket")]),e._v(", "),t("code",[e._v("OnAcknowledgementPacket")]),e._v(", and "),t("code",[e._v("OnTimeoutPacket")]),e._v(" callbacks are now passed the "),t("code",[e._v("sdk.AccAddress")]),e._v(" of the relayer who relayed the IBC packet. Applications may use or ignore this information.")]),e._v(" "),t("h2",{attrs:{id:"ibc-event-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-event-changes"}},[e._v("#")]),e._v(" IBC Event changes")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("packet_data")]),e._v(" attribute has been deprecated in favor of "),t("code",[e._v("packet_data_hex")]),e._v(", in order to provide standardized encoding/decoding of packet data in events. While the "),t("code",[e._v("packet_data")]),e._v(" event still exists, all relayers and IBC Event consumers are strongly encouraged to switch over to using "),t("code",[e._v("packet_data_hex")]),e._v(" as soon as possible.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("packet_ack")]),e._v(" attribute has also been deprecated in favor of "),t("code",[e._v("packet_ack_hex")]),e._v(" for the same reason stated above. All relayers and IBC Event consumers are strongly encouraged to switch over to using "),t("code",[e._v("packet_ack_hex")]),e._v(" as soon as possible.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("consensus_height")]),e._v(" attribute has been removed in the Misbehaviour event emitted. IBC clients no longer have a frozen height and misbehaviour does not necessarily have an associated height.")]),e._v(" "),t("h2",{attrs:{id:"relevant-sdk-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relevant-sdk-changes"}},[e._v("#")]),e._v(" Relevant SDK changes")]),e._v(" "),t("ul",[t("li",[e._v("(codec) "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/9226",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9226"),t("OutboundLink")],1),e._v(" Rename codec interfaces and methods, to follow a general Go interfaces:\n"),t("ul",[t("li",[t("code",[e._v("codec.Marshaler")]),e._v(" → "),t("code",[e._v("codec.Codec")]),e._v(" (this defines objects which serialize other objects)")]),e._v(" "),t("li",[t("code",[e._v("codec.BinaryMarshaler")]),e._v(" → "),t("code",[e._v("codec.BinaryCodec")])]),e._v(" "),t("li",[t("code",[e._v("codec.JSONMarshaler")]),e._v(" → "),t("code",[e._v("codec.JSONCodec")])]),e._v(" "),t("li",[e._v("Removed "),t("code",[e._v("BinaryBare")]),e._v(" suffix from "),t("code",[e._v("BinaryCodec")]),e._v(" methods ("),t("code",[e._v("MarshalBinaryBare")]),e._v(", "),t("code",[e._v("UnmarshalBinaryBare")]),e._v(", ...)")]),e._v(" "),t("li",[e._v("Removed "),t("code",[e._v("Binary")]),e._v(" infix from "),t("code",[e._v("BinaryCodec")]),e._v(" methods ("),t("code",[e._v("MarshalBinaryLengthPrefixed")]),e._v(", "),t("code",[e._v("UnmarshalBinaryLengthPrefixed")]),e._v(", ...)")])])])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);