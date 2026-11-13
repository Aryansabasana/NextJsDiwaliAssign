import type { Metadata } from "next";
import "./globals.css";

export const metadata : Metadata = {
  title : {
    default : "Received | Billing Management",
    template : "%s | Received"
  },
  description : "Manage customers, subscriptions, invoices and payments with Received.",
  applicationName : "Received",
};

export default function RootLayout({
  children,
} : Readonly < {
  children : React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}