// NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar({ isLoggedIn }) {
  return (
    <header className="flex items-center justify-between h-16 px-4 border-b">
      <NavLink to="/" className="font-bold text-xl text-black">Project Collaborator</NavLink>
      <nav className="hidden md:flex items-center gap-4">
        {isLoggedIn && ( // Show navigation links if logged in
          <>
            <NavLink className="text-gray-500 dark:text-gray-400" to="/projects">
              Projects
            </NavLink>
            <NavLink className="text-gray-500 dark:text-gray-400" to="/teams">
              Teams
            </NavLink>
            <NavLink className="text-gray-500 dark:text-gray-400" to="/tasks">
              Tasks
            </NavLink>
            <NavLink className="text-gray-500 dark:text-gray-400" to="/messages">
              Messages
            </NavLink>
            <NavLink className="text-gray-500 dark:text-gray-400" to="/live-projects">
              View Live Projects
            </NavLink>
          </>
        )}
      </nav>
      <div className="flex items-center gap-4">
        {!isLoggedIn && ( // Show sign-up button if not logged in
          <NavLink className="bg-white text-black hover:bg-gray-100 py-2 px-4 rounded-md focus:outline-none" to="/login">
            Sign Up
          </NavLink>
        )}
        {isLoggedIn && ( // Show profile and profile page buttons if logged in
          <>
            <NavLink className="bg-white text-black py-2 px-4 rounded-md focus:outline-none" to="/notifications">
              Notifications
            </NavLink>
            <NavLink className="bg-white text-black py-2 px-4 rounded-md focus:outline-none" to="/profile">
              Profile
            </NavLink>
            <NavLink className="bg-white text-black py-2 px-4 rounded-md focus:outline-none" to="/editprofile">
              Profile Page
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}
