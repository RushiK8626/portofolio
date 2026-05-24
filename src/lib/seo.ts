export const seoConfig = {
  site: {
    title: "Rushikesh Kadepurkar | Software Builder & Creative Technologist",
    description:
      "Full-stack developer specializing in real-time web applications, networking protocols, and creative technical solutions.",
    url: "https://rushikeshkadepurkar.com",
    image: "https://rushikeshkadepurkar.com/og-image.png",
    twitterHandle: "@rushikesh",
  },
  pages: {
    home: {
      title: "Rushikesh Kadepurkar | Software Builder & Creative Technologist",
      description:
        "Crafting elegant solutions from real-time web apps to low-level networking protocols.",
      keywords: [
        "Software Developer",
        "Web Developer",
        "React",
        "Node.js",
        "Networking",
        "C++",
        "Full Stack",
      ],
    },
  },
};

export function buildMetadata(page = "home") {
  const pageConfig = seoConfig.pages[page];
  const { site } = seoConfig;

  return {
    metadataBase: new URL(site.url),
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    alternates: {
      canonical: "/",
    },
    authors: [{ name: "Rushikesh Kadepurkar" }],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: site.url,
      title: pageConfig.title,
      description: pageConfig.description,
      images: [
        {
          url: site.image,
          width: 1200,
          height: 630,
          alt: "Rushikesh Kadepurkar Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: site.twitterHandle,
      title: pageConfig.title,
      description: pageConfig.description,
      images: [site.image],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}