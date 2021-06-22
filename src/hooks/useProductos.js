import {graphql, useStaticQuery} from 'gatsby'

const useProductos = () => {

    const data = useStaticQuery(graphql`
    query{
      allDatoCmsStock{
      nodes{
        titulo
        imagen{
          fluid(maxWidth:1200){
            ...GatsbyDatoCmsFluid
          }
        }
        contenido
        slug
      }
      }
      }
    `)

    console.log(data.allDatoCmsStock)

 return data.allDatoCmsStock.nodes.map(producto=>({
    titulo: producto.titulo,
    id: producto.id,
    contenido: producto.contenido,
    imagen: producto.imagen,
    slug: producto.slug

 }))

   
}
 
export default useProductos;