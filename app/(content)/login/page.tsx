import InnerHeader from "@/components/pagetemplates/innerheader/InnerHeader";
import MainChild from "@/components/pagetemplates/mainchild/mainchild";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { getSession, login } from "@/lib/lib";

export default async function Page() {
    const session = await getSession();
    
    return (
        <>
            <InnerHeader>
                <h1 className="text-lg underline">Sign in</h1>
            </InnerHeader>
            <MainChild>
                <div className="flex flex-col items-center">
                    <form
                    action={async (formData) => {
                    "use server";
                    const loggingIn = await login(formData);
                    if (loggingIn === 'Success') {
                        redirect('/dashboard');
                    } else {
                        console.log('Error logging in');
                    }
                    }}
                    className="flex flex-col items-center justify-evenly"
                    >
                        <label className="py-2" htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="rounded-md px-2" placeholder="Email" />
                        <br />
                        <label className="py-2" htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="rounded-md px-2" placeholder="Password" />
                        <br />
                        <button className="my-4 p-2 bg-gray-700 text-white text-sm rounded-md" type="submit">Continue</button>
                    </form>
                    <pre>{JSON.stringify(session, null, 2)}</pre>
                    <div className="flex flex-row justify-around my-4 p-2 text-sm space-x-1">
                        <p className="text-black">
                            Don&apos;t have an account yet? 
                        </p>
                        <Link className="text-sky-700" href="/signup">
                            Create an account here
                        </Link>
                    </div>
                </div>
            </MainChild>
        </>
    );
}