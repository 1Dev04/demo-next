import { useRouter } from "next/router";


export default function Post() {
    const route = useRouter();
    const { id } = route.query;

    return <h1>Post: {id}</h1>
}