import { NextRequest, NextResponse } from "next/server";
import client from "../../../db/index";

export async function GET() {
  const user = await client.user.findFirst();

  return Response.json({
    name: user?.name,
    email: user?.email,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const user = await client.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  console.log(user.id);

  return NextResponse.json({
    message: "Succesfully added user details",
  });
}
