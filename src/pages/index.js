import * as React from "react"
import Layout from "../components/layout"
import ImagenPura from "../components/imagenPura"
import ProductoPreview from "../components/productoPreview"
import ContenidoInicio from "../components/contenidoInicio"
import useProductos from "../hooks/useProductos"
import { css } from "@emotion/react"
import styled from "@emotion/styled"


const ListadoProductos = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
const productos = useProductos()

  return(
    <Layout>

    <ImagenPura/>

    <ContenidoInicio/>

    <h2
      css={css`
        text-align: center;
        margin-top: 5rem;
        font-size: 3rem;
        font-family: 'Dancing Script', cursive;
      `}
    >Nuestras especialidades</h2>

    <ListadoProductos>
      {productos.map(producto=>(
        <ProductoPreview
          key={producto.id}
          producto={producto}
        />
      ))}

    </ListadoProductos>
    


  </Layout>

  )

  }

export default IndexPage
