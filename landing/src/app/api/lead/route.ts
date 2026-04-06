import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  email: string;
  organization?: string;
  use_case?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "이름과 이메일은 필수입니다." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "올바른 이메일 형식이 아닙니다." },
        { status: 400 }
      );
    }

    // TODO: integrate with CRM / email service (e.g. Resend, HubSpot)
    console.log("[Lead]", {
      name: body.name,
      email: body.email,
      organization: body.organization ?? "",
      use_case: body.use_case ?? "",
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
