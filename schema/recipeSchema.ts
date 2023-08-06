import { z } from "zod";

export const recipeSchema = z.object({
  recipe: z.string(),
  instructions: z.array(z.string()),
  ingredients: z.array(z.string()),
  difficulty: z.string(),
  quantity: z.string(),
  time: z.string(),
});

export type Recipe = z.infer<typeof recipeSchema>;
