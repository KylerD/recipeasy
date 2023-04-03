import Head from 'next/head'
import { ComputerDesktopIcon, LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


export default function Recipe() {
  const generateRecipe = async (e: any) => {
    e.preventDefault();
    const meal = (document.getElementById('meal') as HTMLInputElement).value;
    const quantity = (document.getElementById('quantity') as HTMLInputElement).value;
    const isVegan = (document.getElementById('vegan') as HTMLInputElement).checked;
    const isVegetarian = (document.getElementById('vegetarian') as HTMLInputElement).checked;
    const isGlutenFree = (document.getElementById('glutenFree') as HTMLInputElement).checked;
    const isDairyFree = (document.getElementById('dairyFree') as HTMLInputElement).checked;
    const isNutFree = (document.getElementById('nutFree') as HTMLInputElement).checked;
    const isKosher = (document.getElementById('kosher') as HTMLInputElement).checked;

  }


  return (
    <>
      <Head>
        <title>Recipeasy</title>
        <meta name="description" content="Quick Recipes For Everything" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className='flex flex-col justify-between min-h-screen from-primary to-secondary bg-gradient-to-br  '>
        <div className="from-primary to-secondary text-primary-content flex flex-col">
          <div className="flex flex-col items-start hero-content w-full">
            <div className="p-4 text-center lg:text-left">
              <Link className="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-6xl" href="/">
                Recipeasy 🍔
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full h-full items-center text-base-content bg-white rounded-box sm:max-w-screen-xl bg-opacity-80 mx-auto">
            <div className="px-2 pt-2">
              <div className="navbar text-primary-content rounded-box">
                <div className="mx-2 flex-1 justify-center md:flex md:justify-start">
                  <span className="text-4xl font-bold">Recipe Builder</span>
                </div>
              </div>
            </div>

            <form onSubmit={generateRecipe}>
              <div className="flex flex-col w-full py-4 justify-center items-center">
                <div className="form-control w-full max-w-xs">
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

                <div className="form-control w-full max-w-xs">
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

                <div className='flex flex-col w-full max-w-xs'>
                  <label className="label">
                    <span className="label-text font-semibold text-lg">Dietary Requirements</span>
                    <span className='text-gray-500 text-lg'>(optional)</span>
                  </label>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2 text-base">Vegan</span>
                      <input
                        type="checkbox"
                        id="vegan"
                        name="vegan"
                        className="checkbox checkbox-primary" />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2 text-base">Vegetarian</span>
                      <input
                        type="checkbox"
                        id="vegetarian"
                        name="vegetarian"
                        className="checkbox checkbox-primary" />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2 text-base">Gluten-Free</span>
                      <input
                        type="checkbox"
                        id="glutenFree"
                        name="glutenFree"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2 text-base">Dairy-Free</span>
                      <input
                        type="checkbox"
                        id="dairyFree"
                        name="dairyFree"
                        className="checkbox checkbox-primary" />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2 text-base">Nut-Free</span>
                      <input
                        type="checkbox"
                        id="nutFree"
                        name="nutFree"
                        className="checkbox checkbox-primary" />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2 text-base">Kosher</span>
                      <input
                        type="checkbox"
                        id="kosher"
                        name="kosher"
                        className="checkbox checkbox-primary" />
                    </label>
                  </div>
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                  <label className="label">
                    <span className="label-text font-semibold text-lg">Combinations</span>
                    <span className='text-gray-500 text-lg'>(optional)</span>
                  </label>

                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text text-base">Drink Pairing</span>
                      <input
                        type="checkbox"
                        id="drinkPairing"
                        name="drinkPairing"
                        className="checkbox checkbox-secondary" />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-wide btn-primary my-8">Generate Recipe</button>
              </div>
            </form>

          </div>
        </div>

        <footer className="footer p-10 bg-neutral text-neutral-content flex w-full justify-center">
          <div className='flex flex-col'>
            <div className='flex flex-row space-x-4'>
              <ComputerDesktopIcon className='h-6 w-6' />
              <p>Built by Kyle Davidson</p>
            </div>
            <div className='flex flex-row space-x-4'>
              <LinkIcon className='h-6 w-6' />
              <a href="https://kyled.wtf">Website</a>
            </div>
          </div>
        </footer>
      </main >
    </>
  )
}
