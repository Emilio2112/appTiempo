import { createContext, useState } from "react";
import axios from "axios";

const TiempoContext = createContext()

const TiempoProvider = ({children}) => {

    const [postalSearch, setPostalSearch] = useState(false)
    const [comunidad, setComunidad] = useState("")
    const [capitales, setCapitales] = useState([])
    const [ciudad, setCiudad] = useState("")
    const [tiempo, setTiempo] = useState({})


    const handleSelect = (e) => {
        setComunidad(e.target.value)
        setTiempo({})
    }

    const ciudadSeleccionada = (e) => {
        setCiudad(e.target.value)
    }

    const consultarTiempo = async () => {
        try {
            setTiempo({})
            const apiKey = import.meta.env.VITE_API_KEY
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},ES&appid=${apiKey}&lang=sp`
            const response = await axios(url)
            const {lat, lon} = response.data[0]
            const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=sp`
            const respuesta = await axios(urlApi)
            setTiempo(respuesta.data)
            setComunidad("")
            setCapitales([])

        } catch (error) {
            console.log(error);
        }
    }


    return(
        <TiempoContext.Provider
            value={{
                postalSearch,
                setPostalSearch,
                comunidad,
                handleSelect,
                capitales,
                setCapitales,
                consultarTiempo,
                ciudadSeleccionada,
                ciudad,
                setCiudad,
                tiempo
            }}
        >
            {children}
        </TiempoContext.Provider>
    )
}

export {
    TiempoProvider
}

export default TiempoContext