export default function About() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        {/* <p className="mt-2 text-zinc-400">
          A small intro
        </p> */}
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
        <p className="leading-relaxed text-zinc-300">
          I’m a Computer Engineering sophomore at UMass Amherst with a strong 
          interest in building intelligent, real-world systems that helps people clear obstacles 
          in life that they should not be facing in the first place. 
          My work contains machine learning, full-stack development, embedded systems, 
          and automation, with a focus on reliability, performance, and clean system design.

          I’ve built projects ranging from real-time ML inference and AI-powered study tools 
          to firmware-level robotic control and scalable web platforms, and I’m motivated by 
          problems that live at the boundary between software, data, and hardware.
        </p>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Interests</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-zinc-300">
            <li>AI/ML for real life application</li>
            <li>Full-stack product building</li>
            <li>ECE fundamentals: signals, embedded systems, hardware</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
