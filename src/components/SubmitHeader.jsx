export function SubmitHeader() {

  const submitHeaderStyles = {
    display: 'none',
  }

  return (
    <div style={submitHeaderStyles}>
      <h1>Congrats, [Full Name] Your ticket is ready.</h1>
      <p>We've emailed your ticket to [Email Address] and will send updates in the run up to the event.</p>
    </div>
  )
}