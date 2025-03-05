export function Name({handleNameChange, name}) {

  return (
    <div id="nameContainer" className="w-full my-4">
      <h3 className="my-2 mt-4 md:text-[20px] lg:text-2xl opacity-70 font-bold">Full Name</h3>
      <input 
        id="name" 
        type="text" 
        placeholder="Your full name"
        className="outline outline-solid outline-amber-50/60 rounded-xl w-full p-3 bg-blue-100/5 backdrop-blur-lg" 
        onChange={handleNameChange}
        value={name}
      />

      <div id="errName" className="hidden my-1">
        <img src="assets\images\icon-info.svg" alt="info" className="inline"/>
        <span className="text-red-400! text-[10px] px-2">Please enter your full name.</span>
      </div>
    </div>
  )
}