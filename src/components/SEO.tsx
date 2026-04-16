import { Helmet } from "react-helmet-async";
import { IMAGEKIT_BASE_URL } from "@/lib/constants";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
}

export function SEO({
  title = "Goacha Kombucha | Not Soda. Not Boring.",
  description = "Handcrafted Kombucha made in Goa. Naturally fermented, gently fizzy, and full of character. Three flavours. Three moods. Taste the culture.",
  image = `${IMAGEKIT_BASE_URL}/goacha-hero-meta.jpg`,
  type = "website",
  url = "https://goacha.in",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
