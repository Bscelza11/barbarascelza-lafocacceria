import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import listarProductos from "./listarProductos";
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState([true]);


    useEffect(() => {
        setLoading(true);

        listarProductos()
        .then((resp) =>{
            setItem(resp)
        })
        .catch((error) => {
            console.log('ERROR', error)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <section className="container my-5">

            {
                loading ? 
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
                : 
                <ItemList item={item}/>

            }
        </section>
    )
}

export default ItemListContainer;