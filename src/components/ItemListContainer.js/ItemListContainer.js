import './ItemListContainer.scss'


export const ItemListContainer = ({titulo = 'titulo por defecto', content = 'contenido por defecto'}) => {
    
    return (
        <section className='container my-5'>
            <h2 className='pagina'>{titulo}</h2>
            <hr/>
            <p>{content}</p>
            
            

        </section>
    )
}
