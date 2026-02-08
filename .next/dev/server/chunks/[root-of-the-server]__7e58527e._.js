module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/supabase/env.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPABASE_KEY",
    ()=>SUPABASE_KEY,
    "SUPABASE_URL",
    ()=>SUPABASE_URL,
    "getSupabaseKey",
    ()=>getSupabaseKey,
    "getSupabaseServiceRoleKey",
    ()=>getSupabaseServiceRoleKey,
    "getSupabaseUrl",
    ()=>getSupabaseUrl,
    "logSupabaseEnvCheck",
    ()=>logSupabaseEnvCheck
]);
/**
 * Supabase env validation. Throws a clear error listing missing vars.
 * Use one key: publishable (new) or anon (legacy).
 */ const URL = ("TURBOPACK compile-time value", "https://xjizkdkutjqnizqmmkvw.supabase.co");
const PUBLISHABLE = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const ANON = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqaXprZGt1dGpxbml6cW1ta3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MDQ0NDIsImV4cCI6MjA4NTk4MDQ0Mn0.A29vwf8q4FZDs0UPkIil8qGulkMPpVXvRudBZolls3E");
const SUPABASE_URL = URL?.trim() || null;
const SUPABASE_KEY = (PUBLISHABLE ?? ANON)?.trim() ?? null;
function getSupabaseUrl() {
    if (!SUPABASE_URL) {
        const missing = [
            "NEXT_PUBLIC_SUPABASE_URL"
        ];
        throw new Error(`Supabase URL is required. Missing env: ${missing.join(", ")}. Set them in .env.local at project root.`);
    }
    return SUPABASE_URL;
}
function getSupabaseKey() {
    if (!SUPABASE_KEY) {
        const missing = [
            ...("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [],
            ...("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : []
        ];
        if (missing.length === 0) missing.push("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY");
        throw new Error(`Supabase key is required. Missing or empty env: ${missing.join(", ")}. Set them in .env.local at project root.`);
    }
    return SUPABASE_KEY;
}
function logSupabaseEnvCheck() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // eslint-disable-next-line no-console
    console.log("[Supabase env check]", {
        hasUrl: Boolean(SUPABASE_URL),
        hasKey: Boolean(SUPABASE_KEY)
    });
}
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
function getSupabaseServiceRoleKey() {
    if (!SERVICE_ROLE) {
        throw new Error("Supabase service role key is required. Missing env: SUPABASE_SERVICE_ROLE_KEY. Set it in .env.local at project root (server-side only).");
    }
    return SERVICE_ROLE;
}
}),
"[project]/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/env.ts [middleware] (ecmascript)");
;
;
;
const protectedPaths = [
    "/compose",
    "/inbox"
];
const authPaths = [
    "/login",
    "/signup"
];
const GET_CLAIMS_TIMEOUT_MS = 3000;
const RETRY_DELAY_MS = 200;
function genRid() {
    return `rid_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
function isTransientError(e) {
    const msg = String(e?.message ?? e).toLowerCase();
    const cause = e?.cause;
    const causeMsg = cause ? String(cause?.message ?? cause).toLowerCase() : "";
    return msg.includes("econnreset") || msg.includes("fetch failed") || msg.includes("network") || msg.includes("timeout") || causeMsg.includes("econnreset") || causeMsg.includes("fetch failed");
}
function withTimeout(promise, ms) {
    return new Promise((resolve, reject)=>{
        const t = setTimeout(()=>reject(new Error("getClaims timeout")), ms);
        promise.then((v)=>{
            clearTimeout(t);
            resolve(v);
        }, (err)=>{
            clearTimeout(t);
            reject(err);
        });
    });
}
async function proxy(request) {
    const rid = genRid();
    const path = request.nextUrl.pathname;
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request
    });
    let url;
    let key;
    try {
        url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getSupabaseUrl"])();
        key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getSupabaseKey"])();
    } catch (e) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[proxy] Supabase env missing, skipping auth:", e.message);
        }
        return response;
    }
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createServerClient"])(url, key, {
        cookies: {
            getAll () {
                return request.cookies.getAll();
            },
            setAll (cookiesToSet) {
                cookiesToSet.forEach(({ name, value, options })=>{
                    request.cookies.set(name, value);
                    response.cookies.set(name, value, options);
                });
            }
        }
    });
    let user = null;
    const start = Date.now();
    const runGetClaims = async ()=>{
        await withTimeout(supabase.auth.getClaims(), GET_CLAIMS_TIMEOUT_MS);
        const { data } = await supabase.auth.getUser();
        return data.user;
    };
    try {
        try {
            user = await runGetClaims();
        } catch (firstErr) {
            user = null;
            if (isTransientError(firstErr)) {
                await new Promise((r)=>setTimeout(r, RETRY_DELAY_MS));
                try {
                    user = await runGetClaims();
                } catch  {
                    user = null;
                }
            }
        }
    } catch (e) {
        if ("TURBOPACK compile-time truthy", 1) {
            const duration = Date.now() - start;
            const code = e?.cause ? String(e.cause) : e?.message;
            console.warn(`[proxy] getClaims failed path=${path} rid=${rid} duration=${duration}ms`, code ?? e);
        }
        return response;
    }
    if (("TURBOPACK compile-time value", "development") === "development" && path !== "/_next/webpack-hmr" && !path.startsWith("/_next")) {
        const duration = Date.now() - start;
        if (duration > 500) {
            console.info(`[proxy] getClaims slow path=${path} rid=${rid} duration=${duration}ms`);
        }
    }
    const isProtected = protectedPaths.some((p)=>path.startsWith(p));
    const isAuthPage = authPaths.some((p)=>path.startsWith(p));
    if (isProtected && !user) {
        const redirect = new URL("/", request.url);
        redirect.searchParams.set("signin", "1");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirect);
    }
    if (isAuthPage && user) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/inbox", request.url));
    }
    return response;
}
const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|assets|fonts|auth/callback|api).*)"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e58527e._.js.map