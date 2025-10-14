import Vapi from "@vapi-ai/web";

if (!process.env.NEXT_PUBLIC_VAPI_API_KEY) {
  console.warn("⚠️ Missing NEXT_PUBLIC_VAPI_API_KEY");
}

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
