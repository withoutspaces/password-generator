import type { IConfigGeneratePass } from "../types/IConfigGeneratePass";

export const generateKey = (config: IConfigGeneratePass): string => {
  const charSets: Record<string, string> = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "~!@#$%^&*(){}[]?<>-=;:|/",
  };

  if (config.length <= 0) return "";

  let characterPool = "";
  const requiredChars: string[] = [];

  for (const [charType, include] of Object.entries(config)) {
    if (include && charSets[charType]) {
      characterPool += charSets[charType];
      if (config.requireEach) {
        requiredChars.push(
          charSets[charType][Math.floor(Math.random() * charSets[charType].length)]
        );
      }
    }
  }

  if (characterPool === "") {
    throw new Error("Pelo menos um tipo de caractere deve ser selecionado.");
  }

  if (config.requireEach && config.length < requiredChars.length) {
    throw new Error(
      "O comprimento da chave é muito curto para incluir um de cada tipo de caractere exigido."
    );
  }

  const keyArray = [...requiredChars];
  const remainingLength = config.length - requiredChars.length;

  if (remainingLength > 0) {
    const randomValues = new Uint32Array(remainingLength);
    crypto.getRandomValues(randomValues);

    for (let i = 0; i < remainingLength; i++) {
      keyArray.push(characterPool[randomValues[i] % characterPool.length]);
    }
  }

  for (let i = keyArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [keyArray[i], keyArray[j]] = [keyArray[j], keyArray[i]];
  }

  return keyArray.join("");
};
