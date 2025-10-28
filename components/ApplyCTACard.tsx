"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ApplyCTACard({ mailto, className = "" }: { mailto?: string; className?: string }) {
  const emailHref = mailto && mailto.trim().length > 0 ? mailto : "mailto:jobs@youngandai.com"
  const emailText = emailHref.replace(/^mailto:/i, "")

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl">Ready to apply?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Please email your CV and cover letter to{" "}
          <a href={emailHref} className="underline" aria-label={`Email ${emailText}`}>
            {emailText}
          </a>
          .
        </p>
      </CardContent>
    </Card>
  )
}

export default ApplyCTACard

