import { eq } from "drizzle-orm";
import { db } from "@/db";
import { code as codeModel, usedLog } from "@/db/schema";

export async function verifyEnterCode(code: string): Promise<boolean> {
  const result = await db
    .select()
    .from(codeModel)
    .where(eq(codeModel.code, code));

  if (result.length === 0) return false;
  return result[0].code !== "";
}

export async function recordEnterCode(code: string) {
  await db.insert(usedLog).values({ code });
}
