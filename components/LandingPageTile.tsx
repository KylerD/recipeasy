export function LandingPageTile(
  { image, title, description }:
    { image: string, title: string, description: string }) {
  return <div className="card sm:w-64 md:w-80 bg-base-100 shadow-xl m-2">
    <figure className='w-64 mx-auto sm:mx-0 sm:w-full'>
      <img src={image} alt={title} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>
        {description}
      </p>
    </div>
  </div>
}