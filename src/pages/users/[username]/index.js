
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState , useEffect} from "react";

const MyComponent = dynamic(() => import("@/components/MyComponent"))

export default function User() {
    const route = useRouter();
    const { username } = route.query;
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if( count === 10000 ){
            setCount(0);
        }else if ( count === - 1){
            setCount(0);
        }
    }, [count]);

    return (
        <div >
            <h1>User Page</h1>
            <hr/>
            <h1>Username: {username}</h1>
            <MyComponent title="Hello, Next.js!"></MyComponent>
            <Link href="/posts/123/comments/222" style={{color : "blue"}}>
                Go to Comment Page
            </Link>
            <br />
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} style={{ color: "green"}} className="bg-green-300 rounded round-2 hover:bg-gray-200 p-2 font-bold px-[5px] ">Increment</button>
            <br />
            <button  onClick={() => setCount(count - 1)} style={{ color: "red"}} className="bg-red-300 rounded round-2 hover:bg-gray-200 p-2 font-bold px-[5px] ">Decrement</button>
            <br/>
            <button className="bg-gray-500 rounded round-2 hover:bg-gray-400 font-bold px-[5px]" >Click me</button>
        
        </div>
    );
}