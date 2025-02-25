export function Ticket() {
  return (
    <div className="ticket">
      <div className="ticketLeft">

        <div className="ticketLeftUp">
          <img src="assets\images\logo-mark.svg" alt="logo"/>
          <div>
            <h2>Coding Conf</h2>
            <p>[date / location]</p>
          </div>
        </div>

        <div className="ticketLeftDown">
          <img src="assets\images\image-avatar.jpg" alt="avatar"/>
          <div>
            <h2>[Your Name]</h2>
            <div>
              <img src="assets\images\icon-github.svg" alt="github" />
              <p>[Github Username]</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}