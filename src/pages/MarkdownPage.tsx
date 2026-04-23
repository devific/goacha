import { motion } from "motion/react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import Layout from "@/components/layout/Layout";

type Props = {
  title: string;
  content: string;
};

export default function MarkdownPage({ title, content }: Props) {
  return (
    <Layout>
      <SEO title={`${title} | Goacha Kombucha`} />
      <div className="bg-white text-stone-900 w-full flex flex-col pt-24 pb-12">
        <div className="flex-1 max-w-3xl mx-auto px-6 w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-stone-900/60 hover:text-stone-900 transition-colors mb-12 font-body text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-medium tracking-wide uppercase mb-12 text-stone-900">
              {title}
            </h1>

            <div className="prose prose-stone max-w-none font-body font-light text-stone-900/80 prose-headings:font-display prose-headings:font-medium prose-headings:uppercase prose-headings:tracking-wide prose-a:text-stone-900 prose-a:underline-offset-4 hover:prose-a:text-stone-900/80 prose-strong:font-medium prose-strong:text-stone-900">
              <Markdown>{content}</Markdown>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
