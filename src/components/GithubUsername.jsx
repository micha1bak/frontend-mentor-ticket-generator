export function GithubUsername({handleUsernameChange, username}) {

  return (
    <div className="w-xs">
      <h3 className="py-2 mt-4">Github Username</h3>
      <input 
        type="text" 
        placeholder="@yourusername" 
        className="outline outline-solid outline-amber-50/60 rounded-xl w-full p-3 bg-blue-100/5 backdrop-blur-lg"
        onChange={handleUsernameChange}
        value={username}
      />
      <div id="errUsername" className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" className="inline" />
        <span>Please enter your Github username.</span>
      </div>
    </div>
  )
}