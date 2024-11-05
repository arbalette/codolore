return new Response(await nginx(), {
  status: 200, // Set the HTTP status code (e.g., 200 for success)
  headers: { 'Content-Type': 'application/json' } // Set the response headers
});
