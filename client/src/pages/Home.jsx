import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
        <p className="text-sm text-zinc-400">ECE @ UMass Amherst</p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Building projects at the intersection of{" "}
          <span className="text-zinc-200">software</span> and{" "}
          <span className="text-zinc-200">engineering</span>.
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          I like turning ideas into clean, usable products, from full-stack apps
          to ML-powered tools.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:opacity-90"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="rounded-2xl border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800/50"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
  { title: "Full-Stack", desc: "React, Vite, REST APIs, auth, scalable UI flows" },
  { title: "Backend & Python", desc: "FastAPI, automation, data processing, APIs" },
  { title: "Machine Learning", desc: "TensorFlow/Keras, MediaPipe, real-time inference" },
  { title: "Embedded & Hardware", desc: "Sensor integration, control logic, firmware debugging" },
  { title: "Systems Thinking", desc: "Real-time constraints, reliability, edge-case handling" },
]
.map((c) => (
          <div
            key={c.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
