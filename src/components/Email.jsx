export function Email({handleEmailChange, email}) {
 
  return (
    <div>
      <h3>Email Address</h3>
      <input 
        type="email"
        placeholder="example@email.com"
        className="border border-solid border-white rounded-md"
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