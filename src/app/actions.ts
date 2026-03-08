"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'High Waisted Cafe <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@HighWaistedCafe.com',
      replyTo: email,
      subject: `New Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      message: "Thank you for your message! We'll get back to you soon.",
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      message: "Failed to send message. Please try again.",
      success: false,
      errors: {},
    };
  }
}
