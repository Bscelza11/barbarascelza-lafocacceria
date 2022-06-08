import productos from "./Item";

const listarProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export default listarProductos;