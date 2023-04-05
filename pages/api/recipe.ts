// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ChatMessage } from '@/models/chatMessage';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai';

type RecipeData = {
  meal: string
  quantity: string
  isVegan: boolean
  isVegetarian: boolean
  isGlutenFree: boolean
  isDairyFree: boolean
  isNutFree: boolean
  isKosher: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method !== "POST") {
    return res.status(400);
  }

  const recipeData: RecipeData = req.body
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

  const message: ChatMessage[] = [{
    role: 'system',
    content: `I want you to help me generate a recipe with cooking instructions for ${recipeData.meal}. ` +
      `The recipe should cater for ${recipeData.quantity} people. ` +
      `The recipe should cater for the following dietary requirements: ${dietaryRequirements}. ` +
      "You will act as an API with your responses being the output of the API. " +
      "You will return your responses in a consistent JSON format with the following structure: " +
      "{ recipe: 'the recipe for the meal', " +
      "instructions: ['Cooking Instruction 1', 'Cooking Instruction 2', etc]," +
      "ingredients: ['ingredient 1', 'ingredient 2', etc], " +
      "difficulty: 'easy, medium or hard', " +
      "quantity: 'how many people the meal serves', " +
      "time: 'the time it takes to cook the meal in minutes'} " +
      "Include both kilograms and lbs in the ingredients. " +
      "Do not return any other information"
  }]

  const chatGPT = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: message as any
  })

  if (chatGPT.data.choices[0].message?.content) {
    try {
      const output = chatGPT.data.choices[0].message?.content;
      console.log(output);

      output.replaceAll("\n", "").replaceAll("\\", "");

      const parsedOutput = JSON.parse(output);
      return res.status(200).json(parsedOutput);
    } catch (err) {
      console.log(err);
      return res.status(500).end();
    }
  }

  return res.status(200).end();
}
