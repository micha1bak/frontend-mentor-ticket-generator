export function Button({handleSubmit}) {

  return (
    <button className="bg-red-300 text-black p-3 w-full my-7 rounded-xl" onClick={handleSubmit}>Generate My Ticket</button>
  )
}