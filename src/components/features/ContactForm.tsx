"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { services } from "@/data/services";

const budgetRanges = [
  "Moins de 5 000 €",
  "5 000 € - 15 000 €",
  "15 000 € - 30 000 €",
  "30 000 € - 50 000 €",
  "Plus de 50 000 €",
];

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    projectDescription: "",
    budget: "",
    rgpdConsent: false as unknown as true,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          serviceType: "",
          projectDescription: "",
          budget: "",
          rgpdConsent: false as unknown as true,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl bg-primary-50 border border-primary-200 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-neutral-900">
          Demande envoyée avec succès !
        </h3>
        <p className="mt-2 text-neutral-600">
          Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="primary"
          className="mt-6"
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
            Prénom *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-neutral-800 transition-colors focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none ${
              errors.firstName ? "border-error" : "border-neutral-300"
            }`}
            placeholder="Votre prénom"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-error">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-neutral-800 transition-colors focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none ${
              errors.lastName ? "border-error" : "border-neutral-300"
            }`}
            placeholder="Votre nom"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-error">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-neutral-800 transition-colors focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none ${
              errors.email ? "border-error" : "border-neutral-300"
            }`}
            placeholder="votre@email.fr"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-neutral-800 transition-colors focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none ${
              errors.phone ? "border-error" : "border-neutral-300"
            }`}
            placeholder="06 12 34 56 78"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-error">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Service & Budget */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-neutral-700 mb-1">
            Type de service *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-neutral-800 transition-colors focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none bg-white ${
              errors.serviceType ? "border-error" : "border-neutral-300"
            }`}
          >
            <option value="">Sélectionnez un service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-error">{errors.serviceType}</p>
          )}
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1">
            Budget estimé *
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-neutral-800 transition-colors focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none bg-white ${
              errors.budget ? "border-error" : "border-neutral-300"
            }`}
          >
            <option value="">Sélectionnez un budget</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="mt-1 text-sm text-error">{errors.budget}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-neutral-700 mb-1">
          Description du projet *
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={5}
          value={formData.projectDescription}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 text-neutral-800 transition-colors focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none resize-y ${
            errors.projectDescription ? "border-error" : "border-neutral-300"
          }`}
          placeholder="Décrivez votre projet, vos envies, les contraintes éventuelles..."
        />
        {errors.projectDescription && (
          <p className="mt-1 text-sm text-error">{errors.projectDescription}</p>
        )}
      </div>

      {/* RGPD */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="rgpdConsent"
            checked={formData.rgpdConsent as unknown as boolean}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-accent-500"
          />
          <span className="text-sm text-neutral-600">
            J&apos;accepte que mes données personnelles soient traitées conformément à la{" "}
            <Link href="/politique-de-confidentialite" className="text-primary-700 underline hover:text-primary-800">
              politique de confidentialité
            </Link>
            . *
          </span>
        </label>
        {errors.rgpdConsent && (
          <p className="mt-1 text-sm text-error">{errors.rgpdConsent}</p>
        )}
      </div>

      {/* Submit */}
      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande de devis"}
      </Button>
    </form>
  );
}
