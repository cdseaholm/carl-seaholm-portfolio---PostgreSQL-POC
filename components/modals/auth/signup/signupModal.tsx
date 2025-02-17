'use client'

import { useModalContext } from "@/app/context/modal/modalContext";
import useMediaQuery from "@/components/listeners/WidthSettings";
import Link from "next/link";

export default function ModalSignUp() {

    const isBreakpoint = useMediaQuery(768);
    const textSize = isBreakpoint ? 'text-xs' : 'text-sm';
    const { modalSignUpOpen, setModalSignUpOpen, handleSignUpSubmit, swapAuthDesire } = useModalContext();

    return (
        <>
        <div id="crud-modal" tabIndex={-1} aria-hidden="true" className={`${modalSignUpOpen ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className={`${isBreakpoint ? '' : 'text-lg'} font-semibold text-gray-900 dark:text-white`}>
                            Sign Up
                        </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" onClick={() => setModalSignUpOpen(false)}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                    </div>
                    <form className="p-4 md:p-5" onSubmit={handleSignUpSubmit}>
                        <div className="grid gap-4 mb-6 grid-cols-2">
                            <label htmlFor="signupEmail" className={`block my-2 ${textSize} font-medium text-gray-900 dark:text-white`}>Email*</label>
                            <input type="email" name="signupEmail" id="signupEmail" autoComplete='email' className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${textSize}`} placeholder="Email" required/>

                            <label htmlFor="signupPassword" className={`block my-2 ${textSize} font-medium text-gray-900 dark:text-white`}>Password*</label>
                            <input type="password" name="signupPassword" id="signupPassword" autoComplete='current-password' className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${textSize}`} placeholder="Password" required/>

                            <label htmlFor="username" className={`block my-2 ${textSize} font-medium text-gray-900 dark:text-white`}>Username</label>
                            <input type="text" name="username" id="username" autoComplete='username' className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${textSize}`} placeholder="Username/Name" required/>
                            
                            <label htmlFor="blogsub" className={`block my-2 ${textSize} font-medium text-gray-900 dark:text-white`}>Subscribe to Blog?</label>
                            <div className="flex flex-row justify-end">
                                <input type="checkbox" name="blogsub" id="blogsub" className={`bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-1/8 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${textSize}`}/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <button type="submit" className={`text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg ${textSize} px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                Sign Up
                            </button>
                        </div>
                        <div className="flex flex-row justify-around my-4 p-2 text-sm space-x-1">
                            <p className="text-black">
                                Already have an account yet? 
                            </p>
                            <div className="text-sky-700 cursor-pointer" onClick={swapAuthDesire}>
                                Sign in here
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        </>
    )
}