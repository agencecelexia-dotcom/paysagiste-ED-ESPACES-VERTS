import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { clientConfig } from "@/config/client.config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides", details: result.error.issues },
        { status: 400 }
      );
    }

    // Forward to n8n webhook if configured
    if (clientConfig.N8N_WEBHOOK) {
      await fetch(clientConfig.N8N_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: `https://${clientConfig.DOMAINE}`,
        },
        body: JSON.stringify(result.data),
      });
    } else {
      // Fallback: log locally when webhook not configured
      console.log("Nouvelle demande de contact:", result.data);
    }

    return NextResponse.json(
      { message: "Demande envoyée avec succès" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
