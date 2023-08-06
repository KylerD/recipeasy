import { XCircleIcon } from "@heroicons/react/24/outline"
import { DietaryRequirement } from "./DietaryRequirement"

export function RecipeBuilder({
  generateRecipe,
  somethingWentWrong,
  setSomethingWentWrong
}: {
  somethingWentWrong: boolean,
  setSomethingWentWrong: (somethingWentWrong: boolean) => void,
  generateRecipe: (e: any) => Promise<void>
}) {
  return (
    <div className="
      flex flex-col items-center
      w-full h-full mx-auto
      text-base-content rounded-box bg-white bg-opacity-80
      max-w-screen-sm lg:max-w-screen-xl mb-4">
      {somethingWentWrong &&
        <button
          className="alert alert-error shadow-lg my-4 flex items-center justify-center max-w-lg"
          onClick={() => setSomethingWentWrong(false)} >
          <div>
            <XCircleIcon className='w-6 h-6' />
            <span>Error! Could not generate recipe</span>
          </div>
        </button>
      }

      <div className="px-2 pt-2">
        <div className="navbar text-primary-content rounded-box">
          <div className="mx-2 flex-1 justify-center md:flex md:justify-start">
            <span className="text-4xl font-bold">
              Recipe Builder
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full py-4 justify-center items-center">
        <form onSubmit={generateRecipe} className="md:w-1/2 lg:w-1/4 flex flex-col items-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">What are you making?</span>
            </label>
            <input
              type="text"
              id="meal"
              name="meal"
              placeholder="Goat Cheese Toast"
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">For how many?</span>
            </label>
            <input
              type="range"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              defaultValue="2"
              step="1"
              className="range range-secondary"
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <label className="label">
              <span className="label-text font-semibold text-lg">Dietary</span>
              <span className='text-gray-500 text-lg'>(optional)</span>
            </label>

            <DietaryRequirement title="Vegan" />
            <DietaryRequirement title="Vegetarian" />
            <DietaryRequirement title="Gluten-Free" />
            <DietaryRequirement title="Dairy-Free" />
            <DietaryRequirement title="Nut-Free" />
            <DietaryRequirement title="Kosher" />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-8 w-full">
            Generate Recipe
          </button>
        </form>
      </div>
    </div>
  )
}