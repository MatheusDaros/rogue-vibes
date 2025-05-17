import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  }
  const client = await clientPromise.connect();
  const usersCollection = client.db().collection("users");
  const existing = await usersCollection.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: "Email already in use" }, { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await usersCollection.insertOne({ email, hashedPassword, name: name || email, createdAt: new Date() });
  return NextResponse.json({ success: true });
}
