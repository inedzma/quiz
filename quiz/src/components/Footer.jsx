import React from "react";

export const Footer = () => {
  return (
    <>
    

<footer className="bg-black bg-opacity-90 shadow-sm mt-auto brounded-lg ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://formula1.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/src/assets/F1-Logo.png" className="h-24" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Formula 1</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-red-500 sm:mb-0 dark:text-red-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-red-900 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://formula1.com/"  className="hover:underline">Formula 1™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </>
  )
}