import Script from "next/script";

const GA_TRACKING_ID = "G-QB5CJF54HE";

export default function GoogleAnalytics() {
  // Only load in production
  return process.env.NODE_ENV === "production" ? (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  ) : null;
} 