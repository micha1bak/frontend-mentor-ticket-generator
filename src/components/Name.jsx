export function Name({handleNameChange, name}) {

  return (
    <div className="w-xs">
      <h3 className="my-2 mt-4">Full Name</h3>
      <input 
        id="name" 
        type="text" 
        placeholder="Your full name"
        className="outline outline-solid outline-amber-50/60 rounded-xl w-full p-3 bg-blue-100/5 backdrop-blur-lg" 
        onChange={handleNameChange}
        value={name}
      />

      <div id="errName" className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" className="inline"/>
        <span>Please enter your full name.</span>
      </div>
    </div>
  )
}