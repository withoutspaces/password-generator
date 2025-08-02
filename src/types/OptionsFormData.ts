import type z from "zod";
import type { optionsSchema } from "../schemas/optionsSchema";

export type OptionsFormData = z.infer<typeof optionsSchema>;
