export function Email() {
  
  return (
    <>
    <h3>Email Address</h3>
      <input type="email" placeholder="example@email.com"/>
      <div className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" />
        <span>Please enter a valid email address.</span>
      </div>
    </>
  )
}