import { TiempoProvider } from "./context/TiempoProvider"
import AppTiempo from "./components/AppTiempo"

function App() {


  return (
    <TiempoProvider>
      <AppTiempo />
    </TiempoProvider>
  )
}

export default App
