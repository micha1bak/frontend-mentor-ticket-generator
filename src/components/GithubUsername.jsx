export function GithubUsername({handleUsernameChange, username}) {

  return (
    <div>
      <h3>Github Username</h3>
      <input 
        type="text" 
        placeholder="@yourusername" 
        className="border border-solid border-white rounded-md"
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