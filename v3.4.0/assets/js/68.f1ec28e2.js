(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{625:function(e,o,t){"use strict";t.r(o);var i=t(0),s=Object(i.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-002-go-module-versioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-002-go-module-versioning"}},[e._v("#")]),e._v(" ADR 002: Go module versioning")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("05/01/2022: initial draft")])]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("Accepted")]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("The IBC module was originally developed in the Cosmos SDK and released during with the Stargate release series (v0.42).\nIt was subsequently migrated to its own repository, ibc-go.\nThe first official release on ibc-go was v1.0.0.\nv1.0.0 was decided to be used instead of v0.1.0 primarily for the following reasons:")]),e._v(" "),t("ul",[t("li",[e._v("Maintaining compatibility with the IBC specification v1 requires stronger support/guarantees.")]),e._v(" "),t("li",[e._v("Using the major, minor, and patch numbers allows for easier communication of what breaking changes are included in a release.")]),e._v(" "),t("li",[e._v("The IBC module is being used by numerous high value projects which require stability.")])]),e._v(" "),t("h3",{attrs:{id:"problems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problems"}},[e._v("#")]),e._v(" Problems")]),e._v(" "),t("h4",{attrs:{id:"go-module-version-must-be-incremented"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-module-version-must-be-incremented"}},[e._v("#")]),e._v(" Go module version must be incremented")]),e._v(" "),t("p",[e._v("When a Go module is released under v1.0.0, all following releases must follow Go semantic versioning.\nThus when the go API is broken, the Go module major version "),t("strong",[e._v("must")]),e._v(" be incremented.\nFor example, changing the go package version from "),t("code",[e._v("v2")]),e._v(" to "),t("code",[e._v("v3")]),e._v(" bumps the import from "),t("code",[e._v("github.com/cosmos/ibc-go/v2")]),e._v(" to "),t("code",[e._v("github.com/cosmos/ibc-go/v3")]),e._v(".")]),e._v(" "),t("p",[e._v("If the Go module version is not incremented then attempting to go get a module @v3.0.0 without the suffix results in:\n"),t("code",[e._v("invalid version: module contains a go.mod file, so major version must be compatible: should be v0 or v1, not v3")])]),e._v(" "),t("p",[e._v("Version validation was added in Go 1.13. This means is that in order to release a v3.0.0 git tag without a /v3 suffix on the module definition, the tag must explicitly "),t("strong",[e._v("not")]),e._v(" contain a go.mod file.\nNot including a go.mod in our release is not a viable option.")]),e._v(" "),t("h4",{attrs:{id:"attempting-to-import-multiple-go-module-versions-for-ibc-go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attempting-to-import-multiple-go-module-versions-for-ibc-go"}},[e._v("#")]),e._v(" Attempting to import multiple go module versions for ibc-go")]),e._v(" "),t("p",[e._v("Attempting to import two versions of ibc-go, such as "),t("code",[e._v("github.com/cosmos/ibc-go/v2")]),e._v(" and "),t("code",[e._v("github.com/cosmos/ibc-go/v3")]),e._v(", will result in multiple issues.")]),e._v(" "),t("p",[e._v("The Cosmos SDK does global registration of error and governance proposal types.\nThe errors and proposals used in ibc-go would need to now register their naming based on the go module version.")]),e._v(" "),t("p",[e._v("The more concerning problem is that protobuf definitions will also reach a namespace collision.\nibc-go and the Cosmos SDK in general rely heavily on using extended functions for go structs generated from protobuf definitions.\nThis requires the go structs to be defined in the same package as the extended functions.\nThus, bumping the import versioning causes the protobuf definitions to be generated in two places (in v2 and v3).\nWhen registering these types at compile time, the go compiler will panic.\nThe generated types need to be registered against the proto codec, but there exist two definitions for the same name.")]),e._v(" "),t("p",[e._v("The protobuf conflict policy can be overriden via the environment variable "),t("code",[e._v("GOLANG_PROTOBUF_REGISTRATION_CONFLICT")]),e._v(", but it is possible this could lead to various runtime errors or unexpected behaviour (see "),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf-go/blob/master/reflect/protoregistry/registry.go#L46",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(").\nMore information "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/reference/go/faq#namespace-conflict",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" on namespace conflicts for protobuf versioning.")]),e._v(" "),t("h3",{attrs:{id:"potential-solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#potential-solutions"}},[e._v("#")]),e._v(" Potential solutions")]),e._v(" "),t("h4",{attrs:{id:"changing-the-protobuf-definition-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-protobuf-definition-version"}},[e._v("#")]),e._v(" Changing the protobuf definition version")]),e._v(" "),t("p",[e._v("The protobuf definitions all have a type URL containing the protobuf version for this type.\nChanging the protobuf version would solve the namespace collision which arise from importing multiple versions of ibc-go, but it leads to new issues.")]),e._v(" "),t("p",[e._v("In the Cosmos SDK, "),t("code",[e._v("Any")]),e._v("s are unpacked and decoded using the type URL.\nChanging the type URL thus is creating a distinctly different type.\nThe same registration on the proto codec cannot be used to unpack the new type.\nFor example:")]),e._v(" "),t("p",[e._v("All Cosmos SDK messages are packed into "),t("code",[e._v("Any")]),e._v("s. If we incremented the protobuf version for our IBC messages, clients which submitted the v1 of our Cosmos SDK messages would now be rejected since the old type is not registered on the codec.\nThe clients must know to submit the v2 of these messages. This pushes the burden of versioning onto relayers and wallets.")]),e._v(" "),t("p",[e._v("A more serious problem is that the "),t("code",[e._v("ClientState")]),e._v(" and "),t("code",[e._v("ConsensusState")]),e._v(" are packed as "),t("code",[e._v("Any")]),e._v("s. Changing the protobuf versioning of these types would break compatibility with IBC specification v1.")]),e._v(" "),t("h4",{attrs:{id:"moving-protobuf-definitions-to-their-own-go-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#moving-protobuf-definitions-to-their-own-go-module"}},[e._v("#")]),e._v(" Moving protobuf definitions to their own go module")]),e._v(" "),t("p",[e._v("The protobuf definitions could be moved to their own go module which uses 0.x versioning and will never go to 1.0.\nThis prevents the Go module version from being incremented with breaking changes.\nIt also requires all extended functions to live in the same Go module, disrupting the existing code structure.")]),e._v(" "),t("p",[e._v("The version that implements this change will still be incompatible with previous versions, but future versions could be imported together without namespace collisions.\nFor example, lets say this solution is implmented in v3. Then")]),e._v(" "),t("p",[t("code",[e._v("github.com/cosmos/ibc-go/v2")]),e._v(" cannot be imported with any other ibc-go version")]),e._v(" "),t("p",[t("code",[e._v("github.com/cosmos/ibc-go/v3")]),e._v(" cannot be imported with any previous ibc-go versions")]),e._v(" "),t("p",[t("code",[e._v("github.com/cosmos/ibc-go/v4")]),e._v(" may be imported with ibc-go versions v3+")]),e._v(" "),t("p",[t("code",[e._v("github.com/cosmos/ibc-go/v5")]),e._v(" may be imported with ibc-go versions v3+")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("Supporting importing multiple versions of ibc-go requires a non-trivial amount of complexity.\nIt is unclear when a user of the ibc-go code would need multiple versions of ibc-go.\nUntil there is an overwhelming reason to support importing multiple versions of ibc-go:")]),e._v(" "),t("p",[t("strong",[e._v("Major releases cannot be imported simultaneously")]),e._v(".\nReleases should focus on keeping backwards compatibility for go code clients, within reason.\nOld functionality should be marked as deprecated and there should exist upgrade paths between major versions.\nDeprecated functionality may be removed when no clients rely on that functionality.\nHow this is determined is to be decided.")]),e._v(" "),t("p",[t("strong",[e._v("Error and proposal type registration will not be changed between go module version increments")]),e._v(".\nThis explicitly stops external clients from trying to import two major versions (potentially risking a bug due to the instability of proto name collisions override).")]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("p",[e._v("This only affects clients relying directly on the go code.")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("p",[e._v("Multiple ibc-go versions cannot be imported.")]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")])])}),[],!1,null,null,null);o.default=s.exports}}]);