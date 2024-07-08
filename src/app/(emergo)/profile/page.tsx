import Image from "next/image";
import { Upload } from "lucide-react";

export default async function Profile() {
  return (
    <div className="bg-gray-300 w-full h-[calc(100vh-12rem)] rounded-lg p-10 flex flex-col gap-5">
      <div className="bg-slate-50 rounded-lg flex flex-col w-full h-[calc(100vh-18rem)] px-8 py-8">
        <h1 className="text-2xl font-semibold text-slate-600">
          Dados pessoais
        </h1>

        <div className="grid grid-rows-app grid-cols-app gap-10 mt-5">
          <div className="flex flex-col">
            <div className="flex items-center w-32 h-32 rounded-full border border-slate-600 gap-5">
              <Image
                src="https://github.com/Dikizeko-Oliveira.png"
                className="h-32 w-32 rounded-full p-[2px]"
                width={100}
                height={100}
                alt=""
              />
              <label
                htmlFor="file"
                className="flex items-center gap-2 bg-slate-400 hover:bg-slate-500 transition-all p-4 rounded-lg cursor-pointer"
              >
                <Upload className="h-4 w-4 text-slate-50" />
                <span className="text-slate-50 text-sm font-medium">
                  Atualizar
                </span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col bg-slate-300 w-full  h-full p-5 rounded-lg">
            <form className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="flex flex-col gap-1 text-slate-600"
              >
                Nome completo:
                <input
                  type="text"
                  id="name"
                  className="rounded-lg h-12 px-4 outline-none"
                  placeholder="Digite seu nome completo..."
                />
              </label>
              <label
                htmlFor="email"
                className="flex flex-col gap-1 text-slate-600"
              >
                E-mail:
                <input
                  type="text"
                  id="email"
                  className="rounded-lg h-12 px-4 outline-none"
                  placeholder="Digite seu nome completo..."
                />
              </label>

              <div className="grid grid-rows-app grid-cols-triple gap-4">
                <label
                  htmlFor="cep"
                  className="flex flex-col gap-1 text-slate-600"
                >
                  Cep:
                  <input
                    type="text"
                    id="cep"
                    className="rounded-lg h-12 px-4 outline-none"
                    placeholder="Cep..."
                  />
                </label>
                <label
                  htmlFor="address"
                  className="flex flex-col gap-1 text-slate-600"
                >
                  Endereço:
                  <input
                    type="text"
                    id="address"
                    className="rounded-lg h-12 px-4 outline-none"
                    placeholder="Endereço..."
                  />
                </label>
                <label
                  htmlFor="number"
                  className="flex flex-col gap-1 text-slate-600"
                >
                  Número:
                  <input
                    type="number"
                    id="number"
                    className="rounded-lg h-12 px-4 outline-none"
                    placeholder="Endereço..."
                  />
                </label>
              </div>

              <div className="grid grid-rows-app grid-cols-2 gap-4">
                <label
                  htmlFor="password"
                  className="flex flex-col gap-1 text-slate-600"
                >
                  Senha:
                  <input
                    type="password"
                    id="password"
                    className="rounded-lg h-12 px-4 outline-none"
                    placeholder="Senha..."
                  />
                </label>
                <label
                  htmlFor="password_confirm"
                  className="flex flex-col gap-1 text-slate-600"
                >
                  Confirmar senha:
                  <input
                    type="password"
                    id="password_confirm"
                    className="rounded-lg h-12 px-4 outline-none"
                    placeholder="Confirmar senha..."
                  />
                </label>
              </div>

              <div className="flex items-center justify-end">
                <button className="text-base font-semibold text-zinc-50 bg-green-500 hover:bg-green-600 transition-all rounded-lg w-28 h-12">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
