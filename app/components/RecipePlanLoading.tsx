import { ClockIcon, HeartIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline"

export function RecipePlanLoading() {
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
          <div className="stat-value text-primary uppercase whitespace-normal my-auto animate-pulse">
            <div className="h-2 bg-primary rounded-full max-w-md my-2.5"></div>
            <div className="h-2 bg-primary rounded-full max-w-sm my-2.5"></div>
            <div className="h-2 bg-primary rounded-full max-w-xs my-2.5"></div>
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
            <div className="h-2 bg-secondary rounded-full max-w-sm mb-2.5  animate-pulse"></div>
          </div>
        </div>

        <div className="stat flex flex-col w-full lg:w-2/12">
          <div className="flex flex-row items-center justify-between">
            <div className="stat-title uppercase">Time</div>
            <div className="stat-figure text-primary">
              <ClockIcon className='w-8 h-8' />
            </div>
          </div>
          <div className="stat-value text-secondary uppercase whitespace-normal my-auto break-word">
            <div className="h-2 bg-primary rounded-full max-w-sm mb-2.5  animate-pulse"></div>
          </div>
        </div>

        <div className="stat flex flex-col w-full lg:w-2/12">
          <div className="flex flex-row items-center justify-between">
            <div className="stat-title uppercase">Serves</div>
            <div className="stat-figure text-accent">
              <UserIcon className='w-8 h-8' />
            </div>
          </div>
          <div className="stat-value text-secondary uppercase whitespace-normal my-auto">
            <div className="h-2 bg-accent rounded-full max-w-sm mb-2.5  animate-pulse"></div>
          </div>
        </div>

      </div>

      <div className='flex flex-col lg:flex-row w-full justify-evenly'>
        <div className="card w-full lg:w-96 bg-base-100 shadow-xl lg:mr-4 lg:my-0 mb-4">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Ingredients
            </h2>
            <div className="h-2 bg-secondary rounded-full max-w-sm mb-2.5 animate-pulse"></div>
            <div className="h-2 bg-secondary rounded-full max-w-sm mb-2.5 animate-pulse"></div>
            <div className="h-2 bg-secondary rounded-full max-w-sm mb-2.5 animate-pulse"></div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Method
            </h2>
            <div className="h-2 bg-secondary rounded-full max-w-xl mb-2.5 animate-pulse"></div>
            <div className="h-2 bg-secondary rounded-full max-w-lg mb-2.5 animate-pulse"></div>
            <div className="h-2 bg-secondary rounded-full max-w-md mb-2.5 animate-pulse"></div>
          </div>
        </div>
      </div>

      <p className="text-xl mx-auto mt-4 font-semibold flex items-center">
        Chef is thinking
        <span className="loading loading-dots loading-xl ml-2">
        </span>
      </p>
    </div >
  )
}