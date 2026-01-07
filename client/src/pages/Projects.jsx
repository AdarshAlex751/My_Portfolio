import { Link } from "react-router-dom";

const projects = [
  {
    name: "StudySphere",
    tagline: "Real-time sensor data ingestion and live dashboard system.",
    description:
      "Built a real-time data ingestion pipeline that streamed occupancy data from embedded sensors to a cloud-connected backend and live dashboard. Designed reliable data handling and synchronization mechanisms to ensure accuracy and low-latency updates while operating under real-world sensor noise and connectivity constraints.",
    stack: [
      "Python",
      "Cloud Backend",
      "Real-Time Systems",
      "Data Pipelines",
      "Dashboards",
    ],
    type: "Hackathon Project",
    period: "Feb 2025 - March 2025",
    link: "https://github.com/AdarshAlex751/study-sphere",
  },
  {
    name: "FingerSolve (MassAI Hackathon – 2nd Place)",
    tagline: "Real-time hand gesture and ASL recognition using ML.",
    description:
      "Developed a real-time hand-gesture and ASL recognition system using MediaPipe and TensorFlow/Keras. Integrated a Flask backend with a React frontend, focusing on latency optimization, prediction stability, and robust error handling for live inference scenarios.",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "MediaPipe",
      "Flask",
      "React",
      "Machine Learning",
    ],
    type: "Hackathon Project",
    period: "March 2025 - April 2025",
    link: "https://github.com/AdarshAlex751/fingersolve-1-",
  },
  {
    name: "Volunteerhub",
    tagline: "Full-stack volunteer and event management platform.",
    description:
      "Built a full-stack web application with authentication, role-based access control, event scheduling, RSVP tracking, and announcements. Designed REST APIs, database models, and frontend views to support real organizational workflows with an emphasis on scalability, data consistency, and clean system design.",
    stack: [
      "React",
      "Node.js",
      "REST APIs",
      "Authentication",
      "Role-Based Access Control",
      "Database Design",
    ],
    type: "Full-Stack Project",
    period: "Nov 2025 - Dec 2025",
    link: "https://github.com/AdarshAlex751/VolunteerHub",
  },
  {
    name: "CrimsonMind",
    tagline: "AI-powered study assistant with OCR, quizzes, and chatbot.",
    description:
      "Built an AI-powered study assistant supporting OCR-based note ingestion, automated quiz generation, and conversational Q&A. Exposed functionality through RESTful APIs with a focus on backend reliability, modular architecture, and scalability.",
    stack: [
      "Python",
      "OCR (Tesseract, OpenCV)",
      "AI/ML",
      "REST APIs",
      "Backend Systems",
    ],
    type: "HackUMass Project",
    period: "Nov 2025 - Dec 2025",
    link: "https://github.com/AdarshAlex751/crimsonmind",
  },

];


export default function Projects() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-zinc-400">
          A few things I’ve built (and I’m still building).
        </p>
        <a
  href="https://github.com/AdarshAlex751"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 text-sm font-medium text-zinc-300 transition hover:text-white"
>
  View GitHub
</a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 transition hover:bg-zinc-900/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{p.tagline}</p>
              </div>
              <span className="text-zinc-500 transition group-hover:text-zinc-300">
                ↗
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
