module.exports = [
"[project]/lib/supabase/env.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/env.ts [app-rsc] (ecmascript)");
;
;
;
async function createClient() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logSupabaseEnvCheck"])();
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseUrl"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseKey"])(), {
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
"[project]/lib/action-result.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fail",
    ()=>fail,
    "ok",
    ()=>ok
]);
function ok(data) {
    return {
        ok: true,
        data
    };
}
function fail(message, code) {
    return {
        ok: false,
        error: {
            message,
            code
        }
    };
}
}),
"[project]/app/inbox/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40c1938adbeb3277282e6e523f69c769672846e16a":"deleteCapsule"},"",""] */ __turbopack_context__.s([
    "deleteCapsule",
    ()=>deleteCapsule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2d$result$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/action-result.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function deleteCapsule(id) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2d$result$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])("Not signed in", "UNAUTHORIZED");
        const { error } = await supabase.from("messages").delete().eq("id", id).eq("user_id", user.id);
        if (error) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2d$result$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])(error.message, "DB_ERROR");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/inbox");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2d$result$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(undefined);
    } catch (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2d$result$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fail"])(e instanceof Error ? e.message : "Delete failed", "UNKNOWN");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    deleteCapsule
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCapsule, "40c1938adbeb3277282e6e523f69c769672846e16a", null);
}),
"[project]/.next-internal/server/app/inbox/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/inbox/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/inbox/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/inbox/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/inbox/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40c1938adbeb3277282e6e523f69c769672846e16a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCapsule"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$inbox$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$inbox$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/inbox/page/actions.js { ACTIONS_MODULE0 => "[project]/app/inbox/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$inbox$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/inbox/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_c60054d1._.js.map