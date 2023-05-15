'use client'

import { CiSearch } from "react-icons/ci";

interface Props {
    onChange?: ()=> void
    placeholder?: string
}

export default function InputSearch({onChange, placeholder}: Props){
    return <div className="bg-slate-100 flex items-center py-2 px-4 gap-2 rounded-full">
        <CiSearch/>
        <input className="outline-none bg-transparent" placeholder={placeholder} onChange={onChange}/>
    </div>
}