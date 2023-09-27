import useDatos from "../hooks/useDatos";
import Clear from "./Clear";
import FewClouds from "./FewClouds";
import ScatteredClouds from "./ScatteredClouds";
import BrokenClouds from "./BrokenClouds";
import ShowerRain from "./ShowerRain";
import Rain from "./Rain";
import Snow from "./Snow";
import Thunderstorm from "./Thunderstorm";
import Mist from "./Mist";
import { formatearFecha } from "../assets/helpers";

const Tiempo = () => {
  const { tiempo, ciudad } = useDatos();
  const estados = {
    Clear: <Clear />,
    Clouds: <FewClouds />,
    Drizzle: <ShowerRain />,
    Rain: <Rain />,
    Snow: <Snow />,
    Mist: <Mist />,
    Thunderstorm: <Thunderstorm />,
  };

  const estadoActual = estados[tiempo.weather[0]?.main];
  const deg = parseInt(tiempo.wind?.deg)

  const colorTemp =
    parseInt(tiempo.main?.temp - 273.14) > 35
      ? "bg-gradient-to-b from-red-800 to-red-600"
      : parseInt(tiempo.main?.temp - 273.14) > 30
      ? "bg-gradient-to-b from-red-600 to-orange-400"
      : parseInt(tiempo.main?.temp - 273.14) > 20
      ? "bg-gradient-to-b from-orange-400 to-cyan-500"
      : parseInt(tiempo.main?.temp - 273.14) > 10
      ? "bg-gradient-to-b from-cyan-500 to-teal-300"
      : parseInt(tiempo.main?.temp - 273.14) > 4
      ? "bg-gradient-to-b from-teal-300 to-neutral-400"
      : parseInt(tiempo.main?.temp - 273.14) > -10
      ? "bg-gradient-to-b from-neutral-400 to-bg-zinc-300"
      : "bg-zinc-300";

  return (
    <div className={`grid mt-4 rounded-xl ${colorTemp}`}>
      <div className="grid-cols-1 p-3">
        <div className="text-2xl font-medium text-center">
          El tiempo en <span className="text-4xl font-bold">{ciudad}</span>
        </div>
        <div className="text-center">({tiempo.weather[0]?.description})</div>
      </div>
      <div className="grid grid-cols-2">
        <div className="m-3 p-3 w-40 h-40 justify-self-center self-center">
          {estadoActual}
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2">
            <div className={`text-7xl font-extrabold`}>
              {parseInt(tiempo.main?.temp - 273.14)}º
            </div>
            <div>
              <div className="text-right font-semibold">
                Máx:{" "}
                <span className="text-lg">
                  {parseInt(tiempo.main?.temp_max - 273.14)}ºC
                </span>
              </div>
              <div className="text-right font-semibold">
                Mín:{" "}
                <span className="text-lg">
                  {parseInt(tiempo.main?.temp_min - 273.14)}ºC
                </span>
              </div>
              <div className="text-right font-semibold">
                Sensación térmica:{" "}
                <span className="text-lg">
                  {parseInt(tiempo.main?.feels_like - 273.14)}ºC
                </span>
              </div>
            </div>
          </div>
          <div className="bg-slate-200/50 p-2 my-4 rounded">
            <div className="font-bold">
              Presión: <span className="text-lg">{tiempo.main?.pressure}</span>
            </div>
            <div className="font-bold">
              Humedad relativa:{" "}
              <span className="text-lg">{tiempo.main?.humidity}%</span>
            </div>
          </div>
          <div className="bg-slate-200/50 p-2 my-4 rounded flex flex-col justify-center self-center items-center">
            <div className="font-bold">{parseInt(tiempo.wind?.deg)} <span className="text-sm">deg</span></div>
            <img
              src="../images/arrow.png"
              alt="Flecha"
              width="70"
              height="70"
              style={{ transform: `rotate(${deg}deg)` }}
            />
            <div className="font-bold">{tiempo.wind?.speed} <span className="text-sm">m/s</span></div>
          </div>
          <div className="bg-slate-200/50 p-2 my-4 rounded flex justify-around">
            <div className="font-bold">
              Amanecer:{" "}
              <span className="text-lg">
                {formatearFecha(tiempo.sys?.sunrise)}
              </span>
            </div>
            <div className="font-bold">
              Anochecer:{" "}
              <span className="text-lg">
                {formatearFecha(tiempo.sys?.sunset)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiempo;
