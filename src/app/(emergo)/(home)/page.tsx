import { Metadata } from "next";
import { Upload } from "@/components/upload";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <div className="bg-gray-300 w-full h-[calc(100vh-12rem)] rounded-lg p-10 flex flex-col gap-4">
      <div className="flex flex-col">
        <h1 className="text-zinc-700 text-3xl font-semibold mt-[-10px]">
          Faça aqui o upload do arquivo
        </h1>
        <p className="text-zinc-700 text-sm font-medium mt-1">
          Apenas arquivos no formato(.xls/excel) são permitidos.
        </p>
      </div>

      <Upload />
    </div>
  );
}
