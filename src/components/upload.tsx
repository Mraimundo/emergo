"use client";

import { useCallback, useState } from "react";
import { FileDown, Trash2Icon, Loader, FileUp } from "lucide-react";

import { UploadInput } from "./upload-input";
import { convertBytes } from "@/utils/convertBytesToMegabytes";
import { removeSufix } from "@/utils/removeSufix";
import { Progressbar } from "./progressbar";
import { useModal } from "@/contexts/modal-context";
import { Modal } from "./modal";

interface SheetsProps {
  quantity: number;
  firstSheet: string;
}

export function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("successful");
  const { isModalOpen, closeModal, openModal } = useModal();
  const [progress, setProgress] = useState(17);
  const [dataSheetJson, setDataSheetJson] = useState<any>(null);
  const [columns, setColumns] = useState<string[]>([]);

  const removeFile = useCallback(() => {
    setFile(null);
    setStatus("none");
    setProgress(0);
  }, [file]);

  const onSubmit = useCallback(() => {
    setProgress(13);
    setStatus("loading");
  }, []);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      <div className="bg-slate-50 rounded-lg flex flex-col w-full h-[calc(100vh-18rem)] px-8 py-8">
        {progress > 0 && <Progressbar progress={progress} />}

        <div className="grid grid-rows-app grid-cols-2 gap-10 mt-5">
          <UploadInput
            setFile={setFile}
            file={file}
            setDataSheetJson={setDataSheetJson}
            setColumns={setColumns}
          />

          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-zinc-700 text-lg font-medium">
                {file?.name ? file?.name : "----"}
              </h2>
              {file?.name && (
                <button onClick={removeFile}>
                  <Trash2Icon className="h-6 w-6 text-red-600" />
                </button>
              )}
            </div>

            <div className="bg-gray-300 h-10 w-full rounded-lg flex items-center justify-between px-4">
              <div className="flex items-center">
                <FileUp
                  className={`h-6 w-6 ${file?.name ? "text-green-600" : "text-gray-400"} mr-2`}
                />
                <span>{file?.name ? "Tamanho do arquivo" : "---"}</span>
              </div>
              <span>
                {file?.size ? convertBytes(file?.size) + "MB" : "---"}
              </span>
            </div>

            <div className="bg-gray-300 h-10 w-full rounded-lg flex items-center justify-between px-4">
              <div className="flex items-center">
                <FileUp
                  className={`h-6 w-6 ${file?.name ? "text-green-600" : "text-gray-400"} mr-2`}
                />
                <span className="truncate">
                  {file?.name ? "Quantidades de colunas" : "---"}
                </span>
              </div>
              <span>{columns.length > 0 ? columns.length : "---"}</span>
            </div>

            {/* <div className="bg-gray-300 h-10 w-full rounded-lg flex items-center justify-between px-4">
              <div className="flex items-center">
                <FileUp
                  className={`h-6 w-6 ${file?.name ? "text-green-600" : "text-gray-400"} mr-2`}
                />
                <span>{file?.name ? removeSufix(file?.name) : "---"}</span>
              </div>
              <span>
                {file?.name ? convertBytes(file?.size) + "MB" : "---"}
              </span>
            </div> */}

            {file && (
              <div className="mt-4 w-full">
                <button
                  className="bg-slate-600 rounded-lg w-full h-14 flex items-center justify-center p-2 hover:bg-slate-700 transition-all disabled:bg-slate-400"
                  onClick={onSubmit}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <Loader className="h-5 w-5 mr-3 text-zinc-100" />
                  ) : (
                    <FileUp className="h-5 w-5 mr-3 text-zinc-100" />
                  )}
                  <span className="text-zinc-100 font-semibold">
                    {status === "loading"
                      ? "Carregando arquivo..."
                      : "Carregar arquivo"}
                  </span>
                </button>
              </div>
            )}

            {status === "successful" && (
              <div className="mt-4 w-full">
                <button className="bg-green-500 rounded-lg w-full h-14 flex items-center justify-center p-2">
                  <FileDown className="h-5 w-5 mr-3 text-zinc-100" />
                  <span className="text-zinc-100 font-semibold">
                    Exportar novo relatório
                  </span>
                </button>

                <div className="flex justify-end w-full text-green-500 mt-3">
                  <button onClick={openModal}>
                    Clique aqui para visualizar uma análise rápida
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal handleClose={handleCloseModal}>
          <div className="w-[38rem] h-full flex flex-col justify-between gap-5">
            <h1 className="text-lg text-slate-600 font-bold mt-[-8px]">
              Relatório da análise
            </h1>

            <div className="flex flex-col gap-3">
              <p className="font-normal text-sm text-secondary">
                Apenas um exemplo.....
              </p>
            </div>

            <div className="flex items-center justify-end gap-5 mt-auto">
              <button
                onClick={handleCloseModal}
                className="flex items-center justify-center w-28 h-12 rounded-lg border border-app transition-all hover:bg-over"
              >
                <span className="text-app font-medium text-sm">Fechar</span>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
