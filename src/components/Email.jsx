export function Email() {

  const errorEmailStyles = {
    display: 'none',
  }
  
  return (
    <>
    <h3>Email Address</h3>
    <input type="email" placeholder="example@email.com"/>
    <div className="errorEmail" style={errorEmailStyles}>
      <img src="assets\images\icon-info.svg" alt="info" />
      <span>Please enter a valid email address.</span>
    </div>
    </>
  )
}