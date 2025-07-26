// /app/api/problem/mark-solved/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { problemId } = await req.json();

  try {
    await db.problem.update({
      where: { id: problemId },
      data: {
        solved: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({ message: "Problem marked as solved" }, { status: 200 });
  } catch (e) {
    console.error("Error updating solved count", e);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
