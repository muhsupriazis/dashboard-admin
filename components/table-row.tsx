import Link from "next/link";
import { CiEdit, CiTrash } from "react-icons/ci";

interface Props {
    no?: number
    post?: {
        id: number
        title: string
        summary: string
        createdAt: string
        updatedAt: string
    }
}

export default function TableRow({no,post}: Props){
    return <tr className="border-t-[1px] border-solid">
        <td className="p-2">{no}</td>
        <td className="p-2">{post?.title}</td>
        <td className="p-2">{post?.summary}</td>
        <td className="p-2">{post?.createdAt}</td>
        <td className="p-2">{post?.updatedAt}</td>
        <td className="p-2">
            <div className="flex gap-4 justify-center items-center">
            <Link href={`update/${post?.id}`}><CiEdit/></Link>
            <CiTrash/>
            </div>
        </td>
    </tr>
}