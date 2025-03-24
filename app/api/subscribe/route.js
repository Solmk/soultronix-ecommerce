export async function POST(request) {
    const { email } = await request.json();
  
    // Simulate a delay for testing
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Simulate a successful subscription
    if (email) {
      return Response.json({ message: "Subscribed successfully!" });
    } else {
      return Response.json({ error: "Email is required." }, { status: 400 });
    }
  }