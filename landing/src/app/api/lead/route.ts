import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Gmail SMTP Transport 설정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_ID,
      to: process.env.GMAIL_ID, // 본인의 이메일로 받음
      replyTo: body.email,      // 답장 시 제출자의 이메일로 바로 가도록 설정
      subject: `[새로운 상담 문의] ${body.name}님으로부터`,
      html: `
        <h2>신규 상담 신청이 도착했습니다.</h2>
        <p><strong>이름:</strong> ${body.name}</p>
        <p><strong>이메일:</strong> ${body.email}</p>
        <p><strong>소속 기관:</strong> ${body.organization || "입력 안 함"}</p>
        <p><strong>자동화 희망 내용:</strong></p>
        <p>${body.use_case ? body.use_case.replace(/\n/g, '<br/>') : "입력 안 함"}</p>
        <hr/>
        <p><small>제출 시간: ${new Date().toLocaleString("ko-KR")}</small></p>
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    console.log("[Lead Email Sent]", body.email);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
