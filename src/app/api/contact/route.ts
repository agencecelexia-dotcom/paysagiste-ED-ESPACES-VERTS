import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { clientConfig } from "@/config/client.config";
import { createClient } from "@/lib/supabase";

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

    // Save to Supabase
    const supabase = createClient();
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      first_name: result.data.firstName,
      last_name: result.data.lastName,
      email: result.data.email,
      phone: result.data.phone,
      service_type: result.data.serviceType,
      project_description: result.data.projectDescription,
      budget: result.data.budget,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
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
