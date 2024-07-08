"use client";

import { useState } from "react";
import { Calendar, FilterIcon, CheckSquare, Square } from "lucide-react";

export function Filters() {
  const [activeFilter, setActiveFilter] = useState(45);

  return (
    <div className="w-full rounded-lg p-5 flex flex-col gap-4">
      <div className="flex items-center">
        <FilterIcon className="h-6 w-6 text-zinc-600 mr-1" />
        <h2 className="text-lg font-semibold text-zinc-600">Filtrar por:</h2>
      </div>

      <div className="flex items-center">
        <div
          className={`flex flex-col p-2 rounded-lg gap-1 mr-3 hover:bg-slate-200 border-2 cursor-pointer transition-all
            ${activeFilter === 45 ? "border-green-500 bg-slate-200" : "border-slate-500 bg-slate-300"}
          `}
          onClick={() => setActiveFilter(45)}
        >
          <div className="flex justify-end">
            {activeFilter === 45 ? (
              <CheckSquare className="h-4 w-4 text-green-500" />
            ) : (
              <Square className="h-4 w-4 text-slate-500" />
            )}
          </div>
          <div className="flex items-center justify-center">
            <Calendar className="h-5 w-5 text-slate-500 mr-1" />
            <span className="text-sm text-slate-600">Últimos 45 dias</span>
          </div>
        </div>
        <div
          className={`flex flex-col p-2 rounded-lg gap-1 mr-3 hover:bg-slate-200 border-2 cursor-pointer transition-all
            ${activeFilter === 60 ? "border-green-500 bg-slate-200" : "border-slate-500 bg-slate-300"}
          `}
          onClick={() => setActiveFilter(60)}
        >
          <div className="flex justify-end">
            {activeFilter === 60 ? (
              <CheckSquare className="h-4 w-4 text-green-500" />
            ) : (
              <Square className="h-4 w-4 text-slate-500" />
            )}
          </div>
          <div className="flex items-center justify-center">
            <Calendar className="h-5 w-5 text-slate-500 mr-1" />
            <span className="text-sm text-slate-600">Últimos 60 dias</span>
          </div>
        </div>

        <div
          className={`flex flex-col p-2 rounded-lg gap-1 mr-3 hover:bg-slate-200 border-2 cursor-pointer transition-all
            ${activeFilter === 90 ? "border-green-500 bg-slate-200" : "border-slate-500 bg-slate-300"}
          `}
          onClick={() => setActiveFilter(90)}
        >
          <div className="flex justify-end">
            {activeFilter === 90 ? (
              <CheckSquare className="h-4 w-4 text-green-500" />
            ) : (
              <Square className="h-4 w-4 text-slate-500" />
            )}
          </div>
          <div className="flex items-center justify-center">
            <Calendar className="h-5 w-5 text-slate-500 mr-1" />
            <span className="text-sm text-slate-600">Últimos 90 dias</span>
          </div>
        </div>

        <div
          className={`flex flex-col p-2 rounded-lg gap-1 mr-3 hover:bg-slate-200 border-2 cursor-pointer transition-all
            ${activeFilter === 180 ? "border-green-500 bg-slate-200" : "border-slate-500 bg-slate-300"}
          `}
          onClick={() => setActiveFilter(180)}
        >
          <div className="flex justify-end">
            {activeFilter === 180 ? (
              <CheckSquare className="h-4 w-4 text-green-500" />
            ) : (
              <Square className="h-4 w-4 text-slate-500" />
            )}
          </div>
          <div className="flex items-center justify-center">
            <Calendar className="h-5 w-5 text-slate-500 mr-1" />
            <span className="text-sm text-slate-600">Últimos 6 meses</span>
          </div>
        </div>
      </div>
    </div>
  );
}
