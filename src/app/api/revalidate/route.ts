import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  if (!cookieStore.has("adminAuth")) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { paths } = await request.json();
  for (const path of paths ?? ["/", "/services", "/realisations"]) {
    revalidatePath(path);
  }
  return NextResponse.json({ revalidated: true });
}
