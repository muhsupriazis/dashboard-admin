import Link from "next/link"

interface Props {
    url: string
    children?: React.ReactNode
}

export default function Navigation({url, children}: Props){
    return <Link href={url} >{children}</Link>
}