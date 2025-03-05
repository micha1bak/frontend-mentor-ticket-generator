export function Email({handleEmailChange, email}) {
 
  return (
    <div id="emailContainer" className="w-full">
      <h3 className="my-2 mt-4 md:text-[20px] lg:text-2xl opacity-70 font-bold">Email Address</h3>
      <input 
        id="email"
        type="email"
        placeholder="example@email.com"
        className="outline outline-solid outline-amber-50/60 rounded-xl w-full p-3 bg-blue-100/5 backdrop-blur-lg"
        onChange={handleEmailChange}
        value={email}
      />
      <div id="errEmail" className="hidden my-1">
        <img src="assets\images\icon-info.svg" alt="info" className="inline"/>
        <span className="text-red-400! text-[10px] px-2">Please enter a valid email address.</span>
      </div>
    </div>
  )
}