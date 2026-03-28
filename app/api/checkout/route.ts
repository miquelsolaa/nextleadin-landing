import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { z } from 'zod'

const checkoutBodySchema = z.object({
  plan: z.enum(['pro', 'empresa']),
})

const stripeSecretKey = process.env.STRIPE_SECRET_KEY ?? ''
const pricePro = process.env.STRIPE_PRICE_PRO ?? ''
const priceEmpresa = process.env.STRIPE_PRICE_EMPRESA ?? ''
const successUrl = process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL || 'http://localhost:3000/success'
const cancelUrl = process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL || 'http://localhost:3000/pricing'

function getStripe(): Stripe | null {
  if (!stripeSecretKey) return null
  return new Stripe(stripeSecretKey, {
    apiVersion: '2024-06-20',
  })
}

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    if (!stripeSecretKey || !pricePro || !priceEmpresa) {
      console.error('Stripe env vars missing in production')
      return NextResponse.json({ error: 'Checkout is temporarily unavailable.' }, { status: 503 })
    }
  }

  const stripe = getStripe()
  if (!stripe) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('STRIPE_SECRET_KEY is not set')
    }
    return NextResponse.json({ error: 'Checkout is not configured.' }, { status: 503 })
  }

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = checkoutBodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid plan.' }, { status: 400 })
  }

  const { plan } = parsed.data
  const priceId = plan === 'pro' ? pricePro : priceEmpresa

  if (!priceId) {
    return NextResponse.json({ error: 'Invalid plan.' }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      automatic_tax: { enabled: true },
    })

    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    console.error('Stripe checkout error', err)
    return NextResponse.json(
      { error: 'Could not start checkout. Please try again later.' },
      { status: 500 },
    )
  }
}
