import Editor from "@/components/editor";
import InputTitle from "@/components/ui/input-title";

export default function Write(){
    return <>
        <section>
            <InputTitle placeholder="Title..."/>
            <Editor/>
        </section>
    </>
}