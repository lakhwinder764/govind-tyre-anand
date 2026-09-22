import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 py-24">
      <p className="text-xs uppercase tracking-[0.28em] text-copper">404</p>
      <h1 className="display mt-4 text-4xl font-semibold">This page isn’t on the map.</h1>
      <p className="mt-4 text-muted">Head back to the workshop homepage or book a service.</p>
      <Link href="/" className="mt-8 rounded-full bg-copper px-5 py-3 text-sm font-semibold text-bg">
        Back home
      </Link>
    </section>
  );
}
