
const ItemList = ({item}) => {
    return (
    <div>
            <h2>Productos</h2>
            <hr/>
        {
            
                item.map((item) => (
                    <div key={item.id}>
                        <h2>{item.nombre}</h2>
                        <p>{item.desc}</p>
                        <h4>Precio: ${item.precio}</h4>
                        <hr/>
                    </div>
                ))
            
        }
    </div>
    )
}

export default ItemList;