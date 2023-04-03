import Head from 'next/head'
import { CheckCircleIcon, ComputerDesktopIcon, LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { LandingPageTile } from '@/components/LandingPageTile'


export default function Home() {
  return (
    <>
      <Head>
        <title>Recipeasy</title>
        <meta name="description" content="Quick Recipes For Everything" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20">
          <div className="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row lg:items-end lg:gap-0 xl:gap-20">
            <div className="lg:pl-10 lg:pb-24">
              <div className="mb-2 py-4 text-center lg:py-4 lg:text-left">
                <h1 className="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-6xl ">
                  Recipeasy 🍔
                </h1>
                <h2 className="font-title text-lg font-extrabold sm:text-xl lg:text-2xl">
                  The AI-Powered Recipe Builder for Home Cooks and Food Enthusiasts
                </h2>
              </div>

              <div className="my-2 flex max-w-sm flex-col gap-2 text-left">
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6" />
                  AI-Powered Recipe Creation
                </div>
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6" />
                  Personalized Recommendations
                </div>
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6" />
                  Ingredient Substitutions
                </div>
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6" />
                  Dietary Accommodations
                </div>
              </div>

              <p className='mt-4'>
                Discover the joy of cooking with Recipeasy, your personal AI-powered recipe builder. Say goodbye to recipe block and explore a world of culinary creativity tailored to your unique tastes and preferences.
              </p>

              <div className="mt-4 flex flex-1 justify-center space-x-2 lg:mt-6 lg:justify-start">
                <Link href="/recipe" className='btn  btn-active lg:btn-lg normal-case'>
                  Get Started with Recipeasy
                </Link>

              </div>
            </div>
          </div>
          <svg className="fill-secondary col-start-1 row-start-1 h-auto w-full" width="1600" height="595" viewBox="0 0 1600 595" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path>
          </svg>
        </div>

        <div className="bg-base-200 flex flex-col items-center gap-20 py-20 md:mx-4">
          <div className="flex flex-col w-full items-center text-base-content glass xl:rounded-box -mt-48 sm:max-w-screen-xl gap-4 bg-opacity-60 pb-4">
            <div className="px-2 pt-2">
              <div className="navbar text-primary-content rounded-box space-x-1">
                <div className="mx-2 flex-1 justify-center px-2 md:flex md:justify-start">
                  <span className="text-2xl font-bold">Key Features</span>
                </div>
              </div>
            </div>

            <div className="
            flex flex-col w-full px-4 justify-center items-center
            sm:flex-row sm:flex-wrap sm:items-stretch
            md:flex-wrap
            lg:flex-nowrap">
              <LandingPageTile
                title="Personalized Recommendations"
                description="Discover new and delicious recipes curated just for you, based on your favorite ingredients, and desired meal types."
                image="/images/steak.png" />

              <LandingPageTile
                title="Ingredient Substitutions"
                description="Not sure what to do with what's in your pantry? Recipeasy can help you make the most of your ingredients by suggesting creative substitutions and alternatives."
                image="/images/pantry.png" />

              <LandingPageTile
                title="Dietary Accommodations"
                description="Recipeasy can help you find recipes that fit your dietary needs, whether you're looking for a vegan, vegetarian, or gluten-free meal."
                image="/images/bread.png" />

              <LandingPageTile
                title="Beverage Pairing"
                description="Elevate your dining experience with Recipeasy's intelligent drink pairing suggestions. Our AI not only crafts delicious recipes but also recommends the perfect beverage to complement your meal."
                image="/images/fish.png" />

            </div>
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
