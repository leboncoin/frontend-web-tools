"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAliasModule({ moduleName }) {
    return moduleName.startsWith("$");
}
function isStyle({ moduleName }) {
    return moduleName.endsWith(".scss") || moduleName.endsWith(".css");
}
function default_1(styleApi) {
    const { and, dotSegmentCount, hasNoMember, isAbsoluteModule, isNodeModule, isRelativeModule, member, not, naturally } = styleApi;
    // @ts-ignore
    return [
        // import "foo" with side effects
        { match: and(hasNoMember, isAbsoluteModule) },
        { separator: true },
        // import "./foo" with side effects
        { match: and(hasNoMember, isRelativeModule) },
        { separator: true },
        // import … from "fs";
        {
            match: and(isNodeModule, not(isAliasModule)),
            sort: member(naturally)
        },
        { separator: false },
        // import … from "foo";
        {
            match: and(isAbsoluteModule, not(isAliasModule)),
            sort: member(naturally)
        },
        { separator: true },
        // import … from "$src/";
        {
            match: isAliasModule,
            sort: member(naturally)
        },
        { separator: true },
        // import … from "./foo";
        // import … from "../foo";
        {
            match: and(isRelativeModule, not(isStyle)),
            sort: [dotSegmentCount, member(naturally)]
        },
        { separator: false },
        // import … from "./styles";
        {
            match: isStyle
        },
        { separator: true }
    ];
}
exports.default = default_1;
