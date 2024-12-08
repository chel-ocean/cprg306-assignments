"use client";
import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
    }

    const logout = async () => {
        await firebaseSignOut();
    }

    return (
        <main className="flex h-screen">
            <div className="m-auto">
                <h1 className="text-3xl font-bold text-center">Login Page</h1>
                <div className="p-3">
                    {user ? (
                        <div className="text-center">
                            <p>Welcome, {user.displayName}!</p>
                            <button className="bg-gray-500 p-2 rounded-md hover:bg-gray-400 mt-2" onClick={logout}>Logout</button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <button className="bg-gray-500 p-2 rounded-md hover:bg-gray-400" onClick={login} >Login with GitHub</button>
                        </div>
                    )}
                </div>
                <div className="text-center">
                    <Link className="text-blue-600 hover:bg-opacity-80 bg-white p-2 rounded-md" href="week-9/shopping-list">Go to Shopping List</Link>
                </div>
            </div>
           
        </main>
    )

}