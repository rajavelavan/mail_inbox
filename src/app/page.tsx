import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full p-4 border-b-2 border-gray-500">
        <h1 className="font-bold text-center text-3xl">REACHINBOX</h1>
        {/* <img src= 'https://framerusercontent.com/images/8PWcQZ0bgrpF37lkxEL5GBh1w4s.png' width={150} height={150}/> */}
      </div>
      <div className="w-full mt-52 max-w-sm mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          <h2 className="text-black text-center text-xl mb-6">Create a new account</h2>
          <button
            className="w-full bg-white text-black border-2 hover:border-gray-400 rounded-lg py-2 mb-4 flex items-center justify-center"
          >
            <span className="mr-2"><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width={30} height={40}/></span> {/* You can replace this with a Google icon */}
            Sign Up with Google
          </button>
          <button
            className="w-full bg-blue-600 text-white rounded-lg py-2 mb-4"
          >
            Create an Account
          </button>
          <p className="text-center text-black">
            Already have an account?{' '}
            <a href="/signin" className="font-bold hover:text-blue-400">
              Sign In
            </a>
          </p>
        </div>
      </div>
      <footer className="w-full text-center text-gray-500 text-xs mt-auto p-4">
        © 2023 Reachinbox. All rights reserved.
      </footer>
    </div>
  )
}
