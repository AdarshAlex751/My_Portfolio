import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">404</h1>
      <p className="text-zinc-400">That page doesn’t exist.</p>
      <Link
        to="/"
        className="inline-block rounded-2xl border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800/50"
      >
        Go home
      </Link>
    </div>
  );
}
