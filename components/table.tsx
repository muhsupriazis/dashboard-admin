interface Props {
    children?: React.ReactNode
}

export default function Table({children} : Props){
    return <table>
        <thead>
            <tr>
                <td className="p-2 w-[5%]">No</td>
                <td className="p-2 w-[20%]">Title</td>
                <td className="p-2 w-[40%]">Summary</td>
                <td className="p-2 w-[10%]">Created At</td>
                <td className="p-2 w-[10%]">Updated At</td>
                <td className="p-2 w-[10%]">Action</td>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
}