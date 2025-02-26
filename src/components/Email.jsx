export function Email({handleEmailChange, email}) {
 
  return (
    <div className="w-xs">
      <h3 className="my-2 mt-4">Email Address</h3>
      <input 
        type="email"
        placeholder="example@email.com"
        className="outline outline-solid outline-amber-50/60 rounded-xl w-full p-3 bg-blue-100/5 backdrop-blur-lg"
        onChange={handleEmailChange}
        value={email}
      />
      <div id="errEmail" className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" className="inline"/>
        <span>Please enter a valid email address.</span>
      </div>
    </div>
  )
}