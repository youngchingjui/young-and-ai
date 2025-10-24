"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

type MarkdownProps = {
  content: string
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div
      className={cn(
        // Use Tailwind Typography to ensure consistent, readable defaults
        "prose max-w-none",
        // Align colors and weights with our site styles
        "prose-headings:text-card-foreground prose-headings:font-semibold",
        "prose-p:text-muted-foreground prose-li:text-muted-foreground",
        "prose-strong:text-card-foreground",
        // Headings scale similar to our UI
        "prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl",
        // Links follow primary color and underline on hover
        "prose-a:text-primary hover:prose-a:underline",
        className
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

