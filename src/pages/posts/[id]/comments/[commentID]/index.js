import { useRouter } from 'next/router';

export default function Comment() {
    const router = useRouter();
    const { id, commentID } = router.query;

    return (
        <div>
            <h1>Comment Page</h1>
            <hr/>
            <h>Post ID: {id}</h>
            <h1>Comment ID: {commentID}</h1>
        </div>
    );
}