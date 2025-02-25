export function Name() {

  const errorNameStyles = {
    display: 'none',
  }
  
  return (
    <div>
    <h3>Full Name</h3>
    <input type="text" />
      <div className="errorName" style={errorNameStyles}>
        <img src="assets\images\icon-info.svg" alt="info" />
        <span>Please enter your full name.</span>
      </div>
    </div>
  )
}