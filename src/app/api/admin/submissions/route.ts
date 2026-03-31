import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createAdminClient } from "@/lib/supabase";

async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.get("adminAuth")?.value === "true" || cookieStore.has("adminAuth");
}

export async function GET() {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const submissions = (data ?? []).map((row) => ({
    id: row.id,
    name: `${row.first_name} ${row.last_name}`,
    email: row.email,
    phone: row.phone,
    service: row.service_type,
    subject: `${row.service_type} — ${row.budget}`,
    message: row.project_description,
    location: "",
    date: new Date(row.created_at).toLocaleDateString("fr-FR"),
    time: new Date(row.created_at).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
    status: row.status,
  }));

  return NextResponse.json({ success: true, data: submissions });
}

export async function PATCH(request: NextRequest) {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { id, status } = await request.json();
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("contact_submissions")
    .update({ status })
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
