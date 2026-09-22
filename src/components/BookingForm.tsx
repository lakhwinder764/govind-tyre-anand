"use client";

import { useState } from "react";
import { site } from "@/data/site";

const services = [
  "Tyre repair",
  "New tyres",
  "Wheel alignment",
  "Wheel balancing",
  "Logbook service",
  "Mechanical repair",
  "Pink Slip",
  "Battery replacement",
  "Air conditioning",
  "4x4 accessories",
];

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Booking request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nService: ${service}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="glass rounded-3xl p-8">
        <h3 className="display text-2xl font-semibold">Request ready to send</h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          Your email app should open with the booking details. If it doesn’t, call{" "}
          {site.phones.mobile} or email {site.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-3xl p-6 sm:p-8">
      <label className="grid gap-2 text-sm">
        Name
        <input
          required
          name="name"
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-copper"
        />
      </label>
      <label className="grid gap-2 text-sm">
        Phone
        <input
          required
          name="phone"
          type="tel"
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-copper"
        />
      </label>
      <label className="grid gap-2 text-sm">
        Service
        <select
          name="service"
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-copper"
        >
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        Message
        <textarea
          name="message"
          rows={4}
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-copper"
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-copper px-5 py-3 text-sm font-semibold text-bg hover:bg-copper-deep"
      >
        Send booking request
      </button>
    </form>
  );
}
