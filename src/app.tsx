import type { OptionsFormData } from "./types/OptionsFormData";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { useGeneratePass } from "./hooks/useGeneratePass";
import { optionsSchema } from "./schemas/optionsSchema";
import { ActionButton } from "./components/ActionButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { PassArea } from "./components/PassArea";
import { useForm } from "react-hook-form";
import { Footer } from "./components/Footer";
import { Title } from "./components/Title";
import { Input } from "./components/FormInput";

import animationData from "../public/lotties/animation.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function App() {
  const {
    decrementLength,
    incrementLength,
    length,
    setLength,
    generatedPass,
    onSubmit,
    onErrors,
    handleCopyToClipboard,
  } = useGeneratePass();

  const { handleSubmit, register } = useForm<OptionsFormData>({
    resolver: zodResolver(optionsSchema),
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-slate-950 via-indigo-900 to-indigo-950 text-slate-100 antialiased">
      <div className="flex drop-shadow-2xl">
        <div className="border-b border-l border-t rounded-l-xl border-blue-500 p-10 w-96">
          <Lottie options={defaultOptions} height={300} width={300} />
          <ul className="space-y-6 text-slate-300">
            <li>Combine letras, números e símbolos para máxima proteção.</li>
            <li>Gere uma senha que nem você conseguiria adivinhar.</li>
            <li>Sua vida digital merece essa proteção.</li>
          </ul>
        </div>
        <div className="flex flex-col  items-center gap-10 p-6 sm:p-12 border-b border-r border-t border-blue-500 rounded-r-2xl bg-slate-300">
          <Title />
          <span className="text-slate-700">
            Selecione as opções abaixo para gerar a sua nova senha
          </span>
          <div className="w-full flex flex-col items-center gap-1">
            <PassArea onClick={handleCopyToClipboard}>
              <span className="flex" aria-expanded={"false"}>
                {generatedPass}
              </span>
            </PassArea>
            {generatedPass && (
              <span className="text-sm text-slate-700">Senha gerada! Clique para copiar</span>
            )}
          </div>

          <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit(onSubmit, onErrors)}>
            <div className="flex flex-col  p-4 justify-center rounded-md bg-blue-900 items-center">
              <span>Tamanho: {length}</span>
              <div className="flex gap-4">
                <ActionButton onClick={decrementLength}>
                  <MinusIcon />
                </ActionButton>
                <input
                  type="range"
                  value={length}
                  min={4}
                  max={32}
                  step={1}
                  {...register("length", {
                    onChange(event) {
                      setLength(Number(event.target.value));
                    },
                  })}
                />
                <ActionButton onClick={incrementLength}>
                  <PlusIcon />
                </ActionButton>
              </div>
            </div>

            <div className="flex gap-8 justify-center">
              <Input.Root>
                <Input.FormInput type="checkbox" {...register("uppercase")} defaultChecked />
                <Input.Label>ABC</Input.Label>
              </Input.Root>

              <Input.Root>
                <Input.FormInput type="checkbox" {...register("lowercase")} defaultChecked />
                <Input.Label>abc</Input.Label>
              </Input.Root>

              <Input.Root>
                <Input.FormInput type="checkbox" {...register("numbers")} />
                <Input.Label>123</Input.Label>
              </Input.Root>

              <Input.Root>
                <Input.FormInput type="checkbox" {...register("symbols")} />
                <Input.Label>$#%</Input.Label>
              </Input.Root>
            </div>

            <button
              className="bg-blue-800 rounded-md font-bold p-3 cursor-pointer hover:bg-blue-900"
              type="submit"
            >
              Gerar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
