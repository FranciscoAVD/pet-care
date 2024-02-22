"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];
export default function AppHeader() {
  const currentPath = usePathname();
  return (
    <header className="flex items-center justify-between mx-auto w-full border-b border-white/30 pt-4 pb-2">
      <Logo />

      <nav>
        <ul className="flex gap-x-2 text-sm">
          {routes.map((r, i) => (
            <li key={i}>
              <Link
                href={r.path}
                className={cn("rounded-full px-4 py-2 transition", {
                  "bg-gray-900/20 text-white": currentPath === r.path,
                  "text-white/70 hover:text-white/90": currentPath !== r.path,
                })}
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
