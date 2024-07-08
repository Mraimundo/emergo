"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { History, PlusSquareIcon } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between w-full h-10">
      <div className="flex items-center h-10">
        <Link
          href="/"
          className={`items-center gap-1 flex justify-center h-full rounded-lg ${pathname === "/" ? "bg-green-600" : "bg-gray-700"} px-3 mr-5`}
        >
          <PlusSquareIcon className="h-6 w-6 text-zinc-100" />
          <span className="text-sm font-medium text-zinc-100">Novo</span>
        </Link>

        <Link
          href="/history"
          className={`items-center gap-1 flex justify-center h-full rounded-lg ${pathname === "/history" ? "bg-green-600" : "bg-gray-700"} px-3 mr-5`}
        >
          <History className="h-6 w-6 text-zinc-100" />
          <span className="text-sm font-medium text-zinc-100">Histórico</span>
        </Link>
      </div>
    </div>
  );
}
