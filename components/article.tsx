interface Props {
    post?: {
        title: string,
        summary: string,
        date: string,
        time: string
    }
}

export default function Article({post} : Props){
    return <article>
        <h2 className="font-bold">{post?.title}</h2>
        <p>{post?.summary}</p>
        <p>{post?.date} | {post?.time}</p>
    </article>
}