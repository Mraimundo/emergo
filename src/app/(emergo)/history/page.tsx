import Image from "next/image";
import {
  File,
  ChevronsLeft,
  ChevronsRight,
  CheckCircle2Icon,
} from "lucide-react";

import { Filters } from "@/components/filters";
import { Historical } from "@/components/historical";

export default async function History() {
  return (
    <div className="flex flex-col gap-5">
      <Filters />

      <Historical filterby={45} />
    </div>
  );
}
