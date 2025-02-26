export function Name({handleNameChange, name}) {

  return (
    <div>
      <h3>Full Name</h3>
      <input 
        id="name" 
        type="text" 
        className="border border-solid border-white rounded-md" 
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