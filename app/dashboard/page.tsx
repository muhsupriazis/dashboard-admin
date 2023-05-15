import Article from "@/components/article"
import Table from "@/components/table"
import TableRow from "@/components/table-row"

const posts = [
    {
        id: 1,
        title: 'I Used ChatGPT and Won In The Lottery. I’m Not Kidding.',
        summary: 'That’s right, lucky reader. In today’s world where everyone uses ChatGPT to earn money, it was only a matter of time before someone used artificial intelligence to beat the odds and win big at the lottery.',
        createdAt: '12-09-2023',
        updatedAt: '12-09-2023',
    },
    {
        id: 2,
        title: 'So this has got me thinking.',
        summary: 'Is there anything this technology can’t do? I mean, it’s already beating us at chess, driving our cars, and now it’s making us filthy rich! (Except for the “fake courses” that everyone is doing right now part)',
        createdAt: '12-09-2023',
        updatedAt: '12-09-2023',
    },
    {
        id: 3,
        title: 'So first let me explain the categories of winning',
        summary: 'I mean, using AI to win the lottery? That’s like bringing a tank to a knife fight. You’re playing 4D chess while the rest of us are still trying to figure out checkers.',
        createdAt: '12-09-2023',
        updatedAt: '12-09-2023',
    },
]

export default function Dashboard(){
    return <>
        <section>
            <h1 className="text-3xl font-semibold py-5">Menage Posts</h1>
        </section>
        <section>
            <Table>
                {posts.map((post, i)=> <TableRow no={i+1} post={post} key={i} />)}
            </Table>
        </section>
    </>
}