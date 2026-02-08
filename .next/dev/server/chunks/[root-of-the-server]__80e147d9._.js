module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/supabase/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/env.ts [app-route] (ecmascript)");
;
;
;
async function createClient() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logSupabaseEnvCheck"])();
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSupabaseUrl"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSupabaseKey"])(), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // Server Component – ignore
                }
            }
        }
    });
}
}),
"[project]/app/auth/callback/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
const DEBUG_ENDPOINT = "http://127.0.0.1:7245/ingest/f8e7f2d9-6acb-412e-aa62-ecdc1a46b856";
function debugLog(data) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    fetch(DEBUG_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...data,
            timestamp: Date.now(),
            sessionId: "debug-session"
        })
    }).catch(()=>{});
}
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    // #region agent log
    debugLog({
        location: "auth/callback/route.ts",
        message: "callback hit",
        data: {
            hasCode: !!code
        },
        hypothesisId: "H2-callback"
    });
    // #endregion
    if (!code) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login?error=oauth_callback_failed", request.url));
    }
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        // #region agent log
        debugLog({
            location: "auth/callback/route.ts",
            message: "exchange result",
            data: {
                error: error?.message ?? null
            },
            hypothesisId: "H2-callback"
        });
        // #endregion
        if (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login?error=oauth_callback_failed", request.url));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/inbox", request.url));
    } catch (e) {
        debugLog({
            location: "auth/callback/route.ts",
            message: "exchange threw",
            data: {
                err: String(e.message)
            },
            hypothesisId: "H2-callback"
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login?error=oauth_callback_failed", request.url));
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__80e147d9._.js.map