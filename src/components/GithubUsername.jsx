export function GithubUsername() {

  const errorGithubUsernameStyles = {
    display: 'none',
  }

  return (
    <div>
      <h3>Github Username</h3>
      <input type="text" placeholder="@yourusername" />
      <div className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" />
        <span>Please enter your Github username.</span>
      </div>
    </div>
  )
}