import { motion } from "motion/react"
import Markdown from "react-markdown"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

type Props = {
  title: string
  content: string
}

export default function MarkdownPage({ title, content }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A08] text-[#F2EDE4] overflow-y-auto w-full">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#F2EDE4]/60 hover:text-[#F2EDE4] transition-colors mb-12 font-body text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-light tracking-wide uppercase mb-12 text-[#F2EDE4]">
            {title}
          </h1>
          
          <div className="prose prose-invert prose-stone max-w-none font-body font-light text-[#F2EDE4]/80 prose-headings:font-display prose-headings:font-light prose-headings:uppercase prose-headings:tracking-wide prose-a:text-[#F2EDE4] prose-a:underline-offset-4 hover:prose-a:text-white prose-strong:font-medium prose-strong:text-[#F2EDE4]">
            <Markdown>{content}</Markdown>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
