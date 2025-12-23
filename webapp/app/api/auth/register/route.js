import bcrypt from "bcryptjs";
import { openDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { password, ...user } = await req.json();
  const db = await openDb();

  const password_hash = await bcrypt.hash(password, 10);

  await db.run(
    `
    INSERT INTO users (
      firstname, lastname, duprid, email, password_hash,
      solo_level, doubles_level, sex, city, club, birthdate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      user.firstname,
      user.lastname,
      user.duprid,
      user.email,
      password_hash,
      user.solo_level,
      user.doubles_level,
      user.sex,
      user.city,
      user.club,
      user.birthdate,
    ]
  );

  return NextResponse.json({ success: true }, { status: 201 });
}
