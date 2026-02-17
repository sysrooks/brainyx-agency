import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brainyx | AI Agency - Chatbots, Automation & AI Agents",
  description: "Brainyx is a cutting-edge AI agency specializing in intelligent chatbots, workflow automation, and autonomous AI agents. Transform your business with AI.",
  keywords: "AI agency, chatbots, automation, AI agents, machine learning, artificial intelligence, business automation",
  openGraph: {
    title: "Brainyx | AI Agency",
    description: "Transform your business with intelligent AI solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased noise">
        {children}
      </body>
    </html>
  );
}
