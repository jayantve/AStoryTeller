"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-700 p-4">
      {/* Main Sign-in Card Container */}
      <div className="relative flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full h-auto md:h-[500px]">

        {/* Left Section - Welcome */}
        <div className="relative flex flex-col items-center justify-center p-8 md:p-12 bg-blue-600 text-white w-full md:w-3/5 min-h-[250px] md:min-h-full">
          {/* Abstract circles */}
          <div className="absolute bg-blue-500 rounded-full w-40 h-40 md:w-60 md:h-60 opacity-70 top-[-20px] left-[-20px] md:top-[-50px] md:left-[-50px]"></div>
          <div className="absolute bg-blue-500 rounded-full w-60 h-60 md:w-80 md:h-80 opacity-70 bottom-[-30px] right-[-30px] md:bottom-[-80px] md:right-[-80px]"></div>
          <div className="absolute bg-blue-500 rounded-full w-32 h-32 md:w-48 md:h-48 opacity-70 top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>


          <div className="relative z-10 text-center">
            <img src={session.user.image} alt="logo" className="rounded size-50 jayant-rounded" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Bye {session.user.name}</h2>
            <h2 className="text-2xl md:text-5xl font-bold mb-4"> {session.user.email}</h2>
          </div>
        </div>

        {/* Right Section - Sign In Form */}
        <div className="flex flex-col items-center just p-8 md:p-12 bg-white w-full md:w-2/5">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 w-full text-left">
            Sign Out
          </h2>

          {/* Sign In Button */}
          <div>
            <button
              onClick={() => signOut("github")}
              type="submit"
              className="w-full flex justify-center py-3 px-20 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Sign Out 
            </button>
          </div>

        </div>
      </div>
    </div>
    </>)
  }
  return ( <>
    <div className="min-h-screen flex items-center justify-center bg-blue-700 p-4">
      {/* Main Sign-in Card Container */}
      <div className="relative flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full h-auto md:h-[500px]">

        {/* Left Section - Welcome */}
        <div className="relative flex flex-col items-center justify-center p-8 md:p-12 bg-blue-600 text-white w-full md:w-3/5 min-h-[250px] md:min-h-full">
          {/* Abstract circles */}
          <div className="absolute bg-blue-500 rounded-full w-40 h-40 md:w-60 md:h-60 opacity-70 top-[-20px] left-[-20px] md:top-[-50px] md:left-[-50px]"></div>
          <div className="absolute bg-blue-500 rounded-full w-60 h-60 md:w-80 md:h-80 opacity-70 bottom-[-30px] right-[-30px] md:bottom-[-80px] md:right-[-80px]"></div>
          <div className="absolute bg-blue-500 rounded-full w-32 h-32 md:w-48 md:h-48 opacity-70 top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>


          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">WELCOME</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">YOUR HEADLINE NAME</h3>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed max-w-xs md:max-w-sm mx-auto">
              Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id urna. Fusce convallis metus id felis luctus adipiscing.
            </p>
          </div>
        </div>

        {/* Right Section - Sign In Form */}
        <div className="flex flex-col items-center just p-8 md:p-12 bg-white w-full md:w-2/5">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 w-full text-left">
            Sign in
          </h2>

          {/* Sign In Button */}
          <div>
            <button
              onClick={() => signIn("github")}
              type="submit"
              className="w-full flex justify-center py-3 px-20 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Sign In With Github
            </button>
          </div>

        </div>
      </div>
    </div>
  </>)
}