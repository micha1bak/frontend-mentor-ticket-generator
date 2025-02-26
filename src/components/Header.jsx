export function Header({name, email}) {
  return (
    <>
    <header className="w-xs">
      <h1 className="text-center font-bold text-[28px]">Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p className="text-center text-[18px] opacity-60 m-2">Secure your spot at next year's biggest coding conference.</p>
    </header>

    <header className="hidden w-xs">
      <h1 className="text-center font-bold text-[28px]">Congrats, {name} Your ticket is ready.</h1>
      <p className="text-center text-[18px] opacity-60 m-2">We've emailed your ticket to {email} and will send updates in the run up to the event.</p>
    </header>
    </>
  )
}