import { db } from "@/drizzle/db";
import { UsersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function upsertUser(user: typeof UsersTable.$inferInsert) {
  await db
    .insert(UsersTable)
    .values(user)
    .onConflictDoUpdate({
      target: [UsersTable.id],
      set: user,
    });
}

export async function deleteUser(userId: string) {
  await db.delete(UsersTable).where(eq(UsersTable.id, userId));
}
