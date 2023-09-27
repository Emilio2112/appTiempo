import { useContext } from "react";
import TiempoContext from "../context/TiempoProvider";

const useDatos = () => {
    return useContext(TiempoContext)
}

export default useDatos