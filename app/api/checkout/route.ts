import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY as string
const pricePro = process.env.STRIPE_PRICE_PRO as string
const priceEmpresa = process.env.STRIPE_PRICE_EMPRESA as string
const successUrl = process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL || 'http://localhost:3000/success'
const cancelUrl = process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL || 'http://localhost:3000/pricing'

if (!stripeSecretKey) {
  console.warn('STRIPE_SECRET_KEY is not set')
}

const stripe = new Stripe(stripeSecretKey || '', {
  apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json()
    const priceId = plan === 'pro' ? pricePro : plan === 'empresa' ? priceEmpresa : null

    if (!priceId) {
      return NextResponse.json({ error: 'PriceId not found for plan' }, { status: 400 })
    }

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
  } catch (err: any) {
    console.error('Stripe checkout error', err)
    return NextResponse.json({ error: err.message || 'Unexpected error' }, { status: 500 })
  }
}


