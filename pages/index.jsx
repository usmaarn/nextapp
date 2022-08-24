import { useEffect, useState } from "react";
import { useAuth } from '@/contexts/authcontext';
import { io } from "socket.io-client"
import axios from "axios";


export default function Home(props) {

    const [active, setActive] = useState();
    const [users, setUsers] = useState();
    const auth = useAuth();

    useEffect(() => {
        axios.get('/api/users')
            .then(res => setUsers(res.data));
    }, []);


    const socket = io("http://localhost:5000", {
        autoConnect: false
    });

    socket.on('message', (msg) => {
        console.log(msg);
    })

    const connect = () => socket.connect();
    const disconnect = () => socket.disconnect();

    return (
        <div className="h-screen grid grid-cols-[300px_auto]">
            <div className="bg-zinc-700 flex flex-col">
                {users && users.filter(user => user.id!== auth.user.id).map(user => (
                    <button onClick={() => setActive(user)}
                        key={user.id} className={"p-3 border-b text-left " + (active?.id == user.id ? 'bg-zinc-500' : '')}>
                        <h1 className="text-xl text-zinc-300">{user.name}</h1>
                    </button>
                ))}
            </div>
            <div className="">
                <button onClick={connect}>Connect</button>
                <button onClick={disconnect}>Disconnect</button>
            </div>
        </div>
    )

}