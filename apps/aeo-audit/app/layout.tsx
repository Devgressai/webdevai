import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ShellLayoutClient } from "../components/ShellLayoutClient";
import { requireAuditAuth } from "../lib/auth";
import { getRubricVersionString } from "../lib/utils/versioning";

export const metadata: Metadata = {
  title: "Search & AI Readiness Audit",
  description: "Internal console for running Search & AI Readiness scans.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  // Stub auth – wiring in real auth can replace this later.
  await requireAuditAuth();

  const environment = process.env.NODE_ENV ?? "unknown";
  const rubricVersion = getRubricVersionString();

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </head>
      <body>
        <ShellLayoutClient environment={environment} rubricVersion={rubricVersion}>
          {children}
        </ShellLayoutClient>
      </body>
    </html>
  );
}


