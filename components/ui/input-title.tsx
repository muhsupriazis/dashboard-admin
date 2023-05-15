interface Props {
    placeholder?: string
    onChange?: ()=>void
}

export default function InputTitle({placeholder, onChange}: Props){
    return <input type="text" className="py-3 text-3xl outline-none border-b-[1px] border-solid" placeholder={placeholder} onChange={onChange}/>
}