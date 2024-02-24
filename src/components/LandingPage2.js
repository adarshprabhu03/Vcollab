import React from 'react';
import Link from './ui/Link';
import MountainIcon from './ui/MountainIcon';
import Input from './ui/Input';
import Button from './ui/Button';

const LandingPage = () => {
    return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#" text={<MountainIcon className="h-6 w-6" />}></Link>
        <span className="sr-only">Acme Inc</span>

        <nav className="ml-auto flex gap-4 sm:gap-8">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#Features" text={"Features"}>
            
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" text={"About"}>
            
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" text={"Contact"}>
            
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" text={"Login"}>
            
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to the Platform</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The complete platform for building the Web
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1 px-4 rounded-md" placeholder="Enter your email" type="email" />
                <Button className="bg-black hover:bg-black text-white py-2 px-4 rounded-md" type="submit" text={"Sign Up"}/>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#" text={"  Terms & Conditions"}/>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
              <Input className="max-w-lg flex-1 px-4 rounded-md" placeholder="Enter your email" type="email" />
                <Button className="bg-black hover:bg-black text-white py-2 px-4 rounded-md" type="submit" text={"Sign Up"}/>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#" text={"  Terms & Conditions"}/>
                  
              </p>
            </div>
          </div>
        </section>
        <section id='Features' className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-2 px-4 text-center md:px-6 ">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">New Features</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the latest features that enhance your workflow.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-3 justify-center">
              <div className="p-4 bg-gray-200 rounded-lg ">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-gray-600">
                  Make collaboration seamless with built-in code review tools.
                </p>
              </div>
              <div className="p-4 bg-gray-200 rounded-lg">
                <h3 className="text-xl font-bold">Automation</h3>
                <p className="text-gray-600">
                  Automate your workflow with continuous integration and delivery.
                </p>
              </div>
              <div className="p-4 bg-gray-200 rounded-lg">
                <h3 className="text-xl font-bold">Scalability</h3>
                <p className="text-gray-600">
                  Scale your projects effortlessly with cloud deployment options.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AJA Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#" text={"Terms of Service"}/>
            
          
          <Link className="text-xs hover:underline underline-offset-4" href="#" text={"Privacy"}/>
            
          
        </nav>
      </footer>
    </div>
    );
}

export default LandingPage;

