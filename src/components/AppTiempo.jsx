import Formulario from "./Formulario"
import Tiempo from "./Tiempo"
import useDatos from "../hooks/useDatos"

const AppTiempo = () => {

  const { tiempo } = useDatos()

  return (
    <>
        <header className="mt-4">
            <h1 className="text-center align-middle text-4xl font-extrabold text-white">App Tiempo</h1>
        </header>
        <main className="bg-white w-full xs:1/1 sm:w-2/3 md:w-2/3 lg:w-2/4 xl:w-2/4 mx-auto mt-4 p-10">
            <Formulario/>
            {tiempo?.main && <Tiempo/>}
        </main>
    </>
  )
}

export default AppTiempo