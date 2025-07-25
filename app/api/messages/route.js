import { connectMongo } from "@/dbConnect/connectMongo";
import Message from "@/models/Message";

export async function POST(req) {
  try {
    await connectMongo();

    const body = await req.json();
    const { text, conversationId } = body;

    if (!text || !conversationId) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const newMessage = await Message.create({
      text,
      sender: "user",
      conversationId,
    });

    return new Response(JSON.stringify(newMessage), { status: 201 });
  } catch (error) {
    console.error("Error saving message:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
