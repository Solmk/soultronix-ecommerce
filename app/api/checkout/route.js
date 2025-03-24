import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/** @type {import('next').NextApiHandler} */
export async function POST(req) {
  try {
    const body = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body.lineItems,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/checkout",
    });

    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
    });
  } catch (error) {
    console.error("Stripe Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
}
