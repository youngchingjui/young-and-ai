"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function ApplyCTACard({ mailto, className = "" }: { mailto: string; className?: string }) {
  const [isWeChatBrowser, setIsWeChatBrowser] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const ua = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : ""
      // WeChat browser typically includes "micromessenger" in UA
      const isWeChat = ua.includes("micromessenger")
      setIsWeChatBrowser(isWeChat)
    } catch {
      setIsWeChatBrowser(false)
    }
  }, [])

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl">Ready to apply?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {isWeChatBrowser ? (
          <div className="text-sm text-muted-foreground">
            Please email your CV and a brief cover letter directly to
            {" "}
            <a
              href="mailto:jobs@youngandai.com"
              className="underline"
              aria-label="Email jobs@youngandai.com"
            >
              jobs@youngandai.com
            </a>
            .
            <div className="mt-2">WeChat browser may block the email button, so copy the address above and send your application from your mail app.</div>
          </div>
        ) : (
          <>
            <Button asChild className="w-full">
              <a href={mailto} aria-label="Apply via email">
                <Mail />
                Apply
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Please include your CV and a brief cover letter.
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default ApplyCTACard

