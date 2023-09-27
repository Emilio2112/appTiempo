import { useEffect } from "react";
import { comunidadesYCapitales } from "../constants";
import useDatos from "../hooks/useDatos";

const Formulario = () => {
  const {
    comunidad,
    handleSelect,
    capitales,
    setCapitales,
    ciudadSeleccionada,
    ciudad,
    consultarTiempo,
    setCiudad,
  } = useDatos();

  useEffect(() => {
    if (comunidadesYCapitales.hasOwnProperty(comunidad)) {
      setCapitales(comunidadesYCapitales[comunidad]);
      setCiudad(comunidadesYCapitales[comunidad][0]);
    } else {
      setCapitales([]);
    }
  }, [comunidad]);

  const submitForm = (e) => {
    e.preventDefault();
    consultarTiempo();
  };

  return (
    <div className="flex flex-col text-lg">
      <form onSubmit={submitForm}>
        <div className="px-4 py-2">
          <label className="block font-bold" htmlFor="comunidades">
            Selecciona una comunidad autónoma:
          </label>
          <select
            className="block border-solid border-2 border-indigo-600 rounded-lg "
            id="comunidades"
            onChange={handleSelect}
            value={comunidad}
          >
            <option value="">Seleccione CCAA</option>
            <option value="andalucia">Andalucía</option>
            <option value="aragon">Aragón</option>
            <option value="asturias">Asturias</option>
            <option value="baleares">Islas Baleares</option>
            <option value="canarias">Canarias</option>
            <option value="cantabria">Cantabria</option>
            <option value="castilla_y_leon">Castilla y León</option>
            <option value="castilla_la_mancha">Castilla-La Mancha</option>
            <option value="catalunya">Cataluña</option>
            <option value="extremadura">Extremadura</option>
            <option value="galicia">Galicia</option>
            <option value="madrid">Comunidad de Madrid</option>
            <option value="murcia">Región de Murcia</option>
            <option value="navarra">Comunidad Foral de Navarra</option>
            <option value="la_rioja">La Rioja</option>
            <option value="valencia">Comunidad Valenciana</option>
            <option value="pais_vasco">País Vasco</option>
            <option value="ceuta">Ceuta</option>
            <option value="melilla">Melilla</option>
          </select>
        </div>
        <div className="px-4 py-2">
          <label className="block font-bold" htmlFor="capitales">
            Selecciona una capital de provincia:
          </label>
          <select
            value={ciudad}
            onChange={ciudadSeleccionada}
            className="block border-solid border-2 border-indigo-600 rounded-lg "
          >
            {comunidad === "" ? (
              <option>Seleccione comunidad</option>
            ) : (
              capitales.map((capital) => (
                <option key={capital} value={capital}>
                  {capital}
                </option>
              ))
            )}
          </select>
        </div>
        <input
          className="bg-indigo-500 my-3 px-4 py-2 rounded-lg w-full font-bold text-white"
          type="submit"
          value="VER TIEMPO"
          disabled={!comunidad}
        />
      </form>
    </div>
  );
};

export default Formulario;
