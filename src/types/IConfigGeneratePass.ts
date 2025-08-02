export type IConfigGeneratePass = {
  length: number;
  lowercase: boolean | true;
  uppercase: boolean | false;
  numbers: boolean | false;
  symbols: boolean | false;
  requireEach: boolean | true;
};
