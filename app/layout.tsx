import "./globals.css";
import { seoConfig } from "../src/lib/seo";
import ThemeProviders from "../src/components/themeProvider";

export const metadata = {
  metadataBase: new URL(seoConfig.site.url),
  title: {
    default: seoConfig.site.title,
    template: "%s | Rushikesh Kadepurkar",
  },
  description: seoConfig.site.description,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}