export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const response = await fetch(
      "https://api-public.cs-prod.leetify.com/v3/profile/?steam64_id=76561198796329485",
      {
        headers: {
          Authorization: `Bearer ${env.LEETIFY_API_KEY}`
        }
      }
    );

    return new Response(await response.text(), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      }
    });
  }
}
