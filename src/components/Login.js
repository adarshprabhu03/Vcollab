import React from 'react';

export default function Login() {
  const handleLoginWithGoogle = () => {
    // Handle login with Google logic here
    console.log('Logging in with Google...');
  };

  return (
    <div className="flex flex-col h-screen">
      
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-8 space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold">Login with Google</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Click below to sign in with your Google account
            </p>
          </div>
          <div className="space-y-4">
            <button
              className="w-full bg-gray-800 text-white rounded-md py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={handleLoginWithGoogle}
            >
              Login with Google
            </button>
          </div>
        </div>
      </main>
      <footer className="mt-auto border-t">
        <div className="container flex flex-col items-center py-4 space-y-2 text-center">
          <h1 className="font-bold">VCollab</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Innovate, Collaborate, Dominate!</p>
        </div>
      </footer>
    </div>
  );
}
