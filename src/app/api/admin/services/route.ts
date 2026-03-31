import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createAdminClient } from "@/lib/supabase";
import { serviceFromRow, serviceToRow } from "@/lib/supabase-helpers";

async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.get("adminAuth")?.value === "true" || cookieStore.has("adminAuth");
}

export async function GET() {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("order", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, data: (data ?? []).map(serviceFromRow) });
}

export async function POST(request: NextRequest) {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const body = await request.json();
  const supabase = createAdminClient();

  if (body.action === "delete") {
    const { error } = await supabase.from("services").delete().eq("id", body.id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  }

  const row = serviceToRow(body.data);
  const { error } = await supabase.from("services").upsert(row);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
