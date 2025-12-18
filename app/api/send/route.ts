import { EmailContactForm } from "@/components/email-contactform";
import { EmailConfirmation } from "@/components/email-confirmation";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    console.log("Received form data:", { name, email, message });

    // Validation des données
    if (!name || !email || !message) {
      return Response.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Envoyer les deux emails en parallèle
    const [notificationResult, confirmationResult] = await Promise.all([
      // 1. Email de notification pour vous
      resend.emails.send({
        from: "Stella <hello@sl-code.dev>",
        to: ["sl.code.777@gmail.com"],
        replyTo: email,
        subject: `Nouvelle demande de contact de ${name}`,
        react: EmailContactForm({ name, message }),
      }),
      // 2. Email de confirmation pour l'utilisateur
      resend.emails.send({
        from: "Stella <hello@sl-code.dev>",
        to: [email],
        subject: "J'ai bien reçu votre message !",
        react: EmailConfirmation({ name, message }),
      }),
    ]);

    // Vérifier les erreurs
    if (notificationResult.error) {
      console.error("Notification email error:", notificationResult.error);
      return Response.json(
        { error: notificationResult.error.message },
        { status: 500 }
      );
    }

    if (confirmationResult.error) {
      console.error("Confirmation email error:", confirmationResult.error);
      return Response.json(
        { error: confirmationResult.error.message },
        { status: 500 }
      );
    }

    console.log("Emails sent successfully:", {
      notification: notificationResult.data,
      confirmation: confirmationResult.data,
    });

    return Response.json({
      notification: notificationResult.data,
      confirmation: confirmationResult.data,
    });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Erreur inconnue" },
      { status: 500 }
    );
  }
}
