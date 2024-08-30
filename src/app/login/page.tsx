'use client';

import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const redirectURL = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://mail-inbox-nine.vercel.app/mail-inbox`;

  const onCreate = () => {
    window.location.href = redirectURL;

    const urlParams = new URLSearchParams(window.location.search);

    console.log(urlParams);

    const jwt = urlParams.get('token');

    console.log('Current URL', window.location.href);
    console.log('token found:', jwt);

    if (jwt) {
      try {
        localStorage.setItem('token', jwt);
        console.log('token stored in local:', jwt);
      } catch (error) {
        console.error('Error in storing the token at local:', error);
      }
    } else {
      console.log('No token is found');
    }
    return jwt;
  };


  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full p-4 border-b-2 border-gray-500">
        <h1 className="font-bold text-center text-3xl">REACHINBOX</h1>
      </div>

      <div className="w-full mt-52 max-w-sm mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          <h2 className="text-black text-center text-xl mb-6">
            Create a new account
          </h2>

          <button
            className="w-full bg-white text-black border-2 hover:border-gray-400 rounded-lg py-2 mb-4 flex items-center justify-center"
            onClick={() => onCreate()}
          >
            <span className="mr-2">
              <picture>
                <source srcSet="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
                <img
                  alt="Google-logo"
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  width={30}
                  height={40}
                />
              </picture>
            </span>{' '}
            {/* You can replace this with a Google icon x*/}
            Sign Up with Google
          </button>

          <button
            className="w-full bg-blue-600 text-white rounded-lg py-2 mb-4 hover:ring-2"
            onClick={() => onCreate()}
          >
            Create an Account
          </button>

          <h2 className="flex gap-2 text-center text-black">
            Already have an account?{' '}
            <a href='#' className="font-bold hover:text-blue-400">Sign In</a>
          </h2>
        </div>
      </div>

      <footer className="w-full text-center text-gray-500 text-xs mt-auto p-4">
        © 2023 Reachinbox. All rights reserved.
      </footer>
    </div>
  );
}
