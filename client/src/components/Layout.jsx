import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Adarsh Alex
      </footer>
    </div>
  );
}
