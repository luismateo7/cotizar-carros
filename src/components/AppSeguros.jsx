import useCotizador from "../hooks/useCotizador";
import Formulario from "./Formulario";
import Spinner from "./Spinner"
import Resultado from "./Resultado";

export default function AppSeguros() {

  const { cargando } = useCotizador()

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros de Auto</h1>
        </header>

        <main className="bg-white w-5/6 md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10 mb-10">
            <Formulario />
            {cargando ? <Spinner /> : <Resultado />}
        </main>
    </>
  )
}
