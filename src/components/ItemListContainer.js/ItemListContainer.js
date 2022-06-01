import './ItemListContainer.scss'
import ItemCount from './ItemCount'


export const ItemListContainer = ({titulo = 'titulo por defecto', content = 'contenido por defecto', stock = 8}) => {
    
    

    return (
        <section className='container my-5'>
            <h2 className='pagina'>{titulo}</h2>
            <hr/>
            <p>{content}</p>
            <br/>

            <ItemCount stock={stock}/>
            
            

        </section>
    )
}
