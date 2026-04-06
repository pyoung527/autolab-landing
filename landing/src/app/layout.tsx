import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "연구 자동화 솔루션 | 실험실 자동화 전문",
  description:
    "반복 실험 데이터 수집, 야근, 휴먼 에러를 없애세요. 연구자를 위한 실험실 자동화 솔루션. 지금 무료 진단을 받아보세요.",
  keywords: "연구 자동화, 실험실 자동화, 데이터 수집 자동화, 계측 장비 연동",
  openGraph: {
    title: "연구 자동화 솔루션 | 딸깍, 끝납니다.",
    description: "당신의 실험을 자동화하는 데 집중합니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Google Analytics Scripts */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
