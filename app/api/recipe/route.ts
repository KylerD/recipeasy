import { ChatMessage } from "@/models/chatMessage";
import { Recipe, recipeSchema } from "@/schema/recipeSchema";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

export async function POST(request: Request) {
  type RecipeData = {
    meal: string;
    quantity: string;
    isVegan: boolean;
    isVegetarian: boolean;
    isGlutenFree: boolean;
    isDairyFree: boolean;
    isNutFree: boolean;
    isKosher: boolean;
  };

  const recipeData: RecipeData = await request.json();
  let cookingInstructions = [];

  if (recipeData.isVegan) {
    cookingInstructions.push("This recipe should be vegan");
  }

  if (recipeData.isVegetarian) {
    cookingInstructions.push("This recipe should be vegetarian");
  }

  if (recipeData.isGlutenFree) {
    cookingInstructions.push("This recipe should be gluten free");
  }

  if (recipeData.isDairyFree) {
    cookingInstructions.push("This recipe should be dairy free");
  }

  if (recipeData.isNutFree) {
    cookingInstructions.push("This recipe should be nut free");
  }

  if (recipeData.isKosher) {
    cookingInstructions.push("This recipe should be kosher");
  }

  const dietaryRequirements = cookingInstructions.join(", ");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  let systemPrompt = `Generate a recipe with cooking instructions for ${recipeData.meal}. The recipe should cater for ${recipeData.quantity} people. The recipe should use UK measurements. `;

  if (cookingInstructions.length > 0) {
    systemPrompt += `The recipe should cater for the following dietary requirements: ${dietaryRequirements}. `;
  }

  systemPrompt +=
    "Return the response as JSON object with the following shape: " +
    "{ recipe: 'the recipe for the meal', " +
    "instructions: ['Cooking Instruction 1', 'Cooking Instruction 2']," +
    "ingredients: ['ingredient 1', 'ingredient 2'], " +
    "difficulty: 'easy, medium or hard', " +
    "quantity: 'number of people', " +
    "time: 'number of minutes'} " +
    "Do not return any other information.";

  try {
    const moderation = await openai.createModeration({
      input: systemPrompt,
    });

    const isFlagged = moderation.data.results[0].flagged;
    if (isFlagged) {
      return NextResponse.json({}, { status: 400 });
    }

    const message: ChatMessage[] = [
      {
        role: "system",
        content: systemPrompt,
      },
    ];

    const chatGPT = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message as any,
    });

    if (chatGPT.data.choices[0].message?.content) {
      const output = chatGPT.data.choices[0].message?.content;
      output.replaceAll("\n", "").replaceAll("\\", "");

      const parsedRecipe: Recipe = JSON.parse(output);
      const validatedRecipe = recipeSchema.safeParse(parsedRecipe);

      if (!validatedRecipe.success) {
        return NextResponse.json({}, { status: 500 });
      }

      return NextResponse.json(validatedRecipe.data, { status: 200 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({}, { status: 500 });
  }
}
