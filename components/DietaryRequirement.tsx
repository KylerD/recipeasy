export function DietaryRequirement({ title }: { title: string }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text mr-2 text-base">{title}</span>
        <input
          type="checkbox"
          id={title.toLowerCase()}
          name={title.toLowerCase()}
          className="checkbox checkbox-primary" />
      </label>
    </div>
  )
}