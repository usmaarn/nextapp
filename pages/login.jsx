import { useState } from "react";
import axios from "axios";


function page() {

    return (
        <div className="flex w-screen h-screen items-center justify-center">
            <form action="api/login" method="post" className="flex flex-col gap-3" >
                <input type="text" name="username" className="p-3 border"
                    placeholder="username" required />
                <input type="password" name="password" className="p-3 border"
                    placeholder="password" required />
                <button className="p-3 border bg-black text-white">Login</button>
                <a href="/register">register</a>
            </form>
        </div>
    )
}


export default page;