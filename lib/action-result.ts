export type ActionResult<T = void> =
  | { ok: true; data: T }
  | { ok: false; error: { message: string; code?: string } };

export function ok<T>(data: T): ActionResult<T> {
  return { ok: true, data };
}

export function fail(message: string, code?: string): ActionResult<never> {
  return { ok: false, error: { message, code } };
}
