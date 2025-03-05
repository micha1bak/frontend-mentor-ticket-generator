export function GithubUsername({handleUsernameChange, username}) {

  return (
    <div id="usernameContainer" className="w-full my-4">
      <h3 className="py-2 mt-4 md:text-[20px] lg:text-2xl opacity-70 font-bold">Github Username</h3>
      <input 
        id="username"
        type="text" 
        placeholder="@yourusername" 
        className="outline outline-solid outline-amber-50/60 rounded-xl w-full p-3 bg-blue-100/5 backdrop-blur-lg"
        onChange={handleUsernameChange}
        value={username}
      />
      <div id="errUsername" className="hidden my-1">
        <img src="assets\images\icon-info.svg" alt="info" className="inline" />
        <span className="text-red-400! text-[10px] px-2">Please enter your Github username.</span>
      </div>
    </div>
  )
}