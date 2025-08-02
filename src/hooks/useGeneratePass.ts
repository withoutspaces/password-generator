import type { SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import type { IConfigGeneratePass } from "../types/IConfigGeneratePass";
import type { OptionsFormData } from "../types/OptionsFormData";
import type { ChangeEvent } from "react";
import { generateKey } from "../services/generateKey";
import { useState } from "react";
import { toast } from "sonner";

export function useGeneratePass() {
  const [length, setLength] = useState(4);
  const [generatedPass, setGeneratedPass] = useState("");

  const incrementLength = () => {
    setLength((prev) => prev + 1);
  };

  const decrementLength = () => {
    if (length > 4) setLength((a) => a - 1);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLength(Number(event.target.value));
  };

  const getKey = (options: IConfigGeneratePass) => {
    setGeneratedPass(generateKey(options));
  };

  const onSubmit: SubmitHandler<OptionsFormData> = (data) => {
    const options = { ...data, length: length, requireEach: true };
    try {
      getKey(options);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  const onErrors: SubmitErrorHandler<OptionsFormData> = (data) => {
    console.log(data);
  };

  const handleCopyToClipboard = () => {
    if (generatedPass) {
      navigator.clipboard.writeText(generatedPass);
      toast.success("Senha copiada para a área de transferência! 🎉");
    }
  };

  return {
    getKey,
    setLength,
    incrementLength,
    decrementLength,
    length,
    generatedPass,
    setGeneratedPass,
    handleInputChange,
    onSubmit,
    onErrors,
    handleCopyToClipboard,
  };
}
