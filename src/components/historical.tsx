"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2Icon,
  ChevronsLeft,
  ChevronsRight,
  File,
} from "lucide-react";
import { HistoryFiles } from "@/utils/mock";

interface HistoricalProps {
  filterby: number;
}

interface ItemProps {
  id: number;
  title: string;
  subtitle: string;
  data: string;
  tamanho: string;
}

export function Historical({ filterby }: HistoricalProps) {
  const [selectedItem, setSelectedItem] = useState(HistoryFiles[0]);

  const onSelectItem = (item: ItemProps) => {
    setSelectedItem(item);
  };

  return (
    <div className="grid grid-rows-app grid-cols-app gap-5">
      <div className="flex flex-col w-full gap-2">
        <ul className="flex flex-col w-full h-[calc(100vh-24rem)] overflow-y-scroll gap-3">
          {HistoryFiles.map((item) => (
            <li
              key={item.id}
              className={`flex flex-col w-full h-20 hover:bg-slate-200 transition-all rounded-lg p-4 gap-3 cursor-pointer
                ${item.title === selectedItem.title ? "bg-slate-200" : "bg-white"}
                `}
              onClick={() => onSelectItem(item)}
            >
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                  <File className={`h-6 w-6 text-slate-500 mr-2`} />
                  <span>{item.title}</span>
                </div>
                <span>{item.tamanho}</span>
              </div>
              <span className="text-xs">{item.data}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between w-full">
          <p className="text-sm text-slate-600">Total: 35</p>
          <div className="flex items-center justify-center gap-5">
            <button className="flex items-center  text-slate-600 hover:text-slate-900">
              <ChevronsLeft className="h-5 w-5" />
              <span className="text-sm">-20</span>
            </button>
            <button className="flex items-center  text-slate-600 hover:text-slate-900">
              <span className="text-sm">+20</span>
              <ChevronsRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-app grid-cols-2 gap-12 w-full h-[calc(100vh-24rem)] p-5 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col gap-3">
          <h3 className="font-medium text-lg text-slate-700">
            Arquivo gerado após o merge
          </h3>
          <div className="flex items-center gap-3 border-b pb-2">
            <Image
              src="/excel.webp"
              alt=""
              width={90}
              height={90}
              quality={100}
            />
            <div className="flex flex-col gap-3">
              <span className="text-sm text-slate-500">
                {selectedItem.title}
              </span>

              <button className="bg-slate-300 hover:bg-slate-400 transition-all w-28 h-8 rounded-lg text-sm text-slate-600 font-medium">
                Baixar arquivo
              </button>
            </div>
          </div>

          <ul className="max-w-md space-y-1 text-slate-500 list-outside">
            <li className="flex items-center">
              <CheckCircle2Icon className="w-4 h-4 mr-2 text-green-500" />
              Mais de 10 abas encontradas
            </li>
            <li className="flex items-center">
              <CheckCircle2Icon className="w-4 h-4 mr-2 text-green-500" />
              Pelo menos 10 colunas ou linhas foram corrigidas
            </li>
            <li className="flex items-center">
              <CheckCircle2Icon className="w-4 h-4 mr-2 text-green-500" />
              Pelo menos 10 colunas ou linhas foram corrigidas
            </li>
            <li className="flex items-center">
              <CheckCircle2Icon className="w-4 h-4 mr-2 text-green-500" />
              Pelo menos 10 colunas ou linhas foram corrigidas
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-medium text-lg text-slate-700">
            Arquivo gerado antes do merge
          </h3>
          <div className="flex items-center gap-3 border-b pb-2">
            <Image src="/pdf.png" alt="" width={90} height={90} quality={100} />
            <div className="flex flex-col gap-3">
              <span className="text-sm text-slate-500">
                {selectedItem.subtitle}
              </span>

              <button className="bg-slate-300 hover:bg-slate-400 transition-all w-28 h-8 rounded-lg text-sm text-slate-600 font-medium">
                Baixar arquivo
              </button>
            </div>
          </div>

          <ul className="max-w-md space-y-1 text-slate-500 list-outside">
            <li className="flex items-center">
              <CheckCircle2Icon className="w-4 h-4 mr-2 text-slate-500" />
              Mais de 10 abas encontradas
            </li>
            <li className="flex items-center">
              <CheckCircle2Icon className="w-4 h-4 mr-2 text-slate-500" />
              Pelo menos 10 colunas ou linhas foram corrigidas
            </li>
            <li className="flex items-center">
              <CheckCircle2Icon className="w-4 h-4 mr-2 text-slate-500" />
              Pelo menos 10 colunas ou linhas foram corrigidas
            </li>
            <li className="flex items-center">
              <CheckCircle2Icon className="w-4 h-4 mr-2 text-slate-500" />
              Pelo menos 10 colunas ou linhas foram corrigidas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
