import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";


export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    // capture the form element immediately
    const formEl = e.currentTarget;
    if (!formEl) return;

    setStatus("");
    setLoading(true);

    const form = new FormData(formEl);
    const payload = {
      name: (form.get("name") || "").toString().trim(),
      email: (form.get("email") || "").toString().trim(),
      message: (form.get("message") || "").toString().trim(),
    };

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok) {
        setStatus(data?.detail || `Failed (${res.status})`);
        return;
      }

      setStatus(data?.message || "Message sent");
      formEl.reset(); // safe now
    } catch (err) {
      setStatus(`Request failed: ${err?.message || "Failed to fetch"}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 text-zinc-400">
          Send a message and I’ll get back to you ASAP
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="max-w-xl space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8"
      >
        <div>
          <label className="text-sm text-zinc-300">Name</label>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-600"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-300">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-600"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-300">Message</label>
          <textarea
            name="message"
            required
            className="mt-2 min-h-35 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-600"
            placeholder="What do you want to talk about?"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {status && <p className="text-sm text-zinc-400">{status}</p>}
      </form>
    </section>
  );
}
