import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { cart } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cart.map(
        (item: {
          name: string;
          image: string;
          price: number;
          quantity: number;
        }) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [item.image],
            },
            unit_amount: item.price * 100, // Convert dollars to cents
          },
          quantity: item.quantity,
        })
      ),
      mode: "payment",
      success_url: `${req.nextUrl.origin}/success`,
      cancel_url: `${req.nextUrl.origin}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err: unknown) {
    console.error("Error creating checkout session:", err);
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Unknown error occurred" },
      { status: 500 }
    );
  }
}
