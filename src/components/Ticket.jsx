export function Ticket({avatar, name, username, formatedDate}) {

  return (
    <div id="ticket" className="
      hidden w-xs h-[149px] bg-cover bg-center bg-no-repeat
      bg-[url(assets/images/pattern-ticket.svg)]
      items-center justify-between
    ">
      <div className="flex flex-col h-full justify-between">

        <div className="flex justify-between w-[260px] h-[75.5px]">
          <div className="w-[40px] mt-3 ml-3">
            <img className="w-8 h-8" src="assets\images\logo-mark.svg" alt="logo"/>
          </div>
          
          <div className="w-[210px] mt-2">
            <h2 className="font-bold text-2xl">Coding Conf</h2>
            <span className="opacity-60 text-sm">{formatedDate + " / "}<span id="location"></span></span>
          </div>
        </div>

        <div className="flex w-[260px] h-[75.5px]">
          <div className="flex items-center justify-center w-[74.5px]">
           <img className="w-13 h-13 rounded-lg" src={avatar} alt="avatar"/>
          </div>
          <div className="flex flex-col w-[185.5px] justify-between py-3">
            <h2 className="font-bold text-xl">{name}</h2>
            <a href={"https://github.com/" + username} 
            target="_blank">
            <label className="flex cursor-pointer">
              <img id="githubLink"
              className="w-4"
              src="assets\images\icon-github.svg" alt="github" />
              <span className="pl-1 text-[12px] opacity-60">{username}</span>
            </label>
            </a>
          </div>
        </div>

      </div>

      <div className="
        flex justify-center items-center 
        w-[60px] h-[149px] opacity-50
      ">
        <span className="
          [writing-mode:vertical-rl]
          text-xl
        ">#01609</span>
      </div>

    </div>
  )
}