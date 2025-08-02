import z from "zod";

export const optionsSchema = z.object({
  uppercase: z.boolean(),
  lowercase: z.boolean(),
  numbers: z.boolean(),
  symbols: z.boolean(),
  length: z.string(),
});
