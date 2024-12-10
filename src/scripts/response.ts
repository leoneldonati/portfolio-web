type ResponseStatus = 400 | 401 | 404 | 500;
export const res = (payload: object, status: ResponseStatus | null = null) =>
  new Response(JSON.stringify(payload), {
    status: status ?? 200,
    headers: { "Content-Type": "application/json" },
  });
