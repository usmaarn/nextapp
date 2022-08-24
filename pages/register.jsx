
function page() {

    return (
        <div className="flex w-screen h-screen items-center justify-center">
            <form action="api/register" method="post" className="flex flex-col gap-3" >
                <input type="text" name="name" className="p-3 border"
                    placeholder="name" required />
                <input type="text" name="username" className="p-3 border"
                    placeholder="username" required />
                <input type="password" name="password" className="p-3 border"
                    placeholder="password" required />
                <input type="password" name="confirm_password" className="p-3 border"
                    placeholder="confirm_password" required />
                <button className="p-3 border bg-black text-white">Register</button>
                <a href="/login">login</a>
            </form>
        </div>
    )
}


export default page;