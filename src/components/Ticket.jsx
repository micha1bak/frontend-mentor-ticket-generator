export function Ticket() {

  return (
    <div className="hidden">
      <div className="ticketLeft">

        <div className="ticketLeftUp">
          <img src="assets\images\logo-mark.svg" alt="logo"/>
          <div>
            <h2>Coding Conf</h2>
            <span>[date / location]</span>
          </div>
        </div>

        <div className="ticketLeftDown">
          <img src="assets\images\image-avatar.jpg" alt="avatar"/>
          <div>
            <h2>[Your Name]</h2>
            <div>
              <img src="assets\images\icon-github.svg" alt="github" />
              <span>[Github Username]</span>
            </div>
          </div>
        </div>

      </div>
      <div className="ticketRight">
        <span>#01609</span>
      </div>
    </div>
  )
}