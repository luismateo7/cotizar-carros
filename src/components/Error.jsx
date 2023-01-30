import useCotizador from "../hooks/useCotizador";

export default function Error() {

    const { error } = useCotizador()
    return (
        <div className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
        <p>{ error }</p>
    </div> 
    )
}
