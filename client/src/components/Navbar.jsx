import { NavLink } from "react-router-dom";

const linkBase =
  "rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-zinc-800/60";
const active = "bg-zinc-800/80 text-white";
const inactive = "text-zinc-300";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="text-lg font-semibold tracking-tight">
          Adarsh Alex<span className="text-zinc-400"></span>
        </NavLink>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
