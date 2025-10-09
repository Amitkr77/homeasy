import Script from "next/script";
import React from "react";

function Googleanalytics() {
  return (
    <>
      {/* Load the Google Analytics library */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2EPGEPDGXQ"
        strategy="afterInteractive"
      />

      {/* Initialize Google Analytics properly */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2EPGEPDGXQ');
        `}
      </Script>
    </>
  );
}

export default Googleanalytics;
