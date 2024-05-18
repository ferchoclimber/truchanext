import toast, {Toaster} from "react-hot-toast";
import Button2 from "@/componentes/Button2";



export default function Demo() {
    const notify =  () => toast.success("hola, mundo");
    const badNotify = () => toast.error("hola, mundo");

    
    return(
        <>
        <Toaster/>
        <p>aca va todo el html</p>
        <Button2 onClick={notify} className="bg-white text-black border-gray-500"></Button2>
        <br/>
        <Button2 onClick={badNotify}>bad Notify</Button2>
        </>
    )
}