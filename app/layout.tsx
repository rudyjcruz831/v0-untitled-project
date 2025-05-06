import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Apartment Listings Dashboard",
  description: "A dashboard for managing apartment listings",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://apis.google.com/js/platform.js"
          strategy="beforeInteractive"
        />
        <Script id="google-signin-init" strategy="afterInteractive">
          {`
            function initGoogleSignIn() {
              gapi.load('auth2', function() {
                gapi.auth2.init({
                  client_id: '${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}',
                  scope: 'email profile',
                  prompt: 'select_account'
                }).then(
                  function() {
                    console.log('Google Sign-In initialized successfully');
                  },
                  function(error) {
                    console.error('Error initializing Google Sign-In:', error);
                  }
                );
              });
            }
            window.onload = initGoogleSignIn;
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
