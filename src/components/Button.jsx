export function Button({handleSubmit}) {

  return (
    <button id="button" className="
      bg-button-orange 
      hover:bg-button-orange-hover
      hover:cursor-pointer
      p-3 w-full my-10 rounded-xl"
      onClick={handleSubmit}>
        <span className="text-black! font-bold">Generate My Ticket</span>
    </button>
  )
}