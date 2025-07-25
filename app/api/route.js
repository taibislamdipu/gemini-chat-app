// app/api/gemini/route.js

export async function POST(request) {
  const body = await request.json();
  const { message } = body;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    const data = await geminiRes.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    return Response.json({ reply });
  } catch (error) {
    console.error("Gemini API error:", error);
    return Response.json(
      { error: "Failed to fetch response from Gemini" },
      { status: 500 }
    );
  }
}
