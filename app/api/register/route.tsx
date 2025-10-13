import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, password, email } = body;

  console.log("Register Data:", firstName, lastName, email, password);
  return NextResponse.json({ message: "Register Received" });
}
