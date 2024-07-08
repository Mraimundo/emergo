import { useCallback } from "react";
import { DropzoneState, useDropzone } from "react-dropzone";
import { File } from "lucide-react";
import * as XLSX from "xlsx";

import { UploadIcon } from "@/icons/UploadIcon";

interface InputProps {
  dropzone: DropzoneState;
}
interface HasFileProps {
  file?: File;
}
interface SheetsProps {
  quantity: number;
  firstSheet: string;
}
interface UploadComponentsProps {
  setFile: (file: File | null) => void;
  setDataSheetJson: (data: any) => void;
  setColumns: (data: string[]) => void;
  file: File | null;
}

export function UploadInput({
  setFile,
  file,
  setDataSheetJson,
  setColumns,
}: UploadComponentsProps) {
  const onDrop = useCallback((files: File[]) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetDataJson = XLSX.utils.sheet_to_json(sheet);
      const rowObject = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: "",
      });
      const headers = rowObject[0] as string[];

      setColumns(headers);
      setFile(files[0]);
      setDataSheetJson(sheetDataJson);
      // console.log("Headers: ", headers);
      // console.log("Example CSV: ", sheetDataCsv);
      // console.log("Example JSON: ", sheetDataJson);
    };
    reader.readAsArrayBuffer(files[0]);
  }, []);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "application/vnd.ms-excel": [".xlsx"],
    },
  });

  if (file) return <HasFile file={file} />;

  return <Input dropzone={dropzone} />;
}

const Input = ({ dropzone }: InputProps) => {
  const { getRootProps, getInputProps, isDragActive } = dropzone;

  return (
    <div
      {...getRootProps()}
      className={`w-full h-[calc(100vh-32rem)] rounded-lg border-dashed border-4 hover:border-gray-400 bg-gray-200 hover:bg-gray-300 transition-all
      ${isDragActive ? "border-green-500" : "border-gray-500"}
      `}
    >
      <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
          <UploadIcon
            className={`w-10 h-10 mb-3 ${isDragActive ? "text-green-500" : "text-gray-400"}`}
          />

          {isDragActive ? (
            <p className="text-lg font-bold text-green-500">
              Solte para adicionar
            </p>
          ) : (
            <>
              <p className="text-lg text-gray-400 mb-2">
                <span className="font-bold">
                  Clique para carregar um arquivo
                </span>{" "}
                ou arraste até aqui
              </p>
              <p className="text-gray-400 text-sm">.XLSX(Excel)</p>
            </>
          )}
        </div>
      </label>
      <input {...getInputProps()} className="hidden" />
    </div>
  );
};

const HasFile = ({ file }: HasFileProps) => {
  return (
    <div className="w-full h-[calc(100vh-32rem)] rounded-lg border-dashed border-4 bg-gray-200 border-gray-400 flex flex-col items-center justify-center">
      <div className="bg-white rounded-md shadow-md flex gap-3 p-5 items-center justify-center">
        <File className="w-5 h-5 my-4" />
        <span className="text-sm text-gray-500 my-4">{file?.name}</span>
      </div>
    </div>
  );
};
