(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/store/composeStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComposeStore",
    ()=>useComposeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const initialState = {
    preset: undefined,
    deliverMode: undefined,
    deliverAt: undefined,
    birthdayDay: undefined,
    birthdayMonth: undefined,
    timezone: undefined,
    messageType: undefined,
    guidedMode: true,
    selectedPromptIds: [],
    textContent: undefined,
    mediaBlob: null,
    mediaPath: null,
    songTitle: null,
    songArtist: null,
    songUrl: null,
    editMessageId: null
};
const useComposeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        ...initialState,
        setDraft: (draft)=>set((state)=>({
                    ...state,
                    ...draft
                })),
        reset: ()=>set(initialState)
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = "Label";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const Select = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Select;
Select.displayName = "Select";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Select$React.forwardRef");
__turbopack_context__.k.register(_c1, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/steps/StepDelivery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepDelivery",
    ()=>StepDelivery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/composeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function StepDelivery({ onNext }) {
    _s();
    const deliverMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepDelivery.useComposeStore[deliverMode]": (s)=>s.deliverMode
    }["StepDelivery.useComposeStore[deliverMode]"]);
    const deliverAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepDelivery.useComposeStore[deliverAt]": (s)=>s.deliverAt
    }["StepDelivery.useComposeStore[deliverAt]"]);
    const birthdayDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepDelivery.useComposeStore[birthdayDay]": (s)=>s.birthdayDay
    }["StepDelivery.useComposeStore[birthdayDay]"]);
    const birthdayMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepDelivery.useComposeStore[birthdayMonth]": (s)=>s.birthdayMonth
    }["StepDelivery.useComposeStore[birthdayMonth]"]);
    const timezone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepDelivery.useComposeStore": (s)=>s.timezone
    }["StepDelivery.useComposeStore"]) ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
    const setDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepDelivery.useComposeStore[setDraft]": (s)=>s.setDraft
    }["StepDelivery.useComposeStore[setDraft]"]);
    const handleMode = (mode)=>{
        setDraft({
            deliverMode: mode
        });
        if (mode === "date" && !deliverAt) {
            const d = new Date();
            d.setFullYear(d.getFullYear() + 1);
            setDraft({
                deliverAt: d.toISOString().slice(0, 16)
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        children: "Delivery mode"
                    }, void 0, false, {
                        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: deliverMode === "date" ? "default" : "outline",
                                onClick: ()=>handleMode("date"),
                                children: "Specific date"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: deliverMode === "birthday" ? "default" : "outline",
                                onClick: ()=>handleMode("birthday"),
                                children: "Birthday"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            deliverMode === "date" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "deliverAt",
                        children: "Delivery date & time"
                    }, void 0, false, {
                        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "deliverAt",
                        type: "datetime-local",
                        value: deliverAt ? deliverAt.slice(0, 16) : "",
                        onChange: (e)=>setDraft({
                                deliverAt: e.target.value ? new Date(e.target.value).toISOString() : undefined
                            }),
                        min: new Date().toISOString().slice(0, 16)
                    }, void 0, false, {
                        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            deliverMode === "birthday" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "bday-month",
                                children: "Month"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                id: "bday-month",
                                value: birthdayMonth ?? "",
                                onChange: (e)=>setDraft({
                                        birthdayMonth: e.target.value ? Number(e.target.value) : undefined
                                    }),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    MONTHS.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: i + 1,
                                            children: m
                                        }, m, false, {
                                            fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "bday-day",
                                children: "Day"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "bday-day",
                                type: "number",
                                min: 1,
                                max: 31,
                                placeholder: "1–31",
                                value: birthdayDay ?? "",
                                onChange: (e)=>setDraft({
                                        birthdayDay: e.target.value ? Number(e.target.value) : undefined
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "timezone",
                        children: "Timezone"
                    }, void 0, false, {
                        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "timezone",
                        value: timezone,
                        onChange: (e)=>setDraft({
                                timezone: e.target.value
                            }),
                        readOnly: true,
                        className: "bg-muted"
                    }, void 0, false, {
                        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                onClick: onNext,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepDelivery.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compose/steps/StepDelivery.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(StepDelivery, "rahW9HoJR/uaBkqUtW4OuuXWO28=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"]
    ];
});
_c = StepDelivery;
var _c;
__turbopack_context__.k.register(_c, "StepDelivery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/steps/StepMessageType.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepMessageType",
    ()=>StepMessageType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/composeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StepMessageType({ onNext }) {
    _s();
    const messageType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepMessageType.useComposeStore[messageType]": (s)=>s.messageType
    }["StepMessageType.useComposeStore[messageType]"]);
    const setDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepMessageType.useComposeStore[setDraft]": (s)=>s.setDraft
    }["StepMessageType.useComposeStore[setDraft]"]);
    const types = [
        {
            id: "text",
            label: "Text",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"]
        },
        {
            id: "audio",
            label: "Audio (max 2:00)",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"]
        },
        {
            id: "video",
            label: "Video (max 1:30)",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "How do you want to send your message?"
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepMessageType.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                children: types.map(({ id, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: messageType === id ? "default" : "outline",
                        className: "h-auto flex flex-col gap-2 py-6",
                        onClick: ()=>setDraft({
                                messageType: id
                            }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-8 w-8"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepMessageType.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepMessageType.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, id, true, {
                        fileName: "[project]/components/compose/steps/StepMessageType.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepMessageType.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                onClick: onNext,
                disabled: !messageType,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepMessageType.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compose/steps/StepMessageType.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(StepMessageType, "xi562HYRtiJB63SXCJ/7D7/yIVk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"]
    ];
});
_c = StepMessageType;
var _c;
__turbopack_context__.k.register(_c, "StepMessageType");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, checked = false, onCheckedChange, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50", checked ? "bg-foreground" : "bg-muted", className),
        onClick: ()=>onCheckedChange?.(!checked),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform", checked ? "translate-x-5" : "translate-x-1")
        }, void 0, false, {
            fileName: "[project]/components/ui/switch.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/switch.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Switch;
Switch.displayName = "Switch";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/steps/StepGuidedToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepGuidedToggle",
    ()=>StepGuidedToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/composeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StepGuidedToggle({ onNext }) {
    _s();
    const guidedMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepGuidedToggle.useComposeStore[guidedMode]": (s)=>s.guidedMode
    }["StepGuidedToggle.useComposeStore[guidedMode]"]);
    const setDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepGuidedToggle.useComposeStore[setDraft]": (s)=>s.setDraft
    }["StepGuidedToggle.useComposeStore[setDraft]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between rounded-lg border border-border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "guided",
                                className: "text-base font-medium",
                                children: "Guided mode"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepGuidedToggle.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: "Show prompts while recording so you know what to talk about."
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepGuidedToggle.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compose/steps/StepGuidedToggle.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                        id: "guided",
                        checked: guidedMode ?? true,
                        onCheckedChange: (v)=>setDraft({
                                guidedMode: v
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/compose/steps/StepGuidedToggle.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/steps/StepGuidedToggle.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                onClick: onNext,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepGuidedToggle.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compose/steps/StepGuidedToggle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(StepGuidedToggle, "vJaHk7OrrX/u4k4NQ8iAvmHYXk4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"]
    ];
});
_c = StepGuidedToggle;
var _c;
__turbopack_context__.k.register(_c, "StepGuidedToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/steps/StepPrompts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepPrompts",
    ()=>StepPrompts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/composeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MIN_SELECT = 3;
const MAX_SELECT = 6;
function StepPrompts({ onNext }) {
    _s();
    const guidedMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepPrompts.useComposeStore[guidedMode]": (s)=>s.guidedMode
    }["StepPrompts.useComposeStore[guidedMode]"]);
    const selectedPromptIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepPrompts.useComposeStore": (s)=>s.selectedPromptIds
    }["StepPrompts.useComposeStore"]) ?? [];
    const setDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepPrompts.useComposeStore[setDraft]": (s)=>s.setDraft
    }["StepPrompts.useComposeStore[setDraft]"]);
    const [prompts, setPrompts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepPrompts.useEffect": ()=>{
            supabase.from("prompts").select("id, category, time_horizon, intensity, text").then({
                "StepPrompts.useEffect": ({ data })=>{
                    setPrompts(data ?? []);
                    setLoading(false);
                }
            }["StepPrompts.useEffect"]);
        }
    }["StepPrompts.useEffect"], [
        supabase
    ]);
    const toggle = (id)=>{
        const next = selectedPromptIds.includes(id) ? selectedPromptIds.filter((p)=>p !== id) : selectedPromptIds.length < MAX_SELECT ? [
            ...selectedPromptIds,
            id
        ] : selectedPromptIds;
        setDraft({
            selectedPromptIds: next
        });
    };
    if (!guidedMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Guided mode is off. Skip to your message."
                }, void 0, false, {
                    fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    onClick: onNext,
                    children: "Next"
                }, void 0, false, {
                    fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/compose/steps/StepPrompts.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-muted-foreground",
        children: "Loading prompts…"
    }, void 0, false, {
        fileName: "[project]/components/compose/steps/StepPrompts.tsx",
        lineNumber: 47,
        columnNumber: 23
    }, this);
    const byCategory = prompts.reduce((acc, p)=>{
        (acc[p.category] = acc[p.category] ?? []).push(p);
        return acc;
    }, {});
    const canNext = selectedPromptIds.length >= MIN_SELECT && selectedPromptIds.length <= MAX_SELECT;
    const estMinutes = Math.ceil(selectedPromptIds.length * 15 / 60);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: [
                    "Pick 3–6 prompts. We’ll show them like a teleprompter while you record. (~",
                    estMinutes,
                    " min total)"
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: Object.entries(byCategory).map(([category, list])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-medium text-foreground mb-2",
                                children: category
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: list.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggle(p.id),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md border px-3 py-2 text-left text-sm transition-colors", selectedPromptIds.includes(p.id) ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/50"),
                                        children: p.text
                                    }, p.id, false, {
                                        fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, category, true, {
                        fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: [
                    "Selected: ",
                    selectedPromptIds.length,
                    " / ",
                    MAX_SELECT
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                onClick: onNext,
                disabled: !canNext,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepPrompts.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compose/steps/StepPrompts.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(StepPrompts, "jLpZVLNraNABWBsiZYq/2ioB1qc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"]
    ];
});
_c = StepPrompts;
var _c;
__turbopack_context__.k.register(_c, "StepPrompts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border border-border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/Teleprompter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Teleprompter",
    ()=>Teleprompter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const INTERVAL_MIN = 12;
const INTERVAL_MAX = 18;
function Teleprompter({ prompts, isRecording }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Teleprompter.useEffect": ()=>{
            if (!isRecording || prompts.length === 0) return;
            const delay = (INTERVAL_MIN + Math.random() * (INTERVAL_MAX - INTERVAL_MIN)) * 1000;
            const t = setTimeout({
                "Teleprompter.useEffect.t": ()=>{
                    setIndex({
                        "Teleprompter.useEffect.t": (i)=>(i + 1) % prompts.length
                    }["Teleprompter.useEffect.t"]);
                }
            }["Teleprompter.useEffect.t"], delay);
            return ({
                "Teleprompter.useEffect": ()=>clearTimeout(t)
            })["Teleprompter.useEffect"];
        }
    }["Teleprompter.useEffect"], [
        isRecording,
        index,
        prompts.length
    ]);
    if (prompts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[4rem] flex items-center justify-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -8
                },
                transition: {
                    duration: 0.4
                },
                className: "text-center text-lg text-foreground max-w-lg",
                children: prompts[index]?.text
            }, prompts[index]?.id ?? index, false, {
                fileName: "[project]/components/compose/Teleprompter.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/compose/Teleprompter.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/compose/Teleprompter.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Teleprompter, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = Teleprompter;
var _c;
__turbopack_context__.k.register(_c, "Teleprompter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/AudioRecorder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioRecorder",
    ()=>AudioRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$Teleprompter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/Teleprompter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MAX_SECONDS = 2 * 60; // 2:00
function AudioRecorder({ onComplete, promptSnapshots, guidedMode }) {
    _s();
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MAX_SECONDS);
    const [blob, setBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mediaRecorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioRecorder.useCallback[stop]": ()=>{
            if (timer.current) clearInterval(timer.current);
            timer.current = null;
            setRecording(false);
            if (mediaRecorder.current?.state === "recording") {
                mediaRecorder.current.stop();
            }
        }
    }["AudioRecorder.useCallback[stop]"], []);
    const start = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const recorder = new MediaRecorder(stream);
            chunks.current = [];
            recorder.ondataavailable = (e)=>e.data.size && chunks.current.push(e.data);
            recorder.onstop = ()=>{
                stream.getTracks().forEach((t)=>t.stop());
                const b = new Blob(chunks.current, {
                    type: "audio/webm"
                });
                setBlob(b);
            };
            mediaRecorder.current = recorder;
            recorder.start();
            setRecording(true);
            setSecondsLeft(MAX_SECONDS);
            timer.current = setInterval(()=>{
                setSecondsLeft((s)=>{
                    if (s <= 1) {
                        stop();
                        return 0;
                    }
                    return s - 1;
                });
            }, 1000);
        } catch (err) {
            console.error(err);
        }
    };
    const format = (s)=>{
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${sec.toString().padStart(2, "0")}`;
    };
    if (blob) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Recording saved. You can go back to re-record or proceed."
                }, void 0, false, {
                    fileName: "[project]/components/compose/AudioRecorder.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    onClick: ()=>{
                        setBlob(null);
                    },
                    children: "Re-record"
                }, void 0, false, {
                    fileName: "[project]/components/compose/AudioRecorder.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    onClick: ()=>onComplete(blob),
                    children: "Use this recording"
                }, void 0, false, {
                    fileName: "[project]/components/compose/AudioRecorder.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/compose/AudioRecorder.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            guidedMode && promptSnapshots.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$Teleprompter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Teleprompter"], {
                prompts: promptSnapshots,
                isRecording: recording
            }, void 0, false, {
                fileName: "[project]/components/compose/AudioRecorder.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-mono tabular-nums",
                        children: format(secondsLeft)
                    }, void 0, false, {
                        fileName: "[project]/components/compose/AudioRecorder.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    !recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: start,
                        children: "Start recording (max 2:00)"
                    }, void 0, false, {
                        fileName: "[project]/components/compose/AudioRecorder.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "destructive",
                        onClick: stop,
                        children: "Stop"
                    }, void 0, false, {
                        fileName: "[project]/components/compose/AudioRecorder.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/AudioRecorder.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compose/AudioRecorder.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(AudioRecorder, "IJWLKiEXbr8uaFEwgVibWbSEB2o=");
_c = AudioRecorder;
var _c;
__turbopack_context__.k.register(_c, "AudioRecorder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/VideoRecorder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoRecorder",
    ()=>VideoRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$Teleprompter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/Teleprompter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MAX_SECONDS = 90; // 1:30
function VideoRecorder({ onComplete, promptSnapshots, guidedMode }) {
    _s();
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MAX_SECONDS);
    const [blob, setBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoRecorder.useCallback[stop]": ()=>{
            if (timer.current) clearInterval(timer.current);
            timer.current = null;
            setRecording(false);
            if (mediaRecorder.current?.state === "recording") {
                mediaRecorder.current.stop();
            }
            streamRef.current?.getTracks().forEach({
                "VideoRecorder.useCallback[stop]": (t)=>t.stop()
            }["VideoRecorder.useCallback[stop]"]);
        }
    }["VideoRecorder.useCallback[stop]"], []);
    const start = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });
            streamRef.current = stream;
            if (videoRef.current) videoRef.current.srcObject = stream;
            const recorder = new MediaRecorder(stream);
            chunks.current = [];
            recorder.ondataavailable = (e)=>e.data.size && chunks.current.push(e.data);
            recorder.onstop = ()=>{
                const b = new Blob(chunks.current, {
                    type: "video/webm"
                });
                setBlob(b);
            };
            mediaRecorder.current = recorder;
            recorder.start();
            setRecording(true);
            setSecondsLeft(MAX_SECONDS);
            timer.current = setInterval(()=>{
                setSecondsLeft((s)=>{
                    if (s <= 1) {
                        stop();
                        return 0;
                    }
                    return s - 1;
                });
            }, 1000);
        } catch (err) {
            console.error(err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoRecorder.useEffect": ()=>({
                "VideoRecorder.useEffect": ()=>{
                    stop();
                }
            })["VideoRecorder.useEffect"]
    }["VideoRecorder.useEffect"], [
        stop
    ]);
    const format = (s)=>{
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${sec.toString().padStart(2, "0")}`;
    };
    if (blob) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Recording saved. You can go back to re-record or proceed."
                }, void 0, false, {
                    fileName: "[project]/components/compose/VideoRecorder.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    onClick: ()=>setBlob(null),
                    children: "Re-record"
                }, void 0, false, {
                    fileName: "[project]/components/compose/VideoRecorder.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    onClick: ()=>onComplete(blob),
                    children: "Use this recording"
                }, void 0, false, {
                    fileName: "[project]/components/compose/VideoRecorder.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/compose/VideoRecorder.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            guidedMode && promptSnapshots.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$Teleprompter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Teleprompter"], {
                prompts: promptSnapshots,
                isRecording: recording
            }, void 0, false, {
                fileName: "[project]/components/compose/VideoRecorder.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-lg overflow-hidden bg-muted aspect-video max-w-lg mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        autoPlay: true,
                        muted: true,
                        playsInline: true,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/compose/VideoRecorder.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 left-2 font-mono text-white bg-black/70 px-2 py-1 rounded",
                        children: format(secondsLeft)
                    }, void 0, false, {
                        fileName: "[project]/components/compose/VideoRecorder.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/VideoRecorder.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-2",
                children: !recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    onClick: start,
                    children: "Start recording (max 1:30)"
                }, void 0, false, {
                    fileName: "[project]/components/compose/VideoRecorder.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "destructive",
                    onClick: stop,
                    children: "Stop"
                }, void 0, false, {
                    fileName: "[project]/components/compose/VideoRecorder.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/compose/VideoRecorder.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compose/VideoRecorder.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(VideoRecorder, "G1F8Tny2F+99pd4QgoVF/8k2vLI=");
_c = VideoRecorder;
var _c;
__turbopack_context__.k.register(_c, "VideoRecorder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/steps/StepRecordOrWrite.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepRecordOrWrite",
    ()=>StepRecordOrWrite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/composeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$AudioRecorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/AudioRecorder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$VideoRecorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/VideoRecorder.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function StepRecordOrWrite({ onNext }) {
    _s();
    const messageType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepRecordOrWrite.useComposeStore[messageType]": (s)=>s.messageType
    }["StepRecordOrWrite.useComposeStore[messageType]"]);
    const textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepRecordOrWrite.useComposeStore[textContent]": (s)=>s.textContent
    }["StepRecordOrWrite.useComposeStore[textContent]"]);
    const guidedMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepRecordOrWrite.useComposeStore[guidedMode]": (s)=>s.guidedMode
    }["StepRecordOrWrite.useComposeStore[guidedMode]"]);
    const selectedPromptIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepRecordOrWrite.useComposeStore": (s)=>s.selectedPromptIds
    }["StepRecordOrWrite.useComposeStore"]) ?? [];
    const setDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepRecordOrWrite.useComposeStore[setDraft]": (s)=>s.setDraft
    }["StepRecordOrWrite.useComposeStore[setDraft]"]);
    const [snapshots, setSnapshots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepRecordOrWrite.useEffect": ()=>{
            if (selectedPromptIds.length === 0) {
                setSnapshots([]);
                return;
            }
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            supabase.from("prompts").select("id, text").in("id", selectedPromptIds).then({
                "StepRecordOrWrite.useEffect": ({ data })=>{
                    setSnapshots((data ?? []).map({
                        "StepRecordOrWrite.useEffect": (p)=>({
                                id: p.id,
                                text: p.text
                            })
                    }["StepRecordOrWrite.useEffect"]));
                }
            }["StepRecordOrWrite.useEffect"]);
        }
    }["StepRecordOrWrite.useEffect"], [
        selectedPromptIds
    ]);
    if (messageType === "text") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "textContent",
                            children: "Your message"
                        }, void 0, false, {
                            fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            id: "textContent",
                            className: "flex min-h-[200px] w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            placeholder: "Write anything you want your future self to read…",
                            value: textContent ?? "",
                            onChange: (e)=>setDraft({
                                    textContent: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                textContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "bg-muted/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm whitespace-pre-wrap",
                            children: textContent
                        }, void 0, false, {
                            fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-foreground text-background hover:bg-foreground/90",
                    onClick: onNext,
                    children: "Next"
                }, void 0, false, {
                    fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    if (messageType === "audio") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$AudioRecorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioRecorder"], {
                promptSnapshots: snapshots,
                guidedMode: guidedMode ?? true,
                onComplete: (blob)=>{
                    setDraft({
                        mediaBlob: blob
                    });
                    onNext();
                }
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    if (messageType === "video") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$VideoRecorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoRecorder"], {
                promptSnapshots: snapshots,
                guidedMode: guidedMode ?? true,
                onComplete: (blob)=>{
                    setDraft({
                        mediaBlob: blob
                    });
                    onNext();
                }
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-muted-foreground",
        children: "Select a message type in the previous step."
    }, void 0, false, {
        fileName: "[project]/components/compose/steps/StepRecordOrWrite.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(StepRecordOrWrite, "hWtOftYvWzZL2bbbQh7f9NqwJ6M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"]
    ];
});
_c = StepRecordOrWrite;
var _c;
__turbopack_context__.k.register(_c, "StepRecordOrWrite");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/steps/StepSong.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepSong",
    ()=>StepSong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/composeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StepSong({ onNext }) {
    _s();
    const songTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepSong.useComposeStore[songTitle]": (s)=>s.songTitle
    }["StepSong.useComposeStore[songTitle]"]);
    const songArtist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepSong.useComposeStore[songArtist]": (s)=>s.songArtist
    }["StepSong.useComposeStore[songArtist]"]);
    const songUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepSong.useComposeStore[songUrl]": (s)=>s.songUrl
    }["StepSong.useComposeStore[songUrl]"]);
    const setDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepSong.useComposeStore[setDraft]": (s)=>s.setDraft
    }["StepSong.useComposeStore[setDraft]"]);
    const handleUrl = (url)=>{
        setDraft({
            songUrl: url || null
        });
        if (!url) {
            setDraft({
                songTitle: null,
                songArtist: null
            });
            return;
        }
        setDraft({
            songTitle: null,
            songArtist: null
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "Optional: add a song that reminds you of this moment. We’ll store the link only (no playback in-app). Paste a Spotify or Apple Music URL."
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepSong.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "songUrl",
                        children: "Song URL"
                    }, void 0, false, {
                        fileName: "[project]/components/compose/steps/StepSong.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "songUrl",
                        type: "url",
                        placeholder: "https://open.spotify.com/track/… or https://music.apple.com/…",
                        value: songUrl ?? "",
                        onChange: (e)=>handleUrl(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/compose/steps/StepSong.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/steps/StepSong.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "songTitle",
                                children: "Song title (optional)"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepSong.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "songTitle",
                                value: songTitle ?? "",
                                onChange: (e)=>setDraft({
                                        songTitle: e.target.value || null
                                    }),
                                placeholder: "Title"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepSong.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compose/steps/StepSong.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "songArtist",
                                children: "Artist (optional)"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepSong.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "songArtist",
                                value: songArtist ?? "",
                                onChange: (e)=>setDraft({
                                        songArtist: e.target.value || null
                                    }),
                                placeholder: "Artist"
                            }, void 0, false, {
                                fileName: "[project]/components/compose/steps/StepSong.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compose/steps/StepSong.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compose/steps/StepSong.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                onClick: onNext,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepSong.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compose/steps/StepSong.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(StepSong, "LCXj3onGTdlm+NS4E0uWlzLYVOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"]
    ];
});
_c = StepSong;
var _c;
__turbopack_context__.k.register(_c, "StepSong");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateSongUrl",
    ()=>validateSongUrl,
    "validateTextContent",
    ()=>validateTextContent
]);
const MAX_TEXT_LENGTH = 50_000;
const ALLOWED_SONG_HOSTS = [
    "open.spotify.com",
    "music.apple.com",
    "spotify.com",
    "apple.co"
];
function validateTextContent(text) {
    if (text == null || text === "") return "Message content is required for text type.";
    if (text.length > MAX_TEXT_LENGTH) return `Text must be under ${MAX_TEXT_LENGTH} characters.`;
    return null;
}
function validateSongUrl(url) {
    if (!url) return null;
    try {
        const u = new URL(url);
        const ok = ALLOWED_SONG_HOSTS.some((h)=>u.hostname === h || u.hostname.endsWith(`.${h}`));
        if (!ok) return "Please use a Spotify or Apple Music link.";
    } catch  {
        return "Invalid URL.";
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/steps/StepReview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepReview",
    ()=>StepReview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/composeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function StepReview({ onSuccess }) {
    _s();
    const deliverMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[deliverMode]": (s)=>s.deliverMode
    }["StepReview.useComposeStore[deliverMode]"]);
    const deliverAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[deliverAt]": (s)=>s.deliverAt
    }["StepReview.useComposeStore[deliverAt]"]);
    const birthdayDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[birthdayDay]": (s)=>s.birthdayDay
    }["StepReview.useComposeStore[birthdayDay]"]);
    const birthdayMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[birthdayMonth]": (s)=>s.birthdayMonth
    }["StepReview.useComposeStore[birthdayMonth]"]);
    const timezone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[timezone]": (s)=>s.timezone
    }["StepReview.useComposeStore[timezone]"]);
    const messageType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[messageType]": (s)=>s.messageType
    }["StepReview.useComposeStore[messageType]"]);
    const textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[textContent]": (s)=>s.textContent
    }["StepReview.useComposeStore[textContent]"]);
    const selectedPromptIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[selectedPromptIds]": (s)=>s.selectedPromptIds
    }["StepReview.useComposeStore[selectedPromptIds]"]);
    const guidedMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[guidedMode]": (s)=>s.guidedMode
    }["StepReview.useComposeStore[guidedMode]"]);
    const songTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[songTitle]": (s)=>s.songTitle
    }["StepReview.useComposeStore[songTitle]"]);
    const songArtist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[songArtist]": (s)=>s.songArtist
    }["StepReview.useComposeStore[songArtist]"]);
    const songUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[songUrl]": (s)=>s.songUrl
    }["StepReview.useComposeStore[songUrl]"]);
    const mediaBlob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[mediaBlob]": (s)=>s.mediaBlob
    }["StepReview.useComposeStore[mediaBlob]"]);
    const editMessageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "StepReview.useComposeStore[editMessageId]": (s)=>s.editMessageId
    }["StepReview.useComposeStore[editMessageId]"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    // #region agent log
    const renders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    renders.current += 1;
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "development" && renders.current > 40) {
        fetch("http://127.0.0.1:7245/ingest/f8e7f2d9-6acb-412e-aa62-ecdc1a46b856", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                location: "StepReview.tsx",
                message: "runaway renders",
                data: {
                    count: renders.current,
                    deliverMode,
                    messageType
                },
                timestamp: Date.now(),
                sessionId: "debug-session",
                hypothesisId: "H1-primitive",
                runId: "post-fix"
            })
        }).catch(()=>{});
    }
    // #endregion
    const deliverAtDisplay = deliverMode === "birthday" ? birthdayDay != null && birthdayMonth != null ? `Your birthday (${birthdayMonth}/${birthdayDay})` : "Birthday (set month/day)" : deliverAt ? new Date(deliverAt).toLocaleString() : "—";
    const handleConfirm = async ()=>{
        setLoading(true);
        setError(null);
        const textErr = messageType === "text" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateTextContent"])(textContent) : null;
        const songErr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSongUrl"])(songUrl);
        if (textErr || songErr) {
            setError(textErr ?? songErr ?? null);
            setLoading(false);
            return;
        }
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setError("Not signed in");
                setLoading(false);
                return;
            }
            let deliverAtDate;
            if (deliverMode === "birthday" && birthdayDay != null && birthdayMonth != null) {
                const now = new Date();
                let y = now.getFullYear();
                let d = new Date(y, birthdayMonth - 1, birthdayDay);
                if (d <= now) d = new Date(y + 1, birthdayMonth - 1, birthdayDay);
                deliverAtDate = d.toISOString();
            } else if (deliverAt) {
                deliverAtDate = new Date(deliverAt).toISOString();
            } else {
                setError("Set delivery date");
                setLoading(false);
                return;
            }
            const prompts = (selectedPromptIds ?? []).map((id)=>({
                    id,
                    text: ""
                }));
            const payload = {
                type: messageType ?? "text",
                text_content: messageType === "text" ? textContent ?? null : null,
                deliver_at: deliverAtDate,
                deliver_mode: deliverMode ?? "date",
                birthday_day: birthdayDay ?? null,
                birthday_month: birthdayMonth ?? null,
                timezone: timezone ?? null,
                guided_mode: guidedMode ?? true,
                selected_prompts: prompts,
                song_title: songTitle ?? null,
                song_artist: songArtist ?? null,
                song_url: songUrl ?? null
            };
            let messageId;
            if (editMessageId) {
                const { error: updateErr } = await supabase.from("messages").update(payload).eq("id", editMessageId).eq("user_id", user.id);
                if (updateErr) {
                    setError(updateErr.message);
                    setLoading(false);
                    return;
                }
                messageId = editMessageId;
                if (mediaBlob) {
                    const ext = "webm";
                    const path = `${user.id}/${messageId}/media.${ext}`;
                    const { error: uploadErr } = await supabase.storage.from("capsule-media").upload(path, mediaBlob, {
                        upsert: true
                    });
                    if (!uploadErr) {
                        await supabase.from("messages").update({
                            media_path: path
                        }).eq("id", messageId);
                    }
                }
            } else {
                const { data: msg, error: insertErr } = await supabase.from("messages").insert({
                    user_id: user.id,
                    ...payload,
                    media_path: null,
                    status: "scheduled"
                }).select("id").single();
                if (insertErr) {
                    setError(insertErr.message);
                    setLoading(false);
                    return;
                }
                messageId = msg.id;
                if (mediaBlob) {
                    const ext = "webm";
                    const path = `${user.id}/${messageId}/media.${ext}`;
                    const { error: uploadErr } = await supabase.storage.from("capsule-media").upload(path, mediaBlob, {
                        upsert: true
                    });
                    if (uploadErr) {
                        setError(uploadErr.message);
                        setLoading(false);
                        return;
                    }
                    await supabase.from("messages").update({
                        media_path: path
                    }).eq("id", messageId);
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"].getState().reset();
            onSuccess();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Something went wrong");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-muted/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 space-y-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Delivery:"
                                }, void 0, false, {
                                    fileName: "[project]/components/compose/steps/StepReview.tsx",
                                    lineNumber: 158,
                                    columnNumber: 14
                                }, this),
                                " ",
                                deliverAtDisplay
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compose/steps/StepReview.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Type:"
                                }, void 0, false, {
                                    fileName: "[project]/components/compose/steps/StepReview.tsx",
                                    lineNumber: 159,
                                    columnNumber: 14
                                }, this),
                                " ",
                                messageType ?? "—"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compose/steps/StepReview.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Guided prompts:"
                                }, void 0, false, {
                                    fileName: "[project]/components/compose/steps/StepReview.tsx",
                                    lineNumber: 160,
                                    columnNumber: 14
                                }, this),
                                " ",
                                (selectedPromptIds ?? []).length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compose/steps/StepReview.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Song link:"
                                }, void 0, false, {
                                    fileName: "[project]/components/compose/steps/StepReview.tsx",
                                    lineNumber: 161,
                                    columnNumber: 14
                                }, this),
                                " ",
                                songUrl ? "Yes" : "No"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compose/steps/StepReview.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compose/steps/StepReview.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepReview.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepReview.tsx",
                lineNumber: 164,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleConfirm,
                disabled: loading,
                children: loading ? "Saving…" : "Confirm & save"
            }, void 0, false, {
                fileName: "[project]/components/compose/steps/StepReview.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compose/steps/StepReview.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_s(StepReview, "dLeTwmRkgoccaSTSCY5TBIxwg4E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"]
    ];
});
_c = StepReview;
var _c;
__turbopack_context__.k.register(_c, "StepReview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compose/ComposerStepper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComposerStepper",
    ()=>ComposerStepper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/composeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepDelivery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/steps/StepDelivery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepMessageType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/steps/StepMessageType.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepGuidedToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/steps/StepGuidedToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepPrompts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/steps/StepPrompts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepRecordOrWrite$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/steps/StepRecordOrWrite.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepSong$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/steps/StepSong.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepReview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/steps/StepReview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const STEPS = [
    {
        id: "delivery",
        title: "When to deliver"
    },
    {
        id: "type",
        title: "Message type"
    },
    {
        id: "guided",
        title: "Guided mode"
    },
    {
        id: "prompts",
        title: "Prompts"
    },
    {
        id: "content",
        title: "Your message"
    },
    {
        id: "song",
        title: "Nostalgia song"
    },
    {
        id: "review",
        title: "Review"
    }
];
function ComposerStepper() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const setDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"])({
        "ComposerStepper.useComposeStore[setDraft]": (s)=>s.setDraft
    }["ComposerStepper.useComposeStore[setDraft]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComposerStepper.useEffect": ()=>{
            const presetParam = searchParams.get("preset");
            if (presetParam && [
                "1y",
                "5y",
                "10y",
                "custom",
                "birthday"
            ].includes(presetParam)) {
                setDraft({
                    preset: presetParam
                });
            }
            const editId = searchParams.get("edit");
            if (editId) {
                setDraft({
                    editMessageId: editId
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])().from("messages").select("*").eq("id", editId).single().then({
                    "ComposerStepper.useEffect": ({ data })=>{
                        if (data) {
                            setDraft({
                                deliverMode: data.deliver_mode,
                                deliverAt: data.deliver_at,
                                birthdayDay: data.birthday_day,
                                birthdayMonth: data.birthday_month,
                                timezone: data.timezone ?? undefined,
                                messageType: data.type,
                                guidedMode: data.guided_mode,
                                selectedPromptIds: (data.selected_prompts ?? []).map({
                                    "ComposerStepper.useEffect": (p)=>p.id
                                }["ComposerStepper.useEffect"]),
                                textContent: data.text_content ?? undefined,
                                mediaPath: data.media_path ?? null,
                                songTitle: data.song_title ?? null,
                                songArtist: data.song_artist ?? null,
                                songUrl: data.song_url ?? null
                            });
                        }
                    }
                }["ComposerStepper.useEffect"]);
            }
        }
    }["ComposerStepper.useEffect"], [
        searchParams,
        setDraft
    ]);
    const step = STEPS[stepIndex];
    const canNext = stepIndex < STEPS.length - 1;
    const canPrev = stepIndex > 0;
    const goNext = ()=>{
        if (canNext) setStepIndex((i)=>i + 1);
    };
    const goPrev = ()=>{
        if (canPrev) setStepIndex((i)=>i - 1);
    };
    const onReviewSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComposerStepper.useCallback[onReviewSuccess]": ()=>{
            router.push("/inbox");
        }
    }["ComposerStepper.useCallback[onReviewSuccess]"], [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container max-w-2xl py-8 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg",
                            children: [
                                "Step ",
                                stepIndex + 1,
                                ": ",
                                step.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 mt-2",
                            children: STEPS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setStepIndex(i),
                                    className: `h-1.5 flex-1 rounded-full transition-colors ${i <= stepIndex ? "bg-foreground" : "bg-muted"}`,
                                    "aria-label": `Go to step ${i + 1}`
                                }, s.id, false, {
                                    fileName: "[project]/components/compose/ComposerStepper.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compose/ComposerStepper.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-6",
                    children: [
                        step.id === "delivery" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepDelivery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepDelivery"], {
                            onNext: goNext
                        }, void 0, false, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 103,
                            columnNumber: 38
                        }, this),
                        step.id === "type" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepMessageType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepMessageType"], {
                            onNext: goNext
                        }, void 0, false, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 104,
                            columnNumber: 34
                        }, this),
                        step.id === "guided" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepGuidedToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepGuidedToggle"], {
                            onNext: goNext
                        }, void 0, false, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 105,
                            columnNumber: 36
                        }, this),
                        step.id === "prompts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepPrompts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepPrompts"], {
                            onNext: goNext
                        }, void 0, false, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 106,
                            columnNumber: 37
                        }, this),
                        step.id === "content" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepRecordOrWrite$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepRecordOrWrite"], {
                            onNext: goNext
                        }, void 0, false, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 107,
                            columnNumber: 37
                        }, this),
                        step.id === "song" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepSong$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepSong"], {
                            onNext: goNext
                        }, void 0, false, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 108,
                            columnNumber: 34
                        }, this),
                        step.id === "review" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$steps$2f$StepReview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepReview"], {
                            onSuccess: onReviewSuccess
                        }, void 0, false, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 109,
                            columnNumber: 36
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: goPrev,
                                    disabled: !canPrev,
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/components/compose/ComposerStepper.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                step.id !== "review" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    onClick: goNext,
                                    disabled: !canNext,
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/components/compose/ComposerStepper.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compose/ComposerStepper.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compose/ComposerStepper.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/compose/ComposerStepper.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/compose/ComposerStepper.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(ComposerStepper, "aaqbDTOkvm0Ba87lGMVuNzxDPP8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$composeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeStore"]
    ];
});
_c = ComposerStepper;
var _c;
__turbopack_context__.k.register(_c, "ComposerStepper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/compose/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComposePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$ComposerStepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compose/ComposerStepper.tsx [app-client] (ecmascript)");
"use client";
;
;
function ComposePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compose$2f$ComposerStepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposerStepper"], {}, void 0, false, {
        fileName: "[project]/app/compose/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = ComposePage;
var _c;
__turbopack_context__.k.register(_c, "ComposePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_77f234a0._.js.map