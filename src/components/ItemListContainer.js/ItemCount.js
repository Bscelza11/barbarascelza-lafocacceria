import { useState } from "react";

const Count = () => {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        
            setContador(contador + 1);
       
            
      
    }

    const decrementar = () => {
        if (contador > 0) {
            setContador( contador - 1);
        }
        
    }


    return (
        <div className="container my-5"> 
        <h2>Contador</h2>
        <p>{contador}</p>
        <button className="btn btn-primary" onClick={incrementar}>+</button>
        <br/>
        <br/>
        <button className="btn btn-primary" onClick={decrementar}>-</button>
        <br/>
        <br/>
        <button>Agregar al carrito</button>
        </div>

    )

}

export default Count; 