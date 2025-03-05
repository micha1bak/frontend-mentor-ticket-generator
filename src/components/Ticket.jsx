export function Ticket({avatar, name, username, formatedDate}) {

  return (
    <div id="ticket" className="
      aspect-[600/280]
      hidden w-full bg-cover bg-center bg-no-repeat
      bg-[url(/public/assets/images/pattern-ticket.svg)]
      items-center my-20
    ">
      <div className="flex flex-col h-full justify-between w-[80%]">

        <div className="flex justify-between w-full h-[50%]">
          <div className="w-[25%] flex justify-center items-center">
            <img className="md:w-14 md:h-14 lg:w-20 lg:h-20" src="assets\images\logo-mark.svg" alt="logo"/>
          </div>
          
          <div className="w-[75%] mt-2 md:mt-3 lg:mt-5">
            <h2 className="h-[50%] font-bold text-2xl md:text-3xl lg:text-5xl">Coding Conf</h2>
            <span className="h-[50%] opacity-60 text-sm md:text-[15px] lg:text-xl">{formatedDate + " / Austin, TX"}</span>
          </div>
        </div>

        <div className="flex w-full h-[50%]">
          <div className="flex items-center justify-center w-[27%]">
           <img className="w-13 h-13 rounded-lg md:w-15 md:h-15 lg:w-20 lg:h-20" src={avatar} alt="avatar"/>
          </div>
          <div className="flex flex-col w-[73%] justify-between py-3 h-[90%]">
            <h2 className="text-xl md:text-3xl md:pt-2 lg:text-4xl lg:pt-4">{name}</h2>
            <a href={"https://github.com/" + username} 
            target="_blank">
            <label className="flex cursor-pointer">
              <img id="githubLink"
              className="w-4 md:pb-1 lg:pb-2"
              src="assets\images\icon-github.svg" alt="github" />
              <span className="pl-1 text-[12px] opacity-60 md:pb-1 md:text-[16px] lg:pb-2 lg:text-xl">{username}</span>
            </label>
            </a>
          </div>
        </div>

      </div>

      <div className="
        flex justify-center items-center 
        w-[20%] h-full opacity-50
      ">
        <span className="
          [writing-mode:vertical-rl]
          text-xl md:text-2xl lg:text-3xl
        ">#01609</span>
      </div>

    </div>
  )
}