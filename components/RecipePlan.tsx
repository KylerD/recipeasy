import { RecipeResponse } from "@/models/recipeResponse"
import { ClockIcon, HeartIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline"

export function RecipePlan(
  {
    generatedRecipe,
    clearGeneratedRecipe
  }: {
    generatedRecipe: RecipeResponse,
    clearGeneratedRecipe: () => void
  }) {

  return (
    <div className="flex flex-col
            w-full h-full 
            text-base-content bg-white rounded-box 
            max-w-screen-sm lg:max-w-screen-xl 
            bg-opacity-80
            mx-auto my-8 p-4">

      <div className="stats shadow my-4 flex items-stretch flex-col lg:flex-row">
        <div className="stat flex flex-col w-full lg:w-6/12">
          <div className="flex flex-row items-center justify-between">
            <div className="stat-title uppercase">Meal</div>
            <div className="stat-figure text-primary">
              <HeartIcon className='w-8 h-8' />
            </div>
          </div>
          <div className="stat-value text-primary uppercase whitespace-normal my-auto">
            {generatedRecipe.recipe}
          </div>
        </div>

        <div className="stat flex flex-col w-full lg:w-2/12">
          <div className="flex flex-row items-center justify-between">
            <div className="stat-title uppercase">Difficulty</div>
            <div className="stat-figure text-secondary">
              <StarIcon className='w-8 h-8' />
            </div>
          </div>
          <div className="stat-value text-secondary uppercase whitespace-normal my-auto">
            {generatedRecipe.difficulty}
          </div>
        </div>

        <div className="stat flex flex-col w-full lg:w-2/12">
          <div className="flex flex-row items-center justify-between">
            <div className="stat-title uppercase">Time</div>
            <div className="stat-figure text-secondary">
              <ClockIcon className='w-8 h-8' />
            </div>
          </div>
          <div className="stat-value text-secondary uppercase whitespace-normal my-auto break-word">
            {generatedRecipe.time}
          </div>
        </div>

        <div className="stat flex flex-col w-full lg:w-2/12">
          <div className="flex flex-row items-center justify-between">
            <div className="stat-title uppercase">Serves</div>
            <div className="stat-figure text-secondary">
              <UserIcon className='w-8 h-8' />
            </div>
          </div>
          <div className="stat-value text-secondary uppercase whitespace-normal my-auto">
            {generatedRecipe.quantity}
          </div>
        </div>

      </div>

      <div className='flex flex-col lg:flex-row w-full justify-evenly'>
        <div className="card w-full lg:w-96 bg-base-100 shadow-xl lg:mr-4 lg:my-0 mb-4">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Ingredients
            </h2>
            {generatedRecipe && generatedRecipe.ingredients.map((ingredient: string, idx: number) => {
              return <p key={idx} className='text-lg'>
                {ingredient}
              </p>
            })}
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Method
            </h2>
            {generatedRecipe && generatedRecipe.instructions.map((instruction: string, idx: number) => {
              return <p key={idx} className='text-lg'>
                {instruction}
              </p>
            })}
          </div>
        </div>
      </div>

      <button
        onClick={() => clearGeneratedRecipe()}
        className="btn btn-primary mt-4 lg:text-lg" >New Recipe</button>
    </div >
  )
}