import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import { RecipeBuilder } from '@/components/RecipeBuilder';
import { RecipeResponse } from '@/models/recipeResponse';
import { RecipePlan } from '@/components/RecipePlan';
import { Footer } from '@/components/Footer';
import { RecipeGenerating } from '@/components/RecipeGenerating';


export default function Recipe() {
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

  const clearGeneratedRecipe = () => {
    setGeneratedRecipe(undefined);
  }

  return (
    <>
      <Head>
        <title>Recipeasy</title>
        <meta name="description" content="Quick Recipes For Everything" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:image" content="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main
        className='flex flex-col justify-between min-h-screen from-primary to-secondary bg-gradient-to-br'>
        <div className="from-primary to-secondary text-primary-content flex flex-col mx-2 sm:mx-0">
          <div className="flex flex-col lg:items-start hero-content w-full">
            <div className="p-4 text-center lg:text-left">
              <Link className="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-6xl" href="/">
                Recipeasy 🍔
              </Link>
            </div>
          </div>

          {!generatingRecipe && !generatedRecipe &&
            <RecipeBuilder
              generateRecipe={generateRecipe}
              somethingWentWrong={somethingWentWrong}
              setSomethingWentWrong={setSomethingWentWrong}
            />
          }

          {generatingRecipe &&
            <RecipeGenerating />
          }

          {generatedRecipe &&
            <RecipePlan
              generatedRecipe={generatedRecipe}
              clearGeneratedRecipe={clearGeneratedRecipe}
            />
          }
        </div>

        <Footer />
      </main >
    </>
  )
}
