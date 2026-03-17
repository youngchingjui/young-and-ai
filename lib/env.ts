function required(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

export const NEXT_PUBLIC_STRIPE_1DAY_LINK = required("NEXT_PUBLIC_STRIPE_1DAY_LINK")
export const NEXT_PUBLIC_STRIPE_1WEEK_LINK = required("NEXT_PUBLIC_STRIPE_1WEEK_LINK")
export const NEXT_PUBLIC_STRIPE_1MONTH_LINK = required("NEXT_PUBLIC_STRIPE_1MONTH_LINK")
export const NEXT_PUBLIC_CALENDLY_LINK = required("NEXT_PUBLIC_CALENDLY_LINK")
