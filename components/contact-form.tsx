"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setStatus({
        type: "success",
        message: "Message envoyé avec succès !",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Erreur lors de l'envoi. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/6 hidden md:block  " />

      <div className="mt-16 w-full flex flex-col items-center">
        <div className="font-semibold text-xl mb-4 text-center">
          <p>D&apos;autres questions ?</p>
          <p className="text-balance">
            Contactez-moi et je me ferai un plaisir de vous répondre.
          </p>
        </div>
        <Card className="w-full max-w-md">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <div className="flex flex-col gap-4">
                  <Field>
                    <FieldLabel htmlFor="name">Nom</FieldLabel>
                    <Input
                      id="name"
                      placeholder="Entrez votre nom"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Entrez votre email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder="Je vous écoute..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </Field>

                {status.type && (
                  <div
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <Field orientation="responsive">
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Envoi en cours..." : "Envoyer"}
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() =>
                      setFormData({ name: "", email: "", message: "" })
                    }
                    disabled={isLoading}
                  >
                    Annuler
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/6 hidden md:block  " />
    </div>
  );
}
