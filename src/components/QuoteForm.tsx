"use client";

import { useState } from "react";
import { quoteServices } from "@/data/content";
import { site } from "@/data/site";

type Props = {
  heading?: string;
  intro?: string;
  submitLabel?: string;
};

export function QuoteForm({
  heading = "Book an Inspection",
  intro = "Fill quick form and our team will call you within 05-10 minutes",
  submitLabel = "Book an Inspection",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = String(data.get("firstName") ?? "");
    const lastName = String(data.get("lastName") ?? "");
    const email = String(data.get("email") ?? "");
    const number = String(data.get("number") ?? "");
    const address = String(data.get("address") ?? "");
    const service = String(data.get("service") ?? "");
    const subject = encodeURIComponent(`Quote request from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nNumber: ${number}\nAddress: ${address}\nService: ${service}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="glass rounded-3xl p-8">
        <h3 className="display text-2xl font-semibold">Request ready to send</h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          Your email app should open with the quote details. If it doesn’t, call{" "}
          {site.phones.mobile} or email {site.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-4xl border border-copper/20 p-6 sm:p-8">
      {heading ? <p className="display text-lg font-semibold text-ink">{heading}</p> : null}
      {intro ? <p className="text-sm leading-7 text-muted">{intro}</p> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted">
          First Name
          <input
            required
            name="firstName"
            autoComplete="given-name"
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-ink outline-none focus:border-copper"
          />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Last Name
          <input
            required
            name="lastName"
            autoComplete="family-name"
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-ink outline-none focus:border-copper"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-muted">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-ink outline-none focus:border-copper"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Number
        <input
          required
          name="number"
          type="tel"
          autoComplete="tel"
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-ink outline-none focus:border-copper"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Address
        <input
          required
          name="address"
          autoComplete="street-address"
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-ink outline-none focus:border-copper"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Services
        <select
          required
          name="service"
          defaultValue=""
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-ink outline-none focus:border-copper"
        >
          <option value="" disabled>
            Select a service
          </option>
          {quoteServices.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-copper px-5 py-3 text-sm font-semibold text-bg hover:bg-copper-deep"
      >
        {submitLabel}
      </button>
    </form>
  );
}
