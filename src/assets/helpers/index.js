export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha*1000)
    const opciones = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }
    return fechaNueva.toLocaleTimeString("es-ES")
}