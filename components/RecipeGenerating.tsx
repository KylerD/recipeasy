export function RecipeGenerating() {
  return (
    <div className="
          flex flex-col items-center
          w-full h-full mx-auto
          text-base-content rounded-box bg-white bg-opacity-80
          max-w-screen-sm lg:max-w-screen-xl">
      <div className="px-2 pt-2">
        <div className="navbar text-primary-content rounded-box">
          <div className="mx-2 flex-1 justify-center md:flex md:justify-start">
            <span className="text-4xl font-bold">
              Recipe Building...
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full py-4 justify-center items-center">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </div>
  )
}