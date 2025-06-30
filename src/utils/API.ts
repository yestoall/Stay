//· API (headers/response) ·
// handle errors for api routes

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  "Access-Control-Allow-Headers": "*",
  // "Access-Control-Allow-Headers": "Origin,Content-Type,Accept,Authorization",
  "Content-Type": "application/json",
}

export const done = (data: object) =>
  new Response(
    JSON.stringify({
      success: true,
      data,
    }),
    {
      status: 200,
      headers: corsHeaders,
    }
  )

export const doneCache = (data: object, time: number) =>
  new Response(
    JSON.stringify({
      success: true,
      data,
      createdAt: new Date().toISOString(),
    }),
    {
      headers: {
        ...corsHeaders,
        "Cache-Control": `public, max-age=${time}`,
      },
    }
  )

export const error = (error: string, errorData?: any) =>
  new Response(
    JSON.stringify({
      success: false,
      error,
      errorData,
      createdAt: new Date().toISOString(),
    }),
    {
      status: 500,
      headers: corsHeaders,
    }
  )

export const badRequest = (error: string) =>
  new Response(JSON.stringify({ success: false, error }), {
    status: 400,
    headers: corsHeaders,
  })
