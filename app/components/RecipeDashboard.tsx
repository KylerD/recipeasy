"use client";

import { RecipeResponse } from "@/models/recipeResponse";
import { useState } from "react";
import { RecipePlan } from "./RecipePlan";
import { RecipePlanLoading } from "./RecipePlanLoading";
import { RecipeBuilder } from "./RecipeBuilder";

export function RecipeDashboard() {
  const [generatingRecipe, setGeneratingRecipe] = useState(false);
  const [somethingWentWrong, setSomethingWentWrong] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<RecipeResponse>();

  const generateRecipe = async (e: any) => {
    e.preventDefault();

    setGeneratingRecipe(true);
    setSomethingWentWrong(false);
    setGeneratedRecipe(undefined);

    const meal = (document.getElementById('meal') as HTMLInputElement).value;
    const quantity = (document.getElementById('quantity') as HTMLInputElement).value;
    const isVegan = (document.getElementById('vegan') as HTMLInputElement).checked;
    const isVegetarian = (document.getElementById('vegetarian') as HTMLInputElement).checked;
    const isGlutenFree = (document.getElementById('gluten-free') as HTMLInputElement).checked;
    const isDairyFree = (document.getElementById('dairy-free') as HTMLInputElement).checked;
    const isNutFree = (document.getElementById('nut-free') as HTMLInputElement).checked;
    const isKosher = (document.getElementById('kosher') as HTMLInputElement).checked;

    const recipeResp = await fetch('/api/recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        meal,
        quantity,
        isVegan,
        isVegetarian,
        isGlutenFree,
        isDairyFree,
        isNutFree,
        isKosher
      })
    });

    setGeneratingRecipe(false);

    if (recipeResp.ok) {
      const recipe = await recipeResp.json();
      setGeneratedRecipe(recipe);
    } else {
      setSomethingWentWrong(true);
    }
  }

  const recommendRecipe = async (e: any) => {
    e.preventDefault();

    setGeneratingRecipe(true);
    setSomethingWentWrong(false);
    setGeneratedRecipe(undefined);

    const quantity = (document.getElementById('quantity') as HTMLInputElement).value;
    const isVegan = (document.getElementById('vegan') as HTMLInputElement).checked;
    const isVegetarian = (document.getElementById('vegetarian') as HTMLInputElement).checked;
    const isGlutenFree = (document.getElementById('gluten-free') as HTMLInputElement).checked;
    const isDairyFree = (document.getElementById('dairy-free') as HTMLInputElement).checked;
    const isNutFree = (document.getElementById('nut-free') as HTMLInputElement).checked;
    const isKosher = (document.getElementById('kosher') as HTMLInputElement).checked;

    const recipeResp = await fetch('/api/recipe/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity,
        isVegan,
        isVegetarian,
        isGlutenFree,
        isDairyFree,
        isNutFree,
        isKosher
      })
    });

    setGeneratingRecipe(false);

    if (recipeResp.ok) {
      const recipe = await recipeResp.json();
      setGeneratedRecipe(recipe);
    } else {
      setSomethingWentWrong(true);
    }
  }

  const clearGeneratedRecipe = () => {
    setGeneratedRecipe(undefined);
  }

  return (
    <main
      className='flex flex-col justify-between min-h-screen from-primary to-secondary bg-gradient-to-br'>
      <div className="from-primary to-secondary text-primary-content flex flex-col mx-2 sm:mx-0">
        <div className="flex flex-col lg:items-start hero-content w-full">
          <div className="p-4 text-center lg:text-left">
            <p className="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Recipeasy 🍔
            </p>
          </div>
        </div>

        {!generatingRecipe && !generatedRecipe &&
          <RecipeBuilder
            generateRecipe={generateRecipe}
            recommendRecipe={recommendRecipe}
            somethingWentWrong={somethingWentWrong}
            setSomethingWentWrong={setSomethingWentWrong}
          />
        }

        {generatingRecipe &&
          <RecipePlanLoading />
        }

        {generatedRecipe &&
          <RecipePlan
            generatedRecipe={generatedRecipe}
            clearGeneratedRecipe={clearGeneratedRecipe}
          />
        }
      </div>
    </main >
  )
}